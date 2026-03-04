const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

// 🔗 Conexão com MongoDB local
mongoose.connect('mongodb+srv://juliagasantos_db_user:user567Us@ikesushi.cqnpoqj.mongodb.net/ikesushi?retryWrites=true&w=majority')  .then(() => console.log('MongoDB conectado 🍃'))
  .catch(err => console.log(err));

// Rota de teste
app.get('/', (req, res) => {
  res.json({ mensagem: 'API IkeSushi funcionando 🍣' });
});

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000 🚀');
});