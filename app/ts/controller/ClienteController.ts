class ClienteController {
    private clientes: Clientes;

    constructor() {
        // Inicializa a classe Clientes, que mantém os clientes
        this.clientes = new Clientes();
    }

    // Método para adicionar um cliente
    public adicionarCliente(nome: string, cpf: string, conta: string): void {
        const cliente = new Cliente(nome, cpf, conta);
        this.clientes.inserir(cliente); // Adiciona o cliente
        console.log('Cliente adicionado:', cliente);
    }

    // Método para remover um cliente pelo CPF
    public removerCliente(cpf: string): boolean {
        const result = this.clientes.remover(cpf);
        if (result) {
            console.log('Cliente removido com sucesso');
        } else {
            console.log('Cliente não encontrado');
        }
        return result;
    }

    // Método para listar todos os clientes
    public listarClientes(): Cliente[] {
        return this.clientes.listar(); // Retorna todos os clientes
    }

    // Método para pesquisar um cliente pelo CPF
    public pesquisarCliente(cpf: string): Cliente | undefined {
        return this.clientes.pesquisar(cpf); // Pesquisa cliente pelo CPF
    }
}
