describe('Templates', function () {
  describe('pomodorosItem', function () {
    beforeEach(function () {
      this.pom = {
        startDate: new Date(),
        goal: "another goal",
        done: function () { return false; },
        remaining: function () { return 100000; }
      };
      this.container = document.createElement("DIV");
    });

    it('shows the goal', function () {
      this.view = Blaze.renderWithData(Template.pomodoroItem, this.pom, this.container);
      var $view = $(this.container);
      expect($view).toContainText("another goal");
    });

    it('shows time remaining if not done', function () {
      spyOn(Template.pomodoroItem.__helpers, " formattedRemaining").and.callFake(function () {
        return "1:24";
      });

      this.view = Blaze.renderWithData(Template.pomodoroItem, this.pom, this.container);
      var $view = $(this.container);
      expect($view).toContainText("1:24 remaining");
    });

    it('shows time since start if done', function () {
      var start = (26).minutesBefore(new Date());
      var pom = {
        startDate: start,
        goal: "another goal",
        done: function () { return true; },
        remaining: function () { return "0:00"; }
      };

      this.view = Blaze.renderWithData(Template.pomodoroItem, pom, this.container);
      var $view = $(this.container);
      expect($view).toContainText("26 minutes ago");
    });

    it("has a delete button", function() {
      spyOn(Meteor, "user").and.returnValue({});

      this.container = document.createElement("DIV");
      this.view = Blaze.renderWithData(
        Template.pomodoroItem,
        {startDate: new Date(), goal: "another goal"},
        this.container
      );

      var $view = $(this.container);
      expect($view).toContainElement('input.delete');
    });

    // Unit testing helpers in isolation
    describe('helpers', function () {
      describe('formattedRemaining', function () {
        it('calls formattedRemaining', function () {
          spyOn(window, 'formattedRemaining');

          // this is how you call a helper
          Template.pomodoroItem.__helpers[' formattedRemaining']();

          expect(formattedRemaining).toHaveBeenCalled();
        });
      });
    });
  });
});
