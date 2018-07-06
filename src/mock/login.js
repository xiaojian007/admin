import { param2Obj } from '@/utils'

var userMap = {
  admin: {
    roles: ['admin'],
    token: 'admin',
    password: 'xiaojian007',
    introduction: '我是超级管理员',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: 'Super Admin'
  },
  editor: {
    roles: ['editor'],
    token: 'editor',
    password: 'xiaojian007',
    introduction: '我是编辑',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: 'Normal Editor'
  }
}

export default {
  loginByUsername: config => {
    const { username } = JSON.parse(config.body)
    return userMap[username]
  },
  getUserInfo: config => {
    console.log(config)
    const { token } = param2Obj(config.url)
    // const { password } = param2Obj('https://api-dev/user/info?token=admin&password=xiaojian007')
    // console.log(password)
    if (userMap[token]) {
      return userMap[token]
    } else {
      return false
    }
  },
  logout: () => 'success'
}
