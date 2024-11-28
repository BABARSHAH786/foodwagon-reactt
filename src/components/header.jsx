import React from "react";
// import Logo from "../../assets/images/logo.jpg";
// import Donot from '../../images/Donot.png'
import Imagesss from "../../images/Imagesss.png";
import logo from "../../images/logo.svg";
import MapMarker from "../../images/MapMarker.png";





function Header() {
  return (
    <>
      <header>
        <section>
          <ul>
            <div class="ab7">
              <div class="abcd">
                <img class="asd" src={logo} />
              </div>
              <div class="abc">
                <h3 class="ab5">
                  food
                </h3>
                <h3 class="ab6" >
                  wagon
                </h3>
              </div>
            </div>
            <div class="nav-565">
              <h3>Deliver to:</h3>
              <img
                class="nav-logo"
                src= {MapMarker}
                alt=""
              />
              <h3>Muhammadpur Bus stand dhaka</h3>
            </div>
            <div class="search12">
              <input
                class="search123"
                type="text"
                id="fname"
                name="fname"
                value="Search food"
              />

              <div class="abcde">login</div>
            </div>
          </ul>
        </section>
        <nav className="nav-back">
          <div className="abc1">
            <h3 className="are">Are you starving?</h3>
            <p className="pq">
              Within in a few click , find meals that are accesible near you
            </p>
            <div className="nav">
              <div className="nav1">Delivery </div>
              <br />
              <div className="nav1">Pick up</div>
            </div>
            <img src={Imagesss} />
            <input
              type="text"
              id="fname"
              name="fname"
              value="Enter your address"
            />
            <h3>Find Food</h3>
          </div>
        
         
        </nav>
        <br />
        <br />
        <br />
      </header>
    </>
  );
}
export default Header;
