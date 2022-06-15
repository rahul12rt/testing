import '../App.css';
import Home from '../Container/Home/Index';
import FrontPage from '../Container/Frontpage/Index';
import Warning from '../Container/Warningpage/Index';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Moviedetails from '../Components/Moviedetails/Index';
import Search from '../Container/SearchPage/Index'
import SigninScreen from '../Container/SigninScreen/Index';
import SignupScreen from '../Container/SignupScreen/Index'





function App() {
  return (
    <BrowserRouter>
    <div className="app">
<Routes>
  <Route path="/" element={<FrontPage />} />
  <Route path="/Home" element={<Home />}/>
  <Route path="/Warning" element={<Warning/>} />
  <Route path="/Moviedetails/:id" element={<Moviedetails/>}/>
  <Route path="/Search" element={<Search/>}/>
  <Route path="/SignIn" element={<SigninScreen/>}/>
  <Route path="/SignUp" element={<SignupScreen/>}/>
</Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;