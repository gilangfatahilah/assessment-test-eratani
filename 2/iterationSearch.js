const readline = require('readline');

const data = ['Danawi Liam', 'Tarjaya', 'Daruna', 'Warsoni', 'John Wick', 'Hadi PS', 'Derian Lekso'];

function search(query, data) {
  const result = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i].toLowerCase().includes(query.toLowerCase())) {
      result.push(data[i]);
    }
  }
  return result;
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Masukkan nama yang ingin dicari: ', (query) => {
  const result = search(query, data);

  if (result.length > 0) {
    console.log(`Search result for "${query}":`);
    result.forEach((name) => console.log(name));
  } else {
    console.log(`There is no matching result for "${query}".`);
  }

  rl.close();
});
