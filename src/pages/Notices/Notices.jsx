import { useDispatch } from 'react-redux';
import NoticesFilters from '../../components/NoticesFilters/NoticesFilters';
import NoticesItem from '../../components/NoticesItem/NoticesItem';
import Paginations from '../../components/Pagination/Pagination';
import { NoticesContainer, NoticesTitel } from './Notices.styled';
import { useEffect, useState } from 'react';
import { getNotices } from '../../redux/operation';

const Notices = () => {
  const [noticesArray, setNoticesArray] = useState([]);
  const [newArray, setNewArray] = useState([]);
  const [schowNewArray, setSchowNewArray] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    const getArray = async () => {
      try {
        const animals = await dispatch(getNotices());
        if (animals.meta.requestStatus === 'fulfilled') {
          setNoticesArray(animals.payload.results);
          setTotalPages(animals.payload.totalPages);
          return;
        }
      } catch (error) {
        console.log(error);
      }
    };
    getArray();
  }, [dispatch]);

  useEffect(() => {
    if (newArray?.length !== 0) {
      setSchowNewArray(true);
    }
  }, [newArray?.length]);

  const getResponseArray = (newArray) => {
    setNewArray(newArray);
  };
  const addPage = () => {
    setPage((prev) => prev + 1);
  };
  const subtractPage = () => {
    setPage((prev) => prev - 1);
  };
  const firstPage = () => {
    setPage(1);
  };
  const lastPage = () => {
    setPage(totalPages);
  };
  const toTotalPege = (totP) => {
    setTotalPages(totP);
  };

  return (
    <NoticesContainer>
      <NoticesTitel>Find your favorite pet</NoticesTitel>
      <NoticesFilters
        arrayByCategory={getResponseArray}
        page={page}
        total={toTotalPege}
        toFirst={firstPage}
      />
      <NoticesItem array={schowNewArray ? newArray : noticesArray} />
      <Paginations
        add={addPage}
        subtract={subtractPage}
        page={page}
        first={firstPage}
        last={lastPage}
        total={totalPages}
      />
    </NoticesContainer>
  );
};
export default Notices;
