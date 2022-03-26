import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import {
  StyledBox,
  StyledPaper,
  ImageBox,
  StyledTypography,
  StyledStepper,
} from './style';
import sliderBg from '../../assets/images/sliderBg.jpg';
import sliderBg1 from '../../assets/images/sliderBg1.jpg';
import { IconButton } from '@mui/material';
import ArrowRight from '@mui/icons-material/ArrowRightAltTwoTone';
import ArrowLeft from '@mui/icons-material/SwipeLeft';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: 'Help the Poor \n in Need',
    imgPath: `${sliderBg}`,
  },
  {
    label: 'By Helping them today',
    imgPath: `${sliderBg1}`,
  },
  {
    label: 'Help the Poor \n in Need',
    imgPath: `${sliderBg}`,
  },
  {
    label: 'By Helping them today',
    imgPath: `${sliderBg1}`,
  },
];

function HomeCarousel() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  return (
    <StyledBox>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <>
                <StyledPaper square elevation={0}>
                  <StyledTypography variant="h2">
                    {images[activeStep].label}
                  </StyledTypography>
                </StyledPaper>
                <ImageBox
                  component="img"
                  src={step.imgPath}
                  alt={step.label}
                />
              </>
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <StyledStepper
        steps={maxSteps}
        position="static"
        variant="dots"
        activeStep={activeStep}
        nextButton={
          <IconButton
            aria-label="delete"
            size="large"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
            style={{
              backgroundColor: 'white',
            }}
          >
            {theme.direction === 'rtl' ? (
              <ArrowLeft fontSize="large" />
            ) : (
              <ArrowRight fontSize="large" />
            )}
          </IconButton>
        }
        backButton={
          <IconButton
            size="large"
            onClick={handleBack}
            disabled={activeStep === 0}
            style={{
              backgroundColor: 'white',
            }}
          >
            {theme.direction === 'rtl' ? (
              <ArrowRight fontSize="large" />
            ) : (
              <ArrowLeft fontSize="large" />
            )}
          </IconButton>
        }
      />
    </StyledBox>
  );
}

export default HomeCarousel;
