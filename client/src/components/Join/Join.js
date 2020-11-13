import React, { useState } from 'react';
import { Link, useHistory } from "react-router-dom";

import './Join.css';

export default function SignIn() {
  const history = useHistory();

  const [name, setName] = useState('');
  const [room, setRoom] = useState('');

  let handleEnter = (e) => {
    if(!name || !room) {
      e.preventDefault();
    }else{
      history.push(`/chat?name=${name}&room=${room}`);
    }
  }

  return (
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
        <h1 className="heading">Join a Room</h1>
        <p id="miniText">Open two browsers and join the same "Room"!</p>
        <div>
          <input placeholder="Name" className="joinInput" type="text" onChange={(event) => setName(event.target.value)} />
        </div>
        <div>
          <input placeholder="Room" className="joinInput mt-20" type="text" onChange={(event) => setRoom(event.target.value)} onKeyUp={(e) => { if(e.keyCode === 13){ handleEnter(); }}} />
        </div>
        <Link onClick={e => (!name || !room) ? e.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
          <button className={'button mt-20 ' + (!room || !name ? 'greyed' : 'full')} type="submit">Sign In</button>
        </Link>
        <p id="miniText">Mike's simple Realtime chat app made with Socket.io, NodeJS, React. Additional code coming soon:
          <ul>
            <li>DB connection MongoDB or Mysql</li>
            <li>Private room feature with password</li>
            <li>Link sharing</li>
          </ul>
        But still, have fun!</p>

      </div>
    </div>
  );
}
