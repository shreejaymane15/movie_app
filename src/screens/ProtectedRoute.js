import {Route} from 'react-router-dom';
import Login from './Login';



function ProtectedRoute(props){

    var isLoggedIn = window.sessionStorage.getItem("isLoggedIn");
    
    if(isLoggedIn != null && isLoggedIn == 'true'){
        debugger;
        return <Route exact path={props.path} component={props.component}/>
    }
    else{
        return <Login/>
    }
}

export default ProtectedRoute;
