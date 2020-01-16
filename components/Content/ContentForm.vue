<template>
  <VGrid variant="container">
    <VRow>
      <VCol variant="md-10">
        <form name="contact" method="post" class="form" @submit="submitForm">
          <input type="hidden" name="form-id" :value="form_id">
          <VRow>
            <VCol variant="md-6">
              <div class="form__group">
                <input type="text" name="full-name" class="form__input" placeholder="Name" v-model="name">
              </div>
            </VCol>
            <VCol variant="md-6">
              <div class="form__group">
                <input type="text" name="company-name" class="form__input" placeholder="Company" v-model="company">
              </div>
            </VCol>
          </VRow>
          <VRow>
            <VCol variant="md-6">
              <div class="form__group">
                <input type="text" name="email" class="form__input" placeholder="Email" v-model="email">
              </div>
            </VCol>
            <VCol variant="md-6">
              <div class="form__group">
                <input type="text" name="type" class="form__input" placeholder="Type" v-model="type">
              </div>
            </VCol>
          </VRow>
          <VRow>
            <VCol variant="md-12">
              <div class="form__group">
                <textarea name="message" cols="30" rows="10" v-model="message"></textarea>
              </div>
              <div class="form__group">
                <input class="btn  btn--default" type="submit" value="Submit" @click="submitForm">
              </div>
            </VCol>
          </VRow>
        </form>
      </VCol>
    </VRow>
  </VGrid>
</template>

<script>
  export default {
    props: {
      form_id: {
        type: Number,
        required: true
      },
    },
    data() {
      return {
        name: '',
        company: '',
        email: '',
        type: '',
        message: ''
      }
    },
    methods: {
      submitForm() {

      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
