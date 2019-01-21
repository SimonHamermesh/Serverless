import React, { Component } from "react";

const bdawks = require("../../../img/bdawks.jpg");
 
class Pizza extends Component {
  render() {
    return (
      <div>
        <h2>PIZZA</h2>
        <img src={bdawks} />
        <p>Mauris sem velit, vehicula eget sodales vitae,
        rhoncus eget sapien:</p>
        <ol>
          <li>Nulla pulvinar diam</li>
          <li>Facilisis bibendum</li>
          <li>Vestibulum vulputate</li>
          <li>Eget erat</li>
          <li>Id porttitor</li>
        </ol>
      </div>
    );
  }
}
 
export default Pizza;