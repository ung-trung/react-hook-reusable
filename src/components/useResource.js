import { useState, useEffect } from 'react';
import jsonPlaceholder from '../apis/jsonPlaceholder';

const fetchResource = async (resource, setList) => {
  const res = await jsonPlaceholder.get(`/${resource}`);
  setList([...res.data]);
};

export default resource => {
  const [list, setList] = useState([]);

  useEffect(() => {
    fetchResource(resource, setList);
  }, [resource]);
  return list;
};
