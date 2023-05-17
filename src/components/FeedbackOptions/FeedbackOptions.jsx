import css from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';

export function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <ul className={css.list}>
      {options.map(item => {
        return (
          <li className={css.item} key={item}>
            <button className={css.btn} type="button" onClick={onLeaveFeedback}>
              {item}
            </button>
          </li>
        );
      })}
    </ul>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};
