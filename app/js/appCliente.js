let clienteController = new ClienteController();
// Criando alguns clientes
const cliente1 = new Cliente("João Silva", "12345678900", "12345");
const cliente2 = new Cliente("Maria Oliveira", "98765432100", "67890");
const cliente3 = new Cliente("Pedro Souza", "11223344556", "24680");
// Inserindo os clientes no clienteController
clienteController.adicionarCliente(cliente1.getNome(), cliente1.getCpf(), cliente1.getConta());
clienteController.adicionarCliente(cliente2.getNome(), cliente2.getCpf(), cliente2.getConta());
clienteController.adicionarCliente(cliente3.getNome(), cliente3.getCpf(), cliente3.getConta());
// Listando todos os clientes
console.log("Lista de Clientes:");
console.log(clienteController.listarClientes());
// Pesquisando um cliente pelo CPF
const clientePesquisado = clienteController.pesquisarCliente("98765432100");
console.log("\nCliente Pesquisado (CPF 98765432100):");
console.log(clientePesquisado);
// Removendo um cliente pelo CPF
const removido = clienteController.removerCliente("12345678900");
console.log("\nRemoção do cliente com CPF 12345678900:");
console.log(removido ? "Cliente removido com sucesso" : "Cliente não encontrado");
// Listando os clientes após a remoção
console.log("\nLista de Clientes Após Remoção:");
console.log(clienteController.listarClientes());
// Função para atualizar a tabela de clientes no HTML
function atualizarTabela() {
    const tabelaClientes = document.querySelector("#clientesTabela tbody");
    tabelaClientes.innerHTML = ""; // Limpa a tabela antes de atualizar
    // Recupera os clientes da lista
    const clientes = clienteController.listarClientes();
    // Itera sobre os clientes para exibir na tabela
    clientes.forEach(cliente => {
        const tr = document.createElement("tr");
        const tdNome = document.createElement("td");
        tdNome.textContent = cliente.getNome();
        const tdCpf = document.createElement("td");
        tdCpf.textContent = cliente.getCpf();
        tr.appendChild(tdNome);
        tr.appendChild(tdCpf);
        tabelaClientes.appendChild(tr);
    });
}
// Atualiza a tabela sempre que a página for carregada
atualizarTabela();
