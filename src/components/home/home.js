import React, { Fragment } from 'react';
import Header from '../header/header';
import SearchBar from '../SearchBar/searchBar';
import List from '../list/list';

const Home = () => {
  return (
    <Fragment>
      <Header />  
      <SearchBar />
      <List />
    </Fragment>
  );
}

export default Home;