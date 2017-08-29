import React from 'react';
import { HomeComponent } from './modules/content/components/HomeComponent';
import { AboutComponent } from './modules/content/components/AboutComponent';
import { TopstoriesComponent } from './modules/content/components/TopstoriesComponent';
import { NewqusComponent } from './modules/content/components/NewqusComponent';
import { LoginComponent } from './modules/user/components/LoginComponent';
import { RegisterComponent } from './modules/user/components/RegisterComponent';
import { ApiComponent } from './utils/ApiComponent';

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'


const RouteSection = () => (
  <Router>
    <div>
      <Route exact path="/" component={HomeComponent}/>
      <Route path="/about" component={AboutComponent}/>
      <Route path="/login" component={LoginComponent}/>
      <Route path="/register" component={RegisterComponent}/>
      <Route path="/topstories" component={TopstoriesComponent}/>
      <Route path="/newQs" component={NewqusComponent}/>
      <Route path="/other" component={ApiComponent}/>
    </div>
  </Router>
)

export default RouteSection