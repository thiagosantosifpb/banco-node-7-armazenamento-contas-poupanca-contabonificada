class Clientes {
    constructor() {
        // Tenta carregar os clientes do localStorage
        this.clientes = this.carregar(); // Carregar clientes ao iniciar a classe
    }
    inserir(cliente) {
        this.clientes.push(cliente);
        this.salvar(); // Salva os clientes no localStorage
    }
    remover(cpf) {
        const index = this.clientes.findIndex(cliente => cliente.getCpf() === cpf);
        if (index !== -1) {
            this.clientes.splice(index, 1);
            this.salvar(); // Salva os clientes no localStorage após a remoção
            return true;
        }
        return false;
    }
    listar() {
        return this.clientes;
    }
    pesquisar(cpf) {
        return this.clientes.find(cliente => cliente.getCpf() === cpf);
    }
    salvar() {
        // Converte os clientes para JSON e salva no localStorage
        localStorage.setItem('clientes', JSON.stringify(this.clientes));
    }
    carregar() {
        // Recupera os clientes do localStorage e converte para objetos Cliente
        const clientesSalvos = localStorage.getItem('clientes');
        if (clientesSalvos) {
            return JSON.parse(clientesSalvos).map((clienteData) => new Cliente(clienteData.nome, clienteData.cpf, clienteData.conta));
        }
        return [];
    }
}
