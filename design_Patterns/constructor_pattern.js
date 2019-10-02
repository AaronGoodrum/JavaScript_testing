//constructor pattern
//create new objects with their oen object scope

function ObjectName(param1, param2){
  //binds 'this' to the new object scope
  this.param1 = param1
  this.param2 = param2
  this.toString = function() {
    return this.param1 + ' ' + this.param2
  }
}

var Task = function(name){
  this.name = name
  this.completed = false

  this.completed = function (){
    console.log('completing task: ' + this.name)
    this.completed = true
  }

  this.save = function(){
    console.log('saving Task: ' + this.name)
  }
}

var task1 = new Task('create a demo for Constructor')
var task2 = new Task('create a demo for prototypes')

task1.completed()
task2.save()
