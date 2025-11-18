import PocketBase from 'pocketbase';

var path = "";
path = "https://https://portfolio.ethan-hennequindemeyer.fr/:443";
const pb = new PocketBase(path);

export { pb as p };
