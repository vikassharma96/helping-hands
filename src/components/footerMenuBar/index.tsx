import React from 'react';
import Grid from '@mui/material/Grid';
import {
  BoxContainer,
  BoxFooter,
  StyledBox,
  StyledContainer,
  StyledLI,
  StyledLink,
  StyledTypography,
  StyledUL,
} from './style';

const footers = [
  {
    title: 'About',
    description: ['Team', 'History', 'Contact us', 'Locations'],
  },
  {
    title: 'Explore',
    description: ['Browse', 'Donate', 'Volunteers', 'Sponsors'],
  },
  {
    title: 'Social',
    description: ['Contact', 'Instagram', 'Linkedin'],
  },
  {
    title: 'Legal',
    description: ['Privacy policy', 'Terms of use'],
  },
];

function Copyright(props: any) {
  return (
    <StyledTypography variant="body1" align="center" {...props}>
      {`Copyright © ${new Date().getFullYear()} HelpingHands`}
    </StyledTypography>
  );
}

const FooterMenuBar: React.FC = () => {
  return (
    <StyledBox>
      <BoxFooter component="footer">
        <BoxContainer component="footer">
          <StyledContainer component="footer">
            <Grid container spacing={4} justifyContent="space-evenly">
              {footers.map((footer) => (
                <Grid item xs={6} sm={3} key={footer.title}>
                  <StyledTypography variant="h2">
                    {footer.title}
                  </StyledTypography>
                  <StyledUL>
                    {footer.description.map((item) => (
                      <StyledLI key={item}>
                        <StyledLink href="#" variant="h3">
                          {item}
                        </StyledLink>
                      </StyledLI>
                    ))}
                  </StyledUL>
                </Grid>
              ))}
            </Grid>
            <Copyright sx={{ mt: 5 }} />
          </StyledContainer>
        </BoxContainer>
      </BoxFooter>
    </StyledBox>
  );
};

export default FooterMenuBar;
