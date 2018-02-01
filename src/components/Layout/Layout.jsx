import * as React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import Members from '../Members/Members';

import members from '../../Mock/Members.json';

import './Layout.css';

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.onHandleChange = this.onHandleChange.bind(this);
  }
  onHandleChange() {
    alert("jbjcbjscs");
  }
  render() {
    return(
      <section className="layout">
        <SearchForm handleChange={this.onHandleChange}/>
        <Members members={members}/>
      </section>
    )
  }
}

export default Layout;
