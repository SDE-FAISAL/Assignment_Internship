import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import Footer from './Footer';
import Home from './Home/Home';
import Listing from './Listing/listing';
import Details from './Details/details';
import PlaceOrder from './orders/placeOrder';
import ViewBooking from './orders/viewOrder'
import Register from './login/register';
import Login from './login/login';

const Routing = () => {
    return(
        <BrowserRouter>
                <Route exact path="/" component={Home}/>
                <Route path="/listing/:mealId" component={Listing}/>
                <Route path="/details" component={Details}/>
                <Route path="/placeOrder/:restName" component={PlaceOrder}/>
                <Route path="/viewBooking" component={ViewBooking}/>
                <Route path="/login" component={Login}/>
                <Route path="/Register" component={Register}/>
            <Footer/>
        </BrowserRouter>
    )
}


export default Routing