import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';
import { ListOfFriends } from './FriendList.styled';

export default function FriendList({ friends }) {
  return (
    <ListOfFriends>
      {friends.map(friend => {
        return (
          <FriendListItem
            key={friend.id}
            isOnline={friend.isOnline}
            avatar={friend.avatar}
            name={friend.name}
          />
        );
      })}
    </ListOfFriends>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
