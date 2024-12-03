class ClienteController {
    constructor() {
        this.clientes = new Clientes();
    }
    adicionarCliente(nome, cpf, conta) {
        const cliente = new Cliente(nome, cpf, conta);
        this.clientes.inserir(cliente);
        console.log('Cliente adicionado:', cliente);
    }
    removerCliente(cpf) {
        const result = this.clientes.remover(cpf);
        console.log(result ? 'Cliente removido com sucesso' : 'Cliente não encontrado');
        return result;
    }
    listarClientes() {
        return this.clientes.listar();
    }
    pesquisarCliente(cpf) {
        return this.clientes.pesquisar(cpf);
    }
}
