import React, {Component} from 'react';
import axios from 'axios';
import { Link, Redirect} from 'react-router-dom';

class IcecreamSingle extends Component {
  constructor(){
    super();
    this.state = {
      icecream: null,
      apiDataLoaded: false,
      fireRedirect: false,
    }
    this.deleteIceCream = this.deleteIceCream.bind(this);
  }

  componentDidMount() {
    axios.get(`/icecream/${this.props.match.params.id}`)
      .then(res => {
        this.setState({
          apiDataLoaded: true,
          icecream: res.data.data,
        })
      }).catch(err => console.log(err));
  }

  deleteIceCream() {
    axios.delete(`/icecream/${this.props.match.params.id}`)
      .then(res => {
        console.log(res);
        this.setState({
          fireRedirect: true,
        });
      }).catch(err => {
        console.log(err);
      });
  }

  renderIceCreamOrLoading() {
    if (this.state.apiDataLoaded) {
      return (
        <div className="inner">
          <div className="img">
            <img src={this.state.icecream.url} alt={this.state.icecream.flavor} />
          </div>
          <div className="info">
            <h4 className="brand">{this.state.icecream.brand}</h4>
            <h1>{this.state.icecream.flavor}</h1>
            <p>{this.state.icecream.description}</p>
            <div className="links">
              <span className="rating">Rating: {this.state.icecream.rating || 'N/A'}</span>
              <Link to={`/edit/${this.props.match.params.id}`}>Edit</Link>
              <span className="delete" onClick={this.deleteIceCream}>Delete</span>
              {this.state.fireRedirect
                ? <Redirect push to="/icecream" />
                : ''}
            </div>
          </div>
        </div>
      )
    } else return <p className="loading">Loading...</p>
  }


  render() {
    return (
      <div className="icecream-single">
        {this.renderIceCreamOrLoading()}
      </div>
    )
  }
}



export default IcecreamSingle;
