import React, { Component } from "react";
import './Footer.css';
class Footer extends Component
{
    render()
    {
        return(
            <footer className="text-muted py-5">
  <div className="footer">
  <div class="nzs">
    <p className="float-end mb-1">
    
      <a href= "#">Back to top</a>
    </p>
    <p id="losinfo">inderjit singh &copy; made on 9 april</p>
    <p className="mb-0">login id 30028430</p>
  </div>
  </div>
</footer>
        );
    }
}

export default Footer;