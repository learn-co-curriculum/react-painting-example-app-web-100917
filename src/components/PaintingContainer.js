import React from 'react';
import PaintingList from './PaintingList';
import PaintingNew from './PaintingNew';
import PaintingShow from './PaintingShow';
import { Switch, Route } from 'react-router-dom';
import artworks from '../artworks';

const onePainting = {
  id: 2,
  title: 'Study of a Young Woman',
  image:
    'https://d32dm0rphc51dk.cloudfront.net/pLcp7hFbgtfYnmq-b_LXvg/medium.jpg',
  slug: 'johannes-vermeer-study-of-a-young-woman',
  date: 'ca. 1665â€“1667',
  dimensions: {
    width: 15.75,
    height: 17.5
  },
  votes: 5,
  artist: {
    id: 2,
    name: 'Johannes Vermeer',
    hometown: 'Delft, Netherlands',
    birthday: '1632',
    deathday: '1675'
  },
  museum: {
    id: 1,
    name: 'Unknown Museum'
  }
};

class PaintingContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      paintings: []
    };
  }

  componentDidMount() {
    // fetch('http://localhost:3001/api/v1/paintings')
    //   .then(res => res.json())
    //   .then(paintings => {
    this.setState({ paintings: this.sortPaintings(artworks) });
    // });
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
        <Switch>
          <Route path="/paintings/new" component={PaintingNew} />
          <Route
            path="/paintings/:slug"
            render={({ match }) => {
              console.log(match.params.slug);
              return <PaintingShow painting={onePainting} />;
            }}
          />
          <Route
            path="/paintings"
            render={() => {
              return (
                <PaintingList
                  handleVote={this.handleVote}
                  handleDelete={this.handleDelete}
                  paintings={this.state.paintings}
                />
              );
            }}
          />
        </Switch>
      </div>
    );
  }
}
export default PaintingContainer;
