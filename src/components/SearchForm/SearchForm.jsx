import  React from 'react';

import InputField from '../InputField/InputField';

import './SearchForm.css';

const SearchForm = ({type, onChange, handleChange, search}) => (
  <div className="serchform">
    <InputField
      type="text"
      value={search}
      onChange={handleChange}
      placeholder="Search ...."
      styles="input"
    />
    <div>{search} {'hshshshs'}</div>
  </div>
);

SearchForm.defaultProps = {
  handleChange: () => {}
}

export default SearchForm;
