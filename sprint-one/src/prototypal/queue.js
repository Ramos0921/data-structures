var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(queueMethods);
  someInstance.storage = {};
  someInstance.index = 0;
  someInstance.next = 0;
  someInstance.len = 0;

  return someInstance;
};

var queueMethods = {
  enqueue : function(value){
    this.storage[this.index++]=value;
    this.len ++;
  },

  dequeue : function(){
    if(this.len >0){
      var save = this.storage[this.next];
      delete this.storage[this.next++];
      this.len--;
      return save;
    }
  },
    size : function(){
      return this.len;
    }
};


