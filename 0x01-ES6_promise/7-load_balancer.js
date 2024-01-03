/* Function to return the promise that resolves first using Promise.race() */

const loadBalancer = (chinaDownload, USDownload) => Promise.race([chinaDownload, USDownload]);

export default loadBalancer;
