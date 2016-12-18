var require = meteorInstall({"imports":{"api":{"tasks.js":["meteor/meteor","meteor/mongo","meteor/check",function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////
//                                                                           //
// imports/api/tasks.js                                                      //
//                                                                           //
///////////////////////////////////////////////////////////////////////////////
                                                                             //
module.export({Tasks:function(){return Tasks}});var Meteor;module.import('meteor/meteor',{"Meteor":function(v){Meteor=v}});var Mongo;module.import('meteor/mongo',{"Mongo":function(v){Mongo=v}});var check;module.import('meteor/check',{"check":function(v){check=v}});
                                                                             // 2
                                                                             // 3
                                                                             //
var Tasks = new Mongo.Collection('tasks');                                   // 5
                                                                             //
if (Meteor.isServer) {                                                       // 7
  // This code only runs on the server                                       // 8
  // Only publish tasks that are public or belong to the current user        // 9
  Meteor.publish('tasks', function () {                                      // 10
    function tasksPublication() {                                            // 10
      return Tasks.find({                                                    // 11
        $or: [{ 'private': { $ne: true } }, { owner: this.userId }]          // 12
      });                                                                    // 11
    }                                                                        // 17
                                                                             //
    return tasksPublication;                                                 // 10
  }());                                                                      // 10
}                                                                            // 18
                                                                             //
Meteor.methods({                                                             // 20
  'tasks.insert': function () {                                              // 21
    function tasksInsert(text) {                                             // 20
      check(text, String);                                                   // 22
                                                                             //
      // Make sure the user is logged in before inserting a task             // 24
      if (!this.userId) {                                                    // 25
        throw new Meteor.Error('not-authorized');                            // 26
      }                                                                      // 27
                                                                             //
      Tasks.insert({                                                         // 29
        text: text,                                                          // 30
        createdAt: new Date(),                                               // 31
        owner: this.userId,                                                  // 32
        username: Meteor.users.findOne(this.userId).username                 // 33
      });                                                                    // 29
    }                                                                        // 35
                                                                             //
    return tasksInsert;                                                      // 20
  }(),                                                                       // 20
  'tasks.remove': function () {                                              // 36
    function tasksRemove(taskId) {                                           // 20
      check(taskId, String);                                                 // 37
                                                                             //
      var task = Tasks.findOne(taskId);                                      // 39
      if (task['private'] && task.owner !== this.userId) {                   // 40
        // If the task is private, make sure only the owner can delete it    // 41
        throw new Meteor.Error('not-authorized');                            // 42
      }                                                                      // 43
      if (task.owner === this.userId) {                                      // 44
        // Only the owner can delete their tasks                             // 45
        Tasks.remove(taskId);                                                // 46
      }                                                                      // 47
    }                                                                        // 49
                                                                             //
    return tasksRemove;                                                      // 20
  }(),                                                                       // 20
  'tasks.setChecked': function () {                                          // 50
    function tasksSetChecked(taskId, setChecked) {                           // 20
      check(taskId, String);                                                 // 51
      check(setChecked, Boolean);                                            // 52
                                                                             //
      var task = Tasks.findOne(taskId);                                      // 54
      if (task['private'] && task.owner !== this.userId) {                   // 55
        // If the task is private, make sure only the owner can check it off
        throw new Meteor.Error('not-authorized');                            // 57
      }                                                                      // 58
                                                                             //
      Tasks.update(taskId, { $set: { checked: setChecked } });               // 60
    }                                                                        // 61
                                                                             //
    return tasksSetChecked;                                                  // 20
  }(),                                                                       // 20
  'tasks.setPrivate': function () {                                          // 62
    function tasksSetPrivate(taskId, setToPrivate) {                         // 20
      check(taskId, String);                                                 // 63
      check(setToPrivate, Boolean);                                          // 64
                                                                             //
      var task = Tasks.findOne(taskId);                                      // 66
                                                                             //
      // Make sure only the task owner can make a task private               // 68
      if (task.owner !== this.userId) {                                      // 69
        throw new Meteor.Error('not-authorized');                            // 70
      }                                                                      // 71
                                                                             //
      Tasks.update(taskId, { $set: { 'private': setToPrivate } });           // 73
    }                                                                        // 74
                                                                             //
    return tasksSetPrivate;                                                  // 20
  }()                                                                        // 20
});                                                                          // 20
///////////////////////////////////////////////////////////////////////////////

}]}},"server":{"main.js":["meteor/meteor","../imports/api/tasks.js",function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////
//                                                                           //
// server/main.js                                                            //
//                                                                           //
///////////////////////////////////////////////////////////////////////////////
                                                                             //
var Meteor;module.import('meteor/meteor',{"Meteor":function(v){Meteor=v}});  // 1
                                                                             //
Meteor.startup(function () {module.import('../imports/api/tasks.js');        // 3
                                                                             // 4
});                                                                          // 5
///////////////////////////////////////////////////////////////////////////////

}]}},{"extensions":[".js",".json"]});
require("./server/main.js");
//# sourceMappingURL=app.js.map
