const express = require('express')
const path = require('path')

const app = express()

app.get('/', (req, res) => res.sendFile(path.join(__dirname,'../frontend', 'index.html')))
app.get('/about', (req, res) => res.sendFile(path.join(__dirname, '../frontend', 'about.html')))
app.get('/contact-me', (req, res) => res.sendFile(path.join(__dirname, '../frontend', 'contact-me.html')))
app.get('*', (req, res) => res.sendFile(path.join(__dirname, '../frontend', '404.html')))

const PORT = 3000
app.listen(PORT, () => console.log(`Basic informational site listening on ${PORT}`))