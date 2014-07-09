function(){
  var FluxDispatcher = window.FluxDispatcher = function(){
    this._eventMap = {};
    this._events = {};
    this._listeners = {};
    this._listenerIndex = 0;
  }

  FluxDispatcher.prototype.mapEvent = function(eventName, mapFunc){
    this._eventMap[eventName] = mapFunc;
  };

  FluxDispatcher.prototype.unmapEvent = function(eventName){
    delete this._eventMap[eventName];
  }

  FluxDispatcher.prototype.addListener = function(eventName, handler, context){
    var index = this._listenerIndex++;

    var listener = {
      eventName: eventName,
      index: index,
      handler: handler,
      context: context
    };

    this._events[eventName] = this._listeners[eventName] || {};
    this._events[eventName][index] = listener;

    this._listeners[index] = listener;

    return index;
  };

  FluxDispatcher.prototype.removeListener = function(index) {
    this._events[]
  };


  FluxDispatcher.prototype.removeListenerBySignature = function(eventName, handler, context){
    var found = false;

    var listeners = this._listeners[eventName] || [];
    
    listener.forEach(function(listener, index){
      if (found) {
        return;
      }

      if (listener.handler === handler && listener.context === context){
        listener.splice(index, 1);
        found = true;
      }
    });

    return found;
  }

  FluxDispatcher.prototype.dispatch = function(eventName, payload){
    var eventNames;
    if (this._eventMap[eventName]) {
      eventNames = this._eventMap[eventName](eventName, payload);
    } else {
      eventNames = [eventName];
    }

    //broadcast the event 
    eventNames.forEach(function(name){
      this.dispatch(name, payload);
    });
  };

}