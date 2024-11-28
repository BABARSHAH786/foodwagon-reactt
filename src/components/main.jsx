import React from "react";
import Invoice from "../../images/Invoice.png";
import Menu from "../../images/Menu.png";
import MapMarker from "../../images/MapMarker.png";
import FoodPhoto2s from "../../images/FoodPhoto2s.png";
import FoodPhoto4s from "../../images/FoodPhoto4s.png";
import FoodPhoto5s from '../../images/FoodPhoto5s.png';
import Donut from "../../images/Donut.png";
import FoodPhoto3s from '../../images/FoodPhoto3s.png';
import Rectangle336 from '../../images/Rectangle336.png';


import Frame40s2 from '../../images/Frame40s2.png';
import Frame40 from '../../images/Frame40.png';
import Frame40s1 from '../../images/Frame40s1.png';
import Rectangle3361 from '../../images/Rectangle3361.png';
import FoodPhoto6ss from '../../images/featured/FoodPhoto6ss.png';

import FoodPhoto7ss from '../../images/featured/FoodPhoto7ss.png';
import FoodPhoto8ss from '../../images/featured/FoodPhoto8ss.png';
import FoodPhoto9ss from '../../images/featured/FoodPhoto9ss.png';
import FoodPhoto10ss from '../../images/featured/FoodPhoto10ss.png';
import FoodPhoto11ss from '../../images/featured/FoodPhoto11ss.png';
import FoodPhoto12ss from '../../images/featured/FoodPhoto12ss.png';
import FoodPhoto13ss from '../../images/featured/FoodPhoto13ss.png';
// import FoodPhoto14ss from '../../images/featured/FoodPhoto14ss.png';
import FoodPhoto14 from '../../images/FoodPhoto14.png';
import FoodPhoto15 from '../../images/FoodPhoto15.png';
import FoodPhoto16 from '../../images/FoodPhoto16.png';
import FoodPhoto17 from '../../images/FoodPhoto17.png';
import FoodPhoto18 from '../../images/FoodPhoto18.png';
import FoodPhoto19 from '../../images/FoodPhoto19.png';
// icon image
import Icon from '../../images/logo/Icon.png';
import Icon1s from '../../images/logo/Icon1s.png';
import Icon2s from '../../images/logo/Icon2s.png';
import Right from '../../images/Right.png';
import Right1s from '../../images/Right1s.png';






