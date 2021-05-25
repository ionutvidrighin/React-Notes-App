import './App.scss';
import Avatar from '@material-ui/core/Avatar';
import AppLogo from './icons/app-logo.png';
import ThemeIcon from './icons/theme.jpg';
import HomeIcon from './icons/home.png';
import FoodBagIcon from './icons/groceries.png';
import WorkIcon from './icons/work.png';
import GymIcon from './icons/gym.png';
import MoviesIcon from './icons/movies.png';
import FamilyIcon from './icons/family.png';
import TravelIcon from './icons/travel.png';

import {useState, useRef} from 'react';
import ForHome from './components/ForHome';
import Groceries from './components/Groceries';
import Work from './components/Work';
import Gym from './components/Gym';
import Movies from './components/Movies';
import Family from './components/Family';
import Travel from './components/Travel';

function App() {

  const [appWelcome, setAppWelcome] = useState(false);
  const [appTheme, setAppTheme] = useState(false);
  const [themeColor, setThemeColor] = useState("");
  const [forHome, setForHome] = useState(false);
  const [grocery, setGrocery] = useState(false);
  const [work, setWork] = useState(false);
  const [gym, setGym] = useState(false);
  const [movies, setMovies] = useState(false);
  const [family, setFamily] = useState(false);
  const [travel, setTravel] = useState(false);

  let createDate = new Date();        
  let month = new Array(12);
    month[0] = "Jan";
    month[1] = "Feb";
    month[2] = "Mar";
    month[3] = "Apr";
    month[4] = "May";
    month[5] = "Jun";
    month[6] = "Jul";
    month[7] = "Aug";
    month[8] = "Sept";
    month[9] = "Oct";
    month[10] = "Nov";
    month[11] = "Dec";
  
  let weekday = new Array(7);
    weekday[0] = "Sun";
    weekday[1] = "Mon";
    weekday[2] = "Tue";
    weekday[3] = "Wed";
    weekday[4] = "Thu";
    weekday[5] = "Fry";
    weekday[6] = "Sat";

  const [hour, setHour] = useState(null);
  const [minute, setMinute] = useState(null);
  const [seconds, setSeconds] = useState(null);

  function generateTime() {
    function addZero(i) {
      if (i < 10) {
        i = "0" + i;
      }
      return i;
    }

    const date = new Date();
    setHour(addZero(date.getHours()));
    setMinute(addZero(date.getMinutes()));
    setSeconds(addZero(date.getSeconds()));
  }
  setInterval(generateTime, 1000);

  let day = createDate.getDate();
  let actualMonth = month[createDate.getMonth()];
  let year = createDate.getFullYear();

  return (
    <div className="App">
      <div className="container">
        <div className={`to-do-menu ${themeColor === 'black' ? `black-theme`: 
                                    themeColor === 'blue' ? `blue-theme` : 
                                    themeColor === 'green' ? `green-theme` : 
                                    themeColor === 'yellow' ? `yellow-theme`: ""}`}>
          <div 
            className="profile" 
            style={themeColor === 'blue' || themeColor === 'green' || themeColor === 'yellow' ? {border: '1px solid rgba(255, 255, 255, 0.4)'} : {border: 'none'}}>
            <Avatar className="avatar" src={AppLogo}/>
            <div style={themeColor === 'black' ? {color: 'white'} : {color: 'black'}} className="date-hour">
              <p>{day} {actualMonth} {year}</p>
              <p>{hour}:{minute}:{seconds}</p>
            </div>
          </div>

          <div className="to-do-rooms">
            <div className="theme" onClick={() => setAppTheme(!appTheme)}>
              <div className={`theme-colors ${appTheme ? "show-theme-colors" : "" }`}>
                <span onClick={() => setThemeColor("black")} className="color"></span>
                <span onClick={() => setThemeColor("blue")} className="color"></span>
                <span onClick={() => setThemeColor("green")} className="color"></span>
                <span onClick={() => setThemeColor("yellow")} className="color"></span>
              </div>

              <div className="theme-menu">
                <img className={appTheme ? `rotate-icon` : ""} src={ThemeIcon} alt="theme" />
                <span> App Theme </span>
              </div>
            </div>

            <div 
              className={`room  ${themeColor === 'black' ? 'black-menu-options' : ""}`} 
              onClick={() => {
                setAppWelcome(true);
                setForHome(true)
                setGrocery(false);
                setWork(false);
                setGym(false);
                setMovies(false);
                setFamily(false);
                setTravel(false);
                }}>
              <img src={HomeIcon} alt="" />
              <span> For Home </span>
            </div>

            <div 
              className={`room  ${themeColor === 'black' ? 'black-menu-options' : ""}`} 
              onClick={() => {
                setAppWelcome(true);
                setForHome(false)
                setGrocery(true);
                setWork(false);
                setGym(false);
                setMovies(false);
                setFamily(false);
                setTravel(false);
                }}>
              <img id="food" src={FoodBagIcon} alt="" />
              <span> Groceries </span>
            </div>

            <div 
              className={`room  ${themeColor === 'black' ? 'black-menu-options' : ""}`} 
              onClick={() => {
                setAppWelcome(true);
                setForHome(false)
                setGrocery(false);
                setWork(true);
                setGym(false);
                setMovies(false);
                setFamily(false);
                setTravel(false);
                }}>
              <img id="work" src={WorkIcon} alt="" />
              <span> Work </span>
            </div>

            <div 
              className={`room  ${themeColor === 'black' ? 'black-menu-options' : ""}`} 
              onClick={() => {
                setAppWelcome(true);
                setForHome(false)
                setGrocery(false);
                setWork(false);
                setGym(true);
                setMovies(false);
                setFamily(false);
                setTravel(false);
                }}>
              <img src={GymIcon} alt="" />
              <span> Gym </span>
            </div>

            <div 
              className={`room  ${themeColor === 'black' ? 'black-menu-options' : ""}`} 
              onClick={() => {
                setAppWelcome(true);
                setForHome(false)
                setGrocery(false);
                setWork(false);
                setGym(false);
                setMovies(true);
                setFamily(false);
                setTravel(false);
                }}>
              <img src={MoviesIcon} alt="" />
              <span> Movies to watch </span>
            </div>

            <div 
              className={`room  ${themeColor === 'black' ? 'black-menu-options' : ""}`} 
              onClick={() => {
                setAppWelcome(true);
                setForHome(false)
                setGrocery(false);
                setWork(false);
                setGym(false);
                setMovies(false);
                setFamily(true);
                setTravel(false);
                }}>
              <img src={FamilyIcon} alt="" />
              <span> Family </span>
            </div>

            <div 
              className={`room  ${themeColor === 'black' ? 'black-menu-options' : ""}`} 
              onClick={() => {
                setAppWelcome(true);
                setForHome(false)
                setGrocery(false);
                setWork(false);
                setGym(false);
                setMovies(false);
                setFamily(false);
                setTravel(true);
                }}>
              <img id="travel" src={TravelIcon} alt="" />
              <span> Travels </span>
            </div>

          </div>
        </div>

        <div className={`app-welcome ${appWelcome ? "hide-appWelcome" : ""}`}>
          <img src={AppLogo} alt="logo" />
          <h2>Welcome to Notes App</h2>
          <p>keep your important notes safe and up to date!</p>
        </div>

        {
          forHome ? 
          <ForHome weekday={weekday} month={month} /> : 
          ""
        }

        {
          grocery ? 
          <Groceries weekday={weekday} month={month} /> : 
          ""
        }

        {
          work ? 
          <Work weekday={weekday} month={month} /> : 
          ""      
        }

        {
          gym ? 
          <Gym weekday={weekday} month={month} /> : 
          ""
        }

        {
          movies ? 
          <Movies weekday={weekday} month={month} /> : 
          ""
        }

        {   
          family ? 
          <Family weekday={weekday} month={month} /> : 
          ""
        }

        {      
          travel ? 
          <Travel weekday={weekday} month={month} /> : 
          ""
        } 

      </div>
    </div>
  );
}

export default App;
