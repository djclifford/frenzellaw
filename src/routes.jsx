'use strict';

/*eslint-disable */
import React from 'react';
/*eslint-enable */
import {DefaultRoute, Route, NotFoundRoute, Redirect} from 'react-router';
import App from './components/app';
import HomePage from './components/home/HomePage';
import AuthorPage from './components/authors/authorPage';
import ManageAuthorPage from './components/authors/manageAuthorPage';
import AboutPage from './components/about/aboutPage';
import AreasOfBusinessPage from './components/areasOfBusiness/areasOfBusinessPage';
import ContactUsPage from './components/contactUs/ContactUsPage';
import NotFoundPage from './components/notFound/notFoundPage';

const routes = (
  <Route name="app" path="/" handler={App}>
    <DefaultRoute handler={HomePage}/>
    <Route name="authors" handler={AuthorPage}/>
    <Route name="addAuthor" path="author" handler={ManageAuthorPage}/>
    <Route name="manageAuthor" path="author/:id" handler={ManageAuthorPage}/>
    <Route name="about" handler={AboutPage}/>
    <Route name="areasOfBusiness" handler={AreasOfBusinessPage}/>
    <Route name="contactUs" handler={ContactUsPage}/>
    <NotFoundRoute handler={NotFoundPage}/>
    <Redirect from="about/*" to="about"/>
  </Route>
);

export default routes;
