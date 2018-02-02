import * as React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import Members from '../Members/Members';

import memberData from '../../Mock/Members.json';

import './Layout.css';

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ''
    }
    this.onHandleChange = this.onHandleChange.bind(this);
  }
  onHandleChange(e) {
    this.setState({
      search: e.target.value
    });
  }

  render() {
    console.log(this.state.search);
    let members = memberData;
    let search = this.state.search.trim().toLowerCase();
    if(search.length > 0){

    members = memberData.filter((row) => {
        let allSearch = row.login.toLowerCase().match( search );
        return allSearch;
      });
    }
    return(
      <section className="layout">
        <SearchForm
          handleChange={this.onHandleChange}
          search={this.state.search}
        />
        <Members
          members={members}
      />
      </section>
    )
  }
}

export default Layout;
