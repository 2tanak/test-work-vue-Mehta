/* eslint-disable no-console */
export default function errorLogger(
  message,
  errorObject = {},
  logAs = 'error',
) {
  console[logAs](message);

  if (Object.keys(errorObject).length) {
    console.log({ error: errorObject });
  }
}
