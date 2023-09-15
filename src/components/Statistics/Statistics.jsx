import PropTypes from 'prop-types';
import {
  StatisticItem,
  StatisticLable,
  StatisticList,
  StatisticSection,
  StatisticTitle,
  StatisticValue,
} from './Statistics.styled';

export default function Statistics({ title, stats }) {
  return (
    <StatisticSection>
      {title && <StatisticTitle>{title}</StatisticTitle>}
      <StatisticList>
        {stats.map(stat => {
          return (
            <StatisticItem key={stat.id} className="item">
              <StatisticLable>{stat.label}</StatisticLable>
              <StatisticValue>{`${stat.percentage}%`}</StatisticValue>
            </StatisticItem>
          );
        })}
      </StatisticList>
    </StatisticSection>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
