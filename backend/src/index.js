require('dotenv').config();
const app = require('./app');
require('./database');

// async function main() {
//   await app.listen(4000);
//   console.log('App listening on port 4000!');
// }

// main();

app.listen(app.get('port'), () => {
  console.log('App listening on port', app.get('port') );
});