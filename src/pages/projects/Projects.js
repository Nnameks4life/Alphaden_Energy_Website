import React from 'react'
import { Link } from 'react-router-dom';

const Projects = () => {
    return (
        <div>
            <div className='container'>
            <p
              className='bg-light py-4 my-5 px-2'
              style={{ borderLeft: "5px solid yellow" }}
            >
              Ongoing Projects
            </p>
            <Link to='/'>Obama Gas Flare Commercializtion Project</Link>
          </div>

        </div>
    )
}

export default Projects;