import * as React from 'react';

import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemText from '@mui/material/ListItemText';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

const addresses = ['6914 Hollywood Blvd', 'Los Angeles', 'California', '90028', 'USA'];
// const payments = [
//   { name: 'Card type:', detail: 'Visa' },
//   { name: 'Card holder:', detail: 'Tony Sun' },
//   { name: 'Card number:', detail: 'xxxx-xxxx-xxxx-1234' },
//   { name: 'Expiry date:', detail: '04/2024' },
// ];

export default function Review() {
  return (
    <Stack spacing={2}>
      {/* <List disablePadding>
        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Products" secondary="4 selected" />
          <Typography variant="body2">$134.98</Typography>
        </ListItem>
        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Shipping" secondary="Plus taxes" />
          <Typography variant="body2">$9.99</Typography>
        </ListItem>
        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            $144.97
          </Typography>
        </ListItem>
      </List> */}
      {/* <Divider /> */}
      <Stack
        direction="column"
        divider={<Divider flexItem />}
        spacing={2}
        sx={{ my: 2 }}
      >
        <div>
          <Typography variant="subtitle2" gutterBottom>
            Appointment Confirmation
          </Typography>
          <Typography gutterBottom>Tony Sun</Typography>
          <Typography gutterBottom sx={{ color: 'text.secondary' }}>
            {addresses.join(', ')}
          </Typography>
        </div>
        <div>
          <Typography variant="subtitle2" gutterBottom>
            Texting Opt-In
          </Typography>
          <Grid container
          align="left">
            By submitting this form, you agree to receive automated text messages at this number to help coordinate your follow-up appointments. Reply HELP for help or STOP to cancel. Messaging and data rates may apply.
          </Grid>
          {/* <Grid container>
            {payments.map((payment) => (
              <React.Fragment key={payment.name}>
                <Stack
                  direction="row"
                  spacing={1}
                  useFlexGap
                  sx={{ width: '100%', mb: 1 }}
                >
                  <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                    {payment.name}
                  </Typography>
                  <Typography variant="body2">{payment.detail}</Typography>
                </Stack>
              </React.Fragment>
            ))}
          </Grid> */}
        </div>
      </Stack>
    </Stack>
  );
}
