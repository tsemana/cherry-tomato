Template.pomodorosList.helpers({
  allPomodoros: function () {
    return Pomodoros.find({}, {sort: {startDate: -1}});
  }
});

Template.pomodorosList.events({
  'submit #new-pomodoro' : function (e) {
    e.preventDefault();

    var pomodoro = {
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
