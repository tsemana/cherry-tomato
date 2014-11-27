Template.pomodorosList.helpers({
  allPomodoros: function () {
    return Pomodoros.find({userId: Meteor.userId()}, {sort: {startDate: -1}});
  }
});

Template.pomodorosList.events({
  'submit #new-pomodoro' : function (e) {
    e.preventDefault();

    var pomodoro = {
      userId: Meteor.userId(),
      startDate: new Date(),
      goal: $(e.target).find('[name=goal]').val(),
    };

    Pomodoros.insert(pomodoro);
  },
  'click .delete' : function (e) {
    console.log(">>>>>>>> delete got clicked")
    Pomodoros.remove(this._id);
  }
});
