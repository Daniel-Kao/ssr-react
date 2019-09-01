const express = require('express');
const app = express();
import Home from '../containers/Home';

app.get('/', (req, res) => res.send('hello worldasd'));

app.listen(3000, () => console.log('server started on port 3000'));
