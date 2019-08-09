import React from 'react';
import DeleteablePainting from './DeleteablePainting';
import { Route, Switch } from 'react-router-dom';
import PaintingShow from './PaintingShow';
import Painting from './Painting';
import artworks from './artworks';
import {connect} from 'react-redux';
import { thunkFetchPaintings, fetchPaintings } from '../actions';

class PaintingList extends React.Component {
  constructor(props) {
    super(props);

    this.handleVote = this.handleVote.bind(this);
  }

  componentDidMount(){
    this.props.thunkFetchPaintings()
  }

  handleVote(id) {
    this.setState(prevState => {
      return {
        paintings: prevState.paintings.map(p => {
          if (p.id !== id) {
            return p;
          } else {
            return { ...p, votes: p.votes + 1 };
          }
        })
      };
    });
  }

  renderPaintings(){
    const allPaintings = this.props.paintings.map(p => (
      <DeleteablePainting
        key={p.id}
        painting={p}
        handleVote={this.handleVote}
      />
    ));
    return (
        <div>
          <h1>All Paintings</h1>
          <div className="ui items">{allPaintings}</div>
        </div>
    )
  }

  render() {
    return (
      <Switch>
        <Route path='/paintings/:paintingId' render={(route) => {
          console.log('route', route.match.params)
          const id = route.match.params.paintingId
          const painting = this.props.paintings.find(painting => painting.id == id)
          console.log(painting)
          return <div>
            <PaintingShow painting={painting}/>
          </div>
        }} />
        <Route path='/'  render={()=>{
          return (
            <div> 
              {this.props.loader ? <div>Loading...</div> : this.renderPaintings()}
            </div> 
          )
        }}
        />
      </Switch>

    );
  }
}

const mapStateToProps = (state) => {
  return {
    paintings: state.paintings,
    loader: state.loader,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPaintings: (artworks) => {
      dispatch(fetchPaintings(artworks))
    },
    thunkFetchPaintings: (loginData) => {
      dispatch(thunkFetchPaintings(loginData))
    }
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(PaintingList);


