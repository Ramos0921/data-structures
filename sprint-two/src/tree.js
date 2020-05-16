var Tree = function(value){

  var newTree = {
    value: value,
    parent: null,
    addChild: treeMethods.addChild,
    contains: treeMethods.contains,
    children: []
  };

  return newTree;
};

var treeMethods = {
    addChild : function(value)
    {
      var child = Tree(value);
      child.parent = this;
      this.children.push(child);
      
    },
    contains: function(target)
    {
      if(this.value === target)
        {
        return true;
        }
      for(var i = 0; i < this.children.length; i++)
      {
        var child = this.children[i];

        if(child.contains(target))
        {
          return true
        }
      }

  return false;
  }

};


/*
 * Complexity: What is the time complexity of the above functions?
  addChild: constant
  contains: linear when searching

 */

