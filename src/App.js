import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Hotels from './components/Hotels/Hotels';
import Menu from './components/Menu/Menu';
import LoadingIcon from './components/UI/LoadingIcon/LoadingIcon';
import Searchbar from './components/UI/Searchbar/Searchbar';
import Layout from './components/Layout/Layout';
import Footer from './components/Footer/Footer';
import ThemeButton from './components/UI/ThemeButton/ThemeButton';
import ThemeContext from './context/themeContext';
import AuthContext from './context/authContext';

class App extends Component {
    hotels = [
      {
        id: 1,
        name: 'Przy ratuszu',
        city: 'Wrocław',
        rating: 8.4,
        description: 'Fuga nihil quae, aperiam dolorem repudiandae voluptatibus incidunt eaque maiores voluptate iusto quo explicabo culpa alias dolorum accusamus corporis quibusdam ipsum iure.',
        image: ''
      },
      {
        id: 2,
        name: 'Pod stokiem',
        city: 'Wisła',
        rating: 9.5,
        description: 'Fuga nihil quae, aperiam dolorem repudiandae voluptatibus incidunt eaque maiores voluptate iusto quo explicabo culpa alias dolorum accusamus corporis quibusdam ipsum iure.',
        image: ''
      },
      {
        id: 3,
        name: 'Nad morzem',
        city: 'Gdynia',
        rating: 7.8,
        description: 'Fuga nihil quae, aperiam dolorem repudiandae voluptatibus incidunt eaque maiores voluptate iusto quo explicabo culpa alias dolorum accusamus corporis quibusdam ipsum iure.',
        image: ''
      }
    ]
    state = {
      hotels: [],
      loading: true,
      theme: 'primary',
      isAuthenticated: false,
    }
    searchHandler(term) {
      const hotels = [...this.hotels].filter(hotel => hotel.name.toLowerCase().includes(term.toLowerCase()));
      this.setState({hotels});
    }

    changeTheme = () => {
      const newTheme = this.state.theme === 'primary'
      ? 'danger' : 'primary';
      this.setState({ theme: newTheme });
    }

    // symulacja pobierania danych z backendu
  componentDidMount() {
    setTimeout(() => {
      this.setState({ hotels: this.hotels, loading: false });
    }, 1000);
    console.log('component zamontowany');
  }

  render() {
    const header = (
      <Header>
        <Searchbar 
          onSearch={term => this.searchHandler(term)}
        />
        <ThemeButton/>
      </Header>
    );
    const content = (
      this.state.loading 
            ? <LoadingIcon 
              /> 
            : <Hotels 
                hotels={this.state.hotels}
              />
    )
    return (
      <AuthContext.Provider value={{ 
        isAuthenticated: this.state.isAuthenticated,
        login: () => this.setState({ isAuthenticated: true }),
        logout: () => this.setState({ isAuthenticated: false }),
      }}>
      <ThemeContext.Provider value={{
        color: this.state.theme,
        changeTheme: this.changeTheme
      }}>
        <Layout 
          header={header}
          menu={<Menu/>}
          content={content}
          footer={
            <div>
              <Footer/>
            </div>
          }
        />
      </ThemeContext.Provider>
      </AuthContext.Provider>
    );
  }
}

export default App;
