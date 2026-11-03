const express = require('express');
const session = require('express-session');
const flash = require('connect-flash');
const authRoutes = require('./routes/authRoutes');
const pageRoutes = require('./routes/pageRoutes');
const adminRoutes = require('./routes/adminRoutes');
const petRoutes = require('./routes/petRoutes');
const journalRoutes = require('./routes/journalRoutes');
const paymentRoutes = require('./routes/paymentRoutes');

const app = express();
const PORT = 3000;

app.use(flash());

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use(session({
  secret: 'secret123',
  resave: false,
  saveUninitialized: true
}));

app.use('/', require('./routes/authRoutes'));
app.use('/', require('./routes/pageRoutes'));
app.use('/', require('./routes/adminRoutes'));
app.use('/', require('./routes/petRoutes'));
app.use('/', require('./routes/journalRoutes'));
app.use('/', require('./routes/paymentRoutes'));

app.listen(PORT, () => console.log(`App running on http://localhost:${PORT}`));
