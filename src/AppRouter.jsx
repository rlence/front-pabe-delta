import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LayOut from './Layout/Layout';

import Home from './Pages/Home/Home';
import PlantillaList from './Pages/PlantillaList/PlantillaList';
import ListDay from './Pages/ListDay/ListDay';
import Template from './Pages/Plantilla/Template';

function App() {
  return (
    <BrowserRouter>
      <LayOut>
        <Switch>
          <Route path="/"  component={Home} exact/>
          <Route path="/pabelist" component={PlantillaList} exact/>
          <Route path="/listday/:id" component={ListDay} exact />
          <Route path="/template/:date/:id" component={Template} exact />
        </Switch>
      </LayOut>
    </BrowserRouter>
  );
}

export default App;
