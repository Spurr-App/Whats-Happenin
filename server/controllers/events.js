const Event = require('../models/event.js');

const Events = {
  createEvent(event) {
    Event(event).save();
  },
  findAll() {
    return Event.find();
  },
  findUserevent(user) {
    return Event.find().where({ username: user })
      .then(events => events);
  },
  findOneAndRemove(id) {
    console.log(`ObjectId(${id.id})`, id.id,  'id in findOneAndRemove')
  // return Event.find({ "_id" : `ObjectId("${id.id}")`}, function(err, event) {
  return Event.find({ _id: id.id }, (err, event) => {

    if (err) throw err;
    if(event) {
      console.log(event, 'event in findOneAndRemove')
      Event.remove({ _id: id.id }, (error) => {
        if (error) throw error;
        console.log('Event successfully deleted!');
      });
    }
  });
  }
};

module.exports = Events;
