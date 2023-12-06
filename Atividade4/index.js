const express = require('express');
const path = require('path');
const sequelize = require('./db');
const Cliente = require('./models/cliente');
const Pedido = require('./models/pedido');
const bodyParser = require('body-parser')

const app = express();
const PORT = process.env.PORT || 3000;
app.use(bodyParser.urlencoded({ extended: true }));

// Configurando o motor de visualização EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Servindo arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Rota para renderizar a página inicial
app.get('/', async (req, res) => {
  try {
    const pedidos = await Pedido.findAll({ include: { model: Cliente, as: 'cliente' } });
    const clientes = await Cliente.findAll()
    res.render('index', { pedidos, clientes });
} catch (error) {
    console.error('Erro ao obter pedidos:', error);
    res.status(500).send('Erro interno do servidor');
  }
});

app.get('/cliente/:id', async (req, res) => {
  try {
  const id = parseInt(req.params.id)
  const cliente = await Cliente.findByPk(id)
  res.render('editarCliente', { cliente });
  } catch (error) {
    console.log('Erro ao buscar cliente', error);
    res.status(500).send("Erro interno no servidor")
  }
})

app.post('/cliente/:id', async (req, res) => {
  try {
    const { cli_nome, cli_email } = req.body;
  const id = parseInt(req.params.id)
  const cliente = await Cliente.findByPk(id)
  cliente.cli_nome = cli_nome
  cliente.cli_email = cli_email
  cliente.save()
  console.log('Cliente editado com sucesso!');
  res.redirect('/');
} catch (error) {
  console.error('Erro ao editar cliente:', error);
  res.status(500).send('Erro interno do servidor');
}
})

app.get('/cliente/excluir/:id', async (req, res) => {
  try {
    const id = parseInt(req.params.id);

    const cliente = await Cliente.findByPk(id);

    const numPedidos = await Pedido.count({ where: { cli_id: id } });

    if (numPedidos > 0) {
      await Pedido.destroy({ where: { cli_id: id } });
    }

    await cliente.destroy();

    res.redirect('/');
  } catch (error) {
    console.log('Erro ao buscar cliente', error);
    res.status(500).send("Erro interno no servidor");
  }
});


app.get('/pedido/:id', async (req, res) => {
  try {
  const id = parseInt(req.params.id)
  const pedido = await Pedido.findByPk(id)
  const clientes = await Cliente.findAll()
  res.render('editarPedido', { pedido, clientes });
  } catch (error) {
    console.log('Erro ao buscar pedido', error);
    res.status(500).send("Erro interno no servidor")
  }
})

app.post('/pedido/:id', async (req, res) => {
  try {
  const { ped_desc, ped_valor, cli_id } = req.body;
  const id = parseInt(req.params.id)
  const pedido = await Pedido.findByPk(id)
  pedido.ped_desc = ped_desc
  pedido.ped_valor = ped_valor
  pedido.cli_id = cli_id
  pedido.save()
  console.log('Pedido editado com sucesso!');
  res.redirect('/');
} catch (error) {
  console.error('Erro ao editar pedido:', error);
  res.status(500).send('Erro interno do servidor');
}
})

app.get('/pedido/excluir/:id', async (req, res) => {
  try {
  const id = parseInt(req.params.id)
  const pedido = await Pedido.findByPk(id)
  await pedido.destroy();
  res.redirect('/')
} catch (error) {
    console.log('Erro ao buscar cliente', error);
    res.status(500).send("Erro interno no servidor")
  }
})

app.get('/cadastro', async (req, res) => {
  try {
    const clientes = await Cliente.findAll();
    res.render('cadastro', { clientes });
  } catch (error) {
    console.error('Erro ao obter clientes para o formulário de cadastro de pedidos:', error);
    res.status(500).send('Erro interno do servidor');
  }
});

app.post('/cadastro/cliente', async (req, res) => {
  try {
    const { cli_nome, cli_email } = req.body;

    await Cliente.create({ cli_nome, cli_email });

    console.log('Cliente cadastrado com sucesso!');
    res.redirect('/');
  } catch (error) {
    console.error('Erro ao cadastrar cliente:', error);
    res.status(500).send('Erro interno do servidor');
  }
});

app.post('/cadastro/pedido', async (req, res) => {
  console.log(req.body);
  try {
    const ped_desc = req.body.ped_desc;
    const ped_valor = parseFloat(req.body.ped_valor);
    const cli_id = parseInt(req.body.cli_id)

    await Cliente.findByPk(cli_id);
    await Pedido.create({ped_desc, ped_valor, cli_id})

    console.log('Pedido cadastrado com sucesso!');
    res.redirect('/');
  } catch (error) {
    console.error('Erro ao cadastrar cliente:', error);
    res.status(500).send('Erro interno do servidor');
  }
});

async function criarExemplos() {
    try {
      const clienteExemplo = await Cliente.create({
        cli_nome: 'João Silva',
        cli_email: 'joao.silva@example.com',
      });
  
      const pedidoExemplo = await Pedido.create({
        ped_desc: 'Pedido de Exemplo',
        ped_valor: 150.00,
        cli_id: clienteExemplo.cli_id, 
      });
  
      console.log('Exemplos de cliente e pedido criados com sucesso!');
    } catch (error) {
      console.error('Erro ao criar exemplos:', error);
    }
  }

sequelize.sync().then(async() => {
  criarExemplos();
  app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
  });
});
