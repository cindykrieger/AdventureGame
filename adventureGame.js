/*
Adventure Game
This game will be a text-based game where the player will be able
to make choices that affect the outcome of the game.
The player will be able to choose their own path and the story will change
based on their decisions.
*/

const readline = require("readline-sync");

// Display the game title
console.log("Welcome to the Adventure Game");

// Add a welcome message
console.log("Prepare yourself for an epic journey!");

// Get player name using readline-sync
let playerName = "";
playerName = readline.question("What is your name, adventurer? ");

// Display a personalized welcome message
console.log(`Welcome, ${playerName}! Your adventure begins now.`);

if (playerName != ""){
    let playerCurrentLocation = "village";
    let gameRunning = true;

    // Player's initial health
    let playerHealth = 100; 
    // Player's initial strength
    let playerStrength = 10; 
     // Player's initial defense
    let playerDefense = 5;
    // Player's initial gold
    let playerGold = Math.round(Math.random()*20) + 1; 
    // Player's inventory (empty at the start)
    let playerInventory = []; 

    console.log(`${playerName}: Your health is: ${playerHealth}`);
    console.log(`${playerName}: Your strength is: ${playerStrength}`);
    console.log(`${playerName}: Your defense is: ${playerDefense}`);
    console.log(`${playerName}: Your gold is: ${playerGold}`);
}


