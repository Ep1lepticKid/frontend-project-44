#!/usr/bin/env node.

import * as readlineSync from 'readline-sync';

const roundNumber = 3;
const runGameMain = (rounds, discription) =>{
    console.log ('Welcome to the Brain Games');
    const userName = readlineSync.question('May I have your name?');
    console.log (`Hello, ${userName}`);
    console.log (discription);
    for (let i = 0; i < roundNumber; i++) {
        const [question, answer] = rounds[i];
        console.log (`question: ${question}`);
        const userAnswer = readlineSync.question('You answer:');
        if (userAnswer == answer) {
            console.log ('Correct');
        }
        else {
            console.log (`Your answer "${userAnswer}" is not correct. Correct answer was: ${answer}`);
            console.log (`Let's try again ${userName}, good luck!`);
            return
        }
    }
    console.log(`Congratulations, ${userName}`);
}

export  default runGameMain