/**
 ** A module that helps with basic events
 ** @{@link https://github.com/ecasilla/PubSub}
 ** @author Ernie Casilla
 ** @license MIT
 ** @module PubSub
 **/


PubSub = {handlers:{}}
/**
 ** generate a handler for any named event
 ** @param {string} the name of event 
 ** @param {function} a callback handler for that event
 ** @return { object } return the new PubSub Object
 **/
PubSub.on = function(eventType, handler) { 
  if (!(eventType in this.handlers)) {
    this.handlers[eventType] = [];
  }
  this.handlers[eventType].push(handler);
  return this; 
}

/**
 ** Emit a named event
 ** @param {string} the name of event 
 ** @return { object } return the new PubSub Object
 **/
PubSub.emit = function(eventType) {
  var handlerArgs = Array.prototype.slice.call(arguments, 1); 
  for (var i = 0; i < this.handlers[eventType].length; i++) {
    this.handlers[eventType][i].apply(this, handlerArgs);
  }
  return this; 
}


