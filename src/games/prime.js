#!/usr/bin/env node.
import runGameMain from '../index.js';
import * as readlineSync from '../../node_modules/readline-sync/lib/readline-sync.js';
import { question } from 'readline-sync';

const startPrimeGame = () => { 
    const discription = ('Answer "yes" if given number is prime. Otherwise answer "no".');
    const rounds = [];
    let questionAnswer = 'no';
    for (let i = 0; i < 3; i++) {
        const number = 2 + Math.floor(Math.random()*98);
        rounds[i] = [];
        if (number == 0 || number == 1){
            questionAnswer = 'no';
        }else{
            for (let i = 2; i < number; i++){
                if (number % i == 0){
                    questionAnswer = 'no';
                    break
                }else{
                    questionAnswer = 'yes';
                }

            }
        }
        rounds[i].push(number, questionAnswer);  
    }
runGameMain(rounds, discription);     
}

export default startPrimeGame