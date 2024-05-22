import { Route, Routes } from 'react-router-dom';
import SharedLayout from 'components/SharedLayout/SharedLayout';
import { AppWrapper } from './App.styled';
import Registration from './components/Registration/Registration';
import Login from './components/Login/Login';
import News from './pages/News/News';

function App() {
  return (
    <AppWrapper>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route path="/registr" element={<Registration />} />
          <Route path="/login" element={<Login />}>
            {/* <Route path=":half" element={<HalfPage />} /> */}
          </Route>
          <Route path="/news" element={<News />}></Route>
          {/* <Route path="*" element={<ErrorPage />} /> */}
        </Route>
      </Routes>
    </AppWrapper>
  );
}
export default App;
