import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Main from "./Main";
import { Container, setConfiguration } from "react-grid-system";
import { Row, Col } from "react-grid-system";
import Wishlist from './components/Wishlist'

setConfiguration({ gutterWidth: 50, gridColumns: 16 });

class Display extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      toggleWish: false
    };

    this.togWish = this.togWish.bind(this);
  }

  togWish(){
      const toSet= !this.state.toggleWish;
      console.log(toSet)
      this.setState({toggleWish: toSet});
  }

  render() {
    return (
      <div style={{ margin: "0" }}>
        <div>
          <BrowserRouter>
            <Main />
          </BrowserRouter>
          <div className="wishlistBtn">
            <button className="uploadBtn" onClick={this.togWish}>
              <h4>wishlist</h4>
            </button>
            
          </div>
          <div>
          {this.state.toggleWish && <Wishlist />}
          </div>
        </div>
      </div>
    );
  }
}

export default Display;
