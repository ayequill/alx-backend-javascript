export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    if (1 + 1 == 2) resolve('Success');
    else reject('Error');
  });
}
