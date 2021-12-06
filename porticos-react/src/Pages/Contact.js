import axios from 'axios';
import { Link } from 'react-router-dom'
import React, {Component} from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
//import '../Form.css';
//import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

// const mapStyles = {
//   width: '110%',
//   height: '867%',
// };

var bill='0';

class Contact extends React.Component{
  
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      phone: '',
      group: '',
      time: '',
      message: '',
      Venuename:'',
      Venuephone:'',
      Venueemail:'',
      starttime:'',
      endtime:'',
      Venuegroup:'',
      Venuemessage:''
      

    }
   
  }

  render(){
   function sayHello() {
    var div = document.getElementById('contactWrapper');
    var div2 = document.getElementById('contactWrapper2');
    if (div2.style.display !== 'none') {
        div2.style.display = 'none';
        div.style.display = 'block';
    }
    else {
        div2.style.display = 'block';
        div.style.display = 'none';

    }
}
  return(
      <div className="page color-custom style-default layout-full-width nice-scroll-on button-stroke no-content-padding no-shadows header-split minimalist-header-no sticky-header sticky-tb-color ab-hide subheader-both-center menuo-no-borders footer-copy-center mobile-tb-left mobile-side-slide mobile-mini-mr-lc mobile-header-mini mobile-sticky">
      <div id="Wrapper">
        <div id="Header_wrapper">
          <header id="Header">
            <div className="header_placeholder" />
            <div id="Top_bar">
              <div className="container">
                <div className="column one">
                  <div className="top_bar_left clearfix">
                  <div className="logo">
                  <a
                  id="logo"
                  href="/Home"
                  title="Porticos"
                  >
                  <img
                      className="logo-main scale-with-grid"
                      src="/assets/content/restaurant2/images/restaurant2.png"
                      alt="Porticos Home Logo"
                  />
                  <img
                      className="logo-sticky scale-with-grid"
                      src="/assets/content/restaurant2/images/restaurant2.png"
                      alt="Porticos Home Logo"
                  />
                  <img
                      className="logo-mobile scale-with-grid"
                      src="/assets/content/restaurant2/images/restaurant2.png"
                      alt="Porticos Home Logo"
                  />
                  <img
                      className="logo-mobile-sticky scale-with-grid"
                      src="/assets/content/restaurant2/images/restaurant2.png"
                      alt="Porticos Home Logo"
                  />
                  </a>
              </div>
                    <div className="menu_wrapper">
                      <nav id="menu">
                        <ul id="menu-main-menu-left" className="menu menu_left">
                          <li>
                            <a href="/Home">
                              <span>Home</span>
                            </a>
                          </li>
                          <li>
                            <a href="/AboutUs">
                              <span>About us</span>
                            </a>
                          </li>
                          <li>
                            <a href="/Events">
                              <span>Events</span>
                            </a>
                          </li>
                        </ul>
                        <ul id="menu-main-menu-right" className="menu menu_right">
                          <li>
                            <a href="/Menu">
                              <span>Menu</span>
                            </a>
                          </li>
                          <li className="current_page_item">
                            <a href="/Contact">
                              <span>Contact</span>
                            </a>
                          </li>
                          <li>
                          <a href="/Merchandise">
                            <span>Merchandise Shop</span>
                          </a>
                        </li>
                        </ul>
                      </nav>
                      <a className="responsive-menu-toggle " href="#">
                        <i className="icon-menu-fine" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </header>
        </div>
        <div id="Content">
          <div className="content_wrapper clearfix">
            <div className="sections_group">
              <div className="entry-content">
              <div class="mfn-main-slider" id="mfn-rev-slider">
              <div id="rev_slider_1_1_wrapper" class="rev_slider_wrapper fullwidthbanner-container" data-source="gallery" style={{"margin":"0px auto","backgroundColor":"transparent","padding":"0px","marginTop":"0px","marginBottom":"0px"}}>
              <div id="rev_slider_1_1" class="rev_slider fullwidthabanner" style={{"display":"none", "data-version=": "5.3.1.5"}}>
              <ul>
                          <li data-index="rs-1" data-transition="fade" data-slotamount="default" data-hideafterloop="0" data-hideslideonmobile="off" data-easein="default" data-easeout="default" data-masterspeed="300" data-rotate="0" data-saveperformance="off" data-title="Slide" data-param1="" data-param2="" data-param3="" data-param4="" data-param5="" data-param6="" data-param7="" data-param8="" data-param9="" data-param10="" data-description="">
                              <img src="/assets/content/restaurant2/images/home_restaurant2_about_slider14.jpg" alt="" title="home_restaurant2_about_slider14" width="1920" height="720" data-bgposition="center center" data-kenburns="on" data-duration="5000" data-ease="Linear.easeNone" data-scalestart="110" data-scaleend="100" data-rotatestart="0" data-rotateend="0" data-offsetstart="0 0" data-offsetend="0 0" class="rev-slidebg" data-no-retina/>
                          </li>
                          <li data-index="rs-2" data-transition="fade" data-slotamount="default" data-hideafterloop="0" data-hideslideonmobile="off" data-easein="default" data-easeout="default" data-masterspeed="300" data-rotate="0" data-saveperformance="off" data-title="Slide" data-param1="" data-param2="" data-param3="" data-param4="" data-param5="" data-param6="" data-param7="" data-param8="" data-param9="" data-param10="" data-description="">
                              <img src="/assets/content/restaurant2/images/home_restaurant2_about_slider15.jpg" alt="" title="home_restaurant2_about_slider15" width="1920" height="720" data-bgposition="center center" data-kenburns="on" data-duration="5000" data-ease="Linear.easeNone" data-scalestart="110" data-scaleend="100" data-rotatestart="0" data-rotateend="0" data-offsetstart="0 0" data-offsetend="0 0" class="rev-slidebg" data-no-retina/>
                          </li>
                          <li data-index="rs-3" data-transition="fade" data-slotamount="default" data-hideafterloop="0" data-hideslideonmobile="off" data-easein="default" data-easeout="default" data-masterspeed="300" data-rotate="0" data-saveperformance="off" data-title="Slide" data-param1="" data-param2="" data-param3="" data-param4="" data-param5="" data-param6="" data-param7="" data-param8="" data-param9="" data-param10="" data-description="">
                              <img src="/assets/content/restaurant2/images/home_restaurant2_about_slider13.jpg" alt="" title="home_restaurant2_about_slider13" width="1920" height="720" data-bgposition="center center" data-kenburns="on" data-duration="5000" data-ease="Linear.easeNone" data-scalestart="110" data-scaleend="100" data-rotatestart="0" data-rotateend="0" data-offsetstart="0 0" data-offsetend="0 0" class="rev-slidebg" data-no-retina/>
                          </li>
                      </ul> 
                      <div class="tp-static-layers">
                          <div class="tp-caption   tp-resizeme tp-static-layer" id="slider-1-layer-3" data-x="center" data-hoffset="" data-y="center" data-voffset="20" data-width="['auto']" data-height="['auto']" data-type="text" data-responsive_offset="on" data-startslide="0" data-endslide="2" data-frames='[{"delay":260,"speed":700,"frame":"0","from":"opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]' data-textAlign="['center','center','center','center']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{"zIndex":"6","whiteSpace":"nowrap","fontSize":"48px","lineHeight":"58px","fontWeight":"400","color":"#0f13fcec","fontFamily":"Arial"}}>
                              <p2 style={{"font-size": "90px", opacity: 1, color:"#98dace"}}> 
                                  Join Us For A Unique Cultural Experience
                                </p2>
                          </div>
                      </div>
                      <div class="tp-bannertimer tp-bottom" style={{"visibility":"hidden !important"}}></div>             

                          </div>
                      </div>
                  </div>
                <div className="section mcb-section no-margin-h no-margin-v"
                  style={{
                    paddingTop: 60,
                    paddingBottom: 0,
                    backgroundImage: "url(/assets/content/restaurant2/images/home_restaurant2_sectionbg7.jpg)",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center top"
                  }}
                >
                  <div className="section_wrapper mcb-section-inner">
                    <div
                      className="wrap mcb-wrap one-second  valign-middle clearfix"
                      style={{ padding: "9px 0px 0px" }}
                    >
                      <div className="mcb-wrap-inner">
                        <div className="column mcb-column one column_column">
                          <div
                            className="column_attr clearfix align_center"
                            style={{
                              backgroundColor: "#98d8ce",
                              padding: "96px 50px 55px"
                            }}
                          >
                            <div className="image_frame image_item no_link scale-with-grid alignnone no_border">
                              <div className="image_wrapper">
                                <img
                                  className="scale-with-grid"
                                  src="/assets/content/restaurant2/images/home_restaurant2_contact2.png"
                                  alt="home_restaurant2_contact2"
                                  width={250}
                                  height={120}
                                />
                              </div>
                            </div>
                            <hr
                              className="no_line"
                              style={{ margin: "0 auto 40px" }}
                            />
                            <h5>
                              {" "}
                              Pórticos 1606 es un restaurante con bar que brinda a
                              sus invitados una experiencia única y auténtica. Aquí
                              podras disfrutar de la sazón típica de nuestra tierra
                              con una diversidad de platos fusionados.{" "}
                            </h5>
                            <hr
                              className="no_line"
                              style={{ margin: "0 auto 25px" }}
                            />
                            <h5
                              style={{
                                borderTop: "1px solid #98dace",
                                borderBottom: "1px solid #98dace",
                                padding: "10px 0",
                                margin: 0
                              }}
                            >
                              {" "}
                              +1-(787)-978-3555{" "}
                            </h5>
                            <h5
                              style={{
                                borderBottom: "1px solid #98dace",
                                padding: "5px 0"
                              }}
                            >
                              <a href="#">porticos1606@yahoo.com</a>
                            </h5>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="wrap mcb-wrap one-second  valign-middle clearfix"
                      style={{ padding: "0px 100px 60px" }}
                    >
                      <div className="mcb-wrap-inner">
                        <div className="column mcb-column one column_map ">
                          <div className="column mcb-column one align-right column_column">
                          <div className="google-map-wrapper">
                              <div
                                className="google-map"
                                id="google-map-area-58aa3de9b18db"
                                style={{ width: 530, height: 530 }}
                              >
                                &nbsp;
                              </div>
                            </div>
                            {/* Map code using APIKEY, wont work without billing account. */}
                          {/* <Map google={this.props.google} zoom={3} style={mapStyles} initialCenter={{ lat: 47.444, lng: -122.176}}> <Marker position={{ lat: 48.00, lng: -122.00}} /> </Map> */ }
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                  <div
                    className="section mcb-section"
                    style={{
                      paddingTop: 0,
                      paddingBottom: 450,
                      backgroundImage: "url(/assets/content/restaurant2/images/home_restaurant2_sectionbg8.jpg)",
                    backgroundRepeat: "no-repeat",
                      backgroundPosition: "center top"
                    }}
                  >
                    <div className="section_wrapper mcb-section-inner">
                      <div className="wrap mcb-wrap one-sixth  column-margin-0px valign-top clearfix">
                        <div className="mcb-wrap-inner">
                          <div className="column mcb-column one column_placeholder">
                            <div className="placeholder">&nbsp;</div>
                          </div>
                        </div>
                      </div>

                      <div
                        className="wrap mcb-wrap two-third  valign-top clearfix"
                        style={{
                          padding: "1px 50px 1px",
                          backgroundColor: "#98dace",
                          marginTop: 300,
                          marginBottom: -100,
                          height: "525px",
                        }}
                      >
                        <div className="mcb-wrap-inner">
                          <div className="column mcb-column one column_column">
                            <div className="column_attr clearfix align_center">
                          
                              <hr
                                className="no_line"
                                style={{ margin: "0 auto"}}
                              />
                                <h2 id="text1" style={{textDecorationLine: "none",display:'none', position:'absolute', left:'0', top:'230px', padding: "1px 45px 1px"}}>Thank you for your reservation, see you soon!</h2>
                              <div id="contactWrapper">
                              <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
                              <h2 style={{marginBottom:"40px",textDecorationLine: "none"}}>Table Reservation</h2>
                                <div className="form-group">
                                  <label htmlFor="name"></label>
                                  <input type="text" placeholder="Enter your name" style={{ width: "200px", textAlign: "center",  borderColor: "black",borderWidth: "2px", float:"left"
    }} className="form-control" id="name" value={this.state.name} onChange={this.onNameChange.bind(this)} required/>
                                </div>
                                <div className="form-group">
                                  <label htmlFor="phone"></label>
                                  <input type="tel" pattern="\(?\d{3}\)?-? *\d{3}-? *-?\d{4}" style={{borderColor: "black",borderWidth: "2px",width: "200px", textAlign: "center", float:"left", marginLeft:"11.7px"
    }} title="Please enter a valid phone number" placeholder="Enter your phone number" className="form-control" id="phone" aria-describedby="emailHelp" value={this.state.phone} onChange={this.onPhoneChange.bind(this)} required/>
                                </div>
                                <div className="form-group">
                                  <label htmlFor="time"></label>
                                  <input type="datetime-local" style={{ height:"37px",width: "192px", textAlign: "center", borderColor: "black",borderWidth: "2px", float:"left", marginBottom:"11.7px", marginLeft:"11.7px",float:"left", marginLeft:"11.7px"
    }} placeholder="Time of Arrival" className="form-control" id="time"  value={this.state.time} onChange={this.onTimeChange.bind(this)} required /> </div>
                                  <div className="form-group">
                                  <label htmlFor="group"></label>
                                  <input type="number"  style={{ height:"41.5px", width: "110px",  borderColor: "black",borderWidth: "2px",marginBottom:"11.7px", margin:"0 auto"}} min="1" max="1000" required value=">0" placeholder="Group size"className="form-control" id="group" value={this.state.group} onChange={this.onGroupChange.bind(this)} required />
                                </div>
                                <div className="form-group">
                                  <label htmlFor="message"></label>
                                  <textarea className="form-control"  placeholder="Additional message" style={{height:"192.3px",margin: "auto", marginleft: "auto", marginright: "auto", borderColor: "black",borderWidth: "2px"
    }} rows="5" id="message" value={this.state.message} onChange={this.onMessageChange.bind(this)} required />
                                </div>
                                <br></br>
                                <button  color="#ff5c5c" style={{cursor:"pointer",width:"625px",position:'absolute', left:'55px', top:'460px'}} type="button" id='stuff' onClick={sayHello}>Venue Reservation</button>
                                <button style={{cursor:"pointer",width:"625px",position:'absolute', left:'55px', top:'410px'}} type="submit" className="btn btn-primary">Submit</button>
                              </form>
                              </div>
                            </div>
                          </div>
                          </div>
                          <div className="mcb-wrap-inner">
                          <div className="column mcb-column one column_column">
                            <div className="column_attr clearfix align_center">
                              
                              <hr
                                className="no_line"
                                style={{ margin: "0 auto -40px" }}
                              />
                                <h2 id="text2" style={{textDecorationLine: "none",display:'none', position:'absolute', left:'110px', top:'230px'}}>Succesful Venue Reservation</h2>
                                <Link to="/Payment" type="button" id="link" className="btn btn-primary" style={{display: "none", position:'absolute', left:'65px', top:'290px',verticalAlign:"middle" ,shape:'rect',height:"45px", width:"230px",position:'absolute', left:'250px', top:'350px', backgroundColor: "#fac43e", color: "black",fontFamily:"futura", fontSize:"20px", textAlign:"center" }}>
                                <img src="https://www.paypalobjects.com/digitalassets/c/website/marketing/apac/C2/logos-buttons/44_Yellow_CheckOut_Pill_Button.png" alt="Check out with PayPal" />
                                </Link>
                        
                              <div id="contactWrapper2" style={{ display:"none",margin:"auto"}}>
                              <form id="contact-form" onSubmit={this.VenuehandleSubmit.bind(this)} method="POST">
                              <h2 style={{textDecorationLine: "none",marginBottom:"40px"}}>Venue Reservation</h2>
                              
                              <p style={{color:'black', position:'absolute', left:'335px', top:'150px'}}>Start Time</p>
                              
                                <div className="form-group">
                                  <label htmlFor="name"></label>
                                  <input type="text" placeholder="Enter your name" style={{marginLeft:"0px", width: "200px", textAlign: "center",  borderColor: "black",borderWidth: "2px", float:"left"
    }} className="form-control" id="name" value={this.state.Venuename} onChange={this.onVenueNameChange.bind(this)} required/>
                                </div>
                                <div className="form-group">
                                  <label htmlFor="phone"></label>
                                  <input type="tel" pattern="\(?\d{3}\)?-? *\d{3}-? *-?\d{4}" style={{borderColor: "black",borderWidth: "2px",width: "200px", textAlign: "center", float:"left", marginLeft:"11.7px", 
    }} title="Please enter a valid phone number" placeholder="Enter your phone number" className="form-control" id="phone" aria-describedby="emailHelp" value={this.state.Venuephone} onChange={this.onVenuePhoneChange.bind(this)} required/>
                                </div>
                                <div className="form-group">
                                  <label htmlFor="email"></label>
                                  <input type="email" pattern="+@+" style={{borderColor: "black",borderWidth: "2px",width: "190px", textAlign: "center", float:"left", marginLeft:"11.7px", marginBottom:"45px"
    }} title="Please enter a valid email" placeholder="Enter your email" className="form-control" id="email" aria-describedby="emailHelp" value={this.state.Venueemail} onChange={this.onVenueEmailChange.bind(this)} required/>
                                </div>
                                <div className="form-group">
                                  <label htmlFor="group"></label>
                                  <input type="number" placeholder="Group size" min="1" max="1000" required value=">0" style={{ height:"41.5px", width: "110px", textAlign: "center", borderColor: "black",borderWidth: "2px",  float:"left", marginLeft:"45px"
    }}className="form-control" id="group" value={this.state.Venuegroup} onChange={this.onVenueGroupChange.bind(this)} required />
                                </div>
                                <div className="form-group">
                                  <label htmlFor="time"></label>
                                  <input type="datetime-local" style={{ height:"37px",width: "195px", textAlign: "center", borderColor: "black",borderWidth: "2px", float:"left", marginBottom:"11.7px", marginLeft:"57px"
    }} placeholder="Time of Arrival" className="form-control" id="time" value={this.state.starttime} onChange={this.onStartTimeChange.bind(this)} required /> </div>

<div className="form-group">
                                  <label htmlFor="time"></label>
                                  <input type="number" style={{ height:"37px",width: "137px", textAlign: "center", borderColor: "black",borderWidth: "2px", float:"left", marginBottom:"11.7px", marginLeft:"20.7px"
    }} placeholder="Amount of Hours" min="1" max="12" className="form-control" id="time" value={this.state.endtime} onChange={this.onEndTimeChange.bind(this) } required /> </div>


                                
                                <div className="form-group">
                                  <label htmlFor="message"></label>
                                  <textarea className="form-control"  placeholder="Additional message" style={{ width:"800px",height:"135px", margin: "auto", marginleft: "auto", marginright: "auto", borderColor: "black",borderWidth: "2px"
    }} rows="5" id="message" value={this.state.Venuemessage} onChange={this.onVenueMessageChange.bind(this)} required />
                                </div>
                                <br></br>

                                
                                
                                <button style={{backgroundcolor:'#4CAF50',color:'white',cursor:"pointer",width:"625px",position:'absolute', left:'55px', top:'460px'}} type="button" id='stuff' onClick={sayHello}>Table Reservation</button>
                                <button style={{cursor:"pointer",width:"625px",position:'absolute', left:'55px', top:'410px'}} type="submit" className="btn btn-primary">Submit</button>
                              </form>
                              </div>
                            </div>
                            
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

         

          <footer id="Footer" className="clearfix">
            <div className="widgets_wrapper" style={{ padding: "120px 0 105px" }}>
              <div className="container">
                <div className="column one-third">
                  <aside id="text-2" className="widget widget_text">
                    <div className="textwidget">
                      <div style={{ paddingRight: "20%" }}>
                        <h4>Localization</h4>
                        <div
                          style={{ width: "30%", height: 1, background: "#98dace" }}
                        />
                        <hr className="no_line" style={{ margin: "0 auto -20px" }} />
                        <p>
                          <br />{" "}
                        </p>
                        <h5>
                          Calle Dr. Santiago Veve #55
                          <br /> San German, Puerto Rico
                          <br /> 00683{" "}
                        </h5>
                        <p />
                      </div>
                    </div>
                  </aside>
                </div>
                <div className="column one-third">
                  <aside id="text-3" className="widget widget_text">
                    <div className="textwidget">
                      <div style={{ paddingRight: "20%" }}>
                        <h4>Contact</h4>
                        <div
                          style={{ width: "30%", height: 1, background: "#98dace" }}
                        />
                        <hr className="no_line" style={{ margin: "0 auto 15px" }} />
                        <p style={{ marginBottom: 0 }}></p>
                        <h5>+1-(787)-978-3555</h5>
                        <p />
                        <p style={{ wordWrap: "break-word" }}>
                          <a href="#" />
                        </p>
                        <h5>
                          <a href="#">porticos1606@yahoo.com</a>
                        </h5>
                        <p />
                      </div>
                    </div>
                  </aside>
                </div>
                <div className="column one-third">
                  <aside id="text-4" className="widget widget_text">
                    <div className="textwidget">
                      <div style={{ paddingLeft: "20%", textAlign: "right" }}>
                        <h4>Working hours</h4>
                        <div
                          style={{
                            width: "30%",
                            display: "block",
                            float: "right",
                            height: 1,
                            background: "#98dace"
                          }}
                        />
                        <hr className="no_line" style={{ margin: "0 auto 15px" }} />
                        <p></p>
                        <h5>
                          Our business is open everyday.
                          <br /> From 12pm AST.{" "}
                        </h5>
                        <p />
                      </div>
                    </div>
                  </aside>
                </div>
              </div>
            </div>
          </footer>
        </div>
        {/* Side Menu */}
        <div id="Side_slide" className="right dark">
          <div className="close-wrapper">
            <a href="#" className="close">
              <i className="icon-cancel-fine" />
            </a>
          </div>
          <div className="menu_wrapper" />
        </div>
        <div id="body_overlay" />
      </div>
      
        )
    }
   
 

  // Table Reservation Form Listeners //
  onNameChange(event) {
    this.setState({name: event.target.value})
  }
  onPhoneChange(event) {
    this.setState({phone: event.target.value})
  }
  onTimeChange(event) {
    this.setState({time: event.target.value})}

  onGroupChange(event) {
    this.setState({group: event.target.value})
  }
  onMessageChange(event) {
    this.setState({message: event.target.value})
  }
  onVenueNameChange(event) {
    this.setState({Venuename: event.target.value})
  }
  onVenuePhoneChange(event) {
    this.setState({Venuephone: event.target.value})
  }
  onVenueEmailChange(event) {
    this.setState({Venueemail: event.target.value})
  }
  
  onStartTimeChange(event) {
    this.setState({starttime: event.target.value})
  }
  onEndTimeChange(event) {
    this.setState({endtime: event.target.value})
  }
  onVenueGroupChange(event) {
    this.setState({Venuegroup: event.target.value})
  }
  onVenueMessageChange(event) {
    this.setState({Venuemessage: event.target.value})
  }
  VenuehandleSubmit( event ) {
    var div2 = document.getElementById('contactWrapper2');
    var text2= document.getElementById('text2');
    var link= document.getElementById('link');
    div2.style.display='none';
    text2.style.display='block';
    link.style.display='block';
    switch (this.state.endtime) {
      case '1':
        bill = '100';
        break;
      case '2':
         bill = '200';
        break;
      case '3':
        bill = '300';
        break;
      case '4':
        bill = '400';
        break;
      case '5':
        bill = '500';
        break;
      case '6':
        bill = '600';
        break;
      case '7':
        bill = '700';
        break;
      case '8':
        bill = '800';
        break;
      case '9':
        bill = '900';
        break;
      case '10':
        bill = '1000';
        break;
      case '11':
        bill = '1100';
        break;
      case '12':
        bill = '1200';
        break;
    }

    event.preventDefault();

    // Send form to DB Venue Reservation Endpoint
    axios({
      method: "POST",
      url:"/event_reservations",
      data:  this.state
    }).then((response)=>{
      if (response.data.status === 'success') {
        // Change form box into success message
        alert("Successful Event Submission");
      } else if (response.data.status === 'fail') {
        // Change form box into failure message
        // possibly just an error alert()
        alert("Malformed Event Submission");
      }
    })
    // Print out JSON submission
    // alert(JSON.stringify(this.state));
  }

  handleSubmit( event ) {
    var div = document.getElementById('contactWrapper');
    var text1= document.getElementById('text1');
    div.style.display='none';
    text1.style.display='block';
    event.preventDefault();

    // Send form to DB Table Reservation Endpoint
    
    axios({
      method: "POST",
      url:"/table_reservations",
      data:  this.state
    }).then((response)=>{
      if (response.data.status === 'success') {
        // Change form box into success message
        alert("Successful Table Submission");
      } else if (response.data.status === 'fail') {
        // Change form box into failure message
        // possibly just an error alert()
        alert("Malformed Table Submission");
      }
    })
    // Print out JSON submission
    // alert(JSON.stringify(this.state));
  }
}
export {bill}
export default Contact

// export default GoogleApiWrapper({
//     apiKey: 'AIzaSyAXkkWkxcA5waXDYJsHqatO1FO4dMA4KLI'
//   })(Contact);