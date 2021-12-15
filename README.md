# CodeCademy Mixed Messages Project!

Hi there! My name is Nick Edwards, and I'm from Maine!
This is actually my first markdown doc!<br>
I have to say, I might only be 12% through the Full-Stack Course, 
but this has all been really cool to learn!

I'm looking forward to meeting fellow coders within this community!
Happy Coding!

## Project Summary

The purpose of this program is to generate random messages.
<br>When the user executes the program, 3 pieces of data will join to create a random message.

Even though this is a simple project to pros I'm sure, I intend to document my methods as I complete the project.
Capturing my methods will be a great reference to fall back on, build from, and hey, if it helps you too, that's great!
My goal is simply to learn, learn from, and support others along the coding journey.
<br>About a year ago, I knew hardly anything about coding. I still have so much to learn, but the fact that I'm writing this on my mac in VS Code, versioning with GitHub, and seeign the results on my README in the browser is really cool!

## Methods

### 1. Plan Your Project
- The program is simple. We need to create a random message made up of 3 elements, and each can be whatever we want them to be!
- This is a great opportunitiy to be creative, and have some fun!
- For my approach, I'm going to create 4 arrays named:
    - **mixedMessages**
        - An array to store all 3 types of elements
    - **reactions**
        - The first element that stores types of reactions
    - **observations**
        - The second element that stores types of _obviously humorously rude_ observations
    - **suggestions**
        - The third element that stores again, _obviously humorously rude_ suggestions

- Understand that I in no way shape or form condone any messages that the generator may spit out.
- My goal is simply to create a humorous message generator that when read and applied to 0 context or persons, one might just laugh :joy_cat:
- Let's get started!


### 2. Come Up With a Topic
- As previously stated, my goal is to make a message generator that returns messages that are rude, but yet comical
- The messages will consist of 3 sections, a reaction, observation, and a suggestion
    - An example would be "Yikes! I think you need a shower! Do better!"



### 3. Create Script & Run Locally
- Reference the file mixedMessages.js within this project


### 4. Set up version control
- While I created the script, I practiced version control in small increments because I thoguht it would be helpful to begin building the skill.
- In fact, as I've wrote this **README**, I've push my changes to this GitHub repo throughout as well!
- To do this, I had to create a personal access token in the developer settings of my GitHub account
- Using the **Command Line**:
    - I created a directory named mixed_messages (my working directory)<br> 
    `mkdir mixed_messages`
    - Created my files in the working directory<br>
    `touch README.md mixed_messages.js`
    - Initialized a git repo<br>
    `git init`
    - Staged and committed them (add . adds all fields in the working directory to the staging area for commit)<br>
    `git add . && git commit -m "First Commit - Added README and js file"`
    - Pushed them to GitHub!<br>
    `git remote add origin https://github.com/nedwardzz/mixed_messages`<br>
    `git push -u origin main`


### 5. Store message components
- I set up version control at the very beginning before scripting mixedMessages.js
- As detailed above, I stored the elements of the message within 3 different arrays
- I then stored all three of these arrays within a main array, mixedMessages
- For readability, I pushed each element into the arrays one by one. Given that they are completely random, their order does not matter
- For testing purposes, I like to log my data to the console to verify it's working as intended, then I comment out the test lines for future use (troubleshooting/ debugging)
- I made a commit at this point too! 


### 6. Create the Message
- It's helpful that we know just how many elements will be within the mixedMessage array given they're hard coded
- Knowing there are 3 elements, I need to select a random element from all 3
- Again, the elements I'm selecting are from the 3 arrays reactions, observations, and suggestions
- I obtain these values through generating 3 random numbers, ensuring I'm only generating numbers that will select a truthy value from each array
- The values are interpolated (`${ }` syntax) and returned as a message!
- Oh, I made another commit here as well


### 7. Put the program together
- Technically, the program meets the requirements of generating a random message comprised of 3 different elements picked at random
- At this point, the program is finished!


#### 8. Next Steps
- Soon, I'm sure we'll learn more about user interaction. 
- Once I get there, I think it'd be cool to give the user some additional functionalities like: 
    - Add more messages to existing lists
    - Create new lists with different categories of messages
    - Swap out lists to mix up which ones are selected from to generate a new message
- I intend to return to this program and add these functionalities once I know how!



## Conclusion
- If you're like me, making it to this point of the learning path is really exciting!
- We're moving on to web development next, and I'm eager to begin putting JS together with HTML/ CSS
- I hope to connect with the CodeCademy community a bit more, and as always, happy coding!