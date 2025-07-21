import React from 'react';
import { Typography, Box, Grid, Card, CardContent } from '@mui/material';

function Contact() {
  return (
    <Box id="contact" className="section" sx={{ mb: 5 }}>
      <Typography variant="h4" sx={{ fontWeight: 600, mb: 2 }}>
        Get In Touch
      </Typography>
      <Box sx={{ mb: 3 }}>
        <Typography variant="h5" sx={{ fontWeight: 600, mb: 1 }}>Club Leadership</Typography>
        <Grid container spacing={2} sx={{ mb: 2, display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: 'repeat(4, 1fr)' }, alignItems: 'stretch' }}>
          <Grid>
            <Card sx={{ height: '100%' }}>
              <CardContent>
                <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>President</Typography>
                <Typography>Michael Lott</Typography>
                <Typography variant="body2" color="text.secondary">lottms@gmail.com</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid>
            <Card sx={{ height: '100%' }}>
              <CardContent>
                <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>Vice President & Trip Coordinator</Typography>
                <Typography>Sara Lawrey</Typography>
                <Typography variant="body2" color="text.secondary">lawreysa@gmail.com</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid>
            <Card sx={{ height: '100%' }}>
              <CardContent>
                <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>Treasurer</Typography>
                <Typography>Jeannie Hartzell</Typography>
                <Typography variant="body2" color="text.secondary">jeannelh88@gmail.com</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid>
            <Card sx={{ height: '100%' }}>
              <CardContent>
                <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>Website & Social Media Coordinator</Typography>
                <Typography>Scott Byrd</Typography>
                <Typography variant="body2" color="text.secondary">sbyrd1968@verizon.net</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ mb: 3 }}>
        <Box
          sx={{
            background: 'linear-gradient(135deg, #e8f5e9 0%, #f5fff7 100%)',
            borderRadius: 3,
            boxShadow: 2,
            p: 3,
            width: '100%',
            mb: 2,
          }}
        >
          <Typography variant="h6" sx={{ mb: 1 }}>📧 Email Updates</Typography>
          <Typography sx={{ mb: 1 }}>Join our email list for event announcements and other club information.</Typography>
          <Typography>Send an email requesting to be added to <strong>admin@fredbirds.com</strong></Typography>
        </Box>
        <Box
          sx={{
            background: 'linear-gradient(135deg, #e8f5e9 0%, #f5fff7 100%)',
            borderRadius: 3,
            boxShadow: 2,
            p: 3,
            width: '100%',
          }}
        >
          <Typography variant="h6" sx={{ mb: 1 }}>📱 Social Media</Typography>
          <Typography sx={{ mb: 1 }}>Follow us for club updates, photos, and member discussions.</Typography>
          <Typography>
            Facebook: <a href="https://www.facebook.com/groups/1504495702940921" target="_blank" style={{ color: '#4a7c59', textDecoration: 'none' }}>Fredericksburg Birding Club</a>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Contact;
