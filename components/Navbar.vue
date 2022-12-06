<template>
    <c-flex 
        pos="fixed"
        bg="#101935" 
        w="100%" 
        h="80px"
        align-items="center"
        justify-content="space-between"
        z-index="1"
        >
        <c-flex ml="10">
            <c-link
                href="/"
            >
                <c-image 
                    h="50px"
                    :src="require('@/assets/logo-no-background.svg')"
                />
            </c-link>
        </c-flex>
        <c-flex>
            <c-pseudo-box
                as="button"
                color="#FFEAEC"
                font-family="quicksand, sans-serif"
                font-weight="700"
                fontSize="3xl"
                m="5"
                @click="scrollTo('home')"
                :_hover="{
                    borderBottom: '2px solid #E56B6F',
                }"
                :display="{base: 'none', xl: 'block'}"
            >
                Home
            </c-pseudo-box>
            <c-pseudo-box
                as="button"
                color="#FFEAEC"
                font-family="quicksand, sans-serif"
                font-weight="700"
                fontSize="3xl"
                m="5"
                @click="scrollTo('about')"
                :_hover="{
                    borderBottom: '2px solid #E56B6F',
                }"
                :display="{base: 'none', xl: 'block'}"
            >
                About
            </c-pseudo-box>
            <c-pseudo-box
                as="button"
                color="#FFEAEC"
                font-family="quicksand, sans-serif"
                font-weight="700"
                fontSize="3xl"
                m="5"
                @click="scrollTo('skills')"
                :_hover="{
                    borderBottom: '2px solid #E56B6F',
                }"
                :display="{base: 'none', xl: 'block'}"
            >
                Skills
            </c-pseudo-box>
            <c-pseudo-box
                as="button"
                color="#FFEAEC"
                font-family="quicksand, sans-serif"
                font-weight="700"
                fontSize="3xl"
                m="5"
                @click="scrollTo('projects')"
                :_hover="{
                    borderBottom: '2px solid #E56B6F',
                }"
                :display="{base: 'none', xl: 'block'}"
            >
                Projects
            </c-pseudo-box>
            <c-pseudo-box
                as="button"
                color="#FFEAEC"
                font-family="quicksand, sans-serif"
                font-weight="700"
                fontSize="3xl"
                m="5"
                @click="scrollTo('experience')"
                :_hover="{
                    borderBottom: '2px solid #E56B6F',
                }"
                :display="{base: 'none', xl: 'block'}"
            >
                Experience
            </c-pseudo-box>
        </c-flex>
        <c-flex mr="10">
            <c-pseudo-box
                as="button"
                color="#FFEAEC"
                font-family="quicksand, sans-serif"
                font-weight="700"
                fontSize="3xl"
                px="5"
                border="2px solid #FFEAEC"
                border-radius="5px"
                @click="scrollTo('contact')"
                :_hover="{
                    bg: '#E56B6F',
                    color: '#FFEAEC',
                }"
                :display="{base: 'none', xl: 'block'}"
            >
                Contact
            </c-pseudo-box>
            <c-pseudo-box
                as="button"
                color="#FFEAEC"
                font-family="quicksand, sans-serif"
                font-weight="700"
                fontSize="3xl"
                px="5"
                border="2px solid #FFEAEC"
                border-radius="5px"
                @click="scrollTo('contact')"
                :_hover="{
                    bg: '#E56B6F',
                    color: '#FFEAEC',
                }"
                :display="{base: 'block', xl: 'none'}"
            >
                Contact
            </c-pseudo-box>
        </c-flex>
    </c-flex>
</template>

<script>

    import {
        CImage,
        CFlex,
        CText,
        CButton,
        CLink,
        CPseudoBox,

    } from '@chakra-ui/vue'

    export default {
        name: 'Navbar',
        components: {
            CFlex,
            CText,
            CButton,
            CImage,
            CLink
        },

        methods: {
            scrollTo(id) {
                var element = document.getElementById(id)
                var offset = 80
                var elementPos = element.getBoundingClientRect().top
                var offsetPosition = elementPos + window.pageYOffset - offset

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                })
            }
        }
    }

</script>