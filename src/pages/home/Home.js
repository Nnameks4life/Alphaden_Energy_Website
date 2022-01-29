import React from "react";
import {useState} from 'react';
import { Link } from "react-router-dom";
import whatwedo from "../../utilities/images/whatwedo.jpg";
import epcc from '../../utilities/images/epcc.jpg'
import upstreamm from '../../utilities/images/upstreamm.png'
import oilfield from '../../utilities/images/oilfield.jpg'
import midstreamm from '../../utilities/images/midstreamm.jpg'
import tech from '../../utilities/images/tech.jpg'
import total from '../../utilities/images/total.png'
import chevron from '../../utilities/images/chevron.png'
import shell from '../../utilities/images/shell.png'
import seplat from '../../utilities/images/seplat.png'
import eroton from '../../utilities/images/eroton.png'

const Home = () => {
  setTimeout(() => {
    
  }, 3000);

  const [textArea, setTextArea] = useState(false);

//  const onChangeBackground = (event) => {
//     if (event) {
//       setTextArea("linee");
//     }
//   }
// const onRemoveBackground = (event) => {
// if (event) {
//   setTextArea(" ")
// }
// }
  return (
    <div>
        <div className='container'>
      <div className='row my-5'>
        <div className='col-4 den'>
          <h3>ALPHA'S DEN</h3>
          <div className='linee' />
          <p className='my-3'>
            The ‘ALPHA’S DEN’ is a hub of professional and well experienced
            Alpha’s, championing their fields while collectively making up a
            provider of fit-for-purpose services to clients across various
            industries.{" "}
          </p>
          <p>
            An Indigenous company, founded over 2 decades ago yet quite modern
            as we continue to show that People, Innovation, Integrity &
            Efficiency values are key towards the success of every project.{" "}
          </p>{" "}
          <p>
            We have an unquenchable desire to contribute positively to the
            development of our natural environment & have stayed true to our
            name due to our excellence and strategic contrivance in successfully
            delivering various projects.
          </p>
          <Link to>learn more</Link>
        </div>
        <div className='col-4'>
          <h5>Mission Statement</h5>
          <p>
            Constantly adopting efficiency dynamics in empowering people to
            deliver excellence with innovation in the pursuit of perfection.
          </p>
          <Link to>Learn more</Link>
          <div className='mt-5'>
            <h5>Core Values</h5>
            <ul>
                <li>P-eople First</li>
                <li>I-ntegrity</li>
                <li>I-nnovation</li>
                <li>E-fficiency</li>
            </ul>
            <Link to>Learn more</Link>
          </div>
        </div>
        <div className='col-4'>
          <h5>Our Vision</h5>
          <p className=''>
            To be the dominant EPCI service provider from Africa, delivering
            capital projects globally.
          </p>
          <Link to>Learn more</Link>
          <div className='mt-5'>
            <h5>Strategy</h5>
            <p>
              Our Strategy seeks to maintain us as one of the global leaders in
              the oil and gas industry with a focus….
            </p>
            <Link to>Learn more</Link>
          </div>
        </div>
      </div>
      </div>
      <div className='row my-5' style={{ backgroundColor: "#f2f2f2" }}>
        <div className='col-6 mx-auto'>
          <img
            src={whatwedo}
            alt='what we do'
            style={{ height: "40rem", width: "100%" }}
          />
        </div>
        <div className='col-6 my-auto'>
          <h2>
            What <span className='font-onee'>We Do</span>
          </h2>
          <div className='linee' />
          <p className='my-2'>
            In the Energy sector, We have carved out a niche for ourselves in
            providing Engineering, Procurement & Contractual Support,
            Construction, Installation (EPCI), Oilfield Services, Upstream
            Support Services, Asset Integrity Solutions, Quality Control, NDT
            And Inspection Services, Systems Integration, Process Control &
            Automation, Marine Support Services, as well as Midstream
            development services.
          </p>
          <p>
            As an ISO (9001:2008) certified organization, we have taken a unique
            approach to our Products & Services by oﬀering clients a wide range
            of options and ensuring projects are delivered on schedule, Within
            budget and of globally acceptable standards. We design and estimate
            projects, gaining a detailed understanding of the work scope and
            critical path. As part of quality planning, speciﬁc inspection and
            test plans are established, and detailed hazard analysis assessments
            are completed to maximize safety.
          </p>
        </div>
        </div>
        <div className='text-center mb-4'>
        <h1><span className='font-twoo'>Services</span> <span className='font-onee'>We</span> <span className='font-onee'>Provide</span></h1>
        <div className='linee mx-auto' />
        </div>
        <div className='container'>
        <div className='row'>
            <div className='col-6'>
                <img src={epcc} alt='epci' style={{height:'15rem', width:'100%'}}/>
            </div>
            <div className='col-6'>
                <img src={upstreamm} alt='upstream' style={{height:'15rem', width:'100%'}}/>
            </div>
        </div>
        
        <div className='row my-4'>
            <div className='col-6'>
                <img src={oilfield} alt='oilfield' style={{height:'15rem', width:'100%'}} />
            </div>
            <div className='col-6'>
                <img src={midstreamm} alt='midstream' style={{height:'15rem', width:'100%'}}/>
            </div>
        </div>
        </div>
        <div className='my-5 tech'>
            <img src={tech} alt='technology and innovation' style={{height:'21rem', width:'100%'}}/>
            <div className='tech-text'>
            <h1 style={{fontWeight:'bold'}} ><span className='text-white'>Providing the most efficient dynamic processes using</span> <span className='font-onee'>business intelligence, technology and innovation</span></h1>
            </div>
        </div>
        <div className='container text-center my-5'>
            <h1> <span className='font-twoo'>Our</span> <span className='font-onee'>Clientele</span> </h1>
            <div className='linee mx-auto' />
            <p>From year to year, our clientele base has increased significantly due to our commitment and dedication to work with the combined effort of the staffers of Alphaden Energy and Oilfield Limited</p>
        </div>
        <div className='container clientelee my-5'>
            <div className='col'>
                <img src={eroton} alt='' />
            </div>
            <div className='col'>
                <img src={chevron} alt='' />
            </div>
            <div className='col'>
                <img src={total} alt='' />
            </div>
            <div className='col'>
                <img src={shell} alt='' />
            </div>
            <div className='col'>
                <img src={seplat} alt='' />
            </div>

        </div>
          <div className="mainsection my-5">
            {textArea && (
              <div className="designn bg-warning">
              <p className="text-white imagei">Engineering, Procurement, Construction,Installation</p>
              </div>
              )}
              
              
              <div className='row mainsection'>
                <div className="col-4">
                <img src={midstreamm} alt='midstream' style={{height:'15rem', width:'100%'}} onMouseOver={()=>setTextArea(true)} onMouseOut={()=>setTextArea(false)} />
                </div>
                <div className="imagei text-white p-4 section">
                <p>Engineering, Procurement, Construction,Installation</p>
                </div>
            </div>
            </div>
    </div>
  );
};

export default Home;
