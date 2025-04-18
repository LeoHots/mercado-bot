const produtos = {
  banana: 'Setor de Frutas - Prateleira 1',
  bolo: 'Padaria - Vitrine de Bolos',
  croissant: 'Padaria - Prateleira 2',
  laranja: 'Setor de Frutas - Prateleira 3',
  maçã: 'Setor de Frutas - Prateleira 2',
  pão: 'Padaria - Balcão Central',
  refrigerante: 'Bebidas - Corredor 6',
  suco: 'Bebidas - Corredor 6',
  água: 'Bebidas - Corredor 5'
};

// Garante que todas as chaves estejam em letras minúsculas
const produtosFormatados = {};
for (let chave in produtos) {
  produtosFormatados[chave.toLowerCase()] = produtos[chave];
}

module.exports = produtosFormatados;
