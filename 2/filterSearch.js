const readline = require('readline');

const data = ['Danawi Liam', 'Tarjaya', 'Daruna', 'Warsoni', 'John Wick', 'Hadi PS', 'Derian Lekso'];

function search(query, data) {
  return data.filter(name => name.toLowerCase().includes(query.toLowerCase()));
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter name you want to search: ', (query) => {
  const result = search(query, data);

  if (result.length > 0) {
    console.log(`Search result for "${query}":`);
    result.forEach((name) => console.log(name));
  } else {
    console.log(`There is no matching result for "${query}".`);
  }

  rl.close();
});
