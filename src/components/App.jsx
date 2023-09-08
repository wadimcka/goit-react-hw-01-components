import Profile from './Profile/Profile';
import user from './Profile/user.json';
import Statistics from './Statistics/Statistics';
import stat from './Statistics/data.json';
import friends from './FriendList/friends.json';
import FriendList from './FriendList/FriendList';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={{
          followers: user.stats.followers,
          views: user.stats.views,
          likes: user.stats.likes,
        }}
      />
      <Statistics title="Upload stats" stats={stat} />
      <FriendList friends={friends} />
    </div>
  );
};
