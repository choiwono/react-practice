import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import ErrorBoundary from 'react-error-boundary'
import SignPage from './pages/SignIn.jsx'
import Error from './pages/Error.jsx'
import NotFound from './pages/NotFound.jsx'
import Home from './pages/Home.jsx'

function App() {
  return (
    <ErrorBoundary FallbackComponent={Error}>
      <BrowserRouter>
        <Switch>
          <Route path="/signin" component={SignPage}/>
          <Route path="/" component={Home}/>
          <Route component={NotFound}/>
        </Switch>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
