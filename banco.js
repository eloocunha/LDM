const Sequelize = require('sequelize');
const sequelize = new Sequelize('primeiraatividade', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});
 
sequelize.authenticate().then(function() {
  console.log('Conectado com sucesso!');
}).catch(function(erro) {
  console.log('Falha ao se conectar: ' + erro);
});
 
const Cliente = sequelize.define('cliente', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  nome: {
    type: Sequelize.STRING,
    allowNull: false
  },
  endereco: {
    type: Sequelize.STRING,
  },
  bairro: {
    type: Sequelize.STRING,
  },
  cep: {
    type: Sequelize.STRING,
  },
  telefone: {
    type: Sequelize.STRING,
  },
  celular: {
    type: Sequelize.STRING,
  }
}, {
  tableName: 'clientes',
  timestamps: false
});
 
async function cadastroClientes() {
  try {
    // Cadastrar clientes
    await Cliente.create({
      nome: 'Ana Joana',
      endereco: 'Rua das flores, 205',
      bairro: 'Pinheiros',
      cep: '69524-956',
      telefone: '11996894526',
      celular: '11996894526'
    });
 
    await Cliente.create({
      nome: 'Ana Maria',
      endereco: 'Rua das arvores, 14',
      bairro: 'Vila Madalena',
      cep: '94672-455',
      telefone: '11998652680',
      celular: '11998652680'
    });
 
    await Cliente.create({
      nome: 'Dahlia Porto',
      endereco: 'Avenida das Pedras, 185',
      bairro: 'Penha',
      cep: '89595-912',
      telefone: '11998526314',
      celular: '11998526314'
    });
 
    console.log('Clientes cadastrados');
  } catch (error) {
    console.error('Erro ao cadastrar clientes', error);
  }
}
 
async function listarClientes() {
  try {
   
    const clientes = await Cliente.findAll();
 
 
    console.log('Lista de clientes:');
    clientes.forEach(cliente => {
      console.log(`ID: ${cliente.id}, Nome: ${cliente.nome}, Endereço: ${cliente.endereco}, Bairro: ${cliente.bairro}, CEP: ${cliente.cep}, Telefone: ${cliente.telefone}, Celular: ${cliente.celular}`);
    });
  } catch (error) {
    console.error('Erro ao listar clientes:', error);
  }
}
 
 
(async () => {
  await cadastroClientes();
  await listarClientes();
})();