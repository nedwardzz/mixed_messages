/* MIXED MESSAGES CodeCademy
    Author: Nick Edwards
    Last Revision: December 14, 2021
*/

// Instantiating 4 Arrays
// 3 for each piece of data, 1 to store all data arrays
let mixedMessages = [];
let reactions = [];
let observations = [];
let suggestions = [];

// Filling reactiosn with a few strings
reactions.push(`Wow!`);
reactions.push(`Yikes!`);
reactions.push(`OMG!`);
reactions.push(`Sorry!`);
reactions.push(`Seriously?`);
reactions.push(`I can't believe this!`);
reactions.push(`Guess what!`);
mixedMessages.push(reactions);
//console.log(reactions); // Uncomment to test reactions array additions

// Filling observations with a few strings
observations.push(`You're not looking so good!`);
observations.push(`I think you need a shower!`);
observations.push(`Did you wake up on the wrong side of the bed?`);
observations.push(`You seem really chipper!`);
observations.push(`Why are you so sweaty?`);
observations.push(`Did you touch my drumset?`);
observations.push(`You need to grow up!`);
mixedMessages.push(observations);
//console.log(observations); // Uncomment to test observations array additions

// Filling suggestions with a few strings
suggestions.push(`Do better!`);
suggestions.push(`Do you need help?`);
suggestions.push(`Maybe you should hit the gym?`);
suggestions.push(`Maybe you should stop talking?`);
suggestions.push(`I'm not really sure how to help you.`);
suggestions.push(`I need you to stop taking my stuff.`);
suggestions.push(`Let's go shopping!`);
mixedMessages.push(suggestions);
//console.log(suggestions); // Uncomment to test suggestions array additions

//console.log(mixedMessages) // Uncomment to test mixedMessages array additions

function createMixedMessage (messageArray) {
    const rand1 = Math.floor(Math.random() * (mixedMessages[0].length));
    const rand2 = Math.floor(Math.random() * (mixedMessages[1].length));
    const rand3 = Math.floor(Math.random() * (mixedMessages[2].length));
  
    return `${messageArray[0][rand1]}\n${messageArray[1][rand2]}\n${messageArray[2][rand3]}`;
  }
  
  console.log(createMixedMessage(mixedMessages));

  // EOF