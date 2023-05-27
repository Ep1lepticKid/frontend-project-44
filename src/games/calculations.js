#!/usr/bin/env node.
import runGameMain from '../index.js';
import * as readlineSync from '../../node_modules/readline-sync/lib/readline-sync.js';

const startCalcGame = () => { 
    const discription = ('What is the result of the expression?');
    const rounds = [];
    const task = ['+', '-', '*'];
    for (let i = 0; i < 3; i ++){
        rounds[i] = [];
        let questionAnswer = 0;
        let question = '';
        let number1 = Math.floor(Math.random()*99+1);
        let number2 = Math.floor(Math.random()*99+1);
        const mark = task[Math.floor(Math.random() * task.length)];
        switch (mark){
            case '+':
                questionAnswer = number1 + number2;
                question = `${number1} + ${number2}`;
                break
            case '-':
                questionAnswer = number1 - number2;
                question = `${number1} - ${number2}`;
                break
            case '*':
                number1 = Math.floor(Math.random()*25);
                number2 = Math.floor(Math.random()*25);
                questionAnswer = number1 * number2;
                question = `${number1} * ${number2}`;
                break
        }
        rounds[i].push(question, questionAnswer);  
}
runGameMain(rounds, discription);     
}

export default startCalcGame
