import React from 'react';
import { Typography, Box, Grid, Card, CardContent, Button } from '@mui/material';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <Box>
      {/* Header Section removed: now in App.jsx as SiteHeader */}

      {/* About Section */}
      <Box id="about" sx={{ mb: 5 }}>
        <Typography variant="h4" sx={{ fontWeight: 600, mb: 2 }}>
          Welcome to Our Community
        </Typography>
        <Typography sx={{ mb: 3 }}>
          The Fredericksburg Birding Club has been bringing together bird enthusiasts from the Rappahannock River region since 2006. Whether you're a seasoned ornithologist or just beginning to discover the joy of birdwatching, our welcoming community offers opportunities to learn, explore, and share in the wonder of Virginia's diverse bird life.
        </Typography>
        <Box sx={{ background: '#e8f5e8', borderRadius: 2, p: 2, mb: 3 }}>
          <Typography variant="h5" sx={{ fontWeight: 600, mb: 1 }}>
            Why Join Our Club?
          </Typography>
          <Typography>
            Connect with fellow bird lovers, participate in guided field trips to premier birding locations, and contribute to citizen science projects that help protect our feathered friends.
          </Typography>
        </Box>
        <Grid
          container
          spacing={2}
          sx={{
            mb: 4,
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              md: '1fr 1fr',
              lg: '1fr 1fr 1fr'
            },
            '& > .MuiGrid-root': {
              height: '100%'
            },
            alignItems: 'stretch',
          }}
        >
          <Grid sx={{ height: '100%' }}>
            <Card sx={{ display: 'flex', flexDirection: 'column', flex: 1, height: '100%' }}>
              <CardContent sx={{ flexGrow: 1, height: '100%', display: 'flex', flexDirection: 'column' }}>
                <Typography variant="h6" sx={{ mb: 1 }}>🔭 Field Trips</Typography>
                <Typography>
                  Join us for guided excursions to the region's best birding locations, from Rappahannock River wetlands to Shenandoah foothills. Open to everyone - membership not required!
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid sx={{ height: '100%' }}>
            <Card sx={{ display: 'flex', flexDirection: 'column', flex: 1, height: '100%' }}>
              <CardContent sx={{ flexGrow: 1, height: '100%', display: 'flex', flexDirection: 'column' }}>
                <Typography variant="h6" sx={{ mb: 1 }}>📚 Education</Typography>
                <Typography>
                  Learn from experienced birders through field trips and hands-on birding experiences in diverse local habitats.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid sx={{ height: '100%' }}>
            <Card sx={{ display: 'flex', flexDirection: 'column', flex: 1, height: '100%' }}>
              <CardContent sx={{ flexGrow: 1, height: '100%', display: 'flex', flexDirection: 'column' }}>
                <Typography variant="h6" sx={{ mb: 1 }}>🌱 Conservation</Typography>
                <Typography>
                  Participate in local bird counts, habitat restoration projects, and citizen science initiatives that help protect our feathered friends.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <Box sx={{ background: '#e8f5e8', borderRadius: 2, p: 2, textAlign: 'center', mb: 4 }}>
          <Typography variant="h5" sx={{ fontWeight: 600, mb: 1 }}>Become a Member</Typography>
          <Typography>Ready to join our community and support local birding? Learn more about membership benefits and how to sign up.</Typography>
          <Button href="/membership" variant="contained" color="primary" sx={{ mt: 2 }}>Membership Information</Button>
        </Box>
      </Box>

      {/* Events Section */}
      <Box id="events" className="section" sx={{ mb: 5 }}>
        <Typography variant="h4" sx={{ fontWeight: 600, mb: 2 }}>
          Upcoming Events & Field Trips
        </Typography>
        <Grid
          container
          spacing={2}
          sx={{
            mb: 3,
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              md: '1fr 1fr',
              lg: '1fr 1fr 1fr'
            },
            // Make all event cards the same height
            '& > .MuiGrid-root': {
              height: '100%'
            },
            // Make all direct children stretch to fill row height
            alignItems: 'stretch',
          }}
        >
          <Grid sx={{ height: '100%' }}>
            <Card sx={{ display: 'flex', flexDirection: 'column', flex: 1, height: '100%' }}>
              <CardContent sx={{ flexGrow: 1, height: '100%', display: 'flex', flexDirection: 'column' }}>
                <Typography className="event-date" sx={{ color: 'primary.main', fontWeight: 600 }}>July 26, 2025</Typography>
                <Typography variant="h6" sx={{ mb: 1 }}>🌞 Summer Social at Crow's Nest</Typography>
                <Typography><strong>Location:</strong> Crows Nest Research Center<br />400 Marlborough Point Rd, Stafford, VA 22554</Typography>
                <Typography>Join us for a special day combining morning birding with community fellowship! We'll start with guided birding at 8:00 AM through the preserve's diverse habitats, then gather for a potluck lunch. Event concludes around 1:00 PM.</Typography>
                <Typography><strong>Bring:</strong> Binoculars, field guide, folding chair, and a dish to share (serves 8-10). We'll provide drinks and table setup.</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid sx={{ height: '100%' }}>
            <Card sx={{ display: 'flex', flexDirection: 'column', flex: 1, height: '100%' }}>
              <CardContent sx={{ flexGrow: 1, height: '100%', display: 'flex', flexDirection: 'column' }}>
                <Typography className="event-date" sx={{ color: 'primary.main', fontWeight: 600 }}>September 12-14, 2025</Typography>
                <Typography variant="h6" sx={{ mb: 1 }}>🌊 Birding Weekend in Cape May, NJ</Typography>
                <Typography>Join us for an exciting weekend birding adventure at one of the East Coast's premier migration hotspots! Cape May is famous for its incredible fall warbler and hawk migration.</Typography>
                <Typography><strong>Location:</strong> Cape May, New Jersey</Typography>
                <Typography>Experience world-class birding at Cape May Point State Park, Higbee Beach, Edwin B. Forsythe National Wildlife Refuge, and other renowned locations. Perfect timing for fall migration with warblers, raptors, and shorebirds.</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid sx={{ height: '100%' }}>
            <Card sx={{ display: 'flex', flexDirection: 'column', flex: 1, height: '100%' }}>
              <CardContent sx={{ flexGrow: 1, height: '100%', display: 'flex', flexDirection: 'column' }}>
                <Typography className="event-date" sx={{ color: 'primary.main', fontWeight: 600 }}>October 12, 2025</Typography>
                <Typography variant="h6" sx={{ mb: 1 }}>🪑 Big Sit at Crow's Nest</Typography>
                <Typography><strong>Location:</strong> Crows Nest Research Center<br />400 Marlborough Point Rd, Stafford, VA 22554</Typography>
                <Typography>Join our annual "Big Sit" challenge! We will stay within a 17-foot diameter circle and try to spot as many bird species as possible throughout the day. A fun, relaxed way to enjoy fall migration while contributing to citizen science.</Typography>
                <Typography>Perfect for birders of all levels - bring a comfortable chair, snacks, and your best birding skills!</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <Box sx={{ background: '#e8f5e8', borderRadius: 2, p: 2, textAlign: 'center' }}>
          <Typography variant="h5" sx={{ fontWeight: 600, mb: 1 }}>See All 2025 Events</Typography>
          <Typography>For a complete list of our 2025 events, including field trips, socials, and special programs, please visit our dedicated events page.</Typography>
          <Button component={Link} to="/events" variant="contained" color="primary" sx={{ mt: 2 }}>2025 Events Page</Button>
        </Box>
      </Box>






      {/* Footer Section */}
      <Box component="footer" sx={{ textAlign: 'center', py: 3, mt: 4, borderTop: '1px solid #e0e0e0' }}>
        <Typography>&copy; 2025 Fredericksburg Birding Club. Established 2006.</Typography>
        <Typography>Dedicated to the appreciation, study, and conservation of birds in the Fredericksburg region.</Typography>
        <Typography sx={{ mt: 2, fontStyle: 'italic' }}>
          "In every walk with nature, one receives far more than they seek." - John Muir
        </Typography>
      </Box>
    </Box>
  );
}

export default Home;
