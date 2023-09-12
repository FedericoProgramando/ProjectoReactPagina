import React from 'react'

export const Service = () => {
  return (
    <React.Fragment>
    <section className="info">
      <div className="global_info">
        <div className="info_1">
          <img src="/img/user.png" alt="user" />
          <p className="info_text">
            90+
           <span className="grey_text">Users</span> 
          </p>
          
        </div>
        <div className="info_2">
          <img src="/img/location.png" alt="location" />
          <p className="info_text">
            30+
            <span className="grey_text">Locations</span> 
          </p>
          
        </div>
        <div className="info_3">
          <img src="/img/Server.png" alt="server" />
          <p className="info_text">
            50+
          <span className="grey_text">Servers</span> 
          </p>
        </div>
      </div>
    </section>
    </React.Fragment>
  )

};

