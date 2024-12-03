class ClienteController {
    constructor() {
        // Inicializa a classe Clientes, que mantém os clientes
        this.clientes = new Clientes();
    }
    // Método para adicionar um cliente
    adicionarCliente(nome, cpf, conta) {
        const cliente = new Cliente(nome, cpf, conta);
        this.clientes.inserir(cliente); // Adiciona o cliente
        console.log('Cliente adicionado:', cliente);
    }
    // Método para remover um cliente pelo CPF
    removerCliente(cpf) {
        const result = this.clientes.remover(cpf);
        if (result) {
            console.log('Cliente removido com sucesso');
        }
        else {
            console.log('Cliente não encontrado');
        }
        return result;
    }
    // Método para listar todos os clientes
    listarClientes() {
        return this.clientes.listar(); // Retorna todos os clientes
    }
    // Método para pesquisar um cliente pelo CPF
    pesquisarCliente(cpf) {
        return this.clientes.pesquisar(cpf); // Pesquisa cliente pelo CPF
    }
}
