import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import Home from '../containers/Home';
const app = express();

const content = renderToString(<Home />);

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send(`
  <html>
    <head>
    </head>
    <body>
    <div id='root'>${content}</div>
    <script src='/index.js'></script>
    </body>
  </html>
  `);
});

app.listen(3000, () => console.log('server started on port 3000'));
