#!/usr/bin/env node.
import runGameMain from '../index.js';
import * as readlineSync from '../../node_modules/readline-sync/lib/readline-sync.js';

const startGcdGame = () => { 
    const discription = ('Компьютер сообщает два числа, ваша задача найти наименьший общий делитель. Принимаются ответы в числовом варианте.');
    const rounds = [];
    for (let i = 0; i < 3; i++) {
        let questionAnswer = 0;
        rounds[i] =[];
        let number1 = 2 + Math.floor(Math.random()*98);
        let number2 = 2 + Math.floor(Math.random()*98);
        const question = `Первое число: ${number1}, второе число: ${number2}`
        if (number1 == number2){
            questionAnswer = number1;
        }
        if (number1 < number2){
            for (let num = number1; num >=1; num --){
                if (number1 % num == 0 && number2 % num == 0){
                    questionAnswer = num;
                    break
                }
            }
        } else {
            for (let num = number2; num >= 1; num --){
                if (number1 % num == 0 && number2 % num == 0){
                    questionAnswer = num;
                    break
                }
            }
        }
        rounds[i].push(question, questionAnswer);  
    }
runGameMain(rounds, discription);     
}

export default startGcdGame