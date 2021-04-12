//import PropTypes from 'prop-types';
//import { connect } from 'react-redux';
import { SetFilter } from '../../redux/contacts/contacts-actions';
import { getFilter } from '../../redux/contacts/contacts-selectors';
import { useSelector, useDispatch } from 'react-redux';

const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  return (
    <>
      <h2>find contacts by name</h2>
      <input
        type="text"
        name="filter"
        autoComplete="off"
        onChange={e => dispatch(SetFilter(e.target.value))}
        value={filter}
      />
    </>
  );
};

export default Filter;

/*-------------------- Без useSelector и useDispatch-------------------------*/
/*
Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onFilterContact: PropTypes.func,
};
const mapStateToProps = state => {
  return {
    filter: getFilter(state),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSetFilter: e => dispatch(actions.onSetFilter(e.target.value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);*/
