// src/components/Dashboard.js

import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Container,
  CssBaseline,
  Drawer,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Paper,
  Toolbar,
  Typography,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { styled } from '@mui/system';

import Billing from './Billing';
import Inventory from './Inventory';
import Patients from './Patients';
import Reports from './Reports';
import Tasks from './Tasks';
import Services from './Services'; // Import the Services component
import Sales from './Sales'; // Import the Sales component
import Prescriptions from './Prescriptions'; // Import the Prescriptions component

const drawerWidth = 240;

const Root = styled('div')({
  display: 'flex',
  minHeight: '100vh',  // Set minHeight to '100vh' for full height
});

const AppBarStyled = styled(AppBar)({
  zIndex: (theme) => theme.zIndex.drawer + 1,
  backgroundColor: '#1976D2',
  position: 'fixed',
});

const DrawerStyled = styled(Drawer)({
  width: drawerWidth,
  flexShrink: 0,
});

// Remove the unused variable
const DrawerPaperStyled = styled('div')({
  width: drawerWidth,
});

const Content = styled('div')({
  flexGrow: 1,
  padding: (theme) => theme.spacing(3),
  display: 'flex',
  flexDirection: 'column',
  marginLeft: `${drawerWidth}px`,
  marginTop: '30px', // Adjust the top margin based on your AppBar's height
});
  
const SummaryPaper = styled(Paper)({
  padding: (theme) => theme.spacing(3),
  textAlign: 'center',
  minHeight: '150px',
  backgroundColor: '#E3F2FD',
  margin: (theme) => theme.spacing(2, 0),
});

const Logo = styled('img')({
  width: '80%',
  margin: 'auto',
  marginTop: (theme) => theme.spacing(2),
  marginBottom: (theme) => theme.spacing(4),
  display: 'block',
  marginBottom: '20px', 
});



const MenuIconButton = styled(IconButton)({
  color: 'white',
});

// Remove the unused variable
// const useStyles = styled((theme) => ({
//   toolbar: theme.mixins.toolbar,
// }));

const SectionTitle = styled(Typography)({
  marginBottom: (theme) => theme.spacing(2),
});

const Dashboard = () => {
  const [selectedSection, setSelectedSection] = useState(null);
  // Remove the unused variable
  // const classes = useStyles(); 

  useEffect(() => {
    console.log(`Fetching data for ${selectedSection}`);
    // Your data fetching logic here
  }, [selectedSection]);

  const renderSection = () => {
    switch (selectedSection) {
      case 'billing':
        return <Billing />;
      case 'inventory':
        return <Inventory />;
      case 'patients':
        return <Patients />;
      case 'reports':
        return <Reports />;
      case 'tasks':
        return <Tasks />;
      case 'services':
        return <Services />;
      case 'sales':
        return <Sales />;
      case 'prescriptions':
        return <Prescriptions />;
      default:
        return null;
    }
  };

  const menuItems = [
    { id: 'billing', label: 'Billing' },
    { id: 'inventory', label: 'Inventory' },
    { id: 'patients', label: 'Patients' },
    { id: 'reports', label: 'Reports' },
    { id: 'tasks', label: 'Tasks' },
    { id: 'services', label: 'Services' },
    { id: 'sales', label: 'Sales' },
    { id: 'prescriptions', label: 'Prescriptions' },
  ];

  return (
    <Root>
      <CssBaseline />
      <AppBarStyled position="fixed">
        <Toolbar>
          <MenuIconButton color="inherit" edge="start">
            <MenuIcon />
          </MenuIconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Pharmacy Dashboard
          </Typography>
        </Toolbar>
      </AppBarStyled>
      <DrawerStyled
        anchor="left"
        open
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Logo src="../../public/logo512.png" alt="Logo" />
        <List>
          {menuItems.map((item) => (
            <ListItem button key={item.id} onClick={() => setSelectedSection(item.id)}>
              <ListItemText primary={item.label} />
            </ListItem>
          ))}
        </List>
      </DrawerStyled>
      <Content>
        <Container>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <SummaryPaper>
                <SectionTitle variant="h5" gutterBottom>
                  Stock Summary
                </SectionTitle>
                <Typography variant="body1">
                  Placeholder content for stock summary. Replace with actual content.
                </Typography>
              </SummaryPaper>
            </Grid>
            <Grid item xs={12} md={6}>
              <SummaryPaper>
                <SectionTitle variant="h5" gutterBottom>
                  Sales Summary
                </SectionTitle>
                <Typography variant="body1">
                  Placeholder content for sales summary. Replace with actual content.
                </Typography>
              </SummaryPaper>
            </Grid>
          </Grid>
        </Container>
        {renderSection()}
      </Content>
    </Root>
  );
};

export default Dashboard;
