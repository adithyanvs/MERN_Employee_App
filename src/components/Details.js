import React from 'react'
import CreateIcon from '@mui/icons-material/Create';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import profilePic from '../assets/Profile.png'


const Details = () => {
  return (
    <div className='container mt-3' >
        <h2 style={{fontWeight:400}} >Welcome Adithyan v s</h2>

        <Card sx={{ maxWidth: 375 }}>
      <CardContent>
      <div className="card_division">

        <img src={profilePic} style={{width:70}} alt='profile picture' />
        <button className="btn btn-primary float-end " ><CreateIcon/></button> 
        <button className="btn btn-danger float-end mx-2" ><DeleteOutlineIcon/></button>
        <h3 className='mt-3' >Name: <span style={{fontWeight:400}} >Adithyan V S</span></h3>
        <h3 className='mt-3' >Age: <span style={{fontWeight:400}} >21</span></h3>
        <h3 className='mt-3' >Profession: <span style={{fontWeight:400}} >Full Stack Developer</span></h3>

      </div>

        
      </CardContent>
      </Card>

    </div>
  )
}

export default Details