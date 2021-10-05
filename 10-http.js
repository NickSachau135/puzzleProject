const http = require('http');
const os = require('os');
const user = os.userInfo();

const data = {
    names: [
        'jimmy',
        'john',
        'tommy',
    ],
    date: '10/20/30',
    numbers: [1, 2, 3, 4, 5, 6, 7, 8]
}

const server = http.createServer((req, res) => {
    if(req.url === '/') {
        console.log(`user with name of ${user.username} vistied data`);
        res.end('Welcome to the Home Page')
    }else if(req.url === '/about') {
        console.log(`user with name of ${user.username} vistied data`);
        res.end('Here is the history of me and my company')
    }else if(req.url === '/data') {
        console.log(`user with name of ${user.username} vistied data`);
        res.end(JSON.stringify(data))
    }else {
        console.log(`user with name of ${user.username} wanted to go to ${req.url}`);
        res.end(`
            <h1 style="color:orange">Oops!</h1>
            <p>We can't Find what you're looking for</p>
        `)
    }
})

server.listen(420)