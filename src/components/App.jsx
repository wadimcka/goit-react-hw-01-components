// import Profile from './Profile/Profile';
// import user from './Profile/user.json';
// import Statistics from './Statistics/Statistics';
// import stat from './Statistics/data.json';
// import friends from './FriendList/friends.json';
// import FriendList from './FriendList/FriendList';
// import TransactionHistory from './TransactionHistory/TransactionHistory';
// import transactions from './TransactionHistory/transactions.json';

// export const App = () => {
//   return (
//     <div
//       style={{
//         padding: 60,
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101',
//         backgroundColor: '#caebdd',
//       }}
//     >
//       <Profile
//         username={user.username}
//         tag={user.tag}
//         location={user.location}
//         avatar={user.avatar}
//         stats={{
//           followers: user.stats.followers,
//           views: user.stats.views,
//           likes: user.stats.likes,
//         }}
//       />
//       <Statistics title="Upload stats" stats={stat} />
//       <FriendList friends={friends} />
//       <TransactionHistory items={transactions} />
//     </div>
//   );
// };

import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import FriendList from './FriendList/FriendList';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import user from './data/user.json';
import data from './data/data.json';
import friends from './data/friends.json';
import transactions from './data/transactions.json';

export const App = () => {
  return (
    <div
      style={{
        padding: 60,
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        backgroundColor: '#f0f5f3',
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
