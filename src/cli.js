import * as readlineSync from '../node_modules/readline-sync/lib/readline-sync.js';


const greeting = () => {
    const userName = readlineSync.question('May I have your name?');
    console.log ('Hello', userName);
}

export default greeting