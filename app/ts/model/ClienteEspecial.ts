class ClienteEspecial extends Cliente {
    private dependentes: Cliente[];

    constructor(nome: string, cpf: string, conta: string) {
        super(nome, cpf, conta);
        this.dependentes = [];
    }

    // Método para adicionar dependentes
    public adicionarDependente(dependente: Cliente): void {
        this.dependentes.push(dependente);
    }

    // Getter para dependentes
    public getDependentes(): Cliente[] {
        return this.dependentes;
    }

    // Setter para dependentes
    public setDependentes(dependentes: Cliente[]): void {
        this.dependentes = dependentes;
    }
}
