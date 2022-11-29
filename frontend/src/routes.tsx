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
import {signupAction, loginAction, createCharacter, editAction, selectAction} from './actions';
import { characterLoader, dashboardLoader } from './loaders';
import CharacterPage from './pages/CharacterPage';
import EditCharacterPage from './pages/EditCharacterPage';
import sessionsLoader from './loaders/sessionsLoader';
import SessionsPage from './pages/SessionsPage';
import { createSession, joinSession } from './actions/sessionActions';
import sessionLoader from './loaders/sessionLoader';
import SessionPage from './pages/SessionPage';

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
            action={selectAction}
            element={<CharacterPage />}
          />
          <Route
            path='characters/:characterId/edit'
            loader={characterLoader}
            action={editAction}
            element={<EditCharacterPage />}
          />
          <Route
            path='sessions'
            loader={sessionsLoader}
            action={createSession}
            element={<SessionsPage />}
          />
          <Route
            path='sessions/:sessionId'
            loader={sessionLoader}
            action={joinSession}
            element={<SessionPage />}
          />
        </Route>
      </Route>
    </Route>
  ));

const Router = (): JSX.Element => (
  <RouterProvider router={router} />
);

export default Router;
