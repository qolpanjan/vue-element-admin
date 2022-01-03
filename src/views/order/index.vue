<template>
  <div class="main-content">
    <h3 class="main-title">和田地区维吾尔医医院病案申请订单</h3>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="id" label="序号" />
      <el-table-column prop="name" label="姓名" />
      <el-table-column prop="status" label="状态">
        <template #default="scope">
          <span v-if="scope.row.status == 'ask'">已申请</span>
          <span v-if="scope.row.status == 'receive'">已接受</span>
          <span v-if="scope.row.status == 'ready'">已处理</span>
          <span v-if="scope.row.status == 'send'">已发送</span>
        </template>
      </el-table-column>
      <el-table-column prop="hospital_id" label="住院号" />
      <el-table-column prop="tel_num" label="手机号" />
      <el-table-column prop="province" label="省份" />
      <el-table-column prop="city" label="城市" />
      <el-table-column prop="create_time" label="申请时间" />
      <el-table-column prop="update_time" label="更新时间" />
    </el-table>
    <div class="demo-pagination-block">
      <el-pagination
        v-model="currentPage"
        :page-sizes="[5, 10, 20, 50]"
        :page-size="currenPageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </div>
  </div>
</template>

<script>
import { getAllOrder } from '@/api/order'
import moment from 'moment'
export default {
  data() {
    return {
      tableData: [],
      currentPage: 1,
      currenPageSize: 5,
      total: 0
    }
  },
  mounted() {
    this.getData()
  },
  methods: {
    getData() {
      console.log('start')
      return new Promise((resolve, reject) =>
        getAllOrder().then((res) => {
          const resultData = res.data
          resultData.forEach((item) => {
            console.log(moment.unix(1641134868).format())
            item.create_time = moment
              .unix(parseInt(item.create_time))
              .format('YYYY-MM-DD HH:mm')
            if (item.update_time) {
              item.update_time = moment
                .unix(parseInt(item.update_time))
                .format('YYYY-MM-DD HH:mm')
            } else {
              item.update_time = '-'
            }
          })
          this.tableData = resultData
          this.total = resultData.length
        })
      )
    },
    handleSizeChange(currentPage) {
      this.currenPageSize = currentPage
      this.currentPage = 1
    },
    handleCurrentChange(currentPage) {
      this.currentPage = currentPage
    }
  }
}
</script>

<style lang="css">
.main-content {
  padding: 32px;
}
.el-pagination{
  float: right;
  margin-top: 15px;
  opacity: 0.8;
}
.main-title{
  text-align: center;
}
</style>
