const express = require('express');
const app = express();
const PORT = 3000;

app.use((req, res, next) => {
    console.log(`Accessed ${req.method} ${req.url}`);
    next();
});

app.get('/', (req, res) => {
    res.send('<h1>Home</h1>');
});

app.get('/about', (req, res) => {
    res.send('<h1>About</h1>');
});

app.post('/data', (req, res) => {
    res.send('<h1>Data (POST)</h1>');
});

app.get('/users', (req, res) => {
    res.send('<h1>Users</h1>');
});

app.get('/users/signin', (req, res) => {
    const { userid } = req.query;
    if (!userid) {
        return res.redirect('/users/signup');
    }
    res.redirect(`/users/${userid}`);
});

app.get('/users/signup', (req, res) => {
    res.send('<h1>Signup</h1>');
});

app.get('/users/:userid', (req, res) => {
    const { userid } = req.params;
    res.send(`<h1>Welcome, User ${userid}!</h1>`);
});

app.use((req, res) => {
    res.status(404).send('<h1>404 Not Found</h1><a href="/">Go to Home</a>');
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
