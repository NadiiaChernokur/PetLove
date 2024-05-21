import { Route, Routes } from 'react-router-dom';
import SharedLayout from 'components/SharedLayout/SharedLayout';
import { AppWrapper } from './App.styled';
import Registration from './components/Registration/Registration';

function App() {
  return (
    <AppWrapper>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route path="/registr" element={<Registration />} />
          {/* <Route path="/second" element={<SecondPage />}>
            <Route path=":half" element={<HalfPage />} />
          </Route>
          <Route path="*" element={<ErrorPage />} /> */}
        </Route>
      </Routes>
    </AppWrapper>
  );
}
export default App;
