import React from "react"
import {BrowserRouter,Route,Switch} from "react-router-dom"
import HomeScreen from "../screens/HomeScreen";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
const ManiNavigation=()=>{
    return(
        <BrowserRouter>
        <Switch>
            <Route path="/" exact component={HomeScreen}/>
            <Route path="/Login" component={LoginScreen}/>
            <Route path="/Register" component={RegisterScreen}/>
        </Switch>
        </BrowserRouter>
    )
}
export default ManiNavigation
