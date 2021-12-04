import React from "react";
import Calendar from "@ericz1803/react-google-calendar";
import { css } from "@emotion/react";

const API_KEY = "AIzaSyAXkkWkxcA5waXDYJsHqatO1FO4dMA4KLI";
let calendars = [
  {calendarId: "porticos1606@gmail.com"},
 
];
let styles = {
    //you can use object styles (no import required)
    calendar: {
      borderWidth: "50px", //make outer edge of calendar thicker
      borderColor: "#98dace"
    },
    
    //you can also use emotion's string styles
    today: css`
     /* highlight today by making the text red and giving it a red border */
      color: black;
      border: 1px solid blue;
    `
  }


class Events extends React.Component{

    render(){

    return (
    <div>
    <div class="blog color-custom style-default layout-full-width nice-scroll-on button-stroke no-content-padding no-shadows header-split minimalist-header-no sticky-header sticky-tb-color ab-hide subheader-both-center menuo-no-borders footer-copy-center mobile-tb-left mobile-side-slide mobile-mini-mr-lc mobile-header-mini mobile-sticky">
    <div id="Wrapper">
        <div id="Header_wrapper">
            <header id="Header">
                <div class="header_placeholder"></div>
                <div id="Top_bar">
                    <div class="container">
                        <div class="column one">
                            <div class="top_bar_left clearfix">
                                <div class="logo">
                                    <a id="logo" href="/Home" title="Restaurant2 - Theme">
                                    <img class="logo-main scale-with-grid" src="/assets/content/restaurant2/images/restaurant2.png" alt="restaurant2" />
                                    <img class="logo-sticky scale-with-grid" src="/assets/content/restaurant2/images/restaurant2.png" alt="restaurant2" />
                                    <img class="logo-mobile scale-with-grid" src="/assets/content/restaurant2/images/restaurant2.png" alt="restaurant2" />
                                    <img class="logo-mobile-sticky scale-with-grid" src="/assets/content/restaurant2/images/restaurant2.png" alt="restaurant2" />
                                    </a>
                                </div>
                                <div class="menu_wrapper">
                                    <nav id="menu">
                                        <ul id="menu-main-menu-left" class="menu menu_left">
                                            <li>
                                                <a href="/Home"><span>Home</span></a>
                                            </li>
                                            <li>
                                                <a href="/AboutUs"><span>About us</span></a>
                                            </li>
                                            <li class="current_page_parent">
                                                <a href="/Events"><span>Events</span></a>
                                            </li>
                                        </ul>
                                        <ul id="menu-main-menu-right" class="menu menu_right">
                                            <li>
                                                <a href="/Menu"><span>Menu</span></a>
                                            </li>
                                            <li>
                                                <a href="/Contact"><span>Contact</span></a>
                                            </li>
                                            <li>
                          <a href="/Merchandise">
                            <span>Merchandise Shop</span>
                          </a>
                        </li>
                                        </ul>
                                    </nav><a class="responsive-menu-toggle " href="#"><i class="icon-menu-fine"></i></a>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>   
         </header>
         <div class="mfn-main-slider" id="mfn-rev-slider">
                    <div id="rev_slider_1_1_wrapper" class="rev_slider_wrapper fullwidthbanner-container" data-source="gallery" style={{"margin":"0px auto","backgroundColor":"transparent","padding":"0px","marginTop":"0px","marginBottom":"0px"}}>
                        <div id="rev_slider_1_1" class="rev_slider fullwidthabanner" style={{"display":"none", "data-version":"5.3.1.5"}}>
                            <ul>
                                <li data-index="rs-1" data-transition="fade" data-slotamount="default" data-hideafterloop="0" data-hideslideonmobile="off" data-easein="default" data-easeout="default" data-masterspeed="300" data-rotate="0" data-saveperformance="off" data-title="Slide" data-param1="" data-param2="" data-param3="" data-param4="" data-param5="" data-param6="" data-param7="" data-param8="" data-param9="" data-param10="" data-description="">
                                    <img src="assets/content/restaurant2/images/home_restaurant2_about_slider10.jpg" alt="" title="home_restaurant2_slider_slide10" width="1920" height="820" data-bgposition="center center" data-kenburns="on" data-duration="5000" data-ease="Linear.easeNone" data-scalestart="110" data-scaleend="100" data-rotatestart="0" data-rotateend="0" data-offsetstart="0 0" data-offsetend="0 0" class="rev-slidebg" data-no-retina/>
                                </li>
                                <li data-index="rs-2" data-transition="fade" data-slotamount="default" data-hideafterloop="0" data-hideslideonmobile="off" data-easein="default" data-easeout="default" data-masterspeed="300" data-rotate="0" data-saveperformance="off" data-title="Slide" data-param1="" data-param2="" data-param3="" data-param4="" data-param5="" data-param6="" data-param7="" data-param8="" data-param9="" data-param10="" data-description="">
                                    <img src="assets/content/restaurant2/images/home_restaurant2_about_slider11.jpg" alt="" title="home_restaurant2_slider_slide11" width="1920" height="862" data-bgposition="center center" data-kenburns="on" data-duration="5000" data-ease="Linear.easeNone" data-scalestart="110" data-scaleend="100" data-rotatestart="0" data-rotateend="0" data-offsetstart="0 0" data-offsetend="0 0" class="rev-slidebg" data-no-retina/>
                                </li>
                                <li data-index="rs-3" data-transition="fade" data-slotamount="default" data-hideafterloop="0" data-hideslideonmobile="off" data-easein="default" data-easeout="default" data-masterspeed="300" data-rotate="0" data-saveperformance="off" data-title="Slide" data-param1="" data-param2="" data-param3="" data-param4="" data-param5="" data-param6="" data-param7="" data-param8="" data-param9="" data-param10="" data-description="">
                                    <img src="assets/content/restaurant2/images/home_restaurant2_about_slider12.jpg" alt="" title="home_restaurant2_slider_slide12" width="1920" height="862" data-bgposition="center center" data-kenburns="on" data-duration="5000" data-ease="Linear.easeNone" data-scalestart="110" data-scaleend="100" data-rotatestart="0" data-rotateend="0" data-offsetstart="0 0" data-offsetend="0 0" class="rev-slidebg" data-no-retina/>
                                </li>
                            </ul>
                            <div class="tp-static-layers">
                                <div class="tp-caption   tp-resizeme tp-static-layer" id="slider-1-layer-3" data-x="center" data-hoffset="" data-y="center" data-voffset="20" data-width="['auto']" data-height="['auto']" data-type="text" data-responsive_offset="on" data-startslide="0" data-endslide="2" data-frames='[{"delay":260,"speed":700,"frame":"0","from":"opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]' data-textAlign="['center','center','center','center']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{"zIndex":"6","whiteSpace":"nowrap","fontSize":"48px","lineHeight":"58px","fontWeight":"400","color":"#0f13fcec","fontFamily":"Arial"}}>
                                    <p2 style={{"font-size": "90px", opacity: 1, color:"#98dace"}}> 
                                        Join our local cultural events
                                     </p2>
                                </div>
                            </div>
                            <div class="tp-bannertimer tp-bottom" style={{"visibility":"hidden !important"}}></div>
                        </div>
                    </div>
                </div>
        <footer id="Footer" class="clearfix">
        <Calendar apiKey={API_KEY} calendars={calendars} styles={styles} />
            <div class="widgets_wrapper" style={{"padding":"120px 0 105px"}}>
                <div class="container">
                    <div class="column one-third">
                        <aside id="text-2" class="widget widget_text">
                            <div class="textwidget">
                                <div style={{"paddingRight":"20%"}}>
                                    <h4>Localization</h4>
                                    <div style={{"width":"30%","height":"1px","background":"#98dace"}}></div>
                                    <hr class="no_line" style={{"margin":"0 auto -5px"}}/>
                                    <p>
                                        <br/> 
                                        <h5> Calle Dr. Santiago Veve #55
                                        <br/> San German, Puerto Rico
                                        <br/> 00683 
                                        </h5>
                                    </p>
                                </div>
                            </div>
                        </aside>
                    </div>
                    <div class="column one-third">
                        <aside id="text-3" class="widget widget_text">
                            <div class="textwidget">
                                <div style={{"paddingRight":"20%"}}>
                                    <h4>Contact</h4>
                                    <div style={{"width":"30%","height":"1px","background":"#98dace"}}></div>
                                    <hr class="no_line" style={{"margin":"0 auto 15px"}}/>
                                    <p style={{"margin-bottom": "0px"}}>
                                        <h5>+1-(787)-978-3555</h5>
                                    </p>
                                    <p style={{"word-wrap": "break-word"}}>
                                        <a href="/#"><h5>porticos1606@yahoo.com</h5></a>
                                    </p>
                                </div>
                            </div>
                        </aside>
                    </div>
                    <div class="column one-third">
                        <aside id="text-4" class="widget widget_text">
                            <div class="textwidget">
                                <div style={{'padding-left': '20%', 'text-align': 'right'}}>
                                    <h4>Working hours</h4>
                                    <div style={{width: '30%', display: 'block', float: 'right', height: '1px', background: '#98dace'}}></div>
                                    <hr class="no_line" style={{margin: "0 auto 15px"}}/>
                                    <p>
                                        <h5>Our business is open everyday.
                                        <br /> From 12pm AST. </h5>
                                    </p>
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </div>
        </footer>
               
  
    <div id="Side_slide" class="right dark">
        <div class="close-wrapper">
            <a href="#" class="close"><i class="icon-cancel-fine"></i></a>
        </div>
        <div class="menu_wrapper"></div>
    </div>
    <div id="body_overlay"></div>
            </div>
            </div>
            </div>
            </div>
            )

        }
    }
    
    export default Events