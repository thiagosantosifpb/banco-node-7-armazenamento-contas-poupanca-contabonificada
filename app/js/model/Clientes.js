class Clientes {
    constructor() {
        this.clientes = []; // Array para armazenar os clientes
    }
    // Método para inserir um cliente no array
    inserir(cliente) {
        this.clientes.push(cliente);
        console.log('Cliente inserido:', cliente);
    }
    // Método para remover um cliente pelo CPF
    remover(cpf) {
        const index = this.clientes.findIndex(cliente => cliente.getCpf() === cpf);
        if (index !== -1) {
            this.clientes.splice(index, 1);
            console.log(`Cliente com CPF ${cpf} removido com sucesso.`);
            return true; // Cliente removido com sucesso
        }
        console.log(`Cliente com CPF ${cpf} não encontrado.`);
        return false; // Cliente não encontrado
    }
    // Método para listar todos os clientes
    listar() {
        return this.clientes;
    }
    // Método para pesquisar um cliente pelo CPF
    pesquisar(cpf) {
        return this.clientes.find(cliente => cliente.getCpf() === cpf);
    }
}
