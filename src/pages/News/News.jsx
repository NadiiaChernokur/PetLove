import { useEffect, useState } from 'react';
import { Input, NewsContainer, NewsDiv, Titel } from './News.styled';
import NewsList from '../../components/NewsList/NewsList';
import { useDispatch, useSelector } from 'react-redux';
import { getNews } from '../../redux/operation';
import Paginations from '../../components/Pagination/Pagination';

const News = () => {
  const [keyword, setKeyword] = useState('');
  const [news, setNews] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [search, setSearch] = useState(false);
  const dispatch = useDispatch();
  const newsArray = useSelector((state) => state.newsArray);

  useEffect(() => {
    const fetchNews = async () => {
      const res = await dispatch(getNews({ page, keyword }));
      console.log(res.payload);
      if (res.meta.requestStatus === 'fulfilled') {
        setNews(res.payload.results);
        setTotalPages(res.payload.totalPages);
        setSearch(false);
        return;
      }
      return;
    };

    fetchNews();
  }, [dispatch, keyword, page, search]);

  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(true);
  };

  const handleClear = () => {
    setKeyword('');
    setPage(1);
    setSearch(true);
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

  return (
    <NewsContainer>
      <NewsDiv>
        <Titel>News</Titel>
        <form onSubmit={handleSearch}>
          {/* <Input style={{ display: 'flex', alignItems: 'center' }}> */}
          <Input
            type="text"
            placeholder="Search"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />
          {keyword && (
            <button type="button" onClick={handleClear}>
              <svg width="20" height="20">
                {/* <use href={`${sprite}#blow`} width="20" height="20"></use> */}
              </svg>
            </button>
          )}
          <button type="submit">
            <svg width="20" height="20">
              {/* <use href={`${sprite}#blow`} width="20" height="20"></use> */}
            </svg>
          </button>
          {/* </Input> */}
        </form>
      </NewsDiv>
      <NewsList list={news} />
      <Paginations
        page={page}
        add={addPage}
        subtract={subtractPage}
        first={firstPage}
        last={lastPage}
        total={totalPages}
      />
    </NewsContainer>
  );
};

export default News;
