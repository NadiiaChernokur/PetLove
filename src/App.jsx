import { Route, Routes } from 'react-router-dom';
import SharedLayout from 'components/SharedLayout/SharedLayout';
import { AppWrapper } from './App.styled';
// import Registration from './components/Registration/Registration';
// import Login from './components/Login/Login';
// import News from './pages/News/News';
// import Friends from './pages/Friends/Friends';
// import Notices from './pages/Notices/Notices';
// import Home from './pages/Home/Home';
// import AddPet from './pages/AddPet/AddPet';
// import ErrorPage from './pages/ErrorPage/ErrorPage';
// import Profile from './pages/Profile/Profile';
import { lazy } from 'react';

const Home = lazy(() => import('./pages/Home/Home'));
const Registration = lazy(() =>
  import('./components/Registration/Registration')
);
const Login = lazy(() => import('./components/Login/Login'));
const News = lazy(() => import('./pages/News/News'));
const Friends = lazy(() => import('./pages/Friends/Friends'));
const Notices = lazy(() => import('./pages/Notices/Notices'));
const AddPet = lazy(() => import('./pages/AddPet/AddPet'));
const Profile = lazy(() => import('./pages/Profile/Profile'));
const ErrorPage = lazy(() => import('./pages/ErrorPage/ErrorPage'));

function App() {
  return (
    <AppWrapper>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/login" element={<Login />}></Route>
          <Route path="/news" element={<News />}></Route>
          <Route path="/friends" element={<Friends />}></Route>
          <Route path="/notices" element={<Notices />}></Route>
          <Route path="/add-pet" element={<AddPet />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </AppWrapper>
  );
}
export default App;
