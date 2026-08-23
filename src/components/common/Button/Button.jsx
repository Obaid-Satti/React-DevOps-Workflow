import './Button.css';
import { classNames } from '../../../utils/helpers';

export const Button = ({
  children,
  variant = 'primary', // 'primary' | 'secondary' | 'outline' | 'danger' | 'ghost'
  size = 'md',        // 'sm' | 'md' | 'lg'
  isLoading = false,
  disabled = false,
  fullWidth = false,
  className = '',
  type = 'button',
  onClick,
  ...props
}) => {
  return (
    <button
      type={type}
      disabled={disabled || isLoading}
      onClick={onClick}
      className={classNames(
        'btn',
        `btn-${variant}`,
        `btn-${size}`,
        fullWidth && 'btn-block',
        isLoading && 'btn-loading',
        className
      )}
      {...props}
    >
      {isLoading ? (
        <span className="btn-spinner" aria-label="Loading..." />
      ) : null}
      <span className={isLoading ? 'btn-content-hidden' : 'btn-content'}>
        {children}
      </span>
    </button>
  );
};

export default Button;
