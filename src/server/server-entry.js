import express from 'express';
import React from 'react';
import { StaticRouter } from 'react-router-dom';
import { renderToString } from 'react-dom/server';
import Routes from '../Routes';
const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
  const content = renderToString(
    <StaticRouter location={req.path} context={{}}>
      {Routes}
    </StaticRouter>
  );
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
