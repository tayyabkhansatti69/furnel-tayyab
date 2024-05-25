import React from 'react';
import { Grid, Card, CardContent, Typography, Avatar } from '@mui/material';

const UserCard = ({ imageUrl, numberOfUsers, userType }) => {
  return (
    <Card sx={{ maxWidth: 196, height: 182, margin: 1 }}>
      <CardContent sx={{display:'flex',flexDirection:'column',justifyContent:'flex-start',alignItems:'flex-start'}} >
        <Avatar sx={{ width: 64, height: 64,mb:'1rem' }} alt="User Image" src={imageUrl} />
        <Typography variant="body1" align="left" gutterBottom>
           {numberOfUsers}
        </Typography>
        <Typography variant="body2" align="left">
           {userType}
        </Typography>
      </CardContent>
    </Card>
  );
};

const DashboardCard = () => {
  // Assuming data for the cards
  const cardsData = [
    { imageUrl: 'image1.jpg', numberOfUsers: '10k', userType: 'Admin' },
    { imageUrl: 'image2.jpg', numberOfUsers: '20k', userType: 'Member' },
    { imageUrl: 'image3.jpg', numberOfUsers: '15k', userType: 'Guest' },
    { imageUrl: 'image4.jpg', numberOfUsers: '12k', userType: 'Moderator' },
    { imageUrl: 'image5.jpg', numberOfUsers: '110k', userType: 'Moderator' },
  ];

  return (
    <Grid container spacing={2}>
      {cardsData.map((card, index) => (
        <Grid key={index} item xs={2.4}>
          <UserCard {...card} />
        </Grid>
      ))}
    </Grid>
  );
};

export default DashboardCard;
