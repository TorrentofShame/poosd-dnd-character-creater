import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from 'react-router-dom';
import Root from './Root';
import ErrorPage from './pages/ErrorPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import App from './App';
import RequireAuth from './atoms/RequireAuth';
import Dashboard from './pages/Dashboard';
import HomePage from './pages/HomePage';
import {signupAction, loginAction, createCharacter} from './actions';
import { characterLoader, dashboardLoader } from './loaders';
import CharacterPage from './pages/CharacterPage';
import EditCharacterPage from './pages/EditCharacterPage';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path='/'
      element={<Root/>}
      errorElement={<ErrorPage />}
    >
      <Route index element={<HomePage />} />
      <Route
        path='/login'
        action={loginAction}
        element={<LoginPage />}
      />
      <Route
        path='/signup'
        action={signupAction}
        element={<SignupPage />}
      />
      {/* All child-routes of /app is were the actual app begins */}
      <Route
        path='/app'
        element={
          <RequireAuth>
            <App />
          </RequireAuth>
        }
      >
        <Route errorElement={<ErrorPage />}>
          <Route
            index
            loader={dashboardLoader}
            action={createCharacter}
            element={<Dashboard />}
          />
          <Route
            path='characters/:characterId'
            loader={characterLoader}
            element={<CharacterPage />}
          />
          <Route
            path='characters/:characterId/edit'
            element={<EditCharacterPage />}
          />
        </Route>
      </Route>
    </Route>
  ));

const Router = (): JSX.Element => (
  <RouterProvider router={router} />
);

export default Router;
