import React from 'react';
import { styled } from '@mui/material/styles';
import { Box, MobileStepper, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import colors from 'src/theme/colors';

const StyledBox = styled(Box)({
  flexGrow: 1,
});

const StyledPaper = styled(Paper)<{
  square: boolean;
  elevation: number;
}>({
  position: 'absolute',
  alignItems: 'center',
  top: '25%',
  width: '50%',
});

const ImageBox = styled(Box)<{
  component: string;
  src: string;
  alt: string;
}>({
  height: 400,
  display: 'block',
  minHeight: '90vh',
  overflow: 'hidden',
  width: '100%',
  backgroundColor: 'rgb(31, 34, 48, 0.1)',
});

const StyledTypography = styled(Typography)({
  position: 'absolute',
  top: 0,
  left: '20%',
  color: colors.white,
  gutterBottom: true,
  fontSize: 100,
  zIndex: 2,
});

const StyledStepper = styled(MobileStepper)<{
  steps: number;
  position: string;
  variant: string;
  activeStep: number;
  nextButton: React.ReactNode;
  backButton: React.ReactNode;
}>({
  position: 'absolute',
  top: '70%',
  right: '10%',
  alignItems: 'center',
  backgroundColor: 'transparent',
  '.MuiMobileStepper-dots': {
    backgroundColor: 'transparent',
    marginLeft: 50,
    marginRight: 50,
  },
  '.MuiMobileStepper-dot': {
    width: 13,
    height: 13,
    marginLeft: 4,
    marginRight: 4,
  },
  '.MuiMobileStepper-dotActive': {
    width: 13,
    height: 13,
    marginLeft: 4,
    marginRight: 4,
    backgroundColor: colors.white,
  },
});

export {
  StyledBox,
  StyledPaper,
  ImageBox,
  StyledTypography,
  StyledStepper,
};
