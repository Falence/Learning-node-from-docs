/*
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World!');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`);
});



*/
    /*
    const x = 1
    const y = 2
    console.count(

        'The value of x is ' + x +
        ' and has been checked .. how many times?'
    )
    const z = 3
    console.count(
        'The value of x is ' + x +
        ' and has been checked .. how many times?'
    )
    console.count(
        'The value of y is ' + y +
        ' and has been checked .. how many times?'
    )

    const oranges = ['orange', 'orange']
    const apples = ['just one apple']

    oranges.forEach(fruit => {
        console.count(fruit)
    })

    const doSomething = () => console.log('test')
    const measureDoingSomething = () => {
        console.time('doSomething()')
        //do something, and measure the time it takes
        doSomething()
        console.timeEnd('doSomething()')
    }
    measureDoingSomething()
    */

/*const chalk = require('chalk')
console.log(chalk.green('Hacker Vibes'))*/

/*
const bar = new ProgressBar(':bar', { total: 10 })
const ProgressBar = require('progress')
const timer = setInterval( () => {
    bar.tick()
    if (bar.complete) {
        clearInterval(timer)
    }
}, 100)
*/

/*const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

readline.question(`What's your name?`, name => {
    console.log(`Hi there, ${name}!`)
    readline.close()
})*/

/*const inquirer = require('inquirer')

let questions = [
    {
        type: 'input',
        name: 'name',
        message: "What's your name?"
    }
]

inquirer.prompt(questions).then(answers => {
    console.log(`Hi ${answers['name']}`)
})*/

/*// creating a promise
let done = true

const isItDone = new Promise((resolve, reject) => {
    if (done) {
        const workDone = 'Here is the thing I built'
        resolve(workDone)
    } else {
        const why = 'Still working on something...'
        reject(why)
    }
})*/


// promisifying
const fs = require('fs')

const getFile = (fileName) => {
    return new Promise((resolve, reject) => {
        fs.readFile(fileName, (err, data) => {
            if (err) {
                reject(err)
                return
            } else {
                resolve(data)
            }
        })
    })
}

getFile('./apiFile.txt')
    .then(data => console.log(data))
    .catch(err => console.log(err))























