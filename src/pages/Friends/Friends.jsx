import { useEffect, useState } from 'react';
import {
  FriendImg,
  FriendInf,
  FriendName,
  FriendsContainer,
  FriendsInfDiv,
  FriendsLi,
  FriendsTitel,
  FriendsUl,
  Information,
  InformationSpan,
  Time,
} from './Friends.styled';
import { useDispatch } from 'react-redux';
import { getFriends } from '../../redux/operation';

const Friends = () => {
  const [friendsArray, setFriendsArray] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchFriends = async () => {
      try {
        const array = await dispatch(getFriends());
        console.log(array.payload);
        setFriendsArray(array.payload);
      } catch (error) {
        console.error('Failed to fetch friends:', error);
      }
    };
    fetchFriends();
  }, [dispatch]);
  return (
    <FriendsContainer>
      <FriendsTitel>Our friends</FriendsTitel>
      <FriendsUl>
        {friendsArray.map((item) => (
          <FriendsLi key={item.id}>
            <Time>
              {item.workDays && item.workDays[0]
                ? `${
                    item.workDays[0].isOpen === true
                      ? item.workDays[0].from
                      : item.workDays[5].from
                  } - ${
                    item.workDays[0].isOpen === true
                      ? item.workDays[0].to
                      : item.workDays[5].to
                  }`
                : 'Day and night'}
            </Time>
            <FriendInf>
              <a href={item.url} target="_blank" rel="noopener noreferrer">
                <FriendImg src={item.imageUrl} alt={item.title}></FriendImg>
              </a>
              <FriendsInfDiv>
                <FriendName>{item.title}</FriendName>
                <a href={`mailto:${item.email}`}>
                  <Information>
                    <InformationSpan data-fulltext={item.email}>
                      Email:
                    </InformationSpan>
                    {item.email === null ? 'without information' : item.email}
                  </Information>
                </a>
                <a
                  href={item.addressUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Information data-fulltext={item.address}>
                    <InformationSpan>Address:</InformationSpan>
                    {item.address === null ? 'website only' : item.address}
                  </Information>
                </a>
                <a href={`tel:${item.phone}`}>
                  <Information>
                    <InformationSpan>Phone: </InformationSpan>
                    {item.phone === null ? 'without information' : item.phone}
                  </Information>
                </a>
              </FriendsInfDiv>
            </FriendInf>
          </FriendsLi>
        ))}
      </FriendsUl>
    </FriendsContainer>
  );
};
export default Friends;
