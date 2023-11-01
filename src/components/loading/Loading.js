import React, {useState, useEffect} from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Backdrop from '@mui/material/Backdrop';

function Loading() {
  const [loading, setLoading] = useState(false);

  // Function to toggle the loader on and off (You can use this function to trigger loading)
  const toggleLoader = () => {
    setLoading(!loading);
  };
  return (
 <>
     <Box sx={{ display: "flex" }}> 
      <CircularProgress />
     </Box>
    {/* <div>
  
    <button onClick={toggleLoader}>Toggle Loader</button>

    
    <Backdrop
      sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={loading}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  </div> */}
 </>
  );
}

export default Loading;
