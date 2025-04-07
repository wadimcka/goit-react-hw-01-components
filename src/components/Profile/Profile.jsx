// import PropTypes from 'prop-types';
// import {
//   Card,
//   Avatar,
//   ProfileDescr,
//   UserName,
//   CardWrap,
//   SocialeList,
//   SocialItem,
//   SocialText,
//   Socialvalue,
// } from './Profile.styled';

// export default function Profile({ username, tag, location, avatar, stats }) {
//   return (
//     <Card>
//       <CardWrap>
//         <Avatar src={avatar} alt={username} className="avatar" />
//         <UserName>{username}</UserName>
//         <ProfileDescr>@{tag}</ProfileDescr>
//         <ProfileDescr>{location}</ProfileDescr>
//       </CardWrap>

//       <SocialeList>
//         <SocialItem>
//           <SocialText>Followers</SocialText>
//           <Socialvalue>{stats.followers}</Socialvalue>
//         </SocialItem>
//         <SocialItem>
//           <SocialText>Views</SocialText>
//           <Socialvalue>{stats.views}</Socialvalue>
//         </SocialItem>
//         <SocialItem>
//           <SocialText>Likes</SocialText>
//           <Socialvalue>{stats.likes}</Socialvalue>
//         </SocialItem>
//       </SocialeList>
//     </Card>
//   );
// }

// Profile.propTypes = {
//   username: PropTypes.string.isRequired,
//   tag: PropTypes.string.isRequired,
//   location: PropTypes.string.isRequired,
//   avatar: PropTypes.string.isRequired,
//   stats: PropTypes.shape({
//     followers: PropTypes.number.isRequired,
//     views: PropTypes.number.isRequired,
//     likes: PropTypes.number.isRequired,
//   }).isRequired,
// };

import css from './Profile.module.css';

export default function Profile({
  username,
  avatar,
  location,
  tag,
  stats: { followers, views, likes },
}) {
  return (
    <div className={css.profile}>
      <div className={css.description}>
        <img src={avatar} alt={username} className={css.avatar} />
        <p className={css.userName}>{username}</p>
        <p className={css.userDescr}>@{tag}</p>
        <p className={css.userDescr}>{location}</p>
      </div>

      <ul className={css.stats}>
        <li>
          <span className={css.label}>Followers</span>
          <span className="quantity">{followers}</span>
        </li>
        <li>
          <span className={css.label}>Views</span>
          <span className="quantity">{views}</span>
        </li>
        <li>
          <span className={css.label}>Likes</span>
          <span className="quantity">{likes}</span>
        </li>
      </ul>
    </div>
  );
}
