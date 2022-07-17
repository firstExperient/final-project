import logo from './logo.svg';
import './App.css';
import MainNav from './components/MainNav';
import SecondaryNav from './components/SecondaryNav';
import SearchPage from './components/SearchPage';
import {Route, Routes} from 'react-router-dom'
import WhatsNew from './components/WhatsNew';
import MostPopular from './components/MostPopular';
import SignUp from './components/SignUp';
import CreatePost from './components/CreatePost';
export const url = "http://localhost:3001";

function App() {
  return (
    <div className="App">
      <MainNav/>
      <SecondaryNav/>
      <Routes>
        <Route path="/whats-new" element={<WhatsNew/>}/> 
        <Route path="/search" element={<SearchPage/>}/>
        <Route path="/most-popular" element={<MostPopular/>}/>   
        <Route path="/sign-up" element={<SignUp/>}/> 
        <Route path="/create-post" element={<CreatePost/>}/> 
        <Route path="/favorites" element={<>this page is in construct</>}/> 
      </Routes>
    </div>
  );
}

export default App;
