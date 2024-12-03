class ClienteController {
    private clientes: Clientes;

    constructor() {
        this.clientes = new Clientes();
    }

    public adicionarCliente(nome: string, cpf: string, conta: string): void {
        const cliente = new Cliente(nome, cpf, conta);
        this.clientes.inserir(cliente);
        console.log('Cliente adicionado:', cliente);
    }

    public removerCliente(cpf: string): boolean {
        const result = this.clientes.remover(cpf);
        console.log(result ? 'Cliente removido com sucesso' : 'Cliente não encontrado');
        return result;
    }

    public listarClientes(): Cliente[] {
        return this.clientes.listar(); 
    }

    public pesquisarCliente(cpf: string): Cliente | undefined {
        return this.clientes.pesquisar(cpf); 
    }
}
