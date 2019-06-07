import React, { useState } from 'react';

import ResourceList from './components/ResourceList';
import UserList from './components/UserList';

const App = () => {
  const [resource, setResource] = useState('posts');

  return (
    <div className="ui container">
      <div className="ui segment">
        <div className="ui buttons">
          <button
            className="ui button primary"
            onClick={() => setResource('posts')}>
            Posts
          </button>
          <button
            className="ui button red"
            onClick={() => setResource('todos')}>
            Todos
          </button>
          <button
            className="ui button pink"
            onClick={() => setResource('users')}>
            Users
          </button>
        </div>
      </div>

      <div className="ui big segment">
        <>
          <UserList />
          <ResourceList resource={resource} />
        </>
      </div>
    </div>
  );
};

export default App;
