
import React from 'react';
import { Typography, Box, Grid, Card, CardContent, Button } from '@mui/material';

function LocalHotspots() {
  return (
    <Box id="locations" className="section" sx={{ mb: 5 }}>
      <Typography variant="h4" sx={{ fontWeight: 600, mb: 2 }}>
        Premier Birding Locations
      </Typography>
      <Typography sx={{ mb: 3 }}>
        The Fredericksburg area offers incredible diversity for birders, from riverine habitats to mature forests and suburban parks.
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
          alignItems: 'stretch',
          '& > .MuiGrid-root': {
            height: '100%'
          },
        }}
      >
        <Grid sx={{ height: '100%' }}>
          <Card sx={{ display: 'flex', flexDirection: 'column', flex: 1, height: '100%' }}>
            <CardContent sx={{ flexGrow: 1, height: '100%', display: 'flex', flexDirection: 'column' }}>
              <Typography variant="h6">🌊 Rappahannock River Trail</Typography>
              <Typography sx={{ fontWeight: 600 }}>85+ species</Typography>
              <Typography><strong>Location:</strong> Fredericksburg, VA</Typography>
              <Typography>Best for waterfowl, wading birds, and raptors. Peak times: early morning and late afternoon. Excellent for Great Blue Herons, Belted Kingfishers, and seasonal migrants.</Typography>
              <Box sx={{ flexGrow: 1 }} />
              <Button href="locations/virginia/rappahannock-river-trail.html" variant="outlined" sx={{ mt: 2, alignSelf: 'center' }}>Learn More</Button>
            </CardContent>
          </Card>
        </Grid>
        <Grid sx={{ height: '100%' }}>
          <Card sx={{ display: 'flex', flexDirection: 'column', flex: 1, height: '100%' }}>
            <CardContent sx={{ flexGrow: 1, height: '100%', display: 'flex', flexDirection: 'column' }}>
              <Typography variant="h6">🌲 Motts Run Reservoir</Typography>
              <Typography sx={{ fontWeight: 600 }}>120+ species</Typography>
              <Typography><strong>Location:</strong> Spotsylvania County, VA</Typography>
              <Typography>Premier location for waterfowl and woodland species. Trail system offers diverse habitats. Notable for Wood Ducks, various warblers, and winter ducks.</Typography>
              <Box sx={{ flexGrow: 1 }} />
              <Button href="locations/virginia/motts-run-reservoir.html" variant="outlined" sx={{ mt: 2, alignSelf: 'center' }}>Learn More</Button>
            </CardContent>
          </Card>
        </Grid>
        <Grid sx={{ height: '100%' }}>
          <Card sx={{ display: 'flex', flexDirection: 'column', flex: 1, height: '100%' }}>
            <CardContent sx={{ flexGrow: 1, height: '100%', display: 'flex', flexDirection: 'column' }}>
              <Typography variant="h6">🌊 Aquia Landing Park</Typography>
              <Typography sx={{ fontWeight: 600 }}>75+ species</Typography>
              <Typography><strong>Location:</strong> Stafford County, VA</Typography>
              <Typography>Waterfront park along Aquia Creek offering excellent opportunities for waterfowl, waders, and migrating songbirds. Trail system winds through diverse habitats from creek edge to wooded areas.</Typography>
              <Box sx={{ flexGrow: 1 }} />
              <Button href="locations/virginia/aquia-landing-park.html" variant="outlined" sx={{ mt: 2, alignSelf: 'center' }}>Learn More</Button>
            </CardContent>
          </Card>
        </Grid>
        <Grid sx={{ height: '100%' }}>
          <Card sx={{ display: 'flex', flexDirection: 'column', flex: 1, height: '100%' }}>
            <CardContent sx={{ flexGrow: 1, height: '100%', display: 'flex', flexDirection: 'column' }}>
              <Typography variant="h6">🌳 Chancellorsville Battlefield</Typography>
              <Typography sx={{ fontWeight: 600 }}>95+ species</Typography>
              <Typography><strong>Location:</strong> Spotsylvania County, VA</Typography>
              <Typography>Mix of forest edge and open areas. Excellent for cavity nesters, including various woodpecker species and Eastern Bluebirds.</Typography>
              <Box sx={{ flexGrow: 1 }} />
              <Button href="locations/virginia/chancellorsville-battlefield.html" variant="outlined" sx={{ mt: 2, alignSelf: 'center' }}>Learn More</Button>
            </CardContent>
          </Card>
        </Grid>
        <Grid sx={{ height: '100%' }}>
          <Card sx={{ display: 'flex', flexDirection: 'column', flex: 1, height: '100%' }}>
            <CardContent sx={{ flexGrow: 1, height: '100%', display: 'flex', flexDirection: 'column' }}>
              <Typography variant="h6">🏞️ Crow's Nest Natural Area</Typography>
              <Typography sx={{ fontWeight: 600 }}>110+ species</Typography>
              <Typography><strong>Location:</strong> Stafford County, VA</Typography>
              <Typography>Diverse habitats from river access to mature forest. Notable for neotropical migrants, resident forest birds, and seasonal waterfowl.</Typography>
              <Box sx={{ flexGrow: 1 }} />
              <Button href="locations/virginia/crows-nest-natural-area.html" variant="outlined" sx={{ mt: 2, alignSelf: 'center' }}>Learn More</Button>
            </CardContent>
          </Card>
        </Grid>
        <Grid sx={{ height: '100%' }}>
          <Card sx={{ display: 'flex', flexDirection: 'column', flex: 1, height: '100%' }}>
            <CardContent sx={{ flexGrow: 1, height: '100%', display: 'flex', flexDirection: 'column' }}>
              <Typography variant="h6">🌿 Caledon State Park</Typography>
              <Typography sx={{ fontWeight: 600 }}>80+ species</Typography>
              <Typography><strong>Location:</strong> King George County, VA</Typography>
              <Typography>Scenic park along the Potomac River featuring mature forests and river access. Notable for bald eagles, various woodpeckers, and seasonal migrants. Excellent trails through diverse habitats.</Typography>
              <Box sx={{ flexGrow: 1 }} />
              <Button href="locations/virginia/caledon-state-park.html" variant="outlined" sx={{ mt: 2, alignSelf: 'center' }}>Learn More</Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Box sx={{ background: '#e8f5e8', borderRadius: 2, p: 2, mt: 3, textAlign: 'center' }}>
        <Typography variant="h5" sx={{ fontWeight: 600, mb: 1 }}>Field Trip Locations</Typography>
        <Typography>Explore the many birding destinations we've visited over the years on our club field trips throughout Virginia, Maryland, North Carolina, and Delaware.</Typography>
        <Button href="locations/field-trip-locations.html" variant="contained" color="primary" sx={{ mt: 2 }}>View Past Field Trip Locations</Button>
      </Box>
    </Box>
  );
}

export default LocalHotspots;
