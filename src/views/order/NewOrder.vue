<template>
  <div class="main-content">
    <h3>处理病案订单</h3>
    <el-form ref="formRef" :model="form" label-width="120px" :inline="true" :status-icon="true">
      <el-form-item label="病案患者姓名" label-width="120px">
        <el-input v-model="form.name" prefix-icon="el-icon-user-solid" clearable />
      </el-form-item>
      <el-form-item label="病案患者身份证号" label-width="220px">
        <el-input v-model="form.idCard" prefix-icon="el-icon-s-check" clearable />
      </el-form-item>
      <el-form-item label="领取方式">
        <el-select v-model="form.type" placeholder="请选择领取方式">
          <el-option label="本人到院领取" value="self" />
          <el-option label="委托人到院领取" value="other" />
          <el-option label="委托快递领取" value="byOrder" />
        </el-select>
      </el-form-item>
      <br>
      <el-form-item label="领取时间">
        <el-col :span="28">
          <el-date-picker
            v-model="form.date"
            type="datetime"
            placeholder="请选择当前日期"
            style="width: 100%"
          />
        </el-col>
      </el-form-item>
      <el-form-item label="病案页数" label-width="220px" class="small-input">
        <el-input v-model="form.page" type="number" prefix-icon="el-icon-document-copy" clearable class="smallInput" />
      </el-form-item>
      <el-form-item label="收费登记" label-width="120px" class="small-input">
        <el-input v-model="form.money" type="number" prefix-icon="el-icon-s-claim" clearable class="smallInput" />
      </el-form-item>
      <br>
      <template v-if="form.type ==='other' ">
        <el-form-item label="领取人姓名" label-width="120px">
          <el-input v-model="form.postman" prefix-icon="el-icon-user-solid" clearable />
        </el-form-item>
        <el-form-item label="领取人身份证号" label-width="220px">
          <el-input v-model="form.postmanId" prefix-icon="el-icon-s-check" clearable />
        </el-form-item>
        <el-form-item label="领取人手机号" label-width="120px">
          <el-input v-model="form.postmanTel" prefix-icon="el-icon-phone" clearable />
        </el-form-item>
      </template>
      <template v-if="form.type ==='byOrder' ">
        <el-form-item label="快递方式" label-width="120px">
          <el-input v-model="form.postman" prefix-icon="el-icon-user-solid" clearable />
        </el-form-item>
        <el-form-item label="快递单号" label-width="220px">
          <el-input v-model="form.postmanId" prefix-icon="el-icon-s-check" clearable />
        </el-form-item>
        <el-form-item label="收件人">
          <el-select v-model="form.orderType" placeholder="收件人">
            <el-option label="患者本人" value="selfOrder" />
            <el-option label="他人代取" value="otherOther" />
          </el-select>
        </el-form-item>
      </template>
      <template v-if="form.orderType ==='otherOther' ">
        <el-form-item label="收件人姓名" label-width="120px">
          <el-input v-model="form.postman" prefix-icon="el-icon-user-solid" clearable />
        </el-form-item>
        <el-form-item label="收件详细地址" label-width="120px">
          <el-input v-model="form.postmanId" prefix-icon="el-icon-s-check" clearable class="longInput" />
        </el-form-item>
        <el-form-item label="手机号" label-width="220px">
          <el-input v-model="form.postmanId" prefix-icon="el-icon-s-check" clearable />
        </el-form-item>
      </template>
      <el-form-item style="margin:30px 500px">
        <el-button type="primary" @click="onSubmit">提交</el-button>
        <el-button @click="onReset">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" setup>

export default {
  data() {
    return {
      form: {
        name: '',
        type: 'self',
        id_card: '',
        date: '',
        page: '',
        money: ''
      }
    }
  },
  methods: {
    onSubmit() {
      console.log('submit!')
    },
    onReset() {
      this.form = {
        name: '',
        type: 'self',
        date1: '',
        date2: '',
        delivery: false,
        type2: [],
        resource: '',
        desc: ''
      }
    }
  }
}
</script>

<style lang="css">
.main-content {
  padding: 32px;
  width: 100%;
}
.el-form-item__content{
  width: 300px;
}
.el-input__inner{
  width: 100%;
}
.longInput{
  width: 420px;
}
.el-button{
  padding: 10px 40px;
}
.smallInput{
  width:180px;
}
</style>

