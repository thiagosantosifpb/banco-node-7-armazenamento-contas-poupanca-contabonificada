class Cliente {
    private nome: string;
    private cpf: string;
    private conta: string;

    constructor(nome: string, cpf: string, conta: string) {
        this.nome = nome;
        this.cpf = cpf;
        this.conta = conta;
    }

    // Getters e Setters
    public getNome(): string {
        return this.nome;
    }

    public setNome(nome: string): void {
        this.nome = nome;
    }

    public getCpf(): string {
        return this.cpf;
    }

    public setCpf(cpf: string): void {
        this.cpf = cpf;
    }

    public getConta(): string {
        return this.conta;
    }

    public setConta(conta: string): void {
        this.conta = conta;
    }
}