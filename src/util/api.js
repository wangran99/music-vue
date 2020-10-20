import { get, post } from '@/util/request';

const api = {
    test() {
        return get('/test/live');
    },
    // 登录
    login(userName, password) {
        return post('/login', { userName, password });
    }
    // 其他接口…………
}

export default api;