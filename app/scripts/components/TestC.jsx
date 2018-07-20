// import PropTypes from 'prop-types';
import React from 'react';


const TestComponent = ({ collection, ready }) => {
  let html;

  if (ready) {
    html = (
      <div >collection size: {collection.length}</div>
    );
  
  } else {
    html = (
      <div>collection not ready</div>
    );
  }

  return html;
};

export default TestComponent;