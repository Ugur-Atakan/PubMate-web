import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as  HashRouter, Route, Switch } from "react-router-dom";
import Anasayfa from './components/Anasayfa';
import SignIn from './components/sign-in';
import SignUp from './components/sign-up';
import IsletmeEkle from './components/IsletmeEkle';
import Contact from './components/contact';
import IsletmeDetayPage from './components/IsletmeDetayPage';


class Root extends Component {
    render() {
        return(
                <HashRouter basename="/">
	                <div>
	                <Switch>
                        <Route exact path="/" component={Anasayfa} />
                        <Route  path="/isletmedetay" component={IsletmeDetayPage} />
                        <Route  path="/isletmeekle" component={IsletmeEkle} />
                        <Route  path="/sign-in" component={SignIn} />
                        <Route  path="/sign-up" component={SignUp} />
                        <Route  path="/contact" component={Contact} />
	                </Switch>
	                </div>
                </HashRouter>
        )
    }
}

export default Root;

ReactDOM.render(<Root />, document.getElementById('mingrand'));
