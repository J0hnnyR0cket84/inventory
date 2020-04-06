//importing functions & libraries
import React from 'react';
import AddBook from './component/AddBook';
import MyBooks from './component/MyBooks/MyBooks';
import {Route} from 'react-router-dom';
import BookDetail from './component/BookDetail';
import { Pictures } from './component/Pictures';
import Footer from './component/Footer.js'

import './App.css';

//App Components - Routes with rendered components
function App() {
  return (
    
    <div className="App">
      <Route exact path="/" component={MyBooks}/>
      <Route exact path="/detail" component={BookDetail}/>
      <Route path='/addbook' component={AddBook} />
      <Route path='/pictures' component={Pictures} />
      <Footer/>
    </div>
    

  );
}

export default App;
