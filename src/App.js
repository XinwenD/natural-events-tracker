import React, { Component } from "react";
import Map from "./components/Map";
import Header from "./components/Header";
import DisasterSelector from "./components/DisasterSelector";

export class App extends Component {
  constructor() {
    super();
    this.state = { isLoading: false, eventData: null, categoryData: null };
  }

  componentDidMount() {
    this.fetchEvents();
  }

  fetchEvents = async () => {
    const res = await fetch("https://eonet.sci.gsfc.nasa.gov/api/v2.1/events");
    const cat = await fetch(
      "https://eonet.sci.gsfc.nasa.gov/api/v2.1/categories"
    );

    const { events } = await res.json();
    const { categories } = await cat.json();
    this.setState({ eventData: events });
    this.setState({ categoryData: categories });
    this.setState({ isLoading: true });
  };

  render() {
    if (this.state.isLoading) {
      return (
        <div className="app-container">
          <Header />
          <Map
            eventData={this.state.eventData}
            categoryData={this.state.categoryData}
          />
          <DisasterSelector categoryData={this.state.categoryData} />
        </div>
      );
    } else {
      return (
        <div className="app-container">
          <Header />
          <h1>Loading</h1>
        </div>
      );
    }
  }
}

export default App;
