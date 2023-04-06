<template>
    <c-flex
        id="contact"
        w="100%"
        justify-content="center"
        flex-wrap="wrap"
        bg="#D9E3F2"
        color="#101935"
        pb="10"
    >
        <c-flex
            w="100%"
            mt="10"
            justify="center"
            align="center"
            flex-wrap="wrap"
        >
            <c-text
                h="max-content"
                font-family="Quicksand, sans-serif"
                :font-size="{ base: '4xl', sm: '6xl' }"
                font-weight="700"
                justify="center"
                align="center"
            >
                Contact Me
            </c-text>
        </c-flex>
        <c-flex
            w="100%"
            mt="10"
            justify="center"
            align="center"
            flex-wrap="wrap"
        >
            <c-flex
                mb="5"
                justify="center"
                :flex-direction="{ base: 'column', sm: 'row'}"
            >
                <ContactForm />
            </c-flex>
        </c-flex>
    </c-flex>
</template>

<script>
import { CText, CFlex, CPseudoBox, CButton } from '@chakra-ui/vue'
import ContactForm from '~/components/ContactForm.vue'

export default {
    name: 'Contact',
    components: {
        CText,
        CFlex,
        CPseudoBox,
        CButton,
        ContactForm
    }
}
</script>
