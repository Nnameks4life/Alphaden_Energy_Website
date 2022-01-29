import React from "react";
import ustream from "../../utilities/images/upstream.jpg";
import rine from "../../utilities/images/subsea.jpg";
import mid from "../../utilities/images/Midstream.jpg";

const Ourservices = () => {
  return (
    <div className='container-fluid'>
      <div className='my-5'>
        <div style={{ marginLeft: "200px" }}>
          <h1>EPCI</h1>
          <div className='linee' />
          <div>
            <ul>
              <li>ENGINEERING</li>
              <li>PROCUREMENT</li>
              <li>CONSTRUCTION</li>
              <li>INSTALLATION AND COMMISSIONING</li>
            </ul>
          </div>
          <button
            className='font-two px-3 py-2 text-white'
            style={{ borderRadius: "7px" }}
          >
            Learn More
          </button>
        </div>
      </div>
      <div className='row'>
        <div className='col-6'>
          <img
            src={ustream}
            alt='upstream'
            style={{ width: "100%", height: "400px", marginLeft: "30px" }}
          />
        </div>
        <div className='col-6'>
          <div style={{marginLeft:'100px'}}>
            <h1>Upstream</h1>
            <div className='linee' />
            <ul className='my-3'>
              <li>OILFIELD SERVICES</li>
              <li>WELL CONSTRUCTION</li>
              <li>PRODUCTION AND OPTIMIZATION</li>
              <li>DRILLING SERVICES</li>
            </ul>
            <button
              className='font-two px-3 py-2 text-white'
              style={{ borderRadius: "7px" }}
            >
              Learn More
            </button>
            </div>
          
        </div>
        </div>
        <div className='row'>
          <div className='col-6 my-5' >
              <div  style={{marginLeft:'200px'}} >
            <h1>Marine Services</h1>
            <div className='linee' />
            <ul>
              <li>SUBSEA SUPPORT</li>
              <li>MARINE EQUIPMENT SUPPLY</li>
            </ul>
            <button
              className='font-two px-3 py-2 text-white'
              style={{ borderRadius: "7px" }}
            >
              Learn More
            </button>
            </div>
          </div>
          <div className='col-6 mx-auto'>
              <div>
            <img
              src={rine}
              alt='Marine'
              style={{ width: "100%", height: "400px" }}
            />
            </div>
          </div>
        </div>
        <div className='row'>
            <div className='col-6'>
                <img src={mid} alt='Midstream' style={{ width: "100%", height: "400px", marginLeft: "30px" }}/>
            </div>
            <div className='col-6 my-5'>
                <div style={{marginLeft:'100px'}}>
                <h1>Midstream</h1>
                <div className='linee' />
                <ul>
                    <li>GAS INFRASTRUCTURE, CONSTRUCTION AND MAINTENANCE</li>
                    <li>POWER GENERATION AND DISTRIBUTION</li>
                </ul>
                <button
              className='font-two px-3 py-2 text-white'
              style={{ borderRadius: "7px" }}
            >
              Learn More
            </button>
                </div>

            </div>

        </div>
      
    </div>
  );
};

export default Ourservices;
