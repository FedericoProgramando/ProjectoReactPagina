import React from "react";

export const Location = () => {
  return (
    <React.Fragment>
      <section className="locations">
        <h2 className="locations_header">
          Huge Global Network
          <br />
          of Fast VPN
        </h2>
        <p className="locations_locations">
          See LaslesVPN everywhere to make it easier for you when you move
          <br />
          locations.
        </p>
        <img className="locations_map" src="/img/locations.png" alt="map" />
        <img
          className="locations_sponsor"
          src="/img/Sponsored.png"
          alt="sponsor"
        />
      </section>
    </React.Fragment>
  );
};
