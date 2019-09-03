import React from 'react';
import { StaticRouter, Route } from 'react-router-dom';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';

export const render = (routes, req, store) => {
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.path} context={{}}>
        {routes.map(route => (
          <Route {...route} />
        ))}
      </StaticRouter>
    </Provider>
  );
  return `
      <html>
        <head>
        <meta http-equiv="Content-Security-Policy" content="default-src 'self'">
        </head>
        <body>
          <div id='root'>${content}</div>
          <script src='/index.js'></script>
          <script>
          window.context = {
            state: ${JSON.stringify(store.getState())}
          }
          </script>
        </body>
      </html>
    `;
};
