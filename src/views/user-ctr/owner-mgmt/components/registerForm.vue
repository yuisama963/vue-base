<!--
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-09-07 15:21:15
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-09-07 18:52:26
 * @FilePath: \basic\src\views\user-ctr\owner-mgmt\components\registerForm.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
 
    <a-form
      class="register-form"
      :model="formState"
      :label-col="labelCol"
    >
          <a-form-item
            label="企业名称"
            name="companyName"
            :rules="[{ required: true, message: 'Please input your username!' }]"
          >
            <a-input v-model:value="formState.companyName" />
          </a-form-item>
          <a-form-item
            label="信用代码或注册号"
            name="creditCode"
            :rules="[{ required: true, message: 'Please input your username!' }]"
          >
            <a-input v-model:value="formState.creditCode" />
          </a-form-item>
          <a-form-item
            label="营业执照"
            name="businessLicense"
            :rules="[{ required: true, message: 'Please input your username!' }]"
          >
            <a-upload
              v-model:file-list="formState.businessLicense"
              action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
              list-type="picture-card"
              @preview="handlePreview"
            >
              <div>
                <plus-outlined />
              </div>
            </a-upload>
    <a-modal :visible="previewVisible" :title="previewTitle" :footer="null" @cancel="handleCancel">
      <img alt="example" style="width: 100%" :src="previewImage" />
    </a-modal>
          </a-form-item>
          <a-form-item
            label="营业执照有效期"
            name="validity"
            :rules="[{ required: true, message: 'Please input your username!' }]"
          >
            <a-range-picker v-model:value="formState.validity" value-format="YYYY-MM-DD"/>
          </a-form-item>
          <a-form-item
            label="企业所在地"
            name="businessLocation"
            :rules="[{ required: true, message: 'Please input your username!' }]"
          >
            <a-input v-model:value="formState.businessLocation" />
          </a-form-item>
          <a-form-item
            label="详细地址"
            name="address"
            :rules="[{ required: true, message: 'Please input your username!' }]"
          >
            <a-select
      ref="select"
      v-model:value="address"
      style="width: 120px"
      @focus="focus"
      @change="handleChange"
    >
      <a-select-option value="jack">Jack</a-select-option>
      <a-select-option value="lucy">Lucy</a-select-option>
      <a-select-option value="disabled" disabled>Disabled</a-select-option>
      <a-select-option value="Yiminghe">yiminghe</a-select-option>
    </a-select>
          </a-form-item>
          <a-form-item
            label="法人姓名"
            name="legalPersonName"
            :rules="[{ required: true, message: 'Please input your username!' }]"
          >
            <a-input v-model:value="formState.legalPersonName" />
          </a-form-item>
          <a-form-item
            label="法人身份证号"
            name="legalPersonID"
            :rules="[{ required: true, message: 'Please input your username!' }]"
          >
            <a-input v-model:value="formState.legalPersonID" />
          </a-form-item>
          <a-form-item
            label="业务联系人"
            name="businessContact"
            :rules="[{ required: true, message: 'Please input your username!' }]"
          >
            <a-input v-model:value="formState.businessContact" />
          </a-form-item>
          <a-form-item
            label="联系人身份证号"
            name="contactID"
            :rules="[{ required: true, message: 'Please input your username!' }]"
          >
            <a-input v-model:value="formState.contactID" />
          </a-form-item>
          <a-form-item
            label="联系人手机号"
            name="contactPhone"
            :rules="[{ required: true, message: 'Please input your username!' }]"
          >
            <a-input v-model:value="formState.contactPhone" />
          </a-form-item>
          <a-form-item
            label="企业开户银行"
            name="corporateBank"
            :rules="[{ required: true, message: 'Please input your username!' }]"
          >
            <a-input v-model:value="formState.corporateBank" />
          </a-form-item>
          <a-form-item
            label="企业银行账号"
            name="corporateBankAccount"
            :rules="[{ required: true, message: 'Please input your username!' }]"
          >
            <a-input v-model:value="formState.corporateBankAccount" />
          </a-form-item>
      
  </a-form>
</template>

<script setup>
import { PlusOutlined } from '@ant-design/icons-vue'
import { ref } from 'vue'
const formState = ref({
  companyName: '',
  creditCode: '',
  businessLicense: null,
  address: '',
  legalPersonName: '',
  legalPersonID: '',
  businessContact: '',
  contactID: '',
  contactPhone: '',
  corporateBank: '',
  corporateBankAccount: ''
})
const labelCol = {style: {width: '150px'}}

const previewVisible = ref(false);
const previewImage = ref('');
const previewTitle = ref('');

    const handleCancel = () => {
      previewVisible.value = false;
      previewTitle.value = '';
    };

    const handlePreview = async file => {
      if (!file.url && !file.preview) {
        file.preview = await getBase64(file.originFileObj);
      }

      previewImage.value = file.url || file.preview;
      previewVisible.value = true;
      previewTitle.value = file.name || file.url.substring(file.url.lastIndexOf('/') + 1);
    };
</script>

<style lang="scss" scoped>
.register-form {
  width: 664px;
}
</style>