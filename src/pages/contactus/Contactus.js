import React from "react";
import CoperateAddress from "../address/CoperateAddress";
import OperationAddress from "../address/OperationAddress";
// import Address from "../address/OperationAddress";
import SouthkAddress from "../address/SouthkAddress";
import UsaAddress from "../address/UsaAddress";

const Contactus = () => {
  const [address, setAddress] = React.useState(1);
  //   const handleSubmit = () => {

  //   };
  return (
    <div className='container'>
      <h1>
        {" "}
        <span className='font-twoo'>Contact</span> <span className='font-onee'>Information</span>{" "}
      </h1>
      <div className='linee' />
      <div className='row my-5 text-warning'>
        <div className='col-8 my-2 py-2' style={{ backgroundColor: "#ffe32a" }}>
          <h4>
            {" "}
            <span
              onClick={() => setAddress(1)}
              className='text-white py-2'
              style={{ cursor: "pointer"}}
            >
              Corperate Office
            </span>{" "}
            &nbsp;&nbsp;&nbsp;&nbsp;{" "}
            <span
              onClick={() => setAddress(2)}
              className='text-white'
              style={{ cursor: "pointer" }}
            >
              Operations
            </span>{" "}
            &nbsp;&nbsp;&nbsp;&nbsp;{" "}
            <span
              onClick={() => setAddress(4)}
              className='text-white'
              style={{ cursor: "pointer" }}
            >
              US Office
            </span>{" "}
            &nbsp;&nbsp;&nbsp;&nbsp;{" "}
            <span
              onClick={() => setAddress(3)}
              className='text-white'
              style={{ cursor: "pointer" }}
            >
              South Korea Office
            </span>{" "}
          </h4>
          
        </div>
      </div>
      <div className='row'>
          <div className=' col-4'>{address === 1 && <CoperateAddress />} </div>
           </div>
           <div className='row'>
          <div className=' col-4'>{address === 2 && <OperationAddress />}</div>
          </div>
          <div className='row'>
          <div className=' col-4'>{address === 3 && <SouthkAddress />}</div>
          </div>
          <div className='row'> 
          <div className='col-4'>{address === 4 && <UsaAddress />}</div>
          </div>
        
     
    </div>
  );
};

export default Contactus;
