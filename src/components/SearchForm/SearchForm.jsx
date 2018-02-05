import  React from 'react';
import PropTypes from 'prop-types';


import InputField from '../InputField/InputField';

import './SearchForm.css';

const SearchForm = ({type, handleChange, search}) => (
  <div className="serchform">
    <InputField
      type="text"
      value={search}
      onChange={handleChange}
      placeholder="Search ...."
      styles="input"
    />
  </div>
);

SearchForm.defaultProps = {
  handleChange: () => {}
}

SearchForm.propTypes = {
  type: PropTypes.string,
  handleChange: PropTypes.func,
  search: PropTypes.string
}

export default SearchForm;
