// app.js
const express = require('express');
const axios = require('axios');
const app = express();

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

const PORT = 3000;

// Rota inicial
app.get('/', (req, res) => {
  res.render('index');
});

// Rota que consome a API
app.get('/quote', async (req, res) => {
  try {
    const response = await axios.get('https://ron-swanson-quotes.herokuapp.com/v2/quotes');
    const quote = response.data[0];
    res.render('quote', { quote });
  } catch (error) {
    console.error(error.message);
    res.send('Erro ao buscar citação.');
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
