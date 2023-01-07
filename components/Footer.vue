<template>
    <c-flex flex-wrap="wrap" w="100%">
        <c-grid
            w="100vw"
            template-columns="repeat(3,1fr)"
            grid-gap="5"
            bg="#101935"
            p="5"
            >
            <c-grid-item>
                <c-flex>
                    <c-image
                        :src="require('@/static/logo-no-background.svg')"
                        :w="{base: '100%', lg: '75%', xl: '50%'}"
                        mb="2"
                    />
                </c-flex>
                <c-flex>
                    <c-pseudo-box
                        as="a" 
                        href="mailto:me@landonthibodeau.com" 
                        color="#FFECEA"
                        mb="2" 
                        fontSize="12px"
                        w="max-content"
                        >
                        <font-awesome-icon
                            :icon="['far', 'envelope']"
                        />
                        me@landonthibodeau.com
                    </c-pseudo-box>
                </c-flex>
                <c-flex>
                    <c-pseudo-box
                        as="a"
                        href="https://goo.gl/maps/xVyyfkVd6H3zjXfs8"
                        target="_blank"
                        color="#FFECEA"
                        mb="2" 
                        fontSize="12px"
                        w="max-content"
                        >
                        <font-awesome-icon
                            :icon="['fas', 'map-location-dot']"
                        />
                        Freeport, ME
                    </c-pseudo-box>
                </c-flex>
            </c-grid-item>
            <c-grid-item>
                <c-flex w="100%">
                    <c-pseudo-box
                        as="button"
                        @click="scrollTo('home')"
                        color="#FFECEA"
                        mb="2" 
                        fontSize="12px"
                        :_hover="{textDecoration: 'underline'}"
                        >
                        Home
                    </c-pseudo-box>
                </c-flex>
                <c-flex w="100%">
                    <c-pseudo-box 
                        as="button"
                        @click="scrollTo('about')"
                        color="#FFECEA"
                        mb="2" 
                        fontSize="12px"
                        :_hover="{textDecoration: 'underline'}"
                        >
                        About
                    </c-pseudo-box>
                </c-flex>
                <c-flex w="100%">
                    <c-pseudo-box 
                        as="button"
                        @click="scrollTo('skills')"
                        color="#FFECEA"
                        mb="2" 
                        fontSize="12px"
                        :_hover="{textDecoration: 'underline'}"
                        >
                        Skills
                    </c-pseudo-box>
                </c-flex>
                <c-flex w="100%">
                    <c-pseudo-box 
                        as="button"
                        @click="scrollTo('projects')"
                        color="#FFECEA"
                        mb="2" 
                        fontSize="12px"
                        :_hover="{textDecoration: 'underline'}"
                        >
                        Projects
                    </c-pseudo-box>
                </c-flex>
                <c-flex w="100%">
                    <c-pseudo-box 
                        as="button"
                        @click="scrollTo('experience')"
                        color="#FFECEA"
                        mb="2" 
                        fontSize="12px"
                        :_hover="{textDecoration: 'underline'}"
                        >
                        Experience
                    </c-pseudo-box>
                </c-flex>
                <c-flex w="100%">
                    <c-pseudo-box 
                        as="button"
                        @click="scrollTo('contact')"
                        color="#FFECEA"
                        mb="2" 
                        fontSize="12px"
                        :_hover="{textDecoration: 'underline'}"
                        >
                        Contact
                    </c-pseudo-box>
                </c-flex>
            </c-grid-item>
            <c-grid-item>
                <c-flex w="100%">
                    <c-pseudo-box
                        as="a" 
                        color="#FFECEA"
                        mb="2" 
                        fontSize="12px"
                        href="https://firebasestorage.googleapis.com/v0/b/portfolio-fdf27.appspot.com/o/web_assets%2FResume%CC%81%202021.pdf?alt=media&token=913bfa8c-bf76-4bca-a5dd-db87e3dd4898"
                        target="_blank"
                        :_hover="{textDecoration: 'underline'}"
                        >
                        <font-awesome-icon
                            :icon="['far', 'file-pdf']"
                        />
                        Resume PDF
                    </c-pseudo-box>
                </c-flex>
                <c-flex w="100%">
                    <c-pseudo-box
                        as="a"
                        color="#FFECEA"
                        mb="2" 
                        fontSize="12px"
                        href="https://www.linkedin.com/in/landonthibodeau/"
                        target="_blank"
                        :_hover="{textDecoration: 'underline'}"
                        >
                        <font-awesome-icon
                            :icon="['fab', 'linkedin']"
                        />
                        LinkedIn
                    </c-pseudo-box>
                </c-flex>
                <c-flex w="100%">
                    <c-pseudo-box 
                        as="a"
                        color="#FFECEA"
                        mb="2" 
                        fontSize="12px"
                        href="https://github.com/JacquesLJT"
                        target="_blank"
                        :_hover="{textDecoration: 'underline'}"
                        >
                        <font-awesome-icon
                            :icon="['fab', 'github']"
                        />
                        GitHub
                    </c-pseudo-box>
                </c-flex>
                <c-flex w="100%">
                    <c-pseudo-box
                        as="a"
                        color="#FFECEA"
                        mb="2"
                        fontSize="12px"
                        href="https://twitter.com/LandonThibodeau"
                        target="_blank"
                        :_hover="{textDecoration: 'underline'}"
                        >
                        <font-awesome-icon
                            :icon="['fab', 'twitter']"
                        />
                        Twitter
                    </c-pseudo-box>
                </c-flex>
            </c-grid-item>
        </c-grid>
        <c-flex w="100vw" justify="center" bg="#007EA7">
            <c-text color="#FFECEA" line-height="1.5">
                © 2022 Landon Thibodeau | 
                <c-link 
                    target="_blank"
                    href="https://github.com/JacquesLJT/Portfolio_v2"
                >
                    GitHub Repo
                </c-link>
            </c-text>
        </c-flex>
    </c-flex>
</template>

<script>
    import {
        CFlex,
        CText,
        CGrid,
        CGridItem,
        CImage,
        CLink,
        CPseudoBox,
    } from '@chakra-ui/vue'
    
    export default {
        name: 'Skills',
        components: {
            CFlex,
            CText,
            CGrid,
            CGridItem,
            CImage,
            CLink,
            CPseudoBox,
        },

        methods: {
            openLink(link) {
                window.open(link, '_blank')
            },

            scrollTo(id) {
                var element = document.getElementById(id)
                var offset = 60
                var elementPos = element.getBoundingClientRect().top
                var offsetPosition = elementPos + window.pageYOffset - offset

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth',
                })
            }
        }
    }
</script>