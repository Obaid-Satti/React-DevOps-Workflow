import './Input.css';
import { classNames } from '../../../utils/helpers';

export const Input = ({
  label,
  error,
  helperText,
  id,
  type = 'text',
  className = '',
  required = false,
  ...props
}) => {
  const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);

  return (
    <div className={classNames('input-group', error && 'has-error', className)}>
      {label && (
        <label htmlFor={inputId} className="input-label">
          {label}
          {required && <span className="input-required">*</span>}
        </label>
      )}
      <input
        id={inputId}
        type={type}
        className="input-field"
        required={required}
        {...props}
      />
      {error && <span className="input-error-msg">{error}</span>}
      {!error && helperText && <span className="input-helper-msg">{helperText}</span>}
    </div>
  );
};

export default Input;
