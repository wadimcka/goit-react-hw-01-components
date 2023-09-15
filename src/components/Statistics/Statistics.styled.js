import styled from 'styled-components';
import { getRandomColor } from 'components/helpers/getRandomColor';

export const StatisticSection = styled('section')(() => {
  return {
    width: 600,
    margin: 'auto',
    marginTop: 100,
    backgroundColor: 'white',
    border: '1px solid #8e8f99',
    borderRadius: 10,
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.15)',
    paddingTop: 40,
  };
});

export const StatisticTitle = styled('h2')(() => {
  return {
    fontWeight: 600,
    fontSize: 40,
    color: '#aea8a8',
    textAlign: 'center',
    textTransform: 'uppercase',
    marginBottom: 40,
  };
});

export const StatisticList = styled('ul')(() => {
  return {
    display: 'flex',
  };
});

export const StatisticItem = styled('li')(() => {
  return {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 100,
    backgroundColor: getRandomColor(),

    '&:first-child': {
      borderBottomLeftRadius: 10,
    },
    '&:last-child': {
      borderBottomRightRadius: 10,
    },
  };
});

export const StatisticLable = styled('span')(() => {
  return {
    fontSize: 30,
    color: 'white',
  };
});
export const StatisticValue = styled('span')(() => {
  return {
    fontSize: 40,
    color: 'white',
  };
});
