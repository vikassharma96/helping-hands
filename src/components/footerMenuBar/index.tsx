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
import { footerBtns } from 'src/utils/constants';

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
              {footerBtns.map((footer) => (
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
