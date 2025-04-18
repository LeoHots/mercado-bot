const venom = require('venom-bot');
const produtos = require('./bancoDeProdutos');

venom.create({
  session: 'mercado-session',
  headless: false,
  browserArgs: ['--no-sandbox'],
  executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe'
})
.then((client) => start(client))  // <- ESSA LINHA É FUNDAMENTAL
.catch((erro) => {
  console.log('Erro ao iniciar o bot:', erro);
});

function start(client) {
  client.onMessage((message) => {
    console.log('Mensagem recebida:', message.body);

    if (message.body && message.isGroupMsg === false) {
      const busca = message.body.toLowerCase();
      const resposta = produtos[busca];

      if (resposta) {
        client.sendText(message.from, `O produto *${message.body}* está localizado em: ${resposta}`);
      } else {
        client.sendText(message.from, 'Produto não encontrado. Tente outro nome.');
      }
    }
  });
}
