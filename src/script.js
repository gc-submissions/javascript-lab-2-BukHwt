"use strict";

// TODO - write your code here.

const randomDamage = () => Math.floor(Math.random() * 10 + 1);

const chooseOption = (opt1, opt2) => {
  const randNum = Math.round(Math.random());
  return randNum === 0 ? opt1 : opt2;
};

const attackPlayer = function (health) {
  return health - randomDamage();
};

const logHealth = (player, health) =>
  console.log(`${player} health: ${health}`);

const logDeath = (winner, loser) => console.log(`${winner} defeated ${loser}`);

const isDead = (health) => (health <= 0 ? true : false);

function fight(player1, player2, player1Health, player2Health) {
  while (player1Health > 0 || player2Health > 0) {
    const attacker = chooseOption(player1, player2);
    if (attacker === player1) {
      player2Health = attackPlayer(player2Health);
      logHealth(player2, player2Health);
      if (player2Health <= 0) {
        logDeath(player1, player2);
        break;
      }
    } else {
      player1Health = attackPlayer(player1Health);
      logHealth(player1, player1Health);
      if (player1Health <= 0) {
        logDeath(player2, player1);
        break;
      }
    }
  }
}

console.log(fight("Steve", "Mitch", 100, 100));

// ------Extended Challenges

const printSquare = (width) => {};

printSquare();
