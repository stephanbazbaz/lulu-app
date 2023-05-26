import React from 'react';
import styles from './FlexRow.module.scss';
import clsx from 'classnames';

const FlexRow = ({ children, justifyContent, className }) => (
  <div className={clsx([styles.FlexRow, className])} style={{ justifyContent: justifyContent }}>
    {children}
  </div>
);

export default FlexRow;
