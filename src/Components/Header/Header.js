import {
  StyledButton,
  StyledHeader,
  StyledLogo,
  StyledLogoBox,
  StyledSubTitle,
  StyledText,
  StyledTextBox,
  StyledTitle,
} from "./StyledHeader";
import logo from "../../img/logo-white.png";

export const Header = () => {
  return (
    <StyledHeader>
      <StyledLogoBox>
        <StyledLogo src={logo} alt="Logo" />
      </StyledLogoBox>
      <StyledTextBox>
        <StyledText>
          <StyledTitle>Outdoors</StyledTitle>
          <StyledSubTitle>is where life happens</StyledSubTitle>
        </StyledText>
        <StyledButton href="#">Discover our tours</StyledButton>
      </StyledTextBox>
    </StyledHeader>
  );
};
