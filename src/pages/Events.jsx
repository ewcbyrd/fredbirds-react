import React from 'react';
import { Typography, Box, Card, CardContent, Grid } from '@mui/material';
import willet from '../assets/images/willet.jpeg';
import Highland from '../assets/images/higland.jpeg';
import obx from '../assets/images/obx.jpeg';
import kingbird from '../assets/images/kingbird.jpeg';
import anhinga from '../assets/images/anhinga.jpeg';
import wilsonsplover from '../assets/images/wilsonsplover.jpeg';
import sandwichtern from '../assets/images/sandwichtern.jpeg';

const events = [
	{
		date: 'Jan 18-20',
		title: 'Outer Banks Weekend',
		location: 'Outer Banks, North Carolina',
		description:
			'Explore the wintering grounds of waterfowl, shorebirds, and raptors at Pea Island NWR, Alligator River NWR, and Bodie Island. Expect large flocks of ducks, Tundra Swans, Snow Geese, and possible sightings of Red-cockaded Woodpecker and wintering raptors. Coastal scenery and great birding camaraderie!',
	},
	{
		date: 'Feb 9',
		title: 'Blandy Experimental Farm',
		location: 'Boyce, VA',
		description:
			'Visit the State Arboretum of Virginia for winter finches, sparrows, and woodpeckers. The open fields and mature trees provide excellent habitat for Red-headed Woodpeckers, sapsuckers, and wintering raptors. Great for beginners and experienced birders alike.',
	},
	{
		date: 'Feb 22',
		title: 'Mason Neck NWR & State Park',
		location: 'Lorton, VA',
		description:
			'Prime Bald Eagle habitat along the Potomac River. Look for waterfowl, eagles, and early-returning Osprey. Trails wind through forest and marsh, offering great views of wintering and resident birds.',
	},
	{
		date: 'Mar 8',
		title: 'Point Lookout State Park',
		location: 'Scotland, MD',
		description:
			'At the confluence of the Potomac River and Chesapeake Bay, this park is a hotspot for waterfowl, loons, grebes, and early spring migrants. Watch for Bonaparte’s Gulls, Red-breasted Mergansers, and possible overwintering warblers.',
	},
	{
		date: 'Apr 19',
		title: 'Shenandoah River State Park',
		location: 'Bentonville, VA',
		description:
			'Enjoy spring migration along the river and forested trails. Expect warblers, vireos, and flycatchers. The park’s diverse habitats support a wide range of species, and the river views are spectacular in April.',
	},
	{
		date: 'May 10',
		title: 'Limberlost Trail, Shenandoah NP',
		location: 'Shenandoah National Park, VA',
		description:
			'One of the best accessible trails for spring warblers, thrushes, and tanagers. The Limberlost Trail is a gentle loop through mature forest, perfect for hearing and seeing neotropical migrants at their peak.',
	},
	{
		date: 'May 16-18',
		title: 'Delaware Shore Weekend',
		location: 'Delaware Bay & Coast',
		description:
			'Experience the spectacle of shorebird migration at Bombay Hook NWR, Prime Hook NWR, and the Delaware Bay beaches. Look for Red Knots, Ruddy Turnstones, and horseshoe crab spawning. Also great for marsh birds and late waterfowl.',
	},
	{
		date: 'June 6-8',
		title: 'Highland County Weekend',
		location: 'Highland County, VA',
		description:
			'Bird the "Virginia Highlands" for Golden-winged Warbler, Alder Flycatcher, Bobolink, and other mountain specialties. Scenic drives and high-elevation meadows make this a favorite annual trip.',
	},
	{
		date: 'July 1',
		title: 'FBC Happy Hour at Highmark Brewery',
		location: 'Fredericksburg, VA',
		description:
			'Relax and socialize with fellow club members at Highmark Brewery. Share birding stories, plan future trips, and enjoy a summer evening together. No birding experience required—just good company!',
	},
	{
		date: 'July 26',
		title: 'Summer Social',
		location: 'Crows Nest Research Center, Stafford, VA',
		description:
			'Morning birding followed by a potluck lunch. Explore the preserve’s diverse habitats for summer breeders, then enjoy food and fellowship. Bring a dish to share and your favorite birding stories!',
	},
	{
		date: 'Sep 12-14',
		title: 'Edwin B. Forsythe NWR / Cape May',
		location: 'New Jersey',
		description:
			'Fall migration at its best! Visit Edwin B. Forsythe NWR and Cape May for raptors, warblers, and shorebirds. Expect large numbers of hawks, falcons, and a diversity of songbirds moving south.',
	},
	{
		date: 'Oct 11',
		title: 'Big Sit – Crow’s Nest Research Center',
		location: 'Stafford, VA',
		description:
			'Participate in the annual "Big Sit"—a fun, all-day event where we count as many species as possible from a fixed circle. Great for all skill levels and a wonderful way to enjoy fall migration.',
	},
	{
		date: 'Oct 18',
		title: 'Occoquan Bay NWR',
		location: 'Woodbridge, VA',
		description:
			'Explore tidal marshes, grasslands, and forest edge for sparrows, raptors, and late migrants. Occoquan Bay is a hotspot for fall birding with a variety of habitats and easy walking trails.',
	},
	{
		date: 'Nov 8',
		title: 'Clifton Institute',
		location: 'Warrenton, VA',
		description:
			'Visit this private conservation area for grassland birds, sparrows, and late fall migrants. The Clifton Institute’s meadows and woodlands are managed for biodiversity and offer excellent birding.',
	},
	{
		date: 'Dec 6',
		title: 'Holiday Potluck – Crow’s Nest Research Center',
		location: 'Stafford, VA',
		description:
			'Celebrate the season with a festive potluck and winter birding at Crow’s Nest. Enjoy good food, club camaraderie, and a chance to spot wintering birds in the preserve’s beautiful setting.',
	},
];

