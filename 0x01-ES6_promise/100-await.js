import { uploadPhoto, createUser } from './utils';

const asyncUploader = async () => {
  try {
    const photo = await uploadPhoto();
    const user = await createUser();

    return {
      photo,
      user,
    };
  } catch (error) {
    return {
      user: null,
      photo: null,
    };
  }
};

export default asyncUploader;
