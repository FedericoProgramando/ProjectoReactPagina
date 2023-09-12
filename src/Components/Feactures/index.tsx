import React from 'react'

export const Features = () => {
  return (
    <React.Fragment>
        <section className="features">
        <img className="features_img" src="/img/illustration2.png" alt="" />
      <div className="features_texts">
        <div className="features_main_text">
          <h2>
            We Provide Many 
            <br/>
            Features You Can Use
          </h2>
          <p>
            You can explore the features that we provide with fun 
            <br/>
            and have their own functions each feature.
          </p>
        </div>
        <div className="features_global">
          <ul className="features_lista">
            <li>
              <img src="/img/tilde.png" alt="tilde"/>
              Powerfull online protection.
            </li>
            <li>
              <img src="/img/tilde.png" alt="tilde"/>
              Internet without borders.
            </li>
            <li>
              <img src="/img/tilde.png" alt="tilde"/>
              Supercharged VPN.
            </li>
            <li>
              <img src="/img/tilde.png" alt="tilde"/>
              No specific time limits.
            </li>
          </ul>
        </div>
      </div>
    </section>
    </React.Fragment>
  )
}
