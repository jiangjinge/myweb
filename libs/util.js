import axios from 'axios';

const Util = {
	baseURL: 'http://127.0.0.1:3000'
}

Util.ajax = axios.create({
	baseURL: Util.baseURL
});

export default Util;