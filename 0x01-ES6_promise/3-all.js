import { uploadPhoto, createUser } from './utils';

const handleProfileSignup = () => Promise.all([uploadPhoto(), createUser()])
  .then((values) => {
    const { body, firstName, lastName } = { ...values[0], ...values[1] };
    console.log(`${body} ${firstName} ${lastName}`);
  })
  .catch(() => console.log('Signup system offline'));

export default handleProfileSignup;
