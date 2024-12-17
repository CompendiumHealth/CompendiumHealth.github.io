import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid2';
import Stack from '@mui/material/Stack';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Stepper from '@mui/material/Stepper';
import Typography from '@mui/material/Typography';
import ChevronLeftRoundedIcon from '@mui/icons-material/ChevronLeftRounded';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import AddressForm from './components/AddressForm';
import Info from './components/Info';
import InfoMobile from './components/InfoMobile';
import ScheduleSelector from 'react-schedule-selector';
import Review from './components/Review';
import SitemarkIcon from './components/SitemarkIcon';
import AppTheme from '../shared-theme/AppTheme';
import ColorModeIconDropdown from '../shared-theme/ColorModeIconDropdown';

const steps = ['Info', 'Availability', 'Confirmation'];

export default function Checkout(props) {
  // State hooks for schedule and activeStep
  const [schedule, setSchedule] = React.useState([]);
  const [activeStep, setActiveStep] = React.useState(0);

  // Handlers for navigating steps
  const handleNext = () => setActiveStep((prevStep) => prevStep + 1);
  const handleBack = () => setActiveStep((prevStep) => prevStep - 1);

  // Handler for schedule updates
  const handleScheduleChange = (newSchedule) => setSchedule(newSchedule);

  // Content for each step
  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return <AddressForm />;
      case 1:
        return (
          <ScheduleSelector
            selection={schedule}
            startDate={new Date('2024-12-16T00:00:00')}
            dateFormat={'dddd'}
            numDays={5}
            minTime={9}
            maxTime={18}
            hourlyChunks={2}
            onChange={handleScheduleChange}
          />
        );
      case 2:
        return <Review />;
      default:
        throw new Error('Unknown step');
    }
  };

  return (
    <AppTheme {...props}>
      <CssBaseline enableColorScheme />
      {/* <Box sx={{ position: 'fixed', top: '1rem', right: '1rem' }}>
        <ColorModeIconDropdown />
      </Box> */}

      <Grid container sx={{ height: { xs: '100%', sm: 'calc(100dvh - var(--template-frame-height, 0px))' } }}>
        {/* <Grid
          size={{ xs: 12, sm: 5, lg: 4 }}
          sx={{
            display: { xs: 'none', md: 'flex' },
            flexDirection: 'column',
            backgroundColor: 'background.paper',
            borderRight: { sm: 'none', md: '1px solid' },
            borderColor: { sm: 'none', md: 'divider' },
            alignItems: 'start',
            pt: 16,
            px: 10,
            gap: 4,
          }}
        >
          <SitemarkIcon />
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              flexGrow: 1,
              width: '100%',
              maxWidth: 500,
            }}
          >
            <Info totalPrice={activeStep >= 2 ? '$144.97' : '$134.98'} />
          </Box>
        </Grid> */}
        <Grid
          size={{ sm: 12, md: 7, lg: 8 }}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            maxWidth: '100%',
            width: '100%',
            backgroundColor: { xs: 'transparent', sm: 'background.default' },
            alignItems: 'start',
            pt: { xs: 0, sm: 16 },
            px: { xs: 2, sm: 10 },
            gap: { xs: 4, md: 8 },
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: { sm: 'space-between', md: 'flex-end' },
              alignItems: 'center',
              width: '100%',
              maxWidth: { sm: '100%', md: 600 },
            }}
          >
            <Stepper id="desktop-stepper" activeStep={activeStep} sx={{ width: '100%', height: 40 }}>
              {steps.map((label) => (
                <Step sx={{ ':first-child': { pl: 0 }, ':last-child': { pr: 0 } }} key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
          </Box>
          {/* <Card sx={{ display: { xs: 'flex', md: 'none' }, width: '100%' }}>
            <CardContent sx={{ display: 'flex', width: '100%', alignItems: 'center', justifyContent: 'space-between' }}>
              <div>
                <Typography variant="subtitle2" gutterBottom>
                  Selected products
                </Typography>
                <Typography variant="body1">{activeStep >= 2 ? '$144.97' : '$134.98'}</Typography>
              </div>
              <InfoMobile totalPrice={activeStep >= 2 ? '$144.97' : '$134.98'} />
            </CardContent>
          </Card> */}
          <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1, width: '100%', maxWidth: { sm: '100%', md: 600 }, gap: { xs: 5, md: 'none' } }}>
            {getStepContent(activeStep)}
            <Box
              sx={[
                { display: 'flex', flexDirection: { xs: 'column-reverse', sm: 'row' }, alignItems: 'end', flexGrow: 1, gap: 1 },
                activeStep !== 0 ? { justifyContent: 'space-between' } : { justifyContent: 'flex-end' },
              ]}
            >
              {activeStep !== 0 && (
                <Button startIcon={<ChevronLeftRoundedIcon />} onClick={handleBack} variant="outlined">
                  Previous
                </Button>
              )}
              <Button variant="contained" endIcon={<ChevronRightRoundedIcon />} onClick={handleNext}>
                {activeStep === steps.length - 1 ? 'Schedule' : 'Next'}
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </AppTheme>
  );
}