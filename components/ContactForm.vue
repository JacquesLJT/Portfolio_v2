<template>
  <c-box 
    as="form" 
    name="contact" 
    method="POST" 
    data-netlify="true" 
    data-netlify-honeypot="bot-field" 
    p="6" 
    shadow="2xl" 
    borderWidth="1px" 
    bg="white"
    rounded="lg"
  >
    <input type="hidden" name="form-name" value="contact" />

    <c-form-control my="5">
      <c-form-label for="name">Your Name</c-form-label>
      <c-input id="name" name="name" type="text" required />
    </c-form-control>

    <c-form-control my="5">
      <c-form-label for="email">Your Email</c-form-label>
      <c-input id="email" name="email" type="email" required />
    </c-form-control>

    <c-form-control my="5">
      <c-form-label for="message">Your Message</c-form-label>
      <c-textarea id="message" name="message" required />
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
  
};
</script>

