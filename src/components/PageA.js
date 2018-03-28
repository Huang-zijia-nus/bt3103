import React from 'react'
import { Link } from 'react-router-dom'

const pageA = ()=>(
  <div>
    <ul>
    <li><Link to='./'>Home</Link></li>
    <li><Link to='./PageB'>Students</Link></li>
    <li><Link to='./PageC'>Instrcutors</Link></li>
    </ul>
  </div>
)

export default pageA