import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import Home from '../containers/Home';
const app = express();

const content = renderToString(<Home />);

app.get('/', (req, res) => {
  res.send(`
  <html>
    <head>
    </head>
    <body>
    ${content}
    </body>
  </html>
  `);
});

app.listen(3000, () => console.log('server started on port 3000'));
