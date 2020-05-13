var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // will be used at a numberic key to represent the amount of keys in the object
  var index = 0;

  var next= 0;
  var len= 0;
  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[index++]= value;
    len++;
  };

  someInstance.dequeue = function() {
    if(len>0){
      var deqValue = storage[next];
      delete storage[next++];
      len--;
      return deqValue;
    }
  };

  someInstance.size = function() {
    return len;
  };

  return someInstance;
};
