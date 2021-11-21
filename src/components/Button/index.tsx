import { forwardRef, ReactNode, RefObject } from 'react';
import { Link } from 'react-router-dom';
import { StyledButton } from './styles';

export type ButtonSize = 32 | 40 | 48 | 55; // height
export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'outlined';

interface ButtonProps {
  className?: string;
  size?: ButtonSize;
  to?: string;
  variant: ButtonVariant;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  children?: ReactNode;
  onBlur?: () => void;
  onClick?: () => void;
  onFocus?: () => void;
}

type ButtonElement = HTMLButtonElement | HTMLAnchorElement;

// ref prop으로 넘길 때
export const Button = forwardRef<ButtonElement, ButtonProps>(
  (
    {
      size = 40, // height
      variant,
      type = 'button',
      disabled,
      children,
      className,
      to,
      onBlur,
      onClick,
      onFocus,
    },
    ref
  ) => {
    if (to) {
      return (
        <StyledButton
          ref={ref as RefObject<HTMLAnchorElement>}
          size={size}
          variant={variant}
          onBlur={onBlur}
          onClick={onClick}
          onFocus={onFocus}
          as={Link}
          to={to}
          className={className}
        >
          {children}
        </StyledButton>
      );
    }
    return (
      <StyledButton
        ref={ref as RefObject<HTMLButtonElement>}
        size={size}
        variant={variant}
        type={type}
        disabled={disabled}
        onBlur={onBlur}
        onClick={onClick}
        onFocus={onFocus}
        className={className}
      >
        {children}
      </StyledButton>
    );
  }
);

Button.displayName = 'Button'; // DisplayName allows you to name your component. This name is used by React in debugging messages.

//TODO: [링크]: https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/display-name.md
