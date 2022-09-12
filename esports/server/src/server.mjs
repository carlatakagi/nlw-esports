import express from 'express';

const app = express();

// const PORT = 3008;

app.get('/ads', (_request, response) => {
  return response.send('acessou ads!');
});

app.listen(3333);