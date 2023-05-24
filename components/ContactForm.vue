<template>
  <c-box 
    as="form" 
    data-netlify="true" 
    name="contact" 
    method="POST" 
    @submit.prevent="submitForm" 
    p="6" 
    shadow="2xl" 
    borderWidth="1px" 
    bg="white"
    rounded="lg"
  >
    <c-form-control my="5">
      <c-form-label for="name">Your Name</c-form-label>
      <c-input id="name" type="text" v-model="form.name" required />
    </c-form-control>

    <c-form-control my="5">
      <c-form-label for="email">Your Email</c-form-label>
      <c-input id="email" type="email" v-model="form.email" required />
    </c-form-control>

    <c-form-control my="5">
      <c-form-label for="message">Your Message</c-form-label>
      <c-textarea id="message" v-model="form.message" required />
    </c-form-control>

    <c-button type="submit" colorScheme="blue" width="100%">Submit</c-button>
  </c-box>
</template>

<script>
import { CBox, CFormControl, CFormLabel, CInput, CTextarea, CButton } from '@chakra-ui/vue';

export default {
  components: {
    CBox,
    CFormControl,
    CFormLabel,
    CInput,
    CTextarea,
    CButton
  },

  data() {
    return {
      form: {
        name: '',
        email: '',
        message: '',
      },
    };
  },
  methods: {
    async submitForm() {
      const encode = (data) => {
        return Object.keys(data)
          .map(
            (key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
          )
          .join('&');
      };

      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({
          'form-name': 'contact',
          ...this.form,
        }),
      })
        .then(() => alert('Form successfully submitted!'))
        .catch((error) => alert(error));
    },
  },
};
</script>

