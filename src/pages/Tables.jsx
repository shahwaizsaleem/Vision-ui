import React from 'react'
import Sidebar from '../components/Sidebar'
import { Box } from '@mui/material'
import Typography from '@mui/material/Typography';
export default function Tables() {
  return (
    <>
    <Box sx={{ display: 'flex' }}>
      <Sidebar/>
  
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
              <h1>Tables</h1>

            </Box>
    </Box>
  
    </>
  )
}
