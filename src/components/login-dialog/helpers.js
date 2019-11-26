import { ERROR_MESSAGES } from '../../constants';

export const handleSetError = (form, error) => {
  const { getFieldValue, setFields } = form;
  const { fieldName, message } = ERROR_MESSAGES[error.name];

  setFields({
    [fieldName]: {
      value: getFieldValue(fieldName),
      errors: [new Error(message)],
    },
  });
};

export const hasErrors = fieldsError => Object.keys(fieldsError).some(field => fieldsError[field]);
