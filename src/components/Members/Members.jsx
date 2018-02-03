import  React from 'react';
import PropTypes from 'prop-types';


import './Members.css';

const Members = ({members}) => (
    members.map(row => {
      const { id, login, url, avatar } = row;
      return(
        <div className="members" key={id}>
          <div className="avatar">
            <img src={avatar} alt="hhh"  width="100px"/>
          </div>
          <div className="name">
            {login}
          </div>
          <div className="url">
            <a href={url}>{url}</a>
          </div>
        </div>
     );
    })
);

Members.propTypes = {
  id: PropTypes.number,
  login: PropTypes.number,
  avatar: PropTypes.string,
  url: PropTypes.string
}


export default Members;
