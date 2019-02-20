import React from 'react';
import getResources from './getResources';

const ResourceList = props => {
  const resources = getResources(props.resource);
  return (
    <ul>
      {resources.map(record => (
        <li key={record.id}>{record.title}</li>
      ))}
    </ul>
  );
};

export default ResourceList;
