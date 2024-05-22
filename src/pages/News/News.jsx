import { useEffect, useState } from 'react';
import { Input, NewsContainer, NewsDiv, Titel } from './News.styled';
import NewsList from '../../components/NewsList/NewsList';
import { useDispatch, useSelector } from 'react-redux';
import { getNews } from '../../redux/operation';

const News = () => {
  const [keyword, setKeyword] = useState('');
  const [news, setNews] = useState([]);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState(false);
  const dispatch = useDispatch();
  const newsArray = useSelector((state) => state.newsArray);

  useEffect(() => {
    const fetchNews = async () => {
      const res = await dispatch(getNews({ page, keyword }));
      if (res.meta.requestStatus === 'fulfilled') {
        setNews(res.payload);
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
    setSearch(true);
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
    </NewsContainer>
  );
};
export default News;
