import React, { FunctionComponent } from 'react';
import './Alert.css';

export interface AlertProps {
  message: string;
  onDismiss: () => void;
}

export const Alert: FunctionComponent<AlertProps> = ({ onDismiss, message }) => {
  return (
    <div className="alert">
      <span className="closebtn" onClick={onDismiss}>
        &times;
      </span>
      {message}
    </div>
  );
};
