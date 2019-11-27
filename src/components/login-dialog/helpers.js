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

export const getErrors = (error, fields) => {
  return fields.reduce((acc, field) => {
    const needToShowError = error && ERROR_MESSAGES[field];
    acc[field] = {
      help: needToShowError && ERROR_MESSAGES[field][error.name],
      validateStatus: needToShowError && ERROR_MESSAGES[field][error.name] ? 'error' : 'success',
    };

    return acc;
  }, {});
};

export const hasErrors = fieldsError => Object.keys(fieldsError).some(field => fieldsError[field]);
