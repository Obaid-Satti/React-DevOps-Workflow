import './Loader.css';
import { classNames } from '../../../utils/helpers';

export const Loader = ({ size = 'md', center = false, text, className = '' }) => {
  return (
    <div className={classNames('loader-wrapper', center && 'loader-center', className)}>
      <div className={classNames('spinner', `spinner-${size}`)} />
      {text && <span className="loader-text">{text}</span>}
    </div>
  );
};

export default Loader;
