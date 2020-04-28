//管理项目的ajax请求，每个请求对应一个
import ajax from './ajax'

export const reqLogin = (loginObj) => ajax.post('/login',loginObj)
