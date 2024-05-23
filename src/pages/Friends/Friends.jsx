import { useEffect, useState } from 'react';
import {
  FriendImg,
  FriendInf,
  FriendName,
  FriendsContainer,
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
                ? `${item.workDays[0].from} - ${item.workDays[0].to}`
                : 'Day and night'}
            </Time>
            <FriendInf>
              <FriendImg src={item.imageUrl} alt={item.title}></FriendImg>
              <div>
                <FriendName>LKP “Lion”</FriendName>
                <Information>
                  <InformationSpan>Email: </InformationSpan>
                  Ikplev@gmail.com
                </Information>
                <Information>
                  <InformationSpan>Address: </InformationSpan>
                  Promuslova Street,56
                </Information>
                <Information>
                  <InformationSpan>Phone: </InformationSpan>
                  (032) 293-30-41
                </Information>
              </div>
            </FriendInf>
          </FriendsLi>
        ))}
      </FriendsUl>
    </FriendsContainer>
  );
};
export default Friends;
