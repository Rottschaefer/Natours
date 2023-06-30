import styled, { keyframes } from "styled-components";
import hero from "../../img/hero.jpg";

// Light green: #7ed56f
// Medium green: #55c57a
// Dark green: #28b485

const moveInDown = keyframes`
0%{
  opacity: 0;
  transform: translateY(-30px);
}
100%{
  opacity: 1;
  transform: translateY(0);
}
`;

const moveInUp = keyframes`
0%{
  opacity: 0;
  transform: translateY(30px);
}
100%{
  opacity: 1;
  transform: translateY(0);
}
`;

export const StyledHeader = styled.header`
  position: relative;
  background-image: linear-gradient(
      to right,
      rgb(126, 213, 111, 0.8),
      rgb(40, 180, 133, 0.8)
    ),
    url(${hero});
  background-size: cover;
  height: 95vh;
  background-position: top;
  clip-path: polygon(0 0, 100% 0, 100% 75vh, 0 100%);
`;

export const StyledLogoBox = styled.div`
  position: absolute;
  top: 40px;
  left: 40px;
`;

export const StyledLogo = styled.img`
  height: 35px;
`;

export const StyledTextBox = styled.div`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;

  backface-visibility: hidden;
`;

export const StyledText = styled.h1`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  text-transform: uppercase;
  text-align: center;
`;

export const StyledTitle = styled.span`
  width: 98%;
  letter-spacing: 35px;
  font-size: 60px;
  font-weight: 400;
  animation: ${moveInDown} 1.5s ease-out;
`;

export const StyledSubTitle = styled.span`
  width: 98%;
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 17.4px;
  padding-right: -17.4px;

  animation: ${moveInUp} 1.5s ease-out;
`;

export const StyledButton = styled.a`
  color: #777;
  /* font-size: 18px; */
  text-decoration: none;
  background-color: #fff;
  padding: 19px 40px;
  display: inline-block;
  margin-top: 50px;
  border-radius: 100px;
  font-weight: 400;
  text-transform: uppercase;
  transition: all 0.3s;

  animation: ${moveInUp} 1.5s ease-out 1.7s;
  animation-fill-mode: backwards;

  position: relative;

  :hover {
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    transform: translateY(-3px);
  }

  :active {
    transform: translateY(-1px);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  }

  ::before {
    content: "";
    background-color: white;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50px;
    position: absolute;
    top: 0;
    right: 0;
    z-index: -1;

    transition: all 1s;
  }

  :hover::before {
    transform: scale(1.3);
    opacity: 0;
  }
`;
