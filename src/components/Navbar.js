import React from 'react';

const colors = [
  'red',
  'orange',
  'yellow',
  'olive',
  'green',
  'teal',
  'blue',
  'violet',
  'purple',
  'pink',
  'brown',
  'grey'
];

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: 'purple'
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const newColor = colors[Math.floor(Math.random() * colors.length)];
    this.setState({ color: newColor });
  }

  render() {
    return (
      <div className={`ui top fixed inverted ${this.state.color} menu`}>
        <a className="item">
          <h2 className="ui header">
            <i className={`${this.props.icon} icon`} />
            <div className="content">{this.props.title}</div>
            <div className="sub header">{this.props.description}</div>
          </h2>
        </a>
        <div className="right menu">
          <div className="item">index</div>
          <div className="item">new</div>
          <div className="item">
            <div className="ui primary button">Log In</div>
          </div>
          <div className="item">
            <div onClick={this.handleClick} className="ui button">
              Change Color
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