function Events() {
	return (
		<Box>
			<Typography
				variant="h4"
				align="center"
				gutterBottom
				sx={{ fontWeight: 700 }}
			>
				2025 Events & Field Trips
			</Typography>
			<Box sx={{ width: '100%', mx: 'auto', maxWidth: 1400 }}>
				<Grid
					container
					spacing={3}
					sx={{
						display: 'grid',
						gridTemplateColumns: {
							xs: '1fr',
							sm: '1fr 1fr',
							md: '1fr 1fr 1fr',
						},
						gap: 3,
						alignItems: 'stretch',
					}}
				>
				   {/* OBX image card before Outer Banks Weekend */}
				   <Grid key="obx-img" sx={{ display: { xs: 'none', md: 'flex' } }}>
					   <Card
						   sx={{
							   height: '100%',
							   width: '100%',
							   minHeight: 340,
							   position: 'relative',
							   boxShadow: 2,
							   borderRadius: 3,
							   bgcolor: 'background.paper',
							   p: 0,
							   overflow: 'hidden',
						   }}
					   >
						   <img
							   src={obx}
							   alt="Outer Banks birding"
							   style={{
								   position: 'absolute',
								   top: 0,
								   left: 0,
								   width: '100%',
								   height: '100%',
								   objectFit: 'cover',
								   display: 'block',
							   }}
						   />
					   </Card>
				   </Grid>

				   {/* Highland image card in the 3rd column on the second row */}
				   <Grid key="highland-img-row" sx={{ gridColumn: { md: '3 / 4' }, gridRow: { md: 2 }, display: { xs: 'none', md: 'flex' } }}>
					   <Card
						   sx={{
							   height: '100%',
							   width: '100%',
							   minHeight: 340,
							   position: 'relative',
							   boxShadow: 2,
							   borderRadius: 3,
							   bgcolor: 'background.paper',
							   p: 0,
							   overflow: 'hidden',
						   }}
					   >
						   <img
							   src={Highland}
							   alt="Highland County birding"
							   style={{
								   position: 'absolute',
								   top: 0,
								   left: 0,
								   width: '100%',
								   height: '100%',
								   objectFit: 'cover',
								   display: 'block',
							   }}
						   />
					   </Card>
				   </Grid>

				   {/* Anhinga image card in the 3rd column on the fourth row */}
				   <Grid key="anhinga-img-row" sx={{ gridColumn: { md: '3 / 4' }, gridRow: { md: 4 }, display: { xs: 'none', md: 'flex' } }}>
					   <Card
						   sx={{
							   height: '100%',
							   width: '100%',
							   minHeight: 340,
							   position: 'relative',
							   boxShadow: 2,
							   borderRadius: 3,
							   bgcolor: 'background.paper',
							   p: 0,
							   overflow: 'hidden',
						   }}
					   >
						   <img
							   src={anhinga}
							   alt="Anhinga"
							   style={{
								   position: 'absolute',
								   top: 0,
								   left: 0,
								   width: '100%',
								   height: '100%',
								   objectFit: 'cover',
								   display: 'block',
							   }}
						   />
					   </Card>
				   </Grid>
				   {/*
					 We use a wrapper array to build the grid items so we can insert the willet card at the right spot.
				   */}
				   {/*
					 We use a wrapper array to build the grid items so we can insert the willet card at the right spot.
				   */}
				   {(() => {
					   let scaupCardInserted = false;
					   let willetCardInserted = false;
					   let wilsonsPloverInserted = false;
					   const items = [];
					   for (let idx = 0; idx < events.length; idx++) {
						   const event = events[idx];
						   // Remove Highland image card from event list rendering
						   if (event.title.includes('Highland County')) {
							   continue;
						   }
						   // Insert Willet image card in the first column of the 3rd row (only once)
						   if (!willetCardInserted && idx === 6) {
							   willetCardInserted = true;
							   items.push(
								   <Grid key="willet-img-row" sx={{ gridColumn: { md: '1 / 2' }, gridRow: { md: 3 }, display: { xs: 'none', md: 'flex' } }}>
									   <Card
										   sx={{
											   height: '100%',
											   width: '100%',
											   minHeight: 340,
											   display: 'flex',
											   boxShadow: 2,
											   borderRadius: 3,
											   bgcolor: 'background.paper',
											   p: 0,
											   overflow: 'hidden',
										   }}
									   >
										   <img
											   src={willet}
											   alt="Willet bird"
											   style={{
												   width: '100%',
												   height: '100%',
												   objectFit: 'cover',
												   display: 'block',
											   }}
										   />
									   </Card>
								   </Grid>
							   );
						   }
						   // Insert Kingbird image card in the first column of the 5th row (only once)
						   if (!scaupCardInserted && idx === 12) {
							   scaupCardInserted = true;
							   items.push(
								   <Grid key="kingbird-img-row" sx={{ gridColumn: { md: '1 / 2' }, gridRow: { md: 5 }, display: { xs: 'none', md: 'flex' } }}>
									   <Card
										   sx={{
											   height: '100%',
											   width: '100%',
											   minHeight: 340,
											   display: 'flex',
											   boxShadow: 2,
											   borderRadius: 3,
											   bgcolor: 'background.paper',
											   p: 0,
											   overflow: 'hidden',
										   }}
									   >
										   <img
											   src={kingbird}
											   alt="Kingbird"
											   style={{
												   width: '100%',
												   height: '100%',
												   objectFit: 'cover',
												   display: 'block',
											   }}
										   />
									   </Card>
								   </Grid>
							   );
						   }
						   items.push(
							   <Grid key={idx} sx={{ display: 'flex' }}>
								   <Card
									   sx={{
										   height: '100%',
										   width: '100%',
										   minHeight: 340,
										   display: 'flex',
										   flexDirection: 'column',
										   justifyContent: 'space-between',
										   boxShadow: 2,
										   borderRadius: 3,
										   bgcolor: 'background.paper',
									   }}
								   >
									   <CardContent>
										   <Typography
											   variant="subtitle2"
											   color="primary"
											   sx={{ fontWeight: 600, mb: 1 }}
										   >
											   {event.date}
										   </Typography>
										   <Typography
											   variant="h6"
											   sx={{ fontWeight: 700 }}
											   gutterBottom
										   >
											   {event.title}
										   </Typography>
										   <Typography
											   variant="body2"
											   color="text.secondary"
											   sx={{ mb: 1 }}
										   >
											   <strong>Location:</strong> {event.location}
										   </Typography>
										   <Typography
											   variant="body2"
											   color="text.primary"
											   align="left"
										   >
											   {event.description}
										   </Typography>
									   </CardContent>
								   </Card>
							   </Grid>
						   );
						   // Insert Wilson's Plover image card in the 3rd column of the 6th row (after Occoquan Bay NWR card)
						   if (!wilsonsPloverInserted && event.title === 'Occoquan Bay NWR') {
							   wilsonsPloverInserted = true;
							   items.push(
								   <Grid key="wilsonsplover-img-row" sx={{ gridColumn: { md: '3 / 4' }, gridRow: { md: 6 }, display: { xs: 'none', md: 'flex' } }}>
									   <Card
										   sx={{
											   height: '100%',
											   width: '100%',
											   minHeight: 340,
											   display: 'flex',
											   boxShadow: 2,
											   borderRadius: 3,
											   bgcolor: 'background.paper',
											   p: 0,
											   overflow: 'hidden',
										   }}
									   >
										   <img
											   src={wilsonsplover}
											   alt="Wilson's Plover"
											   style={{
												   width: '100%',
												   height: '100%',
												   objectFit: 'cover',
												   display: 'block',
											   }}
										   />
									   </Card>
								   </Grid>
							   );
						   }

						   // Insert Sandwich Tern image card immediately before Clifton Institute card
						   if (event.title === 'Clifton Institute') {
							   items.push(
								   <Grid key="sandwichtern-img-row" sx={{ gridColumn: { md: '1 / 2' }, gridRow: { md: 7 }, display: { xs: 'none', md: 'flex' } }}>
									   <Card
										   sx={{
											   height: '100%',
											   width: '100%',
											   minHeight: 340,
											   display: 'flex',
											   boxShadow: 2,
											   borderRadius: 3,
											   bgcolor: 'background.paper',
											   p: 0,
											   overflow: 'hidden',
										   }}
									   >
										   <img
											   src={sandwichtern}
											   alt="Sandwich Tern"
											   style={{
												   width: '100%',
												   height: '100%',
												   objectFit: 'cover',
												   display: 'block',
											   }}
										   />
									   </Card>
								   </Grid>
							   );
						   }
					   }
					   return items;
				   })()}
				</Grid>
			</Box>
		</Box>
	);
}

export default Events;
