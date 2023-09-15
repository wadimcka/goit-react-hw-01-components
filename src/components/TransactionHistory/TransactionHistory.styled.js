import styled from 'styled-components';

export const ActTab = styled('table')(() => {
  return {
    width: '900px',
    margin: 'auto',
    marginTop: 100,
    backgroundColor: 'white',

    borderCollapse: 'collapse',
  };
});

export const ActTabTitle = styled('th')(() => {
  return {
    backgroundColor: '#2daaed',
    width: 300,
    color: 'white',
    textTransform: 'uppercase',
    padding: 20,
    fontWeight: 400,
    fontSize: 30,
    border: '0.5px solid white',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.15)',

    '&:first-child': {
      borderTopLeftRadius: 10,
    },
    '&:last-child': {
      borderTopRightRadius: 10,
    },
  };
});

export const ActTabBody = styled('tbody')(() => {
  return {};
});

export const ActTabRow = styled('tr')(() => {
  return {
    color: '#aea8a8',
    textTransform: 'capitalize',
    fontWeight: 400,
    fontSize: 30,
    '&:last-child': {
      borderBottomLeftRadius: '10px',
      borderBottomRightRadius: '10px',
    },
    '&:nth-child(even)': {
      backgroundColor: '#f2f0f0',
    },
  };
});

export const ActTabData = styled('td')(() => {
  return {
    border: '0.5px solid #d1cecb',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.15)',
    padding: 20,
    textAlign: 'center',
  };
});
