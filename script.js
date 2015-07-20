/*1. Create a constructor function called Tree. It should take 4 arguments that correspond to 
attributes on the objects it creates. Two attributes should be 'name' and 'leaf shape'. Pick the other two. 

2. Create 4 tree objects using your Tree function.

3. Put those objects into an array called tree_array. 

4. for each tree in tree_array, add a block element to the tree-holder div that displays the tree's attributes*/
var Tree = function(name, leafShape, flowers, climate) {
  this.name = name,
  this["leaf shape"] = leafShape,
  this.flowers = flowers,
  this.climate = climate
}

var palm = new Tree("Palm", "long and slender", false, "tropical");
var pine = new Tree("Pine", "needles", false, "temperate");
var magnolia = new Tree("Magnolia", "tear-drop-shaped", true, "Southern");
var oak = new Tree("Oak", "flat", false, "temperate");

var tree_array = [palm, pine, magnolia, oak];

  var arbor = "";

for (var i = 0; i < tree_array.length; i++) {

  //arbor += "<p>" + "The " + tree_array[i].name + " has leaves that are " + tree_array[i]["leaf shape"]  + " and lives in the " + tree_array[i].climate 
  //+ " clilmate. Does it have flowers? " + tree_array[i].flowers + "." + "</p>";
  arbor += "<p>" + JSON.stringify(tree_array[i], null, 1) + "</p>"
  document.getElementById("tree-holder").innerHTML = arbor;
}