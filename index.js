const express = require('express');
const path = require('path')
const app = express();

app.use(express.static(path.join(__dirname, 'public')))

app.set('view engine', 'pug')

app.get('/', (req, res) => {
  res.render('home', {
    title: 'Astroturf'
  })
});

app.get('/live', (req, res) => {
  res.render('live', {
    title: 'Astroturf | Live'
  })
})

app.get('/merch', (req, res) => {
  res.render('merch', {
    title: 'Astroturf | Merch'
  })
})

app.get('/about', (req, res) => {
  res.render('about', {
    title: 'Astroturf | About'
  })
})

app.get('/contact', (req, res) => {
  res.render('contact', {
    title: 'Astroturf | Contact'
  })
})


const server = app.listen(process.env.PORT || 3000, () => {
  console.log(`The server started on port: ${server.address().port}`);
});

