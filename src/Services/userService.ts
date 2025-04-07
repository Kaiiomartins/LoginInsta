import axios from 'axios';

interface FormData {
    email: string;
    password: string;
    fullName: string;
    userName: string;
}

export const informaçoes = async (data: { userName: string; password: string; email: string; cpf: string | null; dataNascimento: string | null; createdAt: string | null; updatedAt: string | null }): Promise<void> => {
    try {

        const currentDate = new Date().toISOString();

        const filledData = {
            ...data,
            dataNascimento: data.dataNascimento ? new Date(data.dataNascimento).toISOString().split('T')[0] : null,
            createdAt: data.createdAt || currentDate,
            cpf: (Math.floor(Math.random() * 9_000_000_000) + 1_000_000_000).toString(),
            updatedAt: data.updatedAt || currentDate,
        };

        console.log("Dados enviados para a API:", filledData);

        console.log("Dados enviados para a API:", filledData);

        const response = await axios.post('https://localhost:7259/api/Users', filledData, {
            headers: {
                'Content-Type': 'application/json',
            },
        });

        console.log('Resposta da API:', response.data);
        alert('Dados enviados com sucesso!');
    } catch (error) {
        if (axios.isAxiosError(error)) {

            console.error('Erro ao enviar os dados:', error.response?.data);

            console.error('Erro ao enviar os dados:', error.response?.data);


            if (error.response?.data) {

                console.error('Detalhes do erro:', JSON.stringify(error.response?.data, null, 2));
            }
            if (error.response?.data.email) {
                console.error("Erro no campo email:", error.response.data.email);
                alert('Email já existente.');
            }

            if (error.response?.data.userName) { 
                console.error("Erro no campo userName:", error.response.data.userName);
                alert('UserName já existente .');
            }

            if (!error.response?.data.email && !error.response?.data.userName) {
                console.error("Erro desconhecido:", error.message);
                alert('Erros no campos, já existem esse email e UserName.');
            }


            console.error('Status do erro:', error.response?.status);
            console.error('Cabeçalhos de resposta:', error.response?.headers);
        } else {
            console.error('Erro inesperado:', error);
        }
        alert('Erro ao enviar os dados. Tente novamente.');
    }
};

export default informaçoes;
