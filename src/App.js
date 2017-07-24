import React, { Component } from 'react';
import { HomeComponent } from './modules/home/components/HomeComponent';
import { LoginComponent } from './modules/user/components/LoginComponent';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'


const RouteSection = () => (
	<Router>
		<Route exact path="/" component={HomeComponent}/>
		<Route path="/login" component={LoginComponent}/>
	</Router>
)

export default RouteSection