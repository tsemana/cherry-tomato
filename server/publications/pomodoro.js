Meteor.publish("pomodoros", function (){
  return Pomodoros.find({}, {sort: {startDate: -1}});
});
