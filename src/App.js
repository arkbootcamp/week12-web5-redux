import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Detail from './pages/Detail';
import Home from './pages/Home';
import { Provider } from 'react-redux'
import store from './configs/redux/store'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/detail" component={Detail} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
