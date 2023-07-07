import { BrowserRouter as Router, Route } from "react-router-dom";
import Launcher from "../Launcher";
import Details from "../screens/Details.js"
import Booking from "../screens/Booking.js"
import ProtectedRoute from "../screens/ProtectedRoute.js"
import { Switch } from "react-router-dom";


function Controller(){

    return (<Router>
                <Switch>
                    <Route exact path="/" component={Launcher}/>
                    <Route exact path="/details/:id" component={Details}/>
                    <ProtectedRoute exact path="/book" component={Booking}/>
               </Switch>
            </Router>)
}

export default Controller;