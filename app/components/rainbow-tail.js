import Ember from 'ember';
const { computed, getProperties } = Ember;

export default Ember.Component.extend({
    tagName: "",
    style: computed('top', 'left', 'color', function() {
      let { top, left, color} = getProperties(this, 'top', 'left', 'color');
      return `top: ${top}px; left: ${left}px; color: ${color}`.htmlSafe();
    })
});
