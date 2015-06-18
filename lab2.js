'use strict';

/* ********************************************************
LAB 2: LOOPY SCI-FI

Welcome to Lab 2 =)

Be sure to read all the comments!

All of the instructions are inline with the assignment below.
Look for the word TODO in comments.  Each TODO will have a
description of what is required.

To run this file (in the terminal) use: node lab2.js */

//*********************************************************
// SETUP
//*********************************************************

// We're going to use this special assert method again to
// test our code
function assert(expression, failureMessage) {
  if (!expression) {
    console.log('assertion failure: ', failureMessage);
  }
}

//*********************************************************
// PROBLEM 1: The Blob. 20 points
//*********************************************************

/* Dowington, PA had 1000 citizens on the night the blob escaped
 its meteorite. At first, the blob could only find and consume
 Pennsylvanians at a rate of 1/hour. However, each time it digested
 someone, it became faster and stronger: adding to its consumption
 rate by 1 person/hour.

    for the...      | starting rate of | persons consumed |
                    |  consumption     |    that hour     |
--------------------|------------------|------------------|
    first hour      |    1/hour        |        1         |
    second hour     |    2/hour        |        2         |
    third hour      |    3/hour        |        3         |
    fourth hour     |    4/hour        |        4         |

*/

/* TODO: First, make a constructor function, called Blob, that makes blobs.
*/
function Blob(name) {
   this.name = name;
}

/* TODO: Next, create an instance of Blob named blob.
*/
var blob = new Blob(blob);

/*TODO: Then, use a loop to calculate how long it took the blob to finish
 with Dowington.*/
var peopleRemaining = 1000;
var consumptionRate = 1;
var hoursSpentInDowington = 0;  // TODO: assign me the value of the
                                // above calculation (how long it took
                                // the blob to eat Dowington)

for (var i = 1, j = consumptionRate; peopleRemaining > 0; i++, j++) {
  hoursSpentInDowington = i;
  consumptionRate = j;
  peopleRemaining = peopleRemaining - consumptionRate;
}

// Now, write a method that takes a population for an arbitrary
// town, and the starting consumption rate, and returns the number
// of hours the blob needs to ooze its way through that town.

function hoursToOoze(population, peoplePerHour) {
  // TODO: implement me based on the instructions above.
  // Be sure to then assign me to the Blob's prototype.
  var hoursSpentInRandomTown = 0;
  var population = population;
  var peoplePerHour = peoplePerHour;
  for (var i = 1, j = peoplePerHour; population > 0; i++, j++) {
    hoursSpentInRandomTown = i;
    peoplePerHour = j;
    population -= peoplePerHour;
  }
  return hoursSpentInRandomTown;
}


Blob.prototype.hoursToOoze = hoursToOoze;

assert(blob.hoursToOoze(0, 1) === 0, 'no people means no time needed.');
assert(blob.hoursToOoze(1000, 1) === hoursSpentInDowington,
  'hoursSpentInDowington should match hoursToOoze\'s result for 1000');
assert(blob.hoursToOoze(1000, 0) === 46, 'the blob didn\'s eat anybody the first hour.');
assert(blob.hoursToOoze(100000, 1) === 447, 'it\'ll take 447 hours for the blob to eat its way through the town.');
assert(blob.hoursToOoze(100000000, 1000) === 13178, 'it\'ll take 13178 hours to eat up the town.');

// TODO: write three more assertions like the two above, testing out
// the hoursToOoze method.

//*********************************************************
// PROBLEM 2: Universal Translator. 20 points
//*********************************************************

var hello = {
  klingon: 'nuqneH',  // home planet is Qo'noS
  romulan: 'Jolan\'tru', // home planet is Romulus
  'federation standard': 'hello' // home planet is Earth
};

// TODO: define a constructor that creates objects to represent
// sentient beings. They have a home planet, a language that they
// speak, and method (that you'll place on the prototype) called
// sayHello.

function SentientBeing(homePlanet, nativeLanguage) {   // TODO: specify a home planet and a language
  this.homePlanet = homePlanet;                         // you'll need to add parameters to this constructor
  this.nativeLanguage = nativeLanguage;
}

// sb is a SentientBeing object
function sayHello(sb) {
    // TODO: say hello prints out (console.log's) hello in the
    // language of the speaker, but returns it in the language
    // of the listener (the sb parameter above).
    // use the 'hello' object at the beginning of this exercise
    // to do the translating
    console.log(hello[this.nativeLanguage]);
    return hello[sb.nativeLanguage];
    //TODO: put this on the SentientBeing prototype
  }

SentientBeing.prototype.sayHello = sayHello;

// TODO: create three SentientBeings, one for each language in the
// 'hello' object above.
var klingon = new SentientBeing('Qo"noS', "klingon"); // TODO: make a klingon
var romulan = new SentientBeing("Romulus", "romulan"); // TODO: make a romulan
var human = new SentientBeing("Earth", "federation standard"); // TODO: make a human

assert(human.sayHello(klingon) === 'nuqneH',
 'the klingon should hear nuqneH');

assert(human.sayHello(romulan) === 'Jolan\'tru',
 'the romulan should hear Jolan\'tru');

assert(romulan.sayHello(klingon) === 'nuqneH',
 'the klingon should hear nuqneH');

assert(romulan.sayHello(human) === 'hello',
 'the human should hear hello');

assert(klingon.sayHello(romulan) === 'Jolan\'tru',
  'the romulan should hear Jolan\'tru');

assert(klingon.sayHello(human) === "hello",
  'the human should hear hello');

//*********************************************************
// PROBLEM 3: Moar Loops. 20 points.
//
// Implement the following functions. Write at least 3
// assertions for each one
//*********************************************************
function max(array) {
  // TODO: return the largest number in the given array
  var largestNumber = 0;
  for (var i = 0; i < array.length; i++) {
    if (array[i] > largestNumber) {
      largestNumber = array[i];
    }
  }
  return largestNumber;
}

// TODO: write three more assertions
assert(max([ 1, 3, 2 ]) === 3, '[1,3,2]');

assert(max([ 5, 4, 9 ]) === 9, '[5,4,9]');

assert(max([ 100, 13, 67 ]) === 100, '[100,31,67]');

assert(max([ 33, 30, 29 ]) === 33, '[33,30,29]');

function variablify(string) {
  // TODO: you are given a string with several words in it
  // return a corresponding variable name that follows
  // javascript conventions
  // HINT:
  // you might want to use these string methods:
  //  split(), charAt(), toUpperCase()
  // and this array method: join()
  var stringArray = string.split(" ");
  var camelCase = "";
      camelCase += stringArray[0].toLowerCase();
  for (var i = 1; i < stringArray.length; i++) {
    var followingWord = stringArray[i];
    camelCase += followingWord.charAt(0).toUpperCase();
    for (var j = 1; j < followingWord.length; j++) {
    camelCase += followingWord.charAt(j).toLowerCase();
      }
    }
  return camelCase;
}

// TODO: write three more assertions
assert(variablify('one two three') === 'oneTwoThree',
  'variablify(\'one two three\')');

assert(variablify('whiskey foxtrot tango') === 'whiskeyFoxtrotTango',
  'variablify(\'whiskey foxtrot tango\')');

assert(variablify('Great Big World') === 'greatBigWorld',
  'variablify(\'Great Big World\')');

//*********************************************************
// PROBLEM 4: Cleanup: 10 points
// Makes sure this file passes jshint and jscs
//
// ./node_modules/.bin/grunt jshint
// ./node_modules/.bin/grunt jscs
//*********************************************************
