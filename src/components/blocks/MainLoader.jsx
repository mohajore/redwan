import React, { Component } from "react";
// import { Modal } from "react-bootstrap";

class MainLoader extends Component {
  render() {
    return (
      // <div className="main-loader">
      //     <div className="lds-default">
      //         <div />
      //         <div />
      //         <div />
      //         <div />
      //         <div />
      //         <div />
      //         <div />
      //         <div />
      //         <div />
      //         <div />
      //         <div />
      //         <div />
      //     </div>
      // </div>
      <div className="loader-modal">
        <img src="/images/red.eng.log.svg" alt="logo" className="rotating" />
      </div>
    );
  }
}

export default MainLoader;
