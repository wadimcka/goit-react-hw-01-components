import PropTypes from 'prop-types';

function getRandomColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

export default function StatisticsList({ stats }) {
  return (
    <ul className="stat-list">
      {stats.map(stat => {
        return (
          <li
            key={stat.id}
            className="item"
            style={{ backgroundColor: getRandomColor() }}
          >
            <span className="label">{stat.label}</span>
            <span className="percentage">{`${stat.percentage}%`}</span>
          </li>
        );
      })}
    </ul>
  );
}

StatisticsList.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
