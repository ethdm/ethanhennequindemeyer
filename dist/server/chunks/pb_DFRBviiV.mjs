import PocketBase from 'pocketbase';

const path = "https://portfolio.ethan-hennequindemeyer.fr";
const pb = new PocketBase(path);

export { pb as p };
