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
import { Box,  InputBase, Badge } from "@mui/material";
import Billing from './Billing';
import Inventory from './Inventory';
import Patients from './Patients';
import Reports from './Reports';
import Tasks from './Tasks';
import Services from './Services'; // Import the Services component
import Sales from './Sales'; // Import the Sales component
import Prescriptions from './Prescriptions'; // Import the Prescriptions component
import LocalPharmacyIcon from '@mui/icons-material/LocalPharmacy';
import ListItemIcon from '@mui/material/ListItemIcon';
import CardMedia from '@mui/material/CardMedia';
import InventoryIcon from '@mui/icons-material/Inventory';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';






const drawerWidth = 240;

const Root = styled('div')({
  display: 'flex',
  minHeight: '100vh',  // Set minHeight to '100vh' for full height
});
const SearchIcon=styled("div")(({theme}) =>({
  backgroundColor:"white",
  padding:"0 10px",
  borderRadius:theme.shape.borderRadius,
  width:"30%",
  display:"flex"

}))

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
   
});
const Icon=styled(Box)(({theme}) =>({
  display:"flex",
  gap:"20px",
  alignItems:"center"

}))



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
        return <Inventory/>;
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
    { id: 'billing', label: 'Billing'  },
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
         <CardMedia
        component="img"
        alt="green iguana"
        height="100"
        
        image="https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWVkaWNhdGlvbnxlbnwwfHwwfHx8MA%3D%3D"
      />
         {/* <Logo  component="img" src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fpngtree.com%2Fso%2Fmedical-logo&psig=AOvVaw3rDqbkUgv3_KhD6qBngKQd&ust=1704721737523000&source=images&cd=vfe&ved=0CBIQjRxqFwoTCKDF6MO1y4MDFQAAAAAdAAAAABAJ" alt="Logo"  /> */}
        <List>
          
          {menuItems.map((item) => (
            
            <ListItem button key={item.id} onClick={() => setSelectedSection(item.id)}>
               <ListItemIcon>
                <InventoryIcon/>
             </ListItemIcon>
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
<Box position={'center'} flex={2} p={2} ></Box>           

              </SummaryPaper>
            </Grid>
            
            <Grid item xs={12} md={6}>
              <SummaryPaper>
                <SectionTitle variant="h5" gutterBottom>
                  Sales Summary
                </SectionTitle>
                <Box position={'center'} flex={2} p={2} ></Box> 
                <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="200"
        
       
        image="https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWVkaWNhdGlvbnxlbnwwfHwwfHx8MA%3D%3D"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Medicine
        </Typography>
        <Typography variant="body2" color="text.secondary">
          medicine are Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet, quasi! In, reiciendis iste. Voluptas tenetur incidunt, nemo aspernatur, soluta iusto ab ea veritatis accusamus porro quos! Aspernatur iste minima reiciendis!a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
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
