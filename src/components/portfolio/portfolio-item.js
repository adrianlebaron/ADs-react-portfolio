import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import { prependOnceListener } from 'cluster';

export default class PortfolioItem extends Component {
  constructor(props) {
    super(props);

    this.state = {

      portfolioItemClass:""
    };
  }
  handleMouseEnter() {
    this.setState({portfolioItemClass: "image-blur"})
  }

  handleMouseEnter() {
    this.setState({portfolioItemClass: ""})
  }

  render() {
  const { id, description, thumb_image_url, logo_url } = this.props.item;
  return (
    <div className="portfolio-item-wrapper"
      onMouseEnter={() => this.handleMouseEnter()}
      onMouseLeave={() => this.handleMouseLeave()}
    >
      
      <div
        className={"portfolio-img-background " + this.state.portfolioItemClass}
        style={{
          backgroundImage: "url(" + thumb_image_url + ")"
        }}
      />

      <div className="img-text-wrapper">
      <div className="logo-wrapper">
      <img src={logo_url} />
      </div>
      <div className="subtitile">{description}</div>
      </div>
    </div>
    );
  }
}