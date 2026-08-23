import './Toast.css';
import { classNames } from '../../../utils/helpers';

export const Toast = ({ message, type = 'info', onClose }) => {
  if (!message) return null;

  return (
    <div className={classNames('toast-item', `toast-${type}`)}>
      <span className="toast-icon">
        {type === 'success' && '✓'}
        {type === 'error' && '✕'}
        {type === 'warning' && '⚠'}
        {type === 'info' && 'ℹ'}
      </span>
      <span className="toast-text">{message}</span>
      {onClose && (
        <button className="toast-close" onClick={onClose} aria-label="Close notification">
          &times;
        </button>
      )}
    </div>
  );
};

export default Toast;
