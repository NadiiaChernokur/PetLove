import {
  Li,
  NewsData,
  NewsListImg,
  NewsText,
  NewsTitel,
  ReadMoreButton,
  ReadMoreDiv,
  Ul,
} from './NewsList.styled';

const NewsList = ({ list }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };
  const handleReadMoreClick = (url) => {
    window.open(url, '_blank');
  };

  return (
    <Ul>
      {list.map((news) => (
        <Li key={news.id}>
          <NewsListImg src={news.imgUrl} alt={news.title}></NewsListImg>

          <NewsTitel>{news.title}</NewsTitel>
          <NewsText>{news.text}</NewsText>

          <ReadMoreDiv>
            <NewsData>{formatDate(news.date)}</NewsData>
            <ReadMoreButton onClick={() => handleReadMoreClick(news.url)}>
              Read more
            </ReadMoreButton>
          </ReadMoreDiv>
        </Li>
      ))}
    </Ul>
  );
};
export default NewsList;
