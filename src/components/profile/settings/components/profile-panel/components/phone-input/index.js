import React, { forwardRef } from 'react';
import ReactInputMask from 'react-input-mask';
import { Input } from 'antd';

export const PhoneInput = forwardRef((props, ref) => {
  return (
    <ReactInputMask {...props}>
      {inputProps => (
        <Input
          {...inputProps}
          ref={ref}
          disabled={props.disabled ? props.disabled : null}
        />
      )}
    </ReactInputMask>
  );
});
