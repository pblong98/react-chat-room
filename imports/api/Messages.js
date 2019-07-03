import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';
export const Messages = new Mongo.Collection('Messages');

if (Meteor.isServer) {
  Meteor.publish('Messages', function tasksPublication() {
    return Messages.find();
  });
}

Meteor.methods({
  'Messages.push'(text) {
    if (!this.userId) 
    {
        throw new Meteor.Error('not-authorized');
    }
    check(text, String);
    Messages.insert(
        {
            text,
            createdAt: new Date(),
            username: Meteor.user().username,
        }
    );
  },
  'Messages.update'(id,text) {
    if (!this.userId) 
    {
        throw new Meteor.Error('not-authorized');
    }
    check(text, String);
    check(id, String);
    
  }
});

