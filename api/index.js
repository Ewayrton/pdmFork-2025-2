const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');

const app = express();
app.use(cors());
app.use(express.json());

// 👉 URL base do backend no Vercel
const API_URL = 'https://atv-03-sequelize-7dtg5l9hd-ewayrtons-projects.vercel.app';

// Rota inicial (teste)
app.get('/', (req, res) => {
  res.json({ mensagem: 'API proxy conectada ao backend do Ewayrton', backend: API_URL });
});

// Listar tarefas
app.get('/tarefas', async (req, res) => {
  try {
    const response = await fetch(`${API_URL}/tarefas`);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Erro ao listar tarefas:', error);
    res.status(500).json({ erro: 'Erro ao conectar ao backend' });
  }
});

// Criar tarefa
app.post('/tarefas', async (req, res) => {
  try {
    const response = await fetch(`${API_URL}/tarefas`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(req.body),
    });
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Erro ao criar tarefa:', error);
    res.status(500).json({ erro: 'Erro ao conectar ao backend' });
  }
});

// Atualizar tarefa
app.put('/tarefas/:id', async (req, res) => {
  try {
    const response = await fetch(`${API_URL}/tarefas/${req.params.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(req.body),
    });
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Erro ao atualizar tarefa:', error);
    res.status(500).json({ erro: 'Erro ao conectar ao backend' });
  }
});

// Deletar tarefa
app.delete('/tarefas/:id', async (req, res) => {
  try {
    await fetch(`${API_URL}/tarefas/${req.params.id}`, { method: 'DELETE' });
    res.status(204).send();
  } catch (error) {
    console.error('Erro ao deletar tarefa:', error);
    res.status(500).json({ erro: 'Erro ao conectar ao backend' });
  }
});

// Servidor local
const PORT = process.env.PORT || 3333;
app.listen(PORT, () => console.log(`Proxy conectado ao backend do Ewayrton. Porta: ${PORT}`));