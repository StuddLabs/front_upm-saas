import styled, { CSSProperties } from 'styled-components';

interface HoverProps {
  hoverBackground?: string
  hoverColor?: string
}

const Button = styled.a<CSSProperties & HoverProps>`
  width: ${props => props.width || '30px'};
  height: ${props => props.height || '30px'};
  padding: ${props => props.padding || '0px'};

  filter: ${props => props.filter || 'drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.12))'};
  margin: ${props => props.margin || '0'};
  transition: ${props => props.transition || '0s'};

  border: ${props => props.border || 'none'};
  border-radius: ${props => props.borderRadius || '5px'};
  outline: none;
  cursor: pointer;
  target:  ${props => props.target || '_self'};

  background: ${props => props.background || 'none'};
  background-repeat: ${props => props.backgroundRepeat || 'no-repeat'};
  background-position: ${props => props.backgroundPosition || 'center'};
  background-image: ${props => `url('${props.backgroundImage}')` || 'url("img.svg")'};
  background-color: ${props => props.backgroundColor || "none"};

  color: ${props => props.color || '#fff'};
  font-size: ${props => props.fontSize || '15px'};
  font-weight: ${props => props.fontWeight || '600'};
  letter-spacing: ${props => props.letterSpacing || '1.2px'};

  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: ${props => props.hoverBackground || "none"};
    color: ${props => props.hoverColor || '#fff'};
  }
`;

export default Button;


