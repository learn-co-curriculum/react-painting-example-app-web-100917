import React from 'react';

const Painting = props => {
  // console.log('Painting props', props);
  return (
    <div className="item">
      <div className="ui small image">
        <img src={props.painting.image} alt={props.painting.slug} />
      </div>
      <div className="middle aligned content">
        <h3>Are you sure you want to remove {props.painting.title}</h3>
        <div className="ui buttons">
          <div
            onClick={props.handleCancelClick}
            className="ui basic green button"
          >
            No
          </div>
          <div
            onClick={() => props.handleDelete(props.painting.id)}
            className="ui red basic button"
          >
            Delete It
          </div>
        </div>
      </div>
    </div>
  );
};
export default Painting;
