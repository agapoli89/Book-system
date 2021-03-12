import { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Hotels from './components/Hotels/Hotels';
import Menu from './components/Menu/Menu';


class App extends Component {
    hotels = [
      {
        id: 1,
        name: 'Przy ratuszu',
        city: 'Wrocław',
        rating: '8.4',
        description: 'Fuga nihil quae, aperiam dolorem repudiandae voluptatibus incidunt eaque maiores voluptate iusto quo explicabo culpa alias dolorum accusamus corporis quibusdam ipsum iure.',
        image: ''
      },
      {
        id: 2,
        name: 'Pod stokiem',
        city: 'Wisła',
        rating: '9.5',
        description: 'Fuga nihil quae, aperiam dolorem repudiandae voluptatibus incidunt eaque maiores voluptate iusto quo explicabo culpa alias dolorum accusamus corporis quibusdam ipsum iure.',
        image: ''
      },
      {
        id: 3,
        name: 'Nad morzem',
        city: 'Gdynia',
        rating: '7.8',
        description: 'Fuga nihil quae, aperiam dolorem repudiandae voluptatibus incidunt eaque maiores voluptate iusto quo explicabo culpa alias dolorum accusamus corporis quibusdam ipsum iure.',
        image: ''
      }
    ]
    state = {
      hotels: this.hotels
    }
    searchHandler(term) {
      const hotels = [...this.hotels].filter(hotel => hotel.name.toLowerCase().includes(term.toLowerCase()));
      this.setState({hotels});
    }

  render() {
    return (
      <div className="App">
        <Header onSearch={(term) => this.searchHandler(term)}/>
        <Menu />
        <Hotels hotels={this.state.hotels}/>
      </div>
    );
  }
}

export default App;
