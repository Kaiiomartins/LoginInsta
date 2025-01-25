import axios from 'axios';

interface FormData {
    email: string;
    password: string;
    fullName: string;
    userName: string;
}

export const informações = async (data: FormData): Promise<void> => {
    try {
        const response = await axios.post('http://localhost:5177', data);
        console.log('Resposta da API:', response.data);
        alert('Dados enviados com sucesso!');
    } catch (error) {
        console.error('Erro ao enviar os dados:', error);
        alert('Erro ao enviar os dados. Tente novamente.');
    }
};
export default informações ;