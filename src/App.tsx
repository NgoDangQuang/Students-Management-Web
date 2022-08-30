import { PrivateRoute } from 'components/Common';
import { DefaultRoute } from 'components/Common/DefaultRoute';
import { AdminLayout } from 'components/Layout';
import LoginPage from 'features/auth/pages/LoginPage';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <>
      <Switch>
        <Route path="/login">
          <LoginPage />
        </Route>

        <PrivateRoute path="/admin">
          <AdminLayout />
        </PrivateRoute>

        <Route>
          <DefaultRoute />
        </Route>
      </Switch>
    </>
  );
}

export default App;
