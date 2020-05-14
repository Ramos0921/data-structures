var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  this.storage = {};
  this.index = 0;
  this.len = 0;
  this.next = 0;
};

Queue.prototype.enqueue  = function(value)
{
  this.storage[this.index++]= value;
  this.len ++;
};

Queue.prototype.dequeue = function(){
  if(this.len >0 ){
    var deqValue = this.storage[this.next];
    delete this.storage[this.next++]
    this.len--;
    return deqValue;
  }
};

Queue.prototype.size = function(){
  return this.len;
}

