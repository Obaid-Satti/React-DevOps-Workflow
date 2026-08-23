/**
 * Utility helper to concatenate conditional class names
 */
export const classNames = (...classes) => {
  return classes.filter(Boolean).join(' ');
};
