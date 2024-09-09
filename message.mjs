import clc from 'cli-color';

function outputMessage(message){
    console.log(clc.green(` the message is: ${message}`))
}

outputMessage('Hello, there!')
