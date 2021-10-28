import React, { Component } from "react";
import Map from "./components/Map";
import Header from "./components/Header";

export class App extends Component {
  constructor() {
    super();
    this.state = { isLoading: false, eventData: null };
  }

  componentDidMount() {
    this.fetchEvents();
  }

  fetchEvents = async () => {
    const res = await fetch("https://eonet.sci.gsfc.nasa.gov/api/v2.1/events");
    const { events } = await res.json();
    this.setState({ eventData: events });
    this.setState({ isLoading: true });
  };

  render() {
    return (
      <div>
        <Header />
        {this.state.isLoading ? (
          <Map eventData={this.state.eventData} />
        ) : (
          <h1>Loading</h1>
        )}
      </div>
    );
  }
}

export default App;
