import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/Navbar'
import Home from './components/home/Home'
import Play from './components/playpage/Play'
import { Provider } from 'react-redux';
import store from './store/Store';
import LoadingBar from 'react-top-loading-bar'
import { useState } from 'react';
import Footer from './components/footer/Footer';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import ScrollToTop from './components/utility/ScrollToTop';
import SearchResultPage from './components/searchResultPage/SearchResultPage';
import Page from './components/pages/Page';
import CatagoryPage from './components/catagoriesPage/CatagoryPage';
import NothingToShowPage from './components/nothingToShow/NothingToShowPage';

function App() {
  const [progress, setProgress] = useState(0)

  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <LoadingBar
            height="2.5px"
            color='#f11946'
            progress={progress}
            onLoaderFinished={() => setProgress(0)}
          />
          <Navbar />
          <ScrollToTop />
          <Routes>
            <Route path='/' element={<Home setProgress={setProgress} />} />
            <Route path='/aboutus' element={<About setProgress={setProgress} />} />
            <Route path='/contactus' element={<Contact setProgress={setProgress} />} />
            <Route path='/page/:pageNo' element={<Page setProgress={setProgress} />} />
            <Route path='/catagory' element={<CatagoryPage setProgress={setProgress} />} />
            <Route path='/searchresult/:searchQuery' element={<SearchResultPage setProgress={setProgress} />} />
            <Route path='/nothingtoshow' element={<NothingToShowPage setProgress={setProgress} />} />
            <Route path='/play-video/:videoid' element={<Play setProgress={setProgress} />} />
          </Routes >
          <Footer />
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
