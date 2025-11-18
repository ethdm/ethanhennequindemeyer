import PocketBase from 'pocketbase';

var path = "";
path = "https://portfolio.ethanhennequindemeyer.fr:443";
const pb = new PocketBase(path);

export { pb as p };
