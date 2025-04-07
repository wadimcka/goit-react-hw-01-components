// import PropTypes from 'prop-types';
// import FriendListItem from './FriendListItem';
// import { ListOfFriends } from './FriendList.styled';

// export default function FriendList({ friends }) {
//   return (
//     <ListOfFriends>
//       {friends.map(friend => {
//         return (
//           <FriendListItem
//             key={friend.id}
//             isOnline={friend.isOnline}
//             avatar={friend.avatar}
//             name={friend.name}
//           />
//         );
//       })}
//     </ListOfFriends>
//   );
// }

// FriendList.propTypes = {
//   friends: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//     })
//   ).isRequired,
// };

// 07.04.25
import FriendListItem from 'components/FriendListItem/FriendListItem';
import css from './FriendList.module.css';

export default function FriendList({ friends }) {
  return (
    <ul className={css.friendList}>
      {friends.map(({ id, isOnline, name, avatar }) => {
        return (
          <FriendListItem
            key={id}
            avatar={avatar}
            name={name}
            isOnline={isOnline}
          />
        );
      })}
    </ul>
  );
}
