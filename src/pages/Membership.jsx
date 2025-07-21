import React from 'react';
import { Typography, Box } from '@mui/material';

function Membership() {
  return (
    <Box>
      <Typography variant="h4" sx={{ fontWeight: 600, mb: 2 }}>
        Join the Fredericksburg Birding Club
      </Typography>
      <Typography sx={{ mb: 3 }}>
        Membership is open to all birders, from beginners to experts. Dues help support club activities, field trips, and conservation efforts. We welcome new members year-round!
      </Typography>
      <Box sx={{ background: '#e8f5e8', borderRadius: 2, p: 2, mb: 3 }}>
        <Typography variant="h5" sx={{ fontWeight: 600, mb: 1 }}>
          How to Join
        </Typography>
        <Typography sx={{ mb: 1 }}>
          <strong>Annual Dues:</strong> $20 for an individual, $25 for a family (January–December)
        </Typography>
        <Typography sx={{ mb: 1 }}>
          <strong>To join or renew:</strong> Please bring cash or check (payable to Fredericksburg Birding Club) to any club event, or mail to:<br />
          <span style={{ display: 'block', marginTop: 8 }}>
            Jeannie Hartzell<br />
            Fredericksburg Birding Club<br />
            383 Brenthem Farm Dr<br />
            Fredericksburg, VA 22406
          </span>
        </Typography>
        <Typography>
          Questions? Email <a href="mailto:admin@fredbirds.com" style={{ color: '#4a7c59', textDecoration: 'none' }}>admin@fredbirds.com</a>
        </Typography>
      </Box>
      <Box sx={{ background: '#e8f5e8', borderRadius: 2, p: 2 }}>
        <Typography variant="h5" sx={{ fontWeight: 600, mb: 1 }}>
          New Member Welcome
        </Typography>
        <Typography>
          Curious about birding but not sure where to start? Join us on one of our field trips so that you can learn from experienced club members. We'll help you get started with equipment recommendations, basic identification skills, and your first field trip experience!
        </Typography>
      </Box>
    </Box>
  );
}

export default Membership;
