import React from 'react';
import PaintingList from './PaintingList';

class PaintingContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      paintings: []
    };
  }

  componentDidMount() {
    fetch('http://localhost:3001/api/v1/paintings')
      .then(res => res.json())
      .then(paintings => {
        this.setState({ paintings: this.sortPaintings(paintings) });
      });
  }

  sortPaintings(paintings) {
    return paintings.sort((a, b) => b.votes - a.votes);
  }

  handleDelete = id => {
    this.setState(prevState => ({
      paintings: prevState.paintings.filter(p => p.id !== id)
    }));
  };

  handleVote = id => {
    const updatedPaintings = this.state.paintings.map(p => {
      if (p.id !== id) {
        return p;
      } else {
        return { ...p, votes: p.votes + 1 };
      }
    });
    this.setState({
      paintings: this.sortPaintings(updatedPaintings)
    });
  };

  render() {
    return (
      <div>
        <PaintingList
          handleVote={this.handleVote}
          handleDelete={this.handleDelete}
          paintings={this.state.paintings}
        />
      </div>
    );
  }
}
export default PaintingContainer;
