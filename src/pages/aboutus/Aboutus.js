import React from "react";
import ref from "../../utilities/images/abtus.jfif";

const Aboutus = () => {
  return (
    <div>
      <div className='container'>
        <div className='row'>
          <div className='imgtext refinery'>
            <img
              src={ref}
              alt='refinery'
              className='refinery'
              style={{ width: "100%", height: "200px" }}
            />
            <div className='bottom-left'>
              <h2>About Us</h2>
              <div className='line' />
            </div>
          </div>
          <div>
            <p
              className='bg-light py-4 my-5 px-2'
              style={{ borderLeft: "5px solid yellow" }}
            >
              ALPHADEN Energy & Oilfield is a fully indigenous company founded
              not only to service, but also dominate the Upstream and Midstream
              Oil & Gas sectors in Sub Saharan Africa. Alphaden is coined from
              ‘Alpha’s Den’ which, as the name implies, a Den of Individuals
              championing their various fields but also working collaboratively
              with a common goal in mind including, but not limited to, safe &
              efficient service delivery and customer satisfaction.
            </p>
          </div>
          <div>
            <p>
              We have been in existence for over two (2) decades. We are modern
              in our operations, passionate about the environment and human
              relationships, and we are technically robust and competent in our
              service delivery.
            </p>
            <p>
              We see cost control and efficiency as key to successful project
              execution. We are equally aware that quality and schedule
              management are necessary to achieving our goals. In line with
              this, we ensure that every project is delivered as scheduled and
              within budget whilst keeping a focus on quality service delivery.
            </p>
            <p>
              We pride ourselves in our ability to deliver complex projects to
              various clients in the oil, gas and energy sector. We also ensure
              that we satisfactorily meet our clients' needs by leveraging
              industry relationships and providing cost-effective and
              fit-for-purpose service delivery.
            </p>
            <p>
              Equipped with multifaceted project management capabilities and a
              strong diverse workforce of various disciplines, Alphaden provides
              a full range of services in engineering, procurement,
              construction, installation (EPCI); fabrication; maintenance
              solutions and shutdown repair service; Oilfield support services;
              Marine support services as well as Gas and Energy infrastructure &
              distribution.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
