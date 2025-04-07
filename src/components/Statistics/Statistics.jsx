// import PropTypes from 'prop-types';
// import {
//   StatisticItem,
//   StatisticLable,
//   StatisticList,
//   StatisticSection,
//   StatisticTitle,
//   StatisticValue,
// } from './Statistics.styled';

// export default function Statistics({ title, stats }) {
//   return (
//     <StatisticSection>
//       {title && <StatisticTitle>{title}</StatisticTitle>}
//       <StatisticList>
//         {stats.map(stat => {
//           return (
//             <StatisticItem key={stat.id} className="item">
//               <StatisticLable>{stat.label}</StatisticLable>
//               <StatisticValue>{`${stat.percentage}%`}</StatisticValue>
//             </StatisticItem>
//           );
//         })}
//       </StatisticList>
//     </StatisticSection>
//   );
// }

// Statistics.propTypes = {
//   title: PropTypes.string,
//   stats: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       label: PropTypes.string.isRequired,
//       percentage: PropTypes.number.isRequired,
//     })
//   ).isRequired,
// };

import { getRandomColor } from 'utils';
import css from './Statistics.module.css';

export default function Statistics({ title, stats }) {
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>Upload stats</h2>}
      <ul className={css.statlist}>
        {stats.map(({ id, label, percentage }) => {
          return (
            <li
              className={css.item}
              key={id}
              style={{ backgroundColor: getRandomColor() }}
            >
              <span className="label">{label}</span>
              <span className="percentage">{percentage}</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
