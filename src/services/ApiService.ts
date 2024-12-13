import axios from 'axios';
import { Group } from '../interfaces/ValveInterface';

class ApiService {
    static baseUrl = 'http://localhost:3000'; // Cambia esto a la URL de tu servidor

    static async fetchValves(): Promise<Group[]> {
        const response = await axios.get<Group[]>(`${this.baseUrl}/items`);
        return response.data;
    }

    static async updateValve(groups: Group[]): Promise<Group[]> {
        const response = await axios.post<Group[]>(`${this.baseUrl}/items`, { lista: groups });
        return response.data;
    }
}

export default ApiService;