import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LayOut from './Layout/Layout';

import Home from './Pages/Home/Home';
import PlantillaList from './Pages/PlantillaList/PlantillaList';

function App() {
  return (
    <BrowserRouter>
      <LayOut>
        <Switch>
          <Route path="/"  component={Home} exact/>
          <Route path="/pabelist" component={PlantillaList} exact/>
        </Switch>
      </LayOut>
    </BrowserRouter>
  );
}

export default App;
