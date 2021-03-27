import { useReducer, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import Searchbar from './components/UI/Searchbar/Searchbar';
import Layout from './components/Layout/Layout';
import Footer from './components/Footer/Footer';
import ThemeButton from './components/UI/ThemeButton/ThemeButton';
import ThemeContext from './context/themeContext';
import AuthContext from './context/authContext';
import ReducerContext from './context/reducerContext';
import InspiringQuote from './components/InspiringQuote/InspiringQuote';
import { reducer, initialState } from './reducer';
import Home from './pages/Home/Home';
import Hotel from './pages/Hotel/Hotel';
import Search from './pages/Search/Search';
import NotFound from './pages/404/404';
import Login from './pages/Auth/Login/Login';
import AuthenticatedRoute from './components/AuthenticatedRoute/AuthenticatedRoute';
import ErrorBoundary from './hoc/ErrorBoundary';
const Profile = lazy(() => import('./pages/Profile/Profile'));

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

function App() {
  //const [theme, setTheme] = useState('primary');
  const [state, dispatch] = useReducer(reducer, initialState);
  
  const header = (
    <Header>
      <InspiringQuote />
      <Searchbar />
      <ThemeButton/>
    </Header>
  );
  const content = (
    <Suspense fallback={<p>Ładowanie...</p>}>
      <Switch>
        <AuthenticatedRoute path="/profil" component={Profile} />
        <Route path="/hotele/:id" component={Hotel} />
        <Route path="/wyszukaj/:term?" component={Search} />
        <Route path="/zaloguj" component={Login} />
        <Route path="/" exact component={Home} />
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  );

  return (
    <Router>
      <AuthContext.Provider value={{ 
        isAuthenticated: state.isAuthenticated,
        login: () => dispatch({ type: 'login' }),
        logout: () => dispatch({ type: 'logout' }),
      }}>
        <ThemeContext.Provider value={{
          color: state.theme,
          changeTheme: () => {dispatch({ type: 'change-theme' })}
        }}>
          <ReducerContext.Provider value={{
            state: state,
            dispatch: dispatch,
          }}>

            <ErrorBoundary>
              <Layout 
                header={header}
                menu={<Menu/>}
                content={content}
                footer={<div><Footer/></div>}
              />
            </ErrorBoundary>

          </ReducerContext.Provider> 
        </ThemeContext.Provider>
      </AuthContext.Provider>
    </Router>
  )
};

export default App;
