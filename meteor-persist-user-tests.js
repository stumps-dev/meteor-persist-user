// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by meteor-persist-user.js.
import { name as packageName } from "meteor/meteor-persist-user";

// Write your tests here!
// Here is an example.
Tinytest.add('meteor-persist-user - example', function (test) {
  test.equal(packageName, "meteor-persist-user");
});
