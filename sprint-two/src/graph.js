
var Graph = function() {
  this.nodes = {};
};


Graph.prototype.addNode = function(node) {
 
  this.nodes[node] = {};

};


Graph.prototype.contains = function(node) {
  if (this.nodes[node] !== undefined) {
    return true;
  } else {
    return false;
  };
};

Graph.prototype.removeNode = function(node) {
  var connections = Object.keys(this.nodes[node]);

  for (var i = 0; i < connections.length; i++)
  {
    var connectedNode = connections[i];
    delete this.nodes[connectedNode][node];
  };
  if (this.nodes[node]) {
    delete this.nodes[node];
  };
};

Graph.prototype.hasEdge = function(fromNode, toNode) {
  if (this.nodes[fromNode][toNode] === true) {
    return true;
  } else {
    return false;
  };

};

Graph.prototype.addEdge = function(fromNode, toNode)
{

  this.nodes[fromNode][toNode]= true;
  this.nodes[toNode][fromNode]=true;
};

Graph.prototype.removeEdge = function(fromNode, toNode) {
  delete this.nodes[fromNode][toNode];
  delete this.nodes[toNode][fromNode];
};

Graph.prototype.forEachNode = function(cb) {
  for(var key in this.nodes){
    cb(key);
  };
};

/*
 * Complexity: What is the time complexity of the above functions?
 addNode: constant
 contains: constant
 removeNode: linear
 addEdge: constant
 hasEdge: constant
 removeEdge: constant
 forEachNode: linear
 */



