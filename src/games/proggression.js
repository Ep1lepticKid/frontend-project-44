#!/usr/bin/env node.
import runGameMain from '../index.js';
import * as readlineSync from '../../node_modules/readline-sync/lib/readline-sync.js';
import { question } from 'readline-sync';

const startProgressionGame = () => { 
    const discription = ('Компьютер сообщает последовательность чисел, вам надо найти пропущенное число. Принимаются ответы в числовом варианте.');
    const rounds = [];
    let questionAnswer = 0;
    for (let i = 0; i < 3; i++) {
        const progression = [];
        rounds[i] = [];
        let startNumberOfProgresion = Math.floor(Math.random()*50);
        const stepOfProgression = 1 + Math.floor(Math.random()*14);
        const elemNumber = Math.floor(Math.random()*10);
        for (let y = 0; y <= 10; y++){
            progression.push(startNumberOfProgresion);
            startNumberOfProgresion = startNumberOfProgresion + stepOfProgression;
        }
        questionAnswer = progression[elemNumber];
        progression[elemNumber] = '..';
        rounds[i].push(progression, questionAnswer);  
    }
runGameMain(rounds, discription);     
}

export default startProgressionGame