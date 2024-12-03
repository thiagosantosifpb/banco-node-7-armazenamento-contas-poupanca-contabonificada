class ClienteEspecial extends Cliente {
    constructor(nome, cpf, conta) {
        super(nome, cpf, conta);
        this.dependentes = [];
    }
    // Método para adicionar dependentes
    adicionarDependente(dependente) {
        this.dependentes.push(dependente);
    }
    // Getter para dependentes
    getDependentes() {
        return this.dependentes;
    }
    // Setter para dependentes
    setDependentes(dependentes) {
        this.dependentes = dependentes;
    }
}
