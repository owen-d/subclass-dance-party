var CharDancer = function(top, left, timeBetweenSteps){
  // debugger;
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.removeClass('dancer').addClass('charmander grow').append('<img class="charImage grow" src="public/charmandersmarshmallow.gif">');
};

CharDancer.prototype = Object.create(Dancer.prototype);
CharDancer.prototype.constructor = CharDancer;

CharDancer.prototype.grow = function() {
  this.$node.animate({
    height: "150px",
    width: "150px"
  }, 2000);
};
