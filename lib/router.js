Router.configure({
  layoutTemplate: 'layout',
  waitOn: function () {
    return [Meteor.subscribe('pomodoros')];
  }
});

Router.map(function () {
  this.route('pomodorosList', {
    path: '/',
  });
});
