<template>
    <c-flex 
        w="100%"
        justify-content="center"
        flex-wrap="wrap"
        bg="#982649"
        pb="10"
        id="contact"
    >
        <c-flex m="5" w="100vw" justify="center">
            <c-text font-family="Quicksand, sans-serif" fontSize="5xl" color="#FFEAEC" font-weight="700">
                Contact Me
            </c-text>
        </c-flex>
        <c-flex mb="5" justify="center">
            <c-pseudo-box
                as="a"
                bg="#FFEAEC"
                color="#982649"
                rounded="md"
                py="2"
                px="4"
                border="2px solid #101935"
                href="mailto:me@landonthibodeau.com"
                fontSize="3xl"
                mr="5"
                :_hover="{ 
                    bg: '#E56B6F',
                    color: '#FFEAEC',
                    cursor: 'pointer'
                }"
            >
                <font-awesome-icon icon="fa-regular fa-envelope" />
                Email Me
            </c-pseudo-box>
            <c-pseudo-box
                as="a"
                bg="#FFEAEC"
                color="#982649"
                rounded="md"
                py="2"
                px="4"
                border="2px solid #101935"
                target="_blank"
                href="https://firebasestorage.googleapis.com/v0/b/portfolio-fdf27.appspot.com/o/web_assets%2FResume%CC%81%202021.pdf?alt=media&token=913bfa8c-bf76-4bca-a5dd-db87e3dd4898"
                fontSize="3xl"
                ml="5"
                :_hover="{ 
                    bg: '#E56B6F',
                    color: '#FFEAEC',
                    cursor: 'pointer'
                }"
            >
                <font-awesome-icon icon="fa-regular fa-file-pdf" />
                Download Resume
            </c-pseudo-box>
        </c-flex>
    </c-flex>
</template>

<script>
import { CText, CFlex, CPseudoBox, CButton } from '@chakra-ui/vue'

export default {
    name: 'Contact',
    components: {
        CText,
        CFlex,
        CPseudoBox,
        CButton,
    }
}
</script>