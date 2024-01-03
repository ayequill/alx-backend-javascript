import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

const handleProfileSignup = (
  firstName,
  lastName,
  filename,
) => Promise.allSettled(
  [signUpUser(firstName, lastName), uploadPhoto(filename)],
).then((values) => values);

export default handleProfileSignup;
