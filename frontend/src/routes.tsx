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
import CharacterPage from './pages/Character/CharacterPage';
import EditCharacterPage from './pages/Character/EditCharacterPage';
import sessionsLoader from './loaders/sessionsLoader';
import SessionsPage from './pages/Session/SessionsPage';
import { createSession, editSessionCharacter, joinSession } from './actions/sessionActions';
import {sessionLoader, characterSessionLoader} from './loaders/sessionLoader';
import SessionPage from './pages/Session/SessionPage';
import hostLoader from './loaders/hostLoader';
import SessionCharacterPage from './pages/Session/SessionCharacterPage';
import HostPage from './pages/Session/HostPage';

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
          <Route
            path='sessions/:sessionId/host'
            loader={hostLoader}
            element={<HostPage />}
          />
          <Route
            path='sessions/:sessionId/host/:userId'
            loader={characterSessionLoader}
            action={joinSession}
            element={<SessionCharacterPage />}
          />
          <Route
            path='sessions/:sessionId/host/:userId/edit'
            loader={characterSessionLoader}
            action={editSessionCharacter}
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
