const app = require('./app');
const port = 3000;

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server listening at port ${port}`);
});