class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.len = 0;
  }

  push(value){
    this.storage[this.len]=value;
    this.len++;
  }

  pop()
  {
    if(this.len>0){
      var popValue = this.storage[this.len-1];
      delete this.storage[this.len-1];
      this.len--;
      return popValue;
    }
  }

  size(){
    return this.len;
  }

}