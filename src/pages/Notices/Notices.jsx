import { useDispatch } from 'react-redux';
import NoticesFilters from '../../components/NoticesFilters/NoticesFilters';
import NoticesItem from '../../components/NoticesItem/NoticesItem';
import Paginations from '../../components/Pagination/Pagination';
import { NoticesContainer, NoticesTitel } from './Notices.styled';
import { useEffect, useState } from 'react';
import { getNotices } from '../../redux/operation';

const Notices = () => {
  const [noticesArray, setNoticesArray] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    const getArray = async () => {
      try {
        const animals = await dispatch(getNotices());
        if (animals.meta.requestStatus === 'fulfilled') {
          console.log(animals);
          setNoticesArray(animals.payload.results);
          return;
        }
      } catch (error) {
        console.log(error);
      }
    };
    getArray();
  }, [dispatch]);
  return (
    <NoticesContainer>
      <NoticesTitel>Find your favorite pet</NoticesTitel>
      <NoticesFilters />
      <NoticesItem array={noticesArray} />
      <Paginations />
    </NoticesContainer>
  );
};
export default Notices;
