<template>
  <v-container fluid class="tw-h-full tw-p-0">
    <v-row no-gutters class="tw-h-40 md:tw-h-full tw-bg-white">
      <v-col cols="12" md="6">
        <v-img src="https://area.sinaapp.com/bingImg/" class="tw-h-40 md:tw-h-full" />
      </v-col>
      <v-col cols="12" md="6">
        <v-container class="tw-mt-8 md:tw-mt-40 tw-p-8 lg:tw-pl-12">
          <h1 class="display-1 tw-mb-8">后台登录</h1>
          <v-form ref="form" style="max-width: 300px">
            <v-text-field v-model="form.account" label="账号" :rules="[rules.isRequired]" />
            <v-text-field v-model="form.password" label="密码"
                          :type="showPassword ? 'text' : 'password'"
                          :append-icon="showPassword ? 'mdi-eye-outline' : 'mdi-eye-off-outline'"
                          @click:append="showPassword = !showPassword"
                          :rules="[rules.isRequired]" />
          </v-form>
          <v-btn elevation="0" @click.native="submit" color="primary" :loading="loading">登录</v-btn>
          <a href="https://igws.indiana.edu/" class="caption tw-absolute tw-bottom-0 tw-flex tw-items-center tw-text-gray-700"><v-icon small class="mr-2 tw-text-gray-700">mdi-arrow-left</v-icon> 返回旅行筛</a>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import rules from '@utils/validation'
export default {
  name: 'Login',
  data () {
    return {
      visible: false,
      loading: false,
      showPassword: false,
      form: {
        account: '',
        password: ''
      },
      rules: rules
    }
  },
  methods: {
    async submit () {
      if (!this.$refs.form.validate()) return this.$noty.error('请输入正确的账号和密码。')
      this.loading = true
      try {
        await this.$auth.login(this.form)
        this.loading = false
        this.$router.push({ name: 'Home.Index' })
      } catch (e) {
        console.log(e)
        this.loading = false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
