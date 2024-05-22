import { useEffect, useState } from 'react';
import { Input, NewsContainer, NewsDiv, Titel } from './News.styled';
import NewsList from '../../components/NewsList/NewsList';
import { useDispatch, useSelector } from 'react-redux';
import { getNews } from '../../redux/operation';

const News = () => {
  const [keyword, setKeyword] = useState('');
  const [news, setNews] = useState([]);
  const dispatch = useDispatch();
  const newsArray = useSelector((state) => state.newsArray);
  console.log(newsArray);
  useEffect(() => {
    const fetchNews = async () => {
      const res = await dispatch(getNews());
      console.log(res);
      if (res.meta.requestStatus === 'fulfilled') {
        setNews(newsArray);
      }
    };

    fetchNews();
  }, [dispatch, newsArray]);

  const handleSearch = (e) => {
    e.preventDefault();
    // onSubmit(keyword);
    const res = dispatch(getNews());
    console.log(res);
    console.log('888888888');
  };

  const handleClear = () => {
    setKeyword('');
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
