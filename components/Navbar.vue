<template>
    <c-flex
        w="100%"
        pos="fixed"
        justify-content="center"
        align-items="center"
        id = "navbar-container"
        class = "transition"
        z-index="1"
    >
        <c-flex
            class = "navbar"
            :class = "{ 'nav-scrolling': isScrolling}"
            bg="#101935"
            rounded="lg"
            h="80px"
            w="100%"
            margin="6"
            align-items="center"
            :justify-content="{base: 'center', md: 'space-between'}"
        >
            <c-flex ml="10">
                <c-link
                    href="/"
                >
                    <c-image
                        class = "logo"
                        h="40px"
                        :class = "{ 'logo-small': isScrolling}"
                        :src="require('@/static/logo-no-background.svg')"
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
                        borderBottom: '2px solid #D9E3F2',
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
                        borderBottom: '2px solid #D9E3F2',
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
                        borderBottom: '2px solid #D9E3F2',
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
                        borderBottom: '2px solid #D9E3F2',
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
                        borderBottom: '2px solid #D9E3F2',
                    }"
                    :display="{base: 'none', xl: 'block'}"
                >
                    Experience/Certifications
                </c-pseudo-box>
            </c-flex>
            <c-flex mr="10">
                <c-pseudo-box
                    as="button"
                    color="#FFEAEC"
                    font-family="quicksand, sans-serif"
                    font-weight="700"
                    fontSize="4xl"
                    px="6"
                    border="3px solid #FFEAEC"
                    border-radius="5px"
                    @click="scrollTo('contact')"
                    :_hover="{
                        bg: '#D9E3F2',
                        color: '#101935',
                        boxShadow: '0 0 10px #D9E3F2',
                    }"
                    :display="{base: 'none', md: 'block'}"
                >
                    Contact
                </c-pseudo-box>
            </c-flex>
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
            CLink,
            CPseudoBox,
        },
        data() {
            return {
                isScrolling: false
            }
        },
        beforeMount() {
            if (process.client) {
                window.addEventListener('scroll', this.handleScroll)
            }
        },
        methods: {
            scrollTo(id) {
                var element = document.getElementById(id)
                var offset = 60
                var elementPos = element.getBoundingClientRect().top
                var offsetPosition = elementPos + window.pageYOffset - offset

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                })
            },
            handleScroll() {
                this.isScrolling = window.scrollY > 50
            }
        },
        beforeDestroy() {
            if (process.client) {
                window.removeEventListener('scroll', this.handleScroll)
            }
        }
    }

</script>

<style>
.navbar {
    padding: 0;
    height: 80px;
    transition: all 0.5s ease-in-out;
}

.navbar.nav-scrolling {
    margin: 0;
    border-radius: 0%;
    height: 70px;
}

.logo {
    height: 40px;
    transition: all 0.5s ease-in-out;
}

.logo.logo-small {
    height: 35px;
}

</style>