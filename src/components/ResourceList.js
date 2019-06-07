import React from 'react';

import useResource from './useResource';

const ResourceList = ({ resource }) => {
  const list = useResource(resource);

  return (
    <>
      <div className="ui relaxed divided list">
        {list.map(item => (
          <div className="item" key={item.id}>
            <div className="content">
              <div className="header">{item.title}</div>
              {item.body ? item.body : null}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ResourceList;
