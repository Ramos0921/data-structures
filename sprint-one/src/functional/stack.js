var Stack = function() {
  var someInstance = {};
  //var index =0;
  var len = 0;
  //var next = len-1;

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    storage[len]=value;
    len++;
  };

  someInstance.pop = function() {
    if(len>0){
      var popValue = storage[len-1];
      len--;
      return popValue;
      };
  };

  someInstance.size = function() {
    return len;
  };

  return someInstance;
};
