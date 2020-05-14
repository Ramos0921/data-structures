class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.index = 0;
    this.len =0;
    this.next=0;
  }

  enqueue(value){
    this.storage[this.index++]=value;
    this.len ++;
  }

  dequeue(){
    if(this.len > 0)
    {
      var save = this.storage[this.next];
      delete this.storage[this.next++]
      this.len--;
      return save;
    }

  }
  size(){
    return this.len;
  }

}
