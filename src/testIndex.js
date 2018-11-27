import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Foo from './components/Foo';
import './myStyles.scss';

class App extends Component {
  state = {
    CaptainKirkBio: {},
  };

  componentDidMount() {
    this.onGetKirkBio();
  }

  onGetKirkBio = async () => {
    try {
      const result = await fetch(
        'http://stapi.co/api/v1/rest/character/search',
        {
          method: 'POST',
          headers: {
            'content-type': 'application/x-www-form-urlencoded',
          },
          body: {
            title: 'James T. Kirk',
            name: 'James T. Kirk',
          },
        },
      );
      const resultJSON = await result.json();
      const character = resultJSON.characters[0];
      this.setState({CaptainKirkBio: character});
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const {CaptainKirkBio} = this.state;
    return (
      <div className="app">
        <img
          className="app__header"
          src="/dist/images/header.jpg"
          alt="header"
        />
        <p>
          Adipisicing voluptate possimus maiores quibusdam quas. Sunt asperiores
          fugiat quidem minus consectetur consectetur! Molestias inventore
          aperiam voluptate soluta nobis Explicabo eos accusamus praesentium
          illo esse voluptate? Numquam officia animi pariatur.
        </p>
        <Foo />
        <p>El puerco marranon</p>
        <section>
          {Object.values(CaptainKirkBio).length === 0 ? (
            <p>Loading user info...</p>
          ) : (
            <p style={{wordBreak: 'break-all'}}>
              {JSON.stringify(CaptainKirkBio)}
            </p>
          )}
        </section>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
