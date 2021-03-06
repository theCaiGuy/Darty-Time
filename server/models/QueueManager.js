const fs = require('fs');

class QueueManager {
  constructor(options) {
    this.playingContext = {
      track: null,
      user: null,
      startTimestamp: null
    };
    this.queue = [];
    this.onQueueChanged = options.onQueueChanged;
    this.onQueueEnded = options.onQueueEnded;
    this.onVoteSkip = options.onVoteSkip;
    this.onPlay = options.onPlay;
    this.getToken = options.getToken;
    this.spotifyApi = options.spotifyApi;
    this.playedHistory = [];
    this.users = options.users;
    this.timeout = null;
  }

  handleQueueChanged() {
    this.sort();
    this.save();
    this.onQueueChanged();
  }

  getPlayingContext() {
    return this.playingContext;
  }

  getQueue() {
    return this.queue;
  }

  sort() {
    this.queue.sort((a, b) => {
      const diffVoters = b.voters.length - a.voters.length;
      if (diffVoters !== 0) {
        return diffVoters;
      } else {
        return a.queuedTimestamp - b.queuedTimestamp;
      }
    });
  }

  addItem(queueItem) {
    this.queue.push(queueItem);
    this.handleQueueChanged();
    if (this.playingContext.track === null) {
      this.play(false);
    }
  }

  removeId(user, id) {
    const index = this.queue.findIndex(item => item.id === id);
    if (index !== -1 && this.queue[index].user.id === user.id) {
      this.queue.splice(index, 1);
      this.handleQueueChanged();
    }
  }

  init() {
    this.play(false);
  }

  play(isSkip) {
    console.log('api.js > play');
    if (this.timeout && isSkip) {
      clearTimeout(this.timeout);
    }
    if (this.queue.length > 0) {
      console.log('api.js > play has queue');
      // something to play!
      const queueItem = this.queue.shift();
      this.handleQueueChanged();
      this.playingContext = {
        track: queueItem.track,
        user: queueItem.user,
        startTimestamp: Date.now(),
        voters: queueItem.voters
      };
      this.playedHistory.push({
        track: queueItem.track,
        user: queueItem.user
      });
      this.timeout = setTimeout(() => {
        this.play(false);
      }, 2000 + queueItem.track.duration_ms);
      this.onPlay();
    } else {
      this.playingContext = {
        track: null,
        user: null,
        startTimestamp: null,
        voters: []
      };

      this.onQueueEnded();
    }
  }

  voteUpId(user, id) {
    const index = this.queue.findIndex(item => item.id === id);
    if (index === -1) return false;
    const voters = this.queue[index].voters;
    if (voters) {
      const userVotes = voters.filter(v => v.id === user.id);
      if (userVotes.length === 0) {
        this.queue[index].voters.push(user);
        this.handleQueueChanged();
        return true;
      }
    }
  }

  voteDownId(user, id) {
    const index = this.queue.findIndex(item => item.id === id);
    if (index === -1) return false;
    const voters = this.queue[index].voters;
    if (voters) {
      const userVotes = voters.filter(v => v.id === user.id);
      if (userVotes.length !== 0) {
        this.queue[index].voters = voters.filter(v => v.id !== user.id);
        this.handleQueueChanged();
        return true;
      }
    }
  }

  voteSkipId(user, id) {
    if (this.playingContext.track) {
      if (this.playingContext.track.skip_voters) {
        const voters = this.playingContext.track.skip_voters;
        const userVotes = voters.filter(v => v.id === user.id);
        if (userVotes.length === 0) {
          this.playingContext.track.skip_voters.push(user);
        }
      } else {
        this.playingContext.track.skip_voters = [user];
      }
      console.log(JSON.stringify(user));
      console.log(
        `${this.playingContext.track.skip_voters.length} / ${this.users.length - 1} have voted to skip ${id}`
      );
      if (this.playingContext.track.skip_voters.length > (this.users.length - 1) / 2) {
        this.play(true);
      }
      this.onVoteSkip();
    }
  }

  save() {
    fs.writeFileSync(
      './queue.json',
      JSON.stringify({
        playingContext: this.playingContext,
        queue: this.queue
      }),
      ''
    );
  }

  read() {
    try {
      const data = JSON.parse(fs.readFileSync('./queue.json'));
      this.playingContext = data.playingContext;
      this.queue = data.queue;
    } catch (e) {
      // do nothing;
    }
  }
}

module.exports = QueueManager;
