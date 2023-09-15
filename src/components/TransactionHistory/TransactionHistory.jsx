import PropTypes from 'prop-types';
import {
  ActTab,
  ActTabData,
  ActTabRow,
  ActTabTitle,
} from './TransactionHistory.styled';

export default function TransactionHistory({ items }) {
  return (
    <ActTab>
      <thead>
        <tr>
          <ActTabTitle>Type</ActTabTitle>
          <ActTabTitle>Amount</ActTabTitle>
          <ActTabTitle>Currency</ActTabTitle>
        </tr>
      </thead>

      <tbody>
        {items.map(item => {
          return (
            <ActTabRow key={item.id}>
              <ActTabData>{item.type}</ActTabData>
              <ActTabData>{item.amount}</ActTabData>
              <ActTabData>{item.currency}</ActTabData>
            </ActTabRow>
          );
        })}
      </tbody>
    </ActTab>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};
