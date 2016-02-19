import Ember from 'ember';

const COLORS = [
  'red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink'
];

export default Ember.Component.extend({
  tails: [],
  draws: 0,
  rainbowClass: 'yellow',

  didInsertElement(){
    Ember.$(`.${this.get('rainbowClass')}`).click(() => {
      this.set('enabled', true);
    });

    Ember.$('body').on('mousemove', (e) => {
      if (!this.get('enabled')) {
        return;
      }

      let tails = this.get('tails');
      let draws = this.incrementProperty('draws');
      let color = COLORS[draws % COLORS.length];

      if (draws ===  150) {
        this.set('draws', 0);
        this.set('enabled', false);
        this.set('tails', []);
        return;
      }

      tails.pushObject({
        top: e.clientY, left: e.clientX, color: color
      });

      if (this.get('tails').length >20) {
        this.get('tails').removeAt(0)
      }
    })
  }
});
