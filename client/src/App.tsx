import './App.css';
import JobsPerProject from './components/JobsPerProject'
import Home from './components/Home';

import { Security, SecureRoute, LoginCallback, } from '@okta/okta-react';
import { Route, Switch, useHistory } from 'react-router-dom';
import { OktaAuth, toRelativeUrl } from '@okta/okta-auth-js';
import Login from './components/Login';
import ApolloWrapper from './components/ApolloWrapper';
import Metrics from './pages/Metrics';
const issuer = process.env.REACT_APP_OKTA_ISSUER

//since there should be a 1-1 between client id and company, FOR NOW we will us this as the company
const clientId = process.env.REACT_APP_OKTA_ID || ""

const REDIRECT_URL = '/login/callback'


const oktaAuth = new OktaAuth({
  issuer: issuer,
  clientId: clientId,
  redirectUri: window.location.origin + REDIRECT_URL,
});

const App = () => {
  const history = useHistory();
  const restoreOriginalUri = async (_: any, originalUri: string) => {
    history.replace(toRelativeUrl(originalUri || '/', window.location.origin));
  };
  const onAuthRequired = () => {
    history.push('/login');
  };

  return (

    <Security oktaAuth={oktaAuth} restoreOriginalUri={restoreOriginalUri} onAuthRequired={onAuthRequired}>
      <Switch>
        <Route path={REDIRECT_URL} ><LoginCallback /></Route>
        <Route path='/login' ><Login /></Route>
        <Route path='/' >
          <Home>
            <SecureRoute path='/metrics' >
              <ApolloWrapper>
                <Route path='/' >
                  <Metrics company={clientId} />
                </Route>
              </ApolloWrapper >
            </SecureRoute>
          </Home>
        </Route>
      </Switch>
    </Security >

  )
}
export default App;
