import PocketBase from 'pocketbase';

var path = "";
path = "https://portfolio.ethan-hennequindemeyer.fr/";
const pb = new PocketBase(path);

export { pb as p };
