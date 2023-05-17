import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <ul className={css.list__statistics}>
      <li className={css.list__item}>
        Good: <span className={css.list__span}>{good}</span>
      </li>
      <li className={css.list__item}>
        Neutral: <span className={css.list__span}>{neutral}</span>
      </li>
      <li className={css.list__item}>
        Bad:<span className={css.list__span}>{bad}</span>
      </li>
      <li className={css.list__item}>
        Total:<span className={css.list__span}>{total}</span>
      </li>
      <li className={css.list__item}>
        Positive feedback:
        <span className={css.list__span}>{positivePercentage}%</span>
      </li>
    </ul>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string.isRequired,
};
