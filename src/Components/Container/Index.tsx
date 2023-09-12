import React from "react";

export const Container = () => {
  return (
    <React.Fragment>
      <section className="container_1">
        <div className="text_1">
          <h1>
            Want anything to be <br />
            easy with <span>LaslesVPN</span>
          </h1>
          <p className="text">
            Provide a network for all your needs with ease and fun using
            <span className="strong"> LaslesVPN</span>
            <br />
            discover interesting features from us.
          </p>
          <button className="get_started">Get Started</button>
        </div>
        <div className="main">
          <img
            className="main_1"
            src="/img/illustration1.png"
            alt="LaslesVPN"
          />
        </div>
      </section>
    </React.Fragment>
  );
};
