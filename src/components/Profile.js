import React from "react";
import img1 from './html5-original.svg'
import img2 from './css3-original.svg'
import img3 from './git-original.svg'
import img4 from './github-original.svg'
import img5 from './javascript-original.svg'

import './profile.css' ;
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function Profile() {
  return (
      <Router>
    <div id="container">

    <header>
        <div className="quoteoftheday" style={{color:"brown"}}>Welcome to My Profile</div>
        <div className="name" style={{color:"brown"}}>Gul.</div>
    </header>

    <article>
        
        <div className="quoteby">
            <h2>Shanza Gul</h2>
        </div>

        <div className="quote">
            <h4 style={{color:"brown"}}><p>I’m a front-end developer and an aspiring UI/UX designer. I love to create seamless experiences for the web that are accessible and performant. I love solving problems and that's what got me into coding. Currently I am hooked with React Js</p>
</h4>
        </div>

    </article>

    <footer>

        <div className="skills">
            <h6>Menu</h6>
            <ul>
                <li><Link to="/" >Skills</Link></li>
                <li><Link to="/professional">Professional Experience</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/contact">Contact</Link></li>

            </ul>
        </div>

       
        <Switch>
          <Route exact path="/">
          <div className="content">
          <p>Skills</p>
          <img src={img1} alt="picture1" style={{height: "70px" ,padding: "5px"}} />
          <img src={img2} alt="picture22" style={{height: "70px",padding: "5px"}} />
          <img src={img3} alt="picture33" style={{height: "70px",padding: "5px"}} />
          <img src={img4} alt="picture44" style={{height: "70px",padding: "5px"}} />
          <img src={img5} alt="picture55" style={{height: "70px",padding: "5px"}} />


          </div>
          </Route>
          <Route exact path="/professional">
          <div className="content">
          <h4>Frontend-Dev Intern : </h4>
          <p><a href="https://interns.pk/">interns.pk</a> </p>
        </div>
          </Route>
          <Route exact path="/projects">
          <div className="content">
          <p><a href="https://codesandbox.io/s/wild-cookies-h4iv3">BMR and Calorie Calculator</a> </p>
          <p><a href="https://codesandbox.io/s/elegant-murdock-4gy7c">Quiz App</a> </p>
          <p><a href="https://codesandbox.io/s/intelligent-tesla-7togr">Leaders Board App</a> </p>
        </div>
          </Route>
          <Route exact path="/contact">
          <div className="content">
          <p>Mail me @ gulshanza77@gmail.com</p>
        </div>
          </Route>
        </Switch>

    </footer>
</div>
   </Router>
  );
}

