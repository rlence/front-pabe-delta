import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LayOut from './Layout/Layout';

import Home from './Pages/Home/Home';

function App() {
  return (
    <BrowserRouter>
      <LayOut>
        <Switch>
          <Route path="/"  component={Home} />
        </Switch>
      </LayOut>
    </BrowserRouter>
  );
}

export default App;
