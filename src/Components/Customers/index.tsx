import React, { useEffect, useState } from "react";

type Testimonial = {
  avatar: string;
  fullName: string;
  testimonial: string;
};

export const Customers = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | undefined>();

  const handleGetTestimonials = async () => {
    try {
      const response = await fetch(
        "https://6xrb5goi1l.execute-api.us-east-1.amazonaws.com/api/testimonial"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      setTestimonials(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setLoading(true);
    handleGetTestimonials();
  }, []);

  if (loading) {
    return <p>loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  const displayedTestimonials = testimonials.slice(0, 3);

  return (
    <React.Fragment>
      <section className="customers">
        <h2 className="customers_titulo">
          Trusted by Thousands of <br />
          Happy Customer
        </h2>
        <p className="customers_parrafo">
          These are the stories of our customers who have joined us with great
          <br />
          pleasure when using this crazy feature.
        </p>
        <div className="customers_general">
          {displayedTestimonials.map((testimonial, index) => (
            <div className="customers_general_conteiner" key={index}>
              <div className="customers_general_info">
                <img src={testimonial.avatar} alt="" />
                <div>
                  <h4>{testimonial.fullName}</h4>
                  <p>Shanxi, China</p>
                </div>
                <div className="customer_exp">
                  <p>4.5</p>
                  <img src="/img/star.png" alt="star" />
                </div>
              </div>
              <p className="customers_general_text">
                {testimonial.testimonial}
              </p>
            </div>
          ))}
        </div>
      </section>
    </React.Fragment>
  );
};