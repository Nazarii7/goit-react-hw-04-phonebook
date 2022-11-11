import PropTypes from 'prop-types';
import css from './FilterUser.module.css';

const FilterUser = ({ value, onChange }) => (
  <label className={css.labelFilter}>
    Find contacts by name...
    <input
      type="name"
      className={css.labelInput}
      value={value}
      onChange={onChange}
    />
  </label>
);

FilterUser.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default FilterUser;
