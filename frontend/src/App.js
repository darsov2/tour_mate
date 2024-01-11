import logo from './logo.svg';
import './App.css';
import Navigation from './Components/Layout/Navbar/Navigation';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import HomeCarousel from './Components/Layout/CarouselHome/Carousel';
import { Card, Container } from 'react-bootstrap';
import TabComponent from './Components/Tab/Tab';
import Offers from './Components/Layout/Offers/Offers';
import MostVisitedBar from './Components/MostVisited/MostVisitedBar';
import Review from './Components/BecomeAHost/Review';
import MostPopularRoutesCont from './Components/MostPopularRoutes/MostPopularRoutesCont';
import BecomeAHost from "./Components/BecomeAHost/BecomeAHost"
import HomePage from './Pages/HomePage';
import LoginPage from './Pages/LoginPage';
import RegistrationPage from './Pages/RegistrationPage'
import SearchPage from './Pages/SearchPage';
import HotelDetailsPage from './Pages/HotelDetailsPage';
import ProfilePage from './Pages/ProfilePage';
import ResourcesPage from './Pages/ResourcesPage';
import LoginForm from './Components/Login/LoginForm';
import StaticExample from './Components/Modal';
import TransportDetailsPage from './Pages/TransportDetailsPage';
import NoBusinessRegisteredError from './Pages/NoBusinessRegisteredError';
import HotelEditPage from './Pages/HotelEditPage';
import RestaurantEditPage from './Pages/RestaurantEditPage';
import TransportEditPage from './Pages/TransportEditPage';
import RestaurantDetailsPage from './Pages/RestaurantDetailsPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginErrorPage from "./Pages/LoginErrorPage";


function App() {

  return (
    <div className="App" style={{overflow: 'hidden'}}>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<LoginPage/>}/>
          <Route path='/register' element={<RegistrationPage/>}/>
          <Route path='/profile' element={<ProfilePage/>}/>
          <Route path="/resources" exact element={<NoBusinessRegisteredError hasRegistration="false"/>} />
          <Route path="/resources/hotel" element={<ResourcesPage tab="/hotel"/>}/>
          <Route path="/resources/hotel/:hotelId" element={<HotelEditPage />}/>
          <Route path="/resources/restaurant" element={<ResourcesPage tab="/restaurant"/>}/>
          <Route path='/resources/restaurant/:restaurantId' element={<RestaurantEditPage />}/>
          <Route path="/resources/transport" element={<ResourcesPage tab="/transport"/>}/>
          <Route path="/resources/transport/:transportId" element={<TransportEditPage/>}/>
          <Route path="/home" element={<HomePage/> }/>
          <Route path="/error" element={<LoginErrorPage/> }/>
          <Route path='/details/transport' element={<TransportDetailsPage></TransportDetailsPage>}/>
          <Route path='/details/hotel' element={<HotelDetailsPage></HotelDetailsPage>}/>
          <Route path='/details/restaurant' element={<RestaurantDetailsPage></RestaurantDetailsPage>}/>
          <Route path="/search/hotel/:hotelLocation/:dateFrom/:dateTo/:numBeds" element={<SearchPage type="hotel"/> }/>
          <Route path="/search/transport/:from/:to/:date" element={<SearchPage type="transport"/> }/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
