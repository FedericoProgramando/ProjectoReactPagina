import React from "react";
import { useEffect, useState } from "react";

type Subcription = {
  title: string;
  price: number | "Free";
  benefits: string[];
  currency: "U$S" | "$ARG";
  type: "monthly" | "daily" | "weekly";
};

export const Plan = () => {
  const [subcriptions, setSubcriptions] = useState<Subcription[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>();

  const handleGetSubscription = async () => {
    const response = await fetch(
      "https://6xrb5goi1l.execute-api.us-east-1.amazonaws.com/api/subscription"
    );
    const data = await response.json();
    setSubcriptions(data);
  };

  useEffect(() => {
    setLoading(true);
    handleGetSubscription()
      .catch((error) => {
        setError(error.message);
      })

      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <React.Fragment>
      <section className="plan">
        <h2 className="plan_text">Choose Your Plan</h2>
        <p className="plan_main_text">
          Let's choose the package that is best for you and explore it happily
          and
          <br />
          cheerfully.
        </p>
        <div className="plan_main_planes">
          {subcriptions.map((subscription) => (
            <div className="plan_select">
              <img className="box" src="/img/plan.png" alt="box" />
              <p className="plan_categoria">{subscription.title}</p>

              <div className="plan_main_aceptar">
                {subscription.benefits.map((benefit) => (
                  <div className="plan_content">
                    <img src="/img/tilde_2.png" alt="tilde" />
                    <p key={`${subscription.title + benefit}`}>{benefit}</p>
                  </div>
                ))}
              </div>

              <p className="plan_precio">
                {subscription.price} {subscription.currency}
              </p>
              <button className="plan_button">Select</button>
            </div>
          ))}
        </div>
      </section>
    </React.Fragment>
  );
};
