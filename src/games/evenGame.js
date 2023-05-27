#!/usr/bin/env node.

import * as readlineSync from '../../node_modules/readline-sync/lib/readline-sync.js';

const evenGame = () => { 
    console.log ('Welcome to the Brain Games!');
    const userName = readlineSync.question('May I have your name?');
    console.log ('Hello', userName);
    for (let i = 0; i < 3; i ++){
        let number = Math.floor(Math.random()*99+1);
        let numberStatus = number % 2 == 0? 'yes': 'no';
        console.log (`Question: ${number}`);
        const userAnswer = readlineSync.question('You answer:');
        if (userAnswer == numberStatus) {
            console.log('Correct');
        }
        else{
            console.log(`Your answer "${userAnswer}" was wrong the correcrt answer is ${numberStatus}`);
            console.log('You loooose, godbye! \nTry again later');
            return
        }
        

    }
    console.log('!!!Victory!!!');
}
export default evenGame