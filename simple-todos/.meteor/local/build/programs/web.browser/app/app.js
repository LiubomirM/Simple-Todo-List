var require = meteorInstall({"imports":{"ui":{"body.html":["./template.body.js",function(require,exports,module){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                              //
// imports/ui/body.html                                                                                         //
//                                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                //
module.exports = require("./template.body.js");                                                                 // 1
                                                                                                                // 2
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"template.body.js":function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                              //
// imports/ui/template.body.js                                                                                  //
//                                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                //
                                                                                                                // 1
Template.body.addContent((function() {                                                                          // 2
  var view = this;                                                                                              // 3
  return HTML.DIV({                                                                                             // 4
    class: "container"                                                                                          // 5
  }, "\n    ", HTML.HEADER("\n      ", HTML.H1("Todo List (", Blaze.View("lookup:incompleteCount", function() {
    return Spacebars.mustache(view.lookup("incompleteCount"));                                                  // 7
  }), ")"), "\n \n\t  ", HTML.Raw('<label class="hide-completed">\n      <input type="checkbox">\n        Hide Completed Tasks\n      </label>'), "\n\t  \n\t  ", Spacebars.include(view.lookupTemplate("loginButtons")), "\n\t  \n\t  ", Blaze.If(function() {
    return Spacebars.call(view.lookup("currentUser"));                                                          // 9
  }, function() {                                                                                               // 10
    return [ "\n        ", HTML.FORM({                                                                          // 11
      class: "new-task"                                                                                         // 12
    }, "\n          ", HTML.INPUT({                                                                             // 13
      type: "text",                                                                                             // 14
      name: "text",                                                                                             // 15
      placeholder: "Type to add new tasks"                                                                      // 16
    }), "\n        "), "\n      " ];                                                                            // 17
  }), "\n    "), "\n \n    ", HTML.UL("\n      ", Blaze.Each(function() {                                       // 18
    return Spacebars.call(view.lookup("tasks"));                                                                // 19
  }, function() {                                                                                               // 20
    return [ "\n        ", Spacebars.include(view.lookupTemplate("task")), "\n      " ];                        // 21
  }), "\n    "), "\n  ");                                                                                       // 22
}));                                                                                                            // 23
Meteor.startup(Template.body.renderToDocument);                                                                 // 24
                                                                                                                // 25
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"task.html":["./template.task.js",function(require,exports,module){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                              //
// imports/ui/task.html                                                                                         //
//                                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                //
module.exports = require("./template.task.js");                                                                 // 1
                                                                                                                // 2
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"template.task.js":function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                              //
// imports/ui/template.task.js                                                                                  //
//                                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                //
                                                                                                                // 1
Template.__checkName("task");                                                                                   // 2
Template["task"] = new Template("Template.task", (function() {                                                  // 3
  var view = this;                                                                                              // 4
  return HTML.LI({                                                                                              // 5
    class: function() {                                                                                         // 6
      return [ Blaze.If(function() {                                                                            // 7
        return Spacebars.call(view.lookup("checked"));                                                          // 8
      }, function() {                                                                                           // 9
        return "checked";                                                                                       // 10
      }), " ", Blaze.If(function() {                                                                            // 11
        return Spacebars.call(view.lookup("private"));                                                          // 12
      }, function() {                                                                                           // 13
        return "private";                                                                                       // 14
      }) ];                                                                                                     // 15
    }                                                                                                           // 16
  }, HTML.Raw('\n    <button class="delete">&times;</button>\n \n    '), HTML.INPUT({                           // 17
    type: "checkbox",                                                                                           // 18
    checked: function() {                                                                                       // 19
      return Spacebars.mustache(view.lookup("checked"));                                                        // 20
    },                                                                                                          // 21
    class: "toggle-checked"                                                                                     // 22
  }), "\n \n\t", Blaze.If(function() {                                                                          // 23
    return Spacebars.call(view.lookup("isOwner"));                                                              // 24
  }, function() {                                                                                               // 25
    return [ "\n      ", HTML.BUTTON({                                                                          // 26
      class: "toggle-private"                                                                                   // 27
    }, "\n        ", Blaze.If(function() {                                                                      // 28
      return Spacebars.call(view.lookup("private"));                                                            // 29
    }, function() {                                                                                             // 30
      return "\n          Private\n        ";                                                                   // 31
    }, function() {                                                                                             // 32
      return "\n          Public\n        ";                                                                    // 33
    }), "\n      "), "\n    " ];                                                                                // 34
  }), "\n\t\n\t", HTML.SPAN({                                                                                   // 35
    class: "text"                                                                                               // 36
  }, HTML.STRONG(Blaze.View("lookup:username", function() {                                                     // 37
    return Spacebars.mustache(view.lookup("username"));                                                         // 38
  })), " - ", Blaze.View("lookup:text", function() {                                                            // 39
    return Spacebars.mustache(view.lookup("text"));                                                             // 40
  })), "\n  ");                                                                                                 // 41
}));                                                                                                            // 42
                                                                                                                // 43
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"body.js":["meteor/meteor","meteor/templating","meteor/reactive-dict","../api/tasks.js","./task.js","./body.html",function(require,exports,module){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                              //
// imports/ui/body.js                                                                                           //
//                                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                //
var Meteor;module.import('meteor/meteor',{"Meteor":function(v){Meteor=v}});var Template;module.import('meteor/templating',{"Template":function(v){Template=v}});var ReactiveDict;module.import('meteor/reactive-dict',{"ReactiveDict":function(v){ReactiveDict=v}});var Tasks;module.import('../api/tasks.js',{"Tasks":function(v){Tasks=v}});module.import('./task.js');module.import('./body.html');
                                                                                                                // 2
                                                                                                                // 3
                                                                                                                // 4
                                                                                                                //
                                                                                                                // 6
                                                                                                                // 7
                                                                                                                //
Template.body.onCreated(function () {                                                                           // 9
  function bodyOnCreated() {                                                                                    // 9
    this.state = new ReactiveDict();                                                                            // 10
  }                                                                                                             // 11
                                                                                                                //
  return bodyOnCreated;                                                                                         // 9
}());                                                                                                           // 9
                                                                                                                //
Template.body.onCreated(function () {                                                                           // 13
  function bodyOnCreated() {                                                                                    // 13
    this.state = new ReactiveDict();                                                                            // 14
    Meteor.subscribe('tasks');                                                                                  // 15
  }                                                                                                             // 16
                                                                                                                //
  return bodyOnCreated;                                                                                         // 13
}());                                                                                                           // 13
                                                                                                                //
Template.body.helpers({                                                                                         // 18
  tasks: function () {                                                                                          // 19
    function tasks() {                                                                                          // 18
      var instance = Template.instance();                                                                       // 20
      if (instance.state.get('hideCompleted')) {                                                                // 21
        // If hide completed is checked, filter tasks                                                           // 22
        return Tasks.find({ checked: { $ne: true } }, { sort: { createdAt: -1 } });                             // 23
      }                                                                                                         // 24
      // Otherwise, return all of the tasks                                                                     // 25
      return Tasks.find({}, { sort: { createdAt: -1 } });                                                       // 26
    }                                                                                                           // 27
                                                                                                                //
    return tasks;                                                                                               // 18
  }(),                                                                                                          // 18
  incompleteCount: function () {                                                                                // 28
    function incompleteCount() {                                                                                // 18
      return Tasks.find({ checked: { $ne: true } }).count();                                                    // 29
    }                                                                                                           // 30
                                                                                                                //
    return incompleteCount;                                                                                     // 18
  }()                                                                                                           // 18
});                                                                                                             // 18
                                                                                                                //
Template.body.events({                                                                                          // 33
  'submit .new-task': function () {                                                                             // 34
    function submitNewTask(event) {                                                                             // 33
      // Prevent default browser form submit                                                                    // 35
      event.preventDefault();                                                                                   // 36
                                                                                                                //
      // Get value from form element                                                                            // 38
      var target = event.target;                                                                                // 39
      var text = target.text.value;                                                                             // 40
                                                                                                                //
      // Insert a task into the collection                                                                      // 42
      Meteor.call('tasks.insert', text);                                                                        // 43
                                                                                                                //
      // Clear form                                                                                             // 45
      target.text.value = '';                                                                                   // 46
    }                                                                                                           // 47
                                                                                                                //
    return submitNewTask;                                                                                       // 33
  }(),                                                                                                          // 33
  'change .hide-completed input': function () {                                                                 // 48
    function changeHideCompletedInput(event, instance) {                                                        // 33
      instance.state.set('hideCompleted', event.target.checked);                                                // 49
    }                                                                                                           // 50
                                                                                                                //
    return changeHideCompletedInput;                                                                            // 33
  }()                                                                                                           // 33
});                                                                                                             // 33
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"task.js":["meteor/meteor","meteor/templating","./task.html",function(require,exports,module){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                              //
// imports/ui/task.js                                                                                           //
//                                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                //
var Meteor;module.import('meteor/meteor',{"Meteor":function(v){Meteor=v}});var Template;module.import('meteor/templating',{"Template":function(v){Template=v}});module.import('./task.html');
                                                                                                                // 2
                                                                                                                //
                                                                                                                // 4
                                                                                                                //
Template.task.helpers({                                                                                         // 6
  isOwner: function () {                                                                                        // 7
    function isOwner() {                                                                                        // 6
      return this.owner === Meteor.userId();                                                                    // 8
    }                                                                                                           // 9
                                                                                                                //
    return isOwner;                                                                                             // 6
  }()                                                                                                           // 6
});                                                                                                             // 6
                                                                                                                //
Template.task.events({                                                                                          // 12
  'click .toggle-checked': function () {                                                                        // 13
    function clickToggleChecked() {                                                                             // 12
      // Set the checked property to the opposite of its current value                                          // 14
      Meteor.call('tasks.setChecked', this._id, !this.checked);                                                 // 15
    }                                                                                                           // 16
                                                                                                                //
    return clickToggleChecked;                                                                                  // 12
  }(),                                                                                                          // 12
  'click .delete': function () {                                                                                // 17
    function clickDelete() {                                                                                    // 12
      Meteor.call('tasks.remove', this._id);                                                                    // 18
    }                                                                                                           // 19
                                                                                                                //
    return clickDelete;                                                                                         // 12
  }(),                                                                                                          // 12
  'click .toggle-private': function () {                                                                        // 20
    function clickTogglePrivate() {                                                                             // 12
      Meteor.call('tasks.setPrivate', this._id, !this['private']);                                              // 21
    }                                                                                                           // 22
                                                                                                                //
    return clickTogglePrivate;                                                                                  // 12
  }()                                                                                                           // 12
});                                                                                                             // 12
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}]},"api":{"tasks.js":["meteor/meteor","meteor/mongo","meteor/check",function(require,exports,module){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                              //
// imports/api/tasks.js                                                                                         //
//                                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                //
module.export({Tasks:function(){return Tasks}});var Meteor;module.import('meteor/meteor',{"Meteor":function(v){Meteor=v}});var Mongo;module.import('meteor/mongo',{"Mongo":function(v){Mongo=v}});var check;module.import('meteor/check',{"check":function(v){check=v}});
                                                                                                                // 2
                                                                                                                // 3
                                                                                                                //
var Tasks = new Mongo.Collection('tasks');                                                                      // 5
                                                                                                                //
if (Meteor.isServer) {                                                                                          // 7
  // This code only runs on the server                                                                          // 8
  // Only publish tasks that are public or belong to the current user                                           // 9
  Meteor.publish('tasks', function () {                                                                         // 10
    function tasksPublication() {                                                                               // 10
      return Tasks.find({                                                                                       // 11
        $or: [{ 'private': { $ne: true } }, { owner: this.userId }]                                             // 12
      });                                                                                                       // 11
    }                                                                                                           // 17
                                                                                                                //
    return tasksPublication;                                                                                    // 10
  }());                                                                                                         // 10
}                                                                                                               // 18
                                                                                                                //
Meteor.methods({                                                                                                // 20
  'tasks.insert': function () {                                                                                 // 21
    function tasksInsert(text) {                                                                                // 20
      check(text, String);                                                                                      // 22
                                                                                                                //
      // Make sure the user is logged in before inserting a task                                                // 24
      if (!this.userId) {                                                                                       // 25
        throw new Meteor.Error('not-authorized');                                                               // 26
      }                                                                                                         // 27
                                                                                                                //
      Tasks.insert({                                                                                            // 29
        text: text,                                                                                             // 30
        createdAt: new Date(),                                                                                  // 31
        owner: this.userId,                                                                                     // 32
        username: Meteor.users.findOne(this.userId).username                                                    // 33
      });                                                                                                       // 29
    }                                                                                                           // 35
                                                                                                                //
    return tasksInsert;                                                                                         // 20
  }(),                                                                                                          // 20
  'tasks.remove': function () {                                                                                 // 36
    function tasksRemove(taskId) {                                                                              // 20
      check(taskId, String);                                                                                    // 37
                                                                                                                //
      var task = Tasks.findOne(taskId);                                                                         // 39
      if (task['private'] && task.owner !== this.userId) {                                                      // 40
        // If the task is private, make sure only the owner can delete it                                       // 41
        throw new Meteor.Error('not-authorized');                                                               // 42
      }                                                                                                         // 43
      if (task.owner === this.userId) {                                                                         // 44
        // Only the owner can delete their tasks                                                                // 45
        Tasks.remove(taskId);                                                                                   // 46
      }                                                                                                         // 47
    }                                                                                                           // 49
                                                                                                                //
    return tasksRemove;                                                                                         // 20
  }(),                                                                                                          // 20
  'tasks.setChecked': function () {                                                                             // 50
    function tasksSetChecked(taskId, setChecked) {                                                              // 20
      check(taskId, String);                                                                                    // 51
      check(setChecked, Boolean);                                                                               // 52
                                                                                                                //
      var task = Tasks.findOne(taskId);                                                                         // 54
      if (task['private'] && task.owner !== this.userId) {                                                      // 55
        // If the task is private, make sure only the owner can check it off                                    // 56
        throw new Meteor.Error('not-authorized');                                                               // 57
      }                                                                                                         // 58
                                                                                                                //
      Tasks.update(taskId, { $set: { checked: setChecked } });                                                  // 60
    }                                                                                                           // 61
                                                                                                                //
    return tasksSetChecked;                                                                                     // 20
  }(),                                                                                                          // 20
  'tasks.setPrivate': function () {                                                                             // 62
    function tasksSetPrivate(taskId, setToPrivate) {                                                            // 20
      check(taskId, String);                                                                                    // 63
      check(setToPrivate, Boolean);                                                                             // 64
                                                                                                                //
      var task = Tasks.findOne(taskId);                                                                         // 66
                                                                                                                //
      // Make sure only the task owner can make a task private                                                  // 68
      if (task.owner !== this.userId) {                                                                         // 69
        throw new Meteor.Error('not-authorized');                                                               // 70
      }                                                                                                         // 71
                                                                                                                //
      Tasks.update(taskId, { $set: { 'private': setToPrivate } });                                              // 73
    }                                                                                                           // 74
                                                                                                                //
    return tasksSetPrivate;                                                                                     // 20
  }()                                                                                                           // 20
});                                                                                                             // 20
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}]},"startup":{"accounts-config.js":["meteor/accounts-base",function(require,exports,module){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                              //
// imports/startup/accounts-config.js                                                                           //
//                                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                //
var Accounts;module.import('meteor/accounts-base',{"Accounts":function(v){Accounts=v}});                        // 1
                                                                                                                //
Accounts.ui.config({                                                                                            // 3
  passwordSignupFields: 'USERNAME_ONLY'                                                                         // 4
});                                                                                                             // 3
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}]}},"client":{"main.js":["../imports/startup/accounts-config.js","../imports/ui/body.js",function(require,exports,module){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                              //
// client/main.js                                                                                               //
//                                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                //
module.import('../imports/startup/accounts-config.js');module.import('../imports/ui/body.js');                  // 1
                                                                                                                // 2
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}]}},{"extensions":[".js",".json",".html",".css"]});
require("./client/main.js");