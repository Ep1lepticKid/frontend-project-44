#!/usr/bin/env node.
import runGame from '../index.js';
import * as readlineSync from '../../node_modules/readline-sync/lib/readline-sync.js';

const startEvenGame = () => { 
    const discription = ('Компьютер говорит случайное число, ваша задача, написать ответ четное оно или нет. Принимаются ответы yes/no');
    const rounds = [];
    for (let i = 0; i < 3; i ++){
        rounds[i] = [];
        let number = Math.floor(Math.random()*99+1);
        let questionAnswer = number % 2 == 0? 'yes': 'no';
        rounds[i].push(number, questionAnswer);  
}
runGame(rounds, discription);     
}

export default startEvenGame
