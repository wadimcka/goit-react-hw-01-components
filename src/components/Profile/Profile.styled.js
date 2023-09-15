import styled from 'styled-components';

export const Card = styled('div')(() => {
  return {
    width: '600px',
    height: '700px',
    paddingTop: 60,
    margin: 'auto',
    backgroundColor: 'white',
    border: '1px solid #8e8f99;',
    borderRadius: 10,
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.15)',
  };
});

export const CardWrap = styled('div')(() => {
  return {
    marginBottom: 60,
  };
});

export const Avatar = styled('img')(() => {
  return {
    borderRadius: 100,
    margin: 'auto',
    width: 300,
    height: 'auto',
    marginBottom: 62,
  };
});

export const UserName = styled('p')(() => {
  return {
    textAlign: 'center',
    fontWeight: 600,
    marginBottom: 20,
  };
});

export const ProfileDescr = styled('p')(() => {
  return {
    textAlign: 'center',
    color: '#aea8a8',
    marginTop: 20,
    fontSize: 30,
    marginBottom: 20,
  };
});

export const SocialeList = styled('ul')(() => {
  return {
    display: 'flex',
    justifyContent: 'space-between',
  };
});

export const SocialItem = styled('li')(() => {
  return {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '200px',
    height: '120px',
    backgroundColor: '#f2f0f0',
    border: '1px solid #8e8f99;',
    '&:nth-of-type(1)': {
      borderBottomLeftRadius: 10,
    },
    '&:nth-of-type(3)': {
      borderBottomRightRadius: 10,
    },
  };
});

export const SocialText = styled('span')(() => {
  return {
    color: '#aea8a8',
    fontWeight: 400,
    fontSize: 30,
  };
});

export const Socialvalue = styled('span')(() => {
  return {
    fontWeight: 600,
    fontSize: 35,
  };
});
