import PocketBase from 'pocketbase';

var path='';
if(import.meta.env.MODE === 'development')
    path = 'http://localhost:8090'    //localhost = machine de dev
else path = 'https://https://portfolio.ethan-hennequindemeyer.fr/:443'   //url du site 
const pb = new PocketBase(path);
export default pb;