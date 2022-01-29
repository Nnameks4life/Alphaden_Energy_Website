import React from 'react'
import { Carousel } from 'antd';
import 'antd/dist/antd.css';
import weare from '../../utilities/images/weare.jpg'
import wedo from '../../utilities/images/wedo.jpg'
import ourservice from '../../utilities/images/ourservice.jpg'

const Homeslider = () => {

  const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79'};
    
    return (
      <> 
      <div className='my-5'>           
      <Carousel autoplay>
    <div>
      <div style={contentStyle} className='slider1'>
         <div className='slider1' style={{height:'200px', width:'100%'}}>
    </div>
      </div>
    </div>
    <div>
      <div style={contentStyle} className='slider1'>
         <div className='slider1' style={{height:'200px'}}>
    </div>
      </div>
    </div>
    <div>
      <h3 style={contentStyle}  className='slider2'>3</h3>
    </div>
    <div>
      <h3 style={contentStyle}  className='slider1'>4</h3>
    </div>
  </Carousel>
 </div>
    </>
    )
}

export default Homeslider
