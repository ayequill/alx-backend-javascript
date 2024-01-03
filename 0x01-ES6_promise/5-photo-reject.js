const uploadPhoto = (filename) => new Promise(
  (_, reject) => reject(new Error(`${filename} cannot be processed`)),
);

export default uploadPhoto;
