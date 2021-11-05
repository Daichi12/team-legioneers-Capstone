import React, {Component} from 'react';
class Contact extends React.Component{

    render(){
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
                      <div
                        className="section mcb-section"
                        style={{ paddingTop: 220, paddingBottom: 250 }}
                        data-parallax="3d"
                      >
                        <img
                          className="mfn-parallax"
                          src="/assets/content/restaurant2/images/home_restaurant2_sectionbg6.png"
                          alt="Porticos contact banner"
                          style={{ opacity: 100}}
                        />
                        <div className="section_wrapper mcb-section-inner">
                          <div className="wrap mcb-wrap one  valign-top clearfix">
                            <div className="mcb-wrap-inner">
                              <div className="column mcb-column one-fourth column_placeholder">
                                <div className="placeholder">&nbsp;</div>
                              </div>
                              <div className="column mcb-column one column_column ">
                                <div
                                  className="column_attr clearfix align_center"
                                  style={{
                                    backgroundColor: "rgb(48, 48, 48)",
                                    padding: "30px 20px 20px"
                                  }}
                                >
                                  <h3 style={{ color: "#89d8cc" }}>
                                    {" "}
                                    Join us for an Unique Cultural Experience
                                  </h3>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="section mcb-section no-margin-h no-margin-v"
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
                          paddingBottom: 290,
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
                              padding: "30px 60px 20px",
                              backgroundColor: "#98dace",
                              marginTop: 220
                            }}
                          >
                            <div className="mcb-wrap-inner">
                              <div className="column mcb-column one column_column">
                                <div className="column_attr clearfix align_center">
                                  <h2>Make a Reservation</h2>
                                  <hr
                                    className="no_line"
                                    style={{ margin: "0 auto 25px" }}
                                  />
                                  <div id="contactWrapper">
                                    <h2>Table Reservation</h2>
                                    <form id="contactform">
                                      {/* One Second (1/2) Column */}
                                      <div className="column one-second">
                                        <input
                                          placeholder="Name"
                                          type="text"
                                          name="name"
                                          id="name"
                                          size={40}
                                          aria-required="true"
                                          aria-invalid="false"
                                        />
                                      </div>
                                      {/* One Second (1/2) Column */}
                                      <div className="column one-second">
                                        <input
                                          placeholder="Phone Number"
                                          type="phone"
                                          name="phone"
                                          id="phone"
                                          size={40}
                                          aria-required="true"
                                          aria-invalid="false"
                                        />
                                      </div>
                                      <div className="column one">
                                        <input
                                          placeholder="Time of Arrival"
                                          type="text"
                                          name="subject"
                                          id="subject"
                                          size={40}
                                          aria-invalid="false"
                                        />
                                      </div>
                                      <div className="column one">
                                        <input
                                          placeholder="Size of Group"
                                          type="text"
                                          name="group"
                                          id="group"
                                          size={40}
                                          aria-invalid="false"
                                        />
                                      </div>
                                      <div className="column one">
                                        <textarea
                                          placeholder="Additional Notes"
                                          name="body"
                                          id="body"
                                          style={{ width: "100%" }}
                                          rows={4}
                                          aria-invalid="false"
                                          defaultValue={""}
                                        />
                                      </div>
                                      <div className="column one">
                                        <input
                                          type="button"
                                          defaultValue="Submit"
                                          id="submit"
                                          onclick="return check_values();"
                                        />
                                      </div>
                                    </form>
                                  </div>
                                  <div id="contactWrapper2" style={{ display: "none" }}>
                                    <h2>Venue Reservation</h2>
                                    <form id="contactform">
                                      {/* One Second (1/2) Column */}
                                      <div className="column one-second">
                                        <input
                                          placeholder="Your FACE"
                                          type="text"
                                          name="name"
                                          id="name"
                                          size={40}
                                          aria-required="true"
                                          aria-invalid="false"
                                        />
                                      </div>
                                      {/* One Second (1/2) Column */}
                                      <div className="column one-second">
                                        <input
                                          placeholder="Your phone number"
                                          type="email"
                                          name="email"
                                          id="email"
                                          size={40}
                                          aria-required="true"
                                          aria-invalid="false"
                                        />
                                      </div>
                                      <div className="column one">
                                        <input
                                          placeholder="Time"
                                          type="text"
                                          name="subject"
                                          id="subject"
                                          size={40}
                                          aria-invalid="false"
                                        />
                                      </div>
                                      <div className="column one">
                                        <textarea
                                          placeholder="Message"
                                          name="body"
                                          id="body"
                                          style={{ width: "100%" }}
                                          rows={10}
                                          aria-invalid="false"
                                          defaultValue={""}
                                        />
                                      </div>
                                      <div className="column one">
                                        {/* BRAINTREE */}
                                        <input
                                          type="button"
                                          defaultValue="Submit"
                                          id="submit"
                                          onclick="return check_values();"
                                        />
                                      </div>
                                    </form>
                                  </div>
                                </div>
                                <title>toggle switch</title>
                                <style
                                  dangerouslySetInnerHTML={{
                                    __html:
                                      "\n                                                    h1 {\n                                                        text-align: center;\n                                                        color: rgb(65, 156, 136);\n                                                    }\n                                                            \n                                                    /* toggle in label designing */\n                                                    .toggle {\n                                                      \n                                                     left: 50%;\n                                                     margin-right: -50%;\n                                                     transform: translate(-50%, -50%);\n                                                        position : absolute ;\n                                                        display : inline-block;\n                                                        width : 50px;\n                                                        height : 27px;\n                                                        background-color: rgb(0, 225, 255);\n                                                        border-radius: 30px;\n                                                        border: 2px solid rgb(0, 0, 0);\n                                                    }\n                                                            \n                                                    /* After slide changes */\n                                                    .toggle:after {\n                                                        \n                                                        content: '';\n                                                        position: absolute;\n                                                        width: 25px;\n                                                        height: 25px;\n                                                        border-radius: 50%;\n                                                        background-color: rgb(167, 61, 0);\n                                                        top: 1px; \n                                                        left: 1px;\n                                                        transition:  all 0.5s;\n                                                    }\n                                                            \n                                                    /* Toggle text */\n                                                    p {\n                                                        text-align: center;\n                               \n                                                        font-family: Arial, Helvetica, sans-serif;\n                                                        font-weight: bold;\n                                                    }\n                                                            \n                                                    /* Checkbox checked effect */\n                                                    .checkbox:checked + .toggle::after {\n                                                        left : 23px; \n                                                    }\n                                                            \n                                                    /* Checkbox checked toggle label bg color */\n                                                    .checkbox:checked + .toggle {\n                                                        \n                                                        background-color: rgb(17, 188, 255);\n                                                    }\n                                                            \n                                                    /* Checkbox vanished */\n                                                    .checkbox { \n                                                        display : none;\n                                                    }\n                                                "
                                  }}
                                />
                                <h1>Reservation Switch </h1>
                                <p>Toggle switch to change Reservations Type</p>
                                <br />
                                <br />
                                <input type="checkbox" id="flap" className="checkbox" />
                                <label htmlFor="flap" className="toggle"></label>
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
                            <hr className="no_line" style={{ margin: "0 auto 15px" }} />
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
    }
    export default Contact
