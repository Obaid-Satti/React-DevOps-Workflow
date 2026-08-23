import './Card.css';
import { classNames } from '../../../utils/helpers';

export const Card = ({
  children,
  title,
  subtitle,
  headerAction,
  footer,
  className = '',
  hoverable = false,
  glass = false,
  ...props
}) => {
  return (
    <div
      className={classNames(
        'card-container',
        hoverable && 'card-hoverable',
        glass && 'card-glass',
        className
      )}
      {...props}
    >
      {(title || subtitle || headerAction) && (
        <div className="card-header">
          <div>
            {title && <h3 className="card-title">{title}</h3>}
            {subtitle && <p className="card-subtitle">{subtitle}</p>}
          </div>
          {headerAction && <div className="card-action">{headerAction}</div>}
        </div>
      )}
      <div className="card-body">{children}</div>
      {footer && <div className="card-footer">{footer}</div>}
    </div>
  );
};

export default Card;
