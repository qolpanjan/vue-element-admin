import request from '@/utils/request'

export function getAllOrder() {
  return request({
    url: '/order/all',
    method: 'GET'
  })
}
