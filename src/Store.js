function(){
  var FLuxStore = window.FLuxStore = function(){
    this._changeListeners = [];

    this.data = {};

    Object.observe(this.data, function(){
      this._changeListeners.forEach(function(listener){
        listener.func.call(listener.context);
      })
    }.bind(this));
  };

  FLuxStore.prototype.addListener = function(handler, context){
    this._callbacks[].push
  }

  FLuxStore.prototype.addListener = function(handler, context){
    this._callbacks[]
  }

}