const Main = () => {
  return (
    <>
      <main>
        <section id="collections">
            <ul>
                <li>
                    <figure class="color7">
                        <img src= {FoodPhoto5s} alt="Pop Art: This must be the place" />
                        <figcaption><a href="#"></a>Greys Vage</figcaption>
                         <figcaption><a href="#"></a>6 Days Remaining</figcaption> 
    
    
                        
                    </figure>
                </li>
                <li>
                    <figure class="color2">
                        <img src={FoodPhoto2s} alt="Abstract: grey and green squares." />
                        <figcaption><a href="#"></a>Greys Vage</figcaption>
                    </figure>
                </li>
                <li>
                    <figure class="color6">
                    <img src={FoodPhoto3s} alt="Music: guitar leaning against wall." />
                        <figcaption><a href="#"></a>Greys Vage</figcaption>
                    </figure>
                </li>
                <li>
                    <figure class="color8">
                    <img src={FoodPhoto4s} alt="Music: guitar leaning against wall." />
                        <figcaption><a href="#"></a>Greys Vage</figcaption>
                    </figure>
                </li>
                
            </ul>
        </section>



        <div class="howwork">
            <h5 class="center fw-bold text-danger fs-3 fs-lg-5 lh-sm my-6">How does it work</h5>
            <div class="how">
                <div class="how1">
                <img src={MapMarker} alt="Music: guitarr leaning against wall." />
                <h6>Select location</h6>
                <p>Choose the location where your</p> <p>food will be delivered.</p> 
               </div>
               <div class="how2">
               <img src={Menu} alt="Music: guitar leaning against wall." />
                <h6>Choose order</h6>
                <p>Check over hundred of menus to </p><p> pick your favorite food</p>
                </div>
                <div class="how3">
                <img src={Invoice} alt="Music: guitar leaning against wall." />
                <h6 class="king">Pay advanced</h6>
                <p>It's quick, safe, and simple. Select</p><p> several methods of payment</p>
                </div>
    
                <div class="how4">
                <img src={Donut} alt="Music: guitar leaning against wall." />
                <h6 >Enjoy meals</h6>
                <p>Food is made and delivered directly </p><p>to your home.</p>
                </div>
    
            </div>
        </div>
        {/* newcheck */}
        <section>
            <h4 class="center poi">Popular items</h4>
            <div class="order">
                <div class="order1">
                     <img class="orderround" src={Rectangle336} alt="Music guitar leaning against wall." width="180" /> 
                    <h6>Cheese Burger</h6>
                    <p>Burger Arena</p>
                    <h6>$3.88</h6>
                    <button   >Order Now</button>

    
    
    
                </div>
                <div class="order2">
                    <img src={Frame40s2} alt=""width="180" /> 
                    <h6>Toffe's Cake</h6>
                    <p>Top Sticks</p>
                    <h6>$4.00</h6>
                    <button  >Order Now</button>
    
    
                </div>
    
                <div class="order3">
                <img src={Frame40} alt=""width="180" /> 
                    <h6>Dan Cake</h6>
                    <p>Cake World</p>
                    <h6>$1.99</h6>
                    <button  >Order Now</button>
    
    
                </div>
                <div class="order4">
                <img src={Frame40s1} alt=""width="180" /> 
                    <h6>Crispy Sandwitch</h6>
                    <p>Fastfood Dine</p>
                    <h6>$3.00</h6>
                    <button  >Order Now</button>
    
                </div>
                <div class="order5">
                <img src={Rectangle3361} alt=""width="180" /> 
                    <h6>Thai Soup</h6>
                    <p>Foody man</p>
                    <h6>$2.79</h6>
                    <button  >Order Now</button>
    
    
                </div>
            </div>
        </section>

        {/* second check */}
        <section class=" featured">
        <div class="feat11">
            <div>
            <h3 class="center featza">Featured Restaurents</h3>
            <img src={FoodPhoto6ss} width='250' height="250" />
            <h5>Foodworld</h5>
            </div>
        </div>
        <div class="feat2">
        <img src={FoodPhoto7ss} width='250' height="250" />
            <h5>Pizaahub</h5>
        </div>
        <div class="feat3">
        <img src={FoodPhoto8ss} width='250' height="250" />
            <h5>Donuts hut</h5>
        </div>
    
        <div class="feat4">
        <img src={FoodPhoto9ss} width='250' height="250" />
            <h5>Donuts hut</h5>
        </div>
    
    
        <div class="feat5">
        <img src={FoodPhoto10ss} width='250' height="250" />
            <h5>Ruby Tuesday</h5>
        </div>
    
        <div class="feat6">
        <img src={FoodPhoto11ss} width='250' height="250" />
            <h5>kuakata Fried Chicken</h5>
        </div>
    
        <div class="feat7">
        <img src={FoodPhoto12ss} width='250' height="250" />
            <h5>Red Square</h5>
        </div>
    
        <div class="feat8">
        <img src={FoodPhoto13ss} width='250' height="250" />
            <h5>Taco Bell</h5>
        </div>
              <div class="view">
                View All  
    
              </div>
        </section>
        {/* third */}
        <section class='gapz'>
            <div class="search">
                <img src={FoodPhoto14} width='190' height="190" />
                <h6>Pizza</h6>
            </div>
            <div class="search">
            <img src={FoodPhoto15} width='190' height="190" />
                <h6>Burger</h6>
            </div>
            <div class="search">
            <img src={FoodPhoto16} width='190' height="190" />
                <h6>Noodles</h6>
            </div>
            <div class="search">
            <img src={FoodPhoto17} width='190' height="190" />
                <h6>Sub-sandwich</h6>
            </div>
            <div class="search">
            <img src={FoodPhoto18} width='190' height="190" />
                <h6 id="hero">Chowmein</h6>
            </div>
            <div class="search" >
            <img src={FoodPhoto19} width='190' height="190" />
                <h6>Steak</h6>
            </div>
         
             {/* <span class="dot"><</span> 
            <span class="dot">></span> */}
        </section>
        <div className="center z" >
        <h3 >Search by Food</h3>
            <h6 class="dot1" >View All</h6>
            </div>

        {/* forth */}
        <section class="new123">
            <div class="logo">
                <span class="watch">
                    <img class="logo2" src={Icon} />
                    <h5 class="logo2">Daily</h5>
                    <h5 class="logo23">Discounts</h5>
                </span>
                <span class="watch">
                <img class="logo2" src={Icon1s} />
                    <h5 class="logo2">Live</h5>
                    <h5 class="logo23">Tracing</h5>
                </span>
                <span class="watch">
                <img class="logo2" src={Icon2s} />
                    <h5 class="logo2">Quick</h5>
                    <h5 class="logo21">Delivery</h5>
                </span>
            </div>
        </section>


        {/* fifth */}
        <section>
            <div class="last">
                <div className="last-one">
                    <div className="last-two">
                <h3 id="last12">Bests deals </h3>
                <h3 id="last12">Crispy</h3>
                <h3 id="last12">Sandwiches</h3>
                <p id="last12">Enjoy the last size of sandwitches.Complete</p>
                <p id="last12">perfect slice of sandwitches</p>
                <div class="orderl">
                        PROCEED TO ORDER 
                    </div>
                </div>

                <img id="last12z" src={Right} width="258" />
                </div>
                <div class="last1">
                    <img src={Right1s} />

                    <div className="last-ones">

                    <h3>Celebrate parties</h3>
                    <h3>with Fried Chicken</h3><br />
                    <p>Get the best friend chicken smeared with a lip</p>
                    smacking lemaon chili flavor. Check out
                    <p>best deals for fried chicken.</p>
                    <div class="orderl">
                        PROCEED TO ORDER 
                    </div>
                    </div>
                </div>
                {/* <div>
                    <div class="last2"></div>
                    <h3>Wanna eat hot</h3>
                    <h3>& spicy pizza?</h3>
                    <p>Pair up with a friend and enjoy the</p>
                    <p>hot and crispy pizza pops. Try it </p>
                    <p>with the best deals</p>
                    
                    <div class="orderl">
                        PROCEED TO ORDER 
                    </div>
                </div> */}
            </div>
        </section>
            <div class="foot2">
                <div class="container">

                    <div class="cont1">
                    <h3>Our top cities</h3>
    
                    <ul>
                    <li><a href="">San Francisco</a></li>
                    <li><a href="">Miami</a></li>
                    <li><a href="">San Diegn</a></li>
                    <li><a href="">East Bay</a></li>
                    <li><a href="">Long Beach</a></li>
                    </ul>
                    </div>
    
    
    
                    <div class="cont1">
                    
                    <li><a href="">Los Angeles </a></li>
                    <li><a href="">Washington DC</a></li>
                    <li><a href="">Seattle</a></li>
                    <li><a href="">Portland</a></li>
                    <li><a href="">Nahville</a></li>
                    
    
    
                    
                    
                    </div>
                    <div class="footer-content">
                        <li><a href="">New York City</a></li>
                        <li><a href="">Orange County</a></li>
                        <li><a href="">Atlanta</a></li>
                        <li><a href="">Charlotte</a></li>
                        <li><a href="">Denver</a></li>
                    </div>
                
                    <div class="footer-content">
                        <li><a href="">Chicago </a></li>
                        <li><a href="">Pheonix</a></li>
                        <li><a href="">Las Vegas</a></li>
                        <li><a href="">Sacramento</a></li>
                        <li><a href="">Oklahoma City</a></li>
                    
                    </div>
                    <div class="footer-content">
                            <li><a href="">Columbus</a></li>
                            <li><a href="">New Mexico</a></li>
                            <li><a href="">Albuquerque</a></li>
                            <li><a href="">Sarcramento</a></li>
                            <li><a href="">Oklahoma City</a></li>
                        
                    </div>
    
                </div>         
                <div class="lineq display-flex"></div>
        <div class="company display-flex">
                    <div class="company1 ">
                        <h3 className="whitez">Company</h3>
                        <li><a href="">About</a></li>
                        <li><a href="">Team</a></li>
                        <li><a href="">Careers</a></li>
                        <li><a href="">Blog</a></li>
                        
    
                    </div>
                    <div class="company1 ">
                        <h3 className="whitez">Contact</h3>
                        <li><a href="">Help & Support</a></li>
                        <li><a href="">Partner with us</a></li>
                        <li><a href="">Ride with us</a></li>
    
                    </div>
                    <div class="company1">
                        <h3 className="whitez">Legal</h3>
                        <li><a href="">Term & Condition</a></li>
                        <li><a href="">Refund & Cancellation</a></li>
                        <li><a href="">Privacy Policy</a></li>
                        <li><a href="">Cookie Policy</a></li>
    
                    </div>
                    <div class="footer-down">
                        <h3 className="whitez">Follow Us</h3>
                        <ul class="social-icons11">
                        <li><a href=""><i class="fab fa-facebook"></i></a></li>
                        <li><a href=""><i class="fab fa-twitter"></i></a></li>
                        <li><a href=""><i class="fab fa-instagram"></i></a></li>
                        </ul>
                        <p>Received exclusive offers in your mailbox</p>
                        <div class="input123">
                            <form class ="form" action="">
                                <input class="input1234" type="text" name="" placeholder="Enter Your email" />
                                <button class="button-form" type="submit"><i class="fa fa-search" aria-hidden="true"></i></button>
                                <button class="button-form" type="submit"><i class="fab fa-email" aria-hidden="true"></i></button>
    
    
                            </form>
                        </div>
    
    
    
                        </div>     

                    </div>

    
                </div>
    
    .

        </main>
    </>
  );
};

export default Main;
