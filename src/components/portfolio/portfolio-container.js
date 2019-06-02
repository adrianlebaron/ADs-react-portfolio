import React, { Component } from 'react';
import PortfolioItem from "./portfolio-item";

export default class PortfolioContainer extends Component {
  constructor() {
    super();
    
    this.state = {
      pageTitle: "Welcome to A.D.'s portfolio",
      isLoading: false,
      data:[ 
        {title: "whistle", category: "construction" },
        {title: "Eventbrite", category: "Scheduling" },
        {title: "Wallpro", category: "Enterprise" },
        {title: "Wallbros", category: "Construction" },
      ]
    };

    this.handleFilter = this.handleFilter.bind(this);

  }

  handleFilter(filter) {
    this.setState({
      data: this.state.data.filter(item => {
        return item.category === filter;
      })
    })

  }

  portfolioItems() {
    return this.state.data.map(item => {
       return <PortfolioItem title={item.title} url={"google.com"} />
    });
  }
 
  render() {
    if (this.state.isLoading) {
      return <div>Loading...</div>
    }
    return (
      <div>
        <h2>{this.state.pageTitle}</h2>

        <button onClick={() => this.handleFilter("construction")}>
          Construction
        </button>
        <button onClick={() => this.handleFilter("Enterprise")}>
          Enterprise
        </button>
        <button onClick={() => this.handleFilter("Scheduling")}>
          Scheduling
        </button>

        {this.portfolioItems()}
      </div>
    );
  }
}
