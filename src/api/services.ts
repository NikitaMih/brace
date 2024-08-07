import api from './api';
import { Endpoints } from './Endpoints';

export async function getUsers() {
  const { data } = await api.get(Endpoints.USERS);
  return data;
}
