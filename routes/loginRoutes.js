const express = require('express');

const router = express.Router();

router.get('/login-form', (req, res) => {
    res.send(`
      <form action="/login" method="post">
        <label for="username">Username:</label>
        <input type="text" id="username" name="username" required>
        <br>
        <label for="password">Password:</label>
        <input type="password" id="password" name="password" required>
        <br>
        <button type="submit">Login</button>
      </form>
    `);
  });

router.post('/login', (req, res) => {
    const { username, password } = req.body;

    // Check if the user exists
    if (username && password) {
        if (username == 'admin' && password == '12345') {
            req.session.username = username;
            return res.redirect('/');
        }
    } else {
        res.send('Invalid username or password');
    }
});

router.get('/logout', (req, res) => {
    // Destroy the session to log out the user
    req.session.destroy((err) => {
    if (err) {
        console.error(err);
        return res.send('Error logging out');
    }
    res.redirect('/');
    });
});

router.get('/admin', (req, res) => {
    res.render('admin');
});

module.exports = router;