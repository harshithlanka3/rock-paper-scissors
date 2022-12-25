# rock-paper-scissors

Creating a rock, paper, scissors web-app in order to better learn html, css, and java script.

HTML:
Consists of 4 sections: The score tab, the player options, the round result, and the hidden game result.

CSS:
Using flex box for the entire body and changing the direction to column, I am able to seperate the sections of the app however I want. Additionally, by using flexbox for each section individually I can allign items individually.

JavaScript:
I created a function that randomly picks one of the three options. This will represent the computer's choice. A seperate round() function exists to run each round of the game each time the player picks an option. From the firing of that event, another function runs the player's choice against the computer's choice and gives a result ranging from [-1,1]. A -1 indicates a loss, 0 indicates a draw, and 1 indicates a win. The game ends once either the player or the computer gets to 5 points. The end game function then runs revealing the game result and providing the option to play again. 
