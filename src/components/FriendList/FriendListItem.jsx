import PropTypes from 'prop-types';
import { Avatar, FriendStatus, ListOfFriendsItem } from './FriendList.styled';
import { imgSize } from 'components/constants';

export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <ListOfFriendsItem>
      <FriendStatus $isOnline={isOnline}></FriendStatus>
      <Avatar src={avatar} alt={name} width={imgSize.ms} />
      <p className="name">{name}</p>
    </ListOfFriendsItem>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
