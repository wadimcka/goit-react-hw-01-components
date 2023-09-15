import PropTypes from 'prop-types';
import {
  Card,
  Avatar,
  ProfileDescr,
  UserName,
  CardWrap,
  SocialeList,
  SocialItem,
  SocialText,
  Socialvalue,
} from './Profile.styled';

export default function Profile({ username, tag, location, avatar, stats }) {
  return (
    <Card>
      <CardWrap>
        <Avatar src={avatar} alt={username} className="avatar" />
        <UserName>{username}</UserName>
        <ProfileDescr>@{tag}</ProfileDescr>
        <ProfileDescr>{location}</ProfileDescr>
      </CardWrap>

      <SocialeList>
        <SocialItem>
          <SocialText>Followers</SocialText>
          <Socialvalue>{stats.followers}</Socialvalue>
        </SocialItem>
        <SocialItem>
          <SocialText>Views</SocialText>
          <Socialvalue>{stats.views}</Socialvalue>
        </SocialItem>
        <SocialItem>
          <SocialText>Likes</SocialText>
          <Socialvalue>{stats.likes}</Socialvalue>
        </SocialItem>
      </SocialeList>
    </Card>
  );
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};
