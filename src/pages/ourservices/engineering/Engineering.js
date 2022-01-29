import React from "react";
import { Link } from "react-router-dom";
import abtus from '../../../utilities/images/abtus.jfif'

const Engineering = () => {
  return (
      <div>
        <div className="imgtext">
            <img src={abtus} alt="engineering" style={{width:'100%',height:'180px'}}/>
      <div className="mt-5 bottom-left">
        <Link to className="text-white">Home Engineering Procurement&Construction Services Engineering </Link>
        <i className="fas fa-arrow-right"></i>
        <h1 className="text-white">Engineering</h1>
        <div className='line'/>
        </div>
        </div>
    <div className="container">
        <p>
          ALPHADEN provides excellent turnkey services for most industrial
          projects. Our exceptional ability to deliver seamless integration of
          engineering, procurement and construction services throughout all
          stages of a project allows us to ensure our clients:
        </p>
        <ul>
          <li>Lower project cost</li>
          <li>Save time</li>
          <li>
            Minimize risk of project failure through direct consultancy services
          </li>
          <li>Advanced costs controls</li>
          <li>Minimize operational upsets and downtime</li>
          <li>Reduce project schedule</li>
        </ul>
        <div>
          <p>
            Our expertise covers Detailed Engineering Design, Civil Engineering
            and Construction, Flowline Replacement/Leak Repairs, Wellhead Hookup
            & Condition Monitoring, Shop Fabrication, Construction/Installation
            Of Manifolds & Platforms, Pipeline Security & Surveillance, Offshore
            Production Platform Modifications, Upgrade & Installation (Hook-up &
            Commissioning) as well as Pipeline Construction & Repairs for
            Greenfield and Brownfield projects.
          </p>
        </div>
        <div>
          <p>
            In 2018, Alphaden was awarded the contract for EPC, Site preparation
            & Industrial Area Infrastructure Development by The Shell Petroleum
            Development Company (SPDC) for their Assa North Ohaji South Gas
            Development Project, which includes the Well Bay Area Construction,
            project Fabrication, Internal & External roads, perimeter fencing,
            Residential & Industrial Infrastructure as well as other
            developments that make up the Assa North/Ohaji South Field Logistics
            Base and Primary Treatment Facility.
          </p>
        </div>
      </div>
    
    </div>
  );
};

export default Engineering;
