import  React from 'react';


import './Members.css';

const Members = ({members, search}) => (
    members.map(row => {
      console.log("hello",search);

      const { id, login, url, avatar } = row;
      return(
        <div className="members">
          <div class="avatar" key={id}>
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


export default Members;
