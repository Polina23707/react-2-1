import React from "react";
import films from "./films";
import Toolbar from "./Toolbar";
import ProjectList from "./ProjectList";

class Portfolio extends React.Component {
  constructor(props) {
    super(props);
    this.filters = ["All", "Websites", "Flayers", "Business Cards"];
    this.selected = "All";
    this.films = films;
    this.state = {
      filter: "All"
    }
    this.onSelectFilter = this.onSelectFilter.bind(this);
  }


  onSelectFilter(selected) {
    this.selected = selected;
    this.setState({filter: selected});
  }

  render() {
    return(
      <div className="portfolio">
        <Toolbar filters={this.filters} selected={this.selected} onSelectFilter={this.onSelectFilter}/>
        <ProjectList projects={this.films} selected={this.selected}/>
      </div>
    )
  }
}

export default Portfolio;