import React from 'react'

export const Footer = () => {
  return (
    <React.Fragment>
    <footer>
      <div className="footer_logo">
        <img src="/img/logo.png" alt="logo" />
        <p>
          <span>LaslesVPN</span> is a private virtual network that 
          <br/>
          has unique features and has high security.
        </p>
        <div className="footer_redes_sociales">
          <a href="#">
            <img src="/img/Facebook.png" alt="facebook"/>
          </a>
          <a href="#">
            <img src="/img/Twitter.png" alt="twitter"/>
          </a>
          <a href="#">
            <img src="/img/Instagram.png" alt="instagram"/>
          </a>
        </div>
        <p className="footer_año">©2020Lasles<span>VPN</span></p>
      </div>
      <div className="footer_product">
        <h4>Product</h4>
        <a href="#">Download</a>
        <a href="#">Pricing</a>
        <a href="#">Locations</a>
        <a href="#">Server</a>
        <a href="#">Countries</a>
        <a href="#">Blog</a>
      </div>
      <div className="footer_product">
        <h4>Engage</h4>
        <a href="#">LeslesVPN</a>
        <a href="#">FAQ</a>
        <a href="#">Tutorials</a>
        <a href="#">About Us</a>
        <a href="#">Privacy Policy</a>
        <a href="#">Terms of Service</a>
      </div>
      <div className="footer_product earn_money">
        <h4>Earn Money</h4>
        <a href="#">Affiliate</a>
        <a href="#">Become Partner</a>
      </div>
    </footer>
    </React.Fragment>
  )
}
