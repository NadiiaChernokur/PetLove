import { Route, Routes } from 'react-router-dom';
import SharedLayout from 'components/SharedLayout/SharedLayout';
import { AppWrapper } from './App.styled';
import Registration from './components/Registration/Registration';
import Login from './components/Login/Login';
import News from './pages/News/News';
import Friends from './pages/Friends/Friends';
import Notices from './pages/Notices/Notices';
import LearnMoreModal from './components/Modals/LearnMoreModal';
import Home from './pages/Home/Home';
import AddPet from './pages/AddPet/AddPet';
import ErrorPage from './pages/ErrorPage/ErrorPage';

function App() {
  return (
    <AppWrapper>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/login" element={<Login />}>
            {/* <Route path=":half" element={<HalfPage />} /> */}
          </Route>
          <Route path="/news" element={<News />}></Route>
          <Route path="/friends" element={<Friends />}></Route>
          <Route path="/notices" element={<Notices />}></Route>
          <Route path="/friends" element={<Friends />}></Route>
          <Route path="/add-pet" element={<AddPet />}></Route>
          {/* <Route path="/notices" element={<LearnMoreModal />}></Route> */}
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </AppWrapper>
  );
}
export default App;
