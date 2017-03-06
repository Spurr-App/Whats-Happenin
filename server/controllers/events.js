const Event = require('../models/event.js');

const Events = {
  createEvent(event) {
    console.log(event);
    Event(event).save();
  },
  findAll() {
    return Event.find();
  },
  findUserevent(user) {
    return Event.find().where({ username: user })
      .then(events => events);
  },
  remove(id, cb) {
    Event.remove({ _id: id.id }, (error, success) => {
      if (error) {
        cb(error);
      }
      cb(null, success);
    });
  }
};

module.exports = Events;
