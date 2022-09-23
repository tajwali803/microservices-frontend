import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faDesktop, faFileCode } from "@fortawesome/free-solid-svg-icons";

export const Services = () => {
  return (
    <div id="services" className="services">
      <h1 className="py-5"> Feature</h1>
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="box">
              <div className="circle">
                {" "}
                <FontAwesomeIcon
                  className="icon"
                  icon={faDesktop}
                  size="2x"
                ></FontAwesomeIcon>{" "}
              </div>
              <h3> Monolithic</h3>
              <p>
                I Approach each project individually and always focus on the
                result
              </p>
            </div>
          </div>
          {/*  */}
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="box">
              <div className="circle">
                {" "}
                <FontAwesomeIcon
                  className="icon"
                  icon={faFileCode}
                  size="2x"
                ></FontAwesomeIcon>{" "}
              </div>
              <h3> Micro-Services</h3>
              <p>
                I Approach each project individually and always focus on the
                result
              </p>
            </div>
          </div>
          {/*  */}
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="box">
              <div className="circle">
                {" "}
                <FontAwesomeIcon
                  className="icon"
                  icon={faFacebookF}
                  size="2x"
                ></FontAwesomeIcon>{" "}
              </div>
              <h3> Facebook Ads SMM</h3>
              <p>
                I Approach each project individually and always focus on the
                result
              </p>
            </div>
          </div>
          {/*  */}
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="box">
              <div className="circle">
                {" "}
                <FontAwesomeIcon
                  className="icon"
                  icon={faGoogle}
                  size="2x"
                ></FontAwesomeIcon>{" "}
              </div>
              <h3> Google Ads</h3>
              <p>
                I Approach each project individually and always focus on the
                result
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
