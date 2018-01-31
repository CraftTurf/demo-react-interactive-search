import  React from 'react';

import InputField from '../InputField/InputField';

import './SearchForm.css';

const SearchForm = ({type, onChange, handleChange}) => (
  <div className="serchform">
    <InputField
      type="text"
      onChange={handleChange}
      placeholder="Search ...."
      styles="input"
    />
  </div>
);

SearchForm.defaultProps = {
  handleChange: () => {}
}

export default SearchForm;
