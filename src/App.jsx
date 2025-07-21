import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { ThemeProvider, createTheme, CssBaseline, AppBar, Toolbar, Typography, Button, Container, Box, IconButton, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
// Responsive mobile menu component
function MobileMenu() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleOpen = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);
  return (
    <>
      <IconButton color="inherit" onClick={handleOpen} size="large" edge="end">
        <MenuIcon />
      </IconButton>
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose} keepMounted>
        <MenuItem component={Link} to="/" onClick={handleClose}>Home</MenuItem>
        <MenuItem component={Link} to="/events" onClick={handleClose}>Events</MenuItem>
        <MenuItem component={Link} to="/membership" onClick={handleClose}>Membership</MenuItem>
        <MenuItem component={Link} to="/local-hotspots" onClick={handleClose}>Local Hotspots</MenuItem>
        <MenuItem component={Link} to="/contact" onClick={handleClose}>Contact</MenuItem>
      </Menu>
    </>
  );
}

import Home from './pages/Home';
import Events from './pages/Events';
import Membership from './pages/Membership';
import LocalHotspots from './pages/LocalHotspots';
import Contact from './pages/Contact';
import './App.css';

function SiteHeader() {
  return (
    <Box sx={{
      background: 'linear-gradient(90deg, #388e3c 0%, #a8e063 100%)',
      color: 'white',
      py: { xs: 4, md: 6 },
      mb: 0,
      borderRadius: 0,
      textAlign: 'center',
      width: '100%',
    }}>
      <Typography variant="h2" sx={{ fontWeight: 700, mb: 1, fontSize: { xs: '2rem', md: '3rem' } }}>
        Fredericksburg Birding Club
      </Typography>
      <Typography variant="h5" sx={{ fontWeight: 400, mb: 2 }}>
        Discovering the Avian Wonders of the Historic Fredericksburg Area
      </Typography>
    </Box>
  );
}


const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#388e3c', // forest green
    },
    secondary: {
      main: '#8bc34a', // light green
    },
    background: {
      default: '#f0f4c3', // light nature background
      paper: '#ffffff',
    },
    text: {
      primary: '#2e3d25', // deep green-brown
      secondary: '#5d6d3b',
    },
  },
  typography: {
    fontFamily: 'Merriweather, Roboto, Arial, sans-serif',
    h3: {
      fontWeight: 700,
      color: '#388e3c',
    },
    h4: {
      fontWeight: 600,
      color: '#5d6d3b',
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: 'linear-gradient(90deg, #388e3c 0%, #a8e063 100%)',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 20,
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          background: 'rgba(255,255,255,0.85)',
          borderRadius: 16,
          boxShadow: '0 2px 8px rgba(56,142,60,0.08)',
          marginTop: '2rem',
          padding: '2rem',
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <SiteHeader />
        <AppBar position="sticky" elevation={0} sx={{ top: 0 }}>
          <Toolbar sx={{ minHeight: '48px', py: 0, px: { xs: 1, sm: 2 } }}>
            <Typography variant="h6" sx={{ flexGrow: 1, fontSize: { xs: '1rem', sm: '1.25rem' }, py: 0, display: 'none' }}>
              Fredericksburg Birding Club
            </Typography>
            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
              <Button color="inherit" component={Link} to="/">Home</Button>
              <Button color="inherit" component={Link} to="/events">Events</Button>
              <Button color="inherit" component={Link} to="/membership">Membership</Button>
              <Button color="inherit" component={Link} to="/local-hotspots">Local Hotspots</Button>
              <Button color="inherit" component={Link} to="/contact">Contact</Button>
            </Box>
            <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
              {/* Mobile menu icon */}
              <MobileMenu />
            </Box>
          </Toolbar>
        </AppBar>
        <Container
          maxWidth="md"
          sx={{
            mt: 2,
            mb: 4,
            pt: 2,
            pb: 2,
            width: '100%',
            minWidth: 0,
            boxSizing: 'border-box',
            px: { xs: 0.5, sm: 2 },
          }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/events" element={<Events />} />
            <Route path="/membership" element={<Membership />} />
            <Route path="/local-hotspots" element={<LocalHotspots />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Container>
      </Router>
    </ThemeProvider>
  );
}

export default App
