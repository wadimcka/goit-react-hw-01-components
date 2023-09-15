import styled from 'styled-components';

export const ListOfFriends = styled('ul')(() => {
  return {
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
    width: '600px',
    margin: 'auto',
    marginTop: 100,
  };
});

export const ListOfFriendsItem = styled('li')(() => {
  return {
    display: 'flex',
    alignItems: 'center',
    padding: '10px 20px',
    backgroundColor: 'white',
    border: '1px solid #8e8f99',
    borderRadius: 10,
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.15)',
  };
});

export const FriendStatus = styled('div')(({ $isOnline }) => {
  return {
    width: 40,
    height: 40,
    backgroundColor: $isOnline ? '#29cf23' : '#e6103e',
    borderRadius: '50%',
    display: 'inline-block',
    marginRight: 20,
  };
});

export const Avatar = styled('img')(() => {
  return {
    marginRight: 20,
    backgroundColor: '#f2f0f0;',
    borderRadius: 10,
  };
});
