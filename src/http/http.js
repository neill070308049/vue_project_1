import axios from 'axios';

// es6 const命令，定义axios实例（instance）
const instance = axios.create({
    baseURL: 'http://127.0.0.1:3000/',
    timeout: 1000,
});

const get = {
    getNews(callback){
        instance.get('http://www.aiqianduan.com:4499/news').then(data => {
            callback(data);
        })
    }
};

export default{
    get(fnName, callback){
        get[fnName](callback);
    }
}