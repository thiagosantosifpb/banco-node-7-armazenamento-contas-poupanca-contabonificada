// Código para testar as funcionalidades da classe Clientes
let clienteController = new Clientes();
// Criando alguns clientes
const cliente1 = new Cliente("João Silva", "12345678900", "12345");
const cliente2 = new Cliente("Maria Oliveira", "98765432100", "67890");
const cliente3 = new Cliente("Pedro Souza", "11223344556", "24680");
// Inserindo os clientes no clienteController
clienteController.inserir(cliente1);
clienteController.inserir(cliente2);
clienteController.inserir(cliente3);
// Listando todos os clientes
console.log("Lista de Clientes:");
console.log(clienteController.listar());
// Pesquisando um cliente pelo CPF
const clientePesquisado = clienteController.pesquisar("98765432100");
console.log("\nCliente Pesquisado (CPF 98765432100):");
console.log(clientePesquisado);
// Removendo um cliente pelo CPF
const removido = clienteController.remover("12345678900");
console.log("\nRemoção do cliente com CPF 12345678900:");
console.log(removido ? "Cliente removido com sucesso" : "Cliente não encontrado");
// Listando os clientes após a remoção
console.log("\nLista de Clientes Após Remoção:");
console.log(clienteController.listar());
