# Rock, Paper, Scissors Game

Welcome to the Rock, Paper, Scissors game! This is a simple React-based web application that allows you to play the classic Rock, Paper, Scissors game against the computer.

## Installation

To run the game on your local machine, follow these steps:

1. Clone the repository:
git clone https://github.com/your-username/rock-paper-scissors.git
cd rock-paper-scissors

2. Install dependencies using npm or yarn: npm install OR yarn install
3. Start the development server: npm run dev OR yarn dev
4. Open your browser and navigate to `http://localhost:3000` to play the game.

## Rules

In the Rock, Paper, Scissors game, the rules are simple:

- Rock beats Scissors
- Scissors beats Paper
- Paper beats Rock

Choose your weapon wisely and see if you can beat the computer!

## Components

### Welcome Component

When you enter `http://localhost:3000`, the first thing that pops up is this page where you can add your username.

### Game Component

The `Game` component is the heart of the game. It allows you to select your weapon and play against the computer. It displays the countdown timer, player's and computer's choices, and the game outcome.

### Scoreboard Component
This is part of navigation. Shows history of each player's wins or losses and can re-start the game when you select a different username. You can also add another username.

### WeaponsList Component

The `WeaponsList` component displays the available weapon options (Rock, Paper, Scissors) and allows the player to choose their weapon.

### ConfettiEffect Component

The `ConfettiEffect` component is responsible for displaying a confetti animation when the player wins a round.
