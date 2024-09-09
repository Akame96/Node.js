import figlet from 'figlet';

function outputMessage(message){
    console.log(figlet.green(` the message is: ${message}`))
}

outputMessage('Hello, there!')
