var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(stackMethods);
  someInstance.storage ={};
  someInstance.len = 0;

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
};


