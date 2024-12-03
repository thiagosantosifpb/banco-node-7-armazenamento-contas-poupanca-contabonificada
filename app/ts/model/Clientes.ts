class Clientes {
    private clientes: Cliente[] = [];  // Array para armazenar os clientes

    // Método para inserir um cliente no array
    public inserir(cliente: Cliente): void {
        this.clientes.push(cliente);
        console.log('Cliente inserido:', cliente);
    }

    // Método para remover um cliente pelo CPF
    public remover(cpf: string): boolean {
        const index = this.clientes.findIndex(cliente => cliente.getCpf() === cpf);
        if (index !== -1) {
            this.clientes.splice(index, 1);
            console.log(`Cliente com CPF ${cpf} removido com sucesso.`);
            return true;  // Cliente removido com sucesso
        }
        console.log(`Cliente com CPF ${cpf} não encontrado.`);
        return false;  // Cliente não encontrado
    }

    // Método para listar todos os clientes
    public listar(): Cliente[] {
        return this.clientes;
    }

    // Método para pesquisar um cliente pelo CPF
    public pesquisar(cpf: string): Cliente | undefined {
        return this.clientes.find(cliente => cliente.getCpf() === cpf);
    }
}
