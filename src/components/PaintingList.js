import React from 'react';
import DeleteablePainting from './DeleteablePainting';

class PaintingList extends React.Component {
  render() {
    const allPaintings = this.props.paintings.map(p => (
      <DeleteablePainting
        key={p.id}
        painting={p}
        handleVote={this.props.handleVote}
        handleDelete={this.props.handleDelete}
      />
    ));
    return (
      <div>
        <h1>All Paintings</h1>
        <div className="ui items">{allPaintings}</div>
      </div>
    );
  }
}
export default PaintingList;
