const fs = require('fs');
const snippets = require('./snippets.json');
snippets.forEach(snippet => {
  fs.writeFileSync(`${snippet.name}.js`, snippet.content);
});
