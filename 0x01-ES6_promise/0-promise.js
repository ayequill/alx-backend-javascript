export default function getResponseFromAPI() {
  const isBool = true;
  return new Promise((resolve, reject) => {
    if (isBool) resolve('Success');
    else reject(new Error('Error'));
  });
}
