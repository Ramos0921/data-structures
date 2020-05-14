var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var someInstance ={
    storage: {},
    len: 0
  }
  _.extend(someInstance,stackMethods)

  return someInstance;

};

var stackMethods = {
  push : function(value){
    this.storage[this.len] = value;
    this.len++;
  },

  pop : function(){
    if(this.len>0){
      var popValue = this.storage[this.len-1];
      delete this.storage[this.len-1];
      this.len--;
      return popValue;

    }
  },
  size: function(){
    return this.len;
  }

}






