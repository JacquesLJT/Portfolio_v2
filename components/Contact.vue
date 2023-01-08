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
                <c-pseudo-box
                    h="max-content"
                    justify="center"
                    align="center"
                    as="a"
                    bg="#C6D5EB"
                    color="#101935"
                    rounded="md"
                    py="2"
                    px="4"
                    border="2px solid #101935"
                    href="mailto:me@landonthibodeau.com"
                    fontSize="3xl"
                    :mb="{ base: '5', sm: '0'}"
                    :mr="{ base: '0', sm: '5'}"
                    :_hover="{ 
                        bg: '#8DABD8',
                        color: '#D9E3F2',
                        cursor: 'pointer'
                    }"
                >
                    <font-awesome-icon
                        :icon="['far', 'envelope']"
                    />
                    Email Me
                </c-pseudo-box>
                <c-pseudo-box
                    h="max-content"
                    justify="center"
                    align="center"
                    as="a"
                    bg="#C6D5EB"
                    color="#101935"
                    rounded="md"
                    py="2"
                    px="4"
                    border="2px solid #101935"
                    target="_blank"
                    href="2023_resume.pdf"
                    fontSize="3xl"
                    :mt="{ base: '5', sm: '0'}"
                    :ml="{ base: '0', sm: '5'}"
                    :_hover="{ 
                        bg: '#8DABD8',
                        color: '#D9E3F2',
                        cursor: 'pointer'
                    }"
                >
                    <font-awesome-icon
                        :icon="['far', 'file-pdf']"
                    />
                    View Resume
                </c-pseudo-box>
            </c-flex>
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