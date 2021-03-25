import { useEffect, useReducer } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
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
import BestHotel from './components/Hotels/BestHotel/BestHotel';
import InspiringQuote from './components/InspiringQuote/InspiringQuote';
import LastHotel from './components/Hotels/LastHotel/LastHotel';
import useStateStorage from "./hooks/useStateStorage";
import useWebsiteTitle from './hooks/useWebsiteTitle';

const backendHotels = [
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

//App as class component
/* class App extends Component {
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


  componentDidMount() {
    setTimeout(() => {
      this.setState({ hotels: this.hotels, loading: false });
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
} */

const reducer = (state, action) => {
  switch (action.type) {
    case 'change-theme':
      const theme = state.theme === 'primary' ? 'danger' : 'primary';
      return { ...state, theme };
    case 'set-hotels':
      return { ...state, hotels: action.hotels };
    case 'set-loading':
      return { ...state, loading: action.loading };
    case 'login':
      return { ...state, isAuthenticated: true };
    case 'logout':
      return { ...state, isAuthenticated: false };
    default:
      throw new Error(`Nie ma takiej akcji ${action.type}`)
  }
}

const initialState = {
  hotels: [],
  loading: true,
  isAuthenticated: true,
  theme: 'primary',
}

function App() {
  //const [theme, setTheme] = useState('primary');
  const [state, dispatch] = useReducer(reducer, initialState);
  const [lastHotel, setLastHotel] = useStateStorage('last-hotel', null);
  useWebsiteTitle('Noclegi-strona główna')

  const searchHandler = term => {
    const newHotels = [...backendHotels].filter(hotel => hotel.name.toLowerCase().includes(term.toLowerCase()));
    dispatch({ type: 'set-hotels', hotels: newHotels});
  }

  const getBestHotel = () => state.hotels.length < 2
  ? null 
  : state.hotels.sort((a,b) => a.rating > b.rating ? -1 : 1)[0];

  const openHotel = hotel => setLastHotel(hotel);
  const removeLastHotel = () => setLastHotel(null);

  useEffect(() => {
    setTimeout(() => {
      dispatch({ type: 'set-hotels', hotels: backendHotels });
      dispatch({ type: 'set-loading', loading: false })
    }, 1000);
  }, [])
  
  const header = (
    <Header>
      <InspiringQuote />
      <Searchbar 
        onSearch={term => searchHandler(term)}
      />
      <ThemeButton/>
    </Header>
  );
  const content = (
    state.loading 
      ? <LoadingIcon /> 
      : (
        <>
          {lastHotel ? <LastHotel {...lastHotel} onRemove={removeLastHotel}/> : null}
          {getBestHotel() ? <BestHotel getHotel={getBestHotel}/> : null}
          <Hotels onOpen={openHotel} hotels={state.hotels} />
        </>
      )
  );

  return (
    <AuthContext.Provider value={{ 
      isAuthenticated: state.isAuthenticated,
      login: () => dispatch({ type: 'login' }),
      logout: () => dispatch({ type: 'logout' }),
    }}>
    <ThemeContext.Provider value={{
      color: state.theme,
      changeTheme: () => {dispatch({ type: 'change-theme' })}
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
  )
};

export default App;
