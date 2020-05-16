
var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(key, value){
  var index = getIndexBelowMaxForKey(key, this._limit);

  var bucket = this._storage.get(index);

  //it bucket is undefined this will create a holding bucket and place it at the index
  //storage array location location

  //example: storage=>[undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined]
  //example bucket === this._storage[3]....which is undefined => will go into "if" condition
  if (bucket === undefined) {

    // bucket is reassigned to a holding bucket array
    bucket = [];

    this._storage.set(index, bucket);
    //eventually will look like this
    //storage=>[[],[],[],[],[],[],[],[]]
  };

//Graphs do not hold duplicate keys
//this portion will reassign the value of an existing key

  var found = false;
  //for loop is used to ieterate through the arrays withing the bucket holding array.
  //storage=>[[],[['hack','reactor],['code','more]],[],[],[],[],[],[]]
  //ex: bucket = [['hack','reactor],['code','more]]
  for (var i = 0; i < bucket.length; i++) {

    var tuple = bucket[i];

    //if a mataching key is found in the arrays within the bucket
    //this conditional will update the value
    if (tuple[0] === key) {
      //only the value is chaanged key is left alone
      tuple[1] = value;

      found = true;
    }
  }

// if key is never found we add a new array to the bucket
  if (!found) {
    bucket.push([key,value]);
  };

};

HashTable.prototype.retrieve = function(key){

  //will return the index of the bucket containing key
  var index = getIndexBelowMaxForKey(key, this._limit);

  //bucket will either be undefined or assigned to the bucket containing
  // the key
  var bucket = this._storage.get(index);

  //if bucket is undefined return null
  if (bucket === undefined) {

    return undefined;
  }
  //for loop will iterate through the bucket array hodling arrays
  for (var i = 0; i < bucket.length; i++) {

    var tuple = bucket[i];
    //returns the value of the key
    if (tuple[0] === key) {
      return tuple[1];
    }
  }

  return undefined;

};


HashTable.prototype.remove = function(key){
  // similar to retrieve

  var index = getIndexBelowMaxForKey(key, this._limit);

  var bucket = this._storage.get(index);
  if (bucket === undefined) {
    return undefined;
  }

  for (var i = 0; i < bucket.length; i++) {
    var tuple = bucket[i];

    if (tuple[0] === key) {
      //will slice from bucket the array condtaing key
      bucket.splice(i,1);  
      //will return the value
      return tuple[1];
    }
  }

  return undefined;
};
/*
 * Complexity: What is the time complexity of the above functions?
 insert: constant
 retrieve: constant
 remove: constant
 */


