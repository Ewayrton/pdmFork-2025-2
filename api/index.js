import axios from "axios";

// URL base do seu backend já publicado
const API_URL = 'https://atv-03-sequelize-7dtg5l9hd-ewayrtons-projects.vercel.app';

const api = axios.create({
  baseURL: API_URL,
});

export const getTarefas = async () => {
  const response = await api.get("/tarefas");
  return response.data;
};

export const addTarefa = async (tarefa) => {
  const response = await api.post("/tarefas", tarefa);
  return response.data;
};

export const updateTarefa = async (tarefa) => {
  // A API de atualização espera o ID na URL e o corpo da tarefa
  const response = await api.put(`/tarefas/${tarefa.objectId}`, tarefa);
  return response.data;
};

export const deleteTarefa = async (tarefa) => {
  // A API de exclusão espera o ID na URL
  await api.delete(`/tarefas/${tarefa.objectId}`);
};