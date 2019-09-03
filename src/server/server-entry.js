const express = require('express');
import { render } from './util';
const app = express();
import getStore from '../store';
import { matchRoutes } from 'react-router-config';
import routes from '../Routes';

app.use(express.static('public'));

app.get('*', (req, res) => {
  const store = getStore();

  const promises = [];
  const matchedRoutes = matchRoutes(routes, req.path);
  matchedRoutes.forEach(item => {
    if (item.route.loadData) {
      promises.push(item.route.loadData(store));
    }
  });

  Promise.all(promises)
    .then(() => {
      res.send(render(routes, req, store));
    })
    .catch(err => {
      console.log(err);
    });
});

app.listen(3000, () => console.log('server started on port 3000'));
