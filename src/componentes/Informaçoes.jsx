class Informacoes {
    constructor() {
        this.dados = {}; 
    }

    setDados(novosDados) {
        this.dados = { ...novosDados }; 
        console.log('Dados armazenados na classe informações:', this.dados);
    }

    getDados() {
        console.log('Recuperando dados da classe informações:', this.dados);
        return this.dados; 
    }
}

export default new Informacoes();