<template>
    <c-box as="footer" w="100%">
        <!-- Footer Grid -->
        <c-grid
            w="100vw"
            template-columns="repeat(3,1fr)"
            grid-gap="5"
            bg="#101935"
            p="5"
        >
            <!-- First Column -->
            <c-grid-item>
                <!-- Logo with alt text -->
                <c-flex>
                    <c-image
                        :src="require('~/assets/logo-no-background.svg')"
                        alt="Landon Thibodeau Logo"
                        :w="{ base: '100%', lg: '75%', xl: '50%' }"
                        mb="2"
                    />
                </c-flex>

                <!-- Contact Info -->
                <c-box as="section" mb="2">
                    <c-heading as="h4" fontSize="sm" color="#FFECEA" mb="2">
                        Get in Touch
                    </c-heading>
                    <c-list spacing="2">
                        <c-list-item>
                            <c-pseudo-box
                                as="a"
                                href="mailto:me@landonthibodeau.com"
                                color="#FFECEA"
                                fontSize="12px"
                                :_hover="{ textDecoration: 'underline' }"
                            >
                                <font-awesome-icon :icon="['far', 'envelope']" /> me@landonthibodeau.com
                            </c-pseudo-box>
                        </c-list-item>
                        <c-list-item>
                            <c-pseudo-box
                                as="a"
                                href="https://goo.gl/maps/Ek1KHCrFnYsGDjsJA"
                                target="_blank"
                                color="#FFECEA"
                                fontSize="12px"
                                :_hover="{ textDecoration: 'underline' }"
                            >
                                <font-awesome-icon :icon="['fas', 'map-location-dot']" /> Dorchester, Boston MA
                            </c-pseudo-box>
                        </c-list-item>
                    </c-list>
                </c-box>
            </c-grid-item>

            <!-- Second Column (Site Navigation) -->
            <c-grid-item>
                <c-box as="nav" aria-label="Footer Navigation">
                    <c-heading as="h4" fontSize="sm" color="#FFECEA" mb="2">
                        Navigation
                    </c-heading>
                    <c-list spacing="2">
                        <c-list-item>
                            <c-pseudo-box
                                as="button"
                                @click="scrollTo('home')"
                                color="#FFECEA"
                                fontSize="12px"
                                :_hover="{ textDecoration: 'underline' }"
                            >
                                Home
                            </c-pseudo-box>
                        </c-list-item>
                        <c-list-item>
                            <c-pseudo-box
                                as="button"
                                @click="scrollTo('about')"
                                color="#FFECEA"
                                fontSize="12px"
                                :_hover="{ textDecoration: 'underline' }"
                            >
                                About
                            </c-pseudo-box>
                        </c-list-item>
                        <c-list-item>
                            <c-pseudo-box
                                as="button"
                                @click="scrollTo('skills')"
                                color="#FFECEA"
                                fontSize="12px"
                                :_hover="{ textDecoration: 'underline' }"
                            >
                                Skills
                            </c-pseudo-box>
                        </c-list-item>
                        <c-list-item>
                            <c-pseudo-box
                                as="button"
                                @click="scrollTo('projects')"
                                color="#FFECEA"
                                fontSize="12px"
                                :_hover="{ textDecoration: 'underline' }"
                            >
                                Projects
                            </c-pseudo-box>
                        </c-list-item>
                        <c-list-item>
                            <c-pseudo-box
                                as="button"
                                @click="scrollTo('experience')"
                                color="#FFECEA"
                                fontSize="12px"
                                :_hover="{ textDecoration: 'underline' }"
                            >
                                Experience
                            </c-pseudo-box>
                        </c-list-item>
                        <c-list-item>
                            <c-pseudo-box
                                as="button"
                                @click="scrollTo('contact')"
                                color="#FFECEA"
                                fontSize="12px"
                                :_hover="{ textDecoration: 'underline' }"
                            >
                                Contact
                            </c-pseudo-box>
                        </c-list-item>
                    </c-list>
                </c-box>
            </c-grid-item>

            <!-- Third Column (Links) -->
            <c-grid-item>
                <c-box as="section">
                    <c-heading as="h4" fontSize="sm" color="#FFECEA" mb="2">
                        Resources
                    </c-heading>
                    <c-list spacing="2">
                        <c-list-item>
                            <c-pseudo-box
                                as="a"
                                href="resume.pdf"
                                target="_blank"
                                color="#FFECEA"
                                fontSize="12px"
                                :_hover="{ textDecoration: 'underline' }"
                            >
                                <font-awesome-icon :icon="['far', 'file-pdf']" /> Resume PDF
                            </c-pseudo-box>
                        </c-list-item>
                    </c-list>
                </c-box>

                <c-box as="section" mt="4">
                    <c-heading as="h4" fontSize="sm" color="#FFECEA" mb="2">
                        Connect
                    </c-heading>
                    <c-list spacing="2">
                        <c-list-item>
                            <c-pseudo-box
                                as="a"
                                href="https://www.linkedin.com/in/landonthibodeau/"
                                target="_blank"
                                color="#FFECEA"
                                fontSize="12px"
                                :_hover="{ textDecoration: 'underline' }"
                            >
                                <font-awesome-icon :icon="['fab', 'linkedin']" /> LinkedIn
                            </c-pseudo-box>
                        </c-list-item>
                        <c-list-item>
                            <c-pseudo-box
                                as="a"
                                href="https://github.com/JacquesLJT"
                                target="_blank"
                                color="#FFECEA"
                                fontSize="12px"
                                :_hover="{ textDecoration: 'underline' }"
                            >
                                <font-awesome-icon :icon="['fab', 'github']" /> GitHub
                            </c-pseudo-box>
                        </c-list-item>
                        <c-list-item>
                            <c-pseudo-box
                                as="a"
                                href="https://x.com/LandonThibodeau"
                                target="_blank"
                                color="#FFECEA"
                                fontSize="12px"
                                :_hover="{ textDecoration: 'underline' }"
                            >
                                <font-awesome-icon :icon="['fab', 'x-twitter']" /> X
                            </c-pseudo-box>
                        </c-list-item>
                    </c-list>
                </c-box>
            </c-grid-item>
        </c-grid>

        <!-- Footer Bottom Bar -->
        <c-flex
            w="100vw"
            justify="center"
            align="center"
            bg="#007EA7"
            p="3"
        >
            <c-text color="#FFECEA" line-height="1.5" fontSize="sm">
                © 2025 Landon Thibodeau | 
                <c-link 
                    target="_blank"
                    href="https://github.com/JacquesLJT/Portfolio_v2"
                    textDecoration="underline"
                    ml="1"
                >
                    GitHub Repo
                </c-link>
            </c-text>
        </c-flex>
    </c-box>
</template>

<script>
    import {
        CBox,
        CLink,
        CText,
        CGrid,
        CGridItem,
        CImage,
        CPseudoBox,
        CFlex,
        CList,
        CListItem,
        CHeading,
    } from '@chakra-ui/vue'

    export default {
        name: 'Footer',
        components: {
            CBox,
            CLink,
            CText,
            CGrid,
            CGridItem,
            CImage,
            CPseudoBox,
            CFlex,
            CList,
            CListItem,
            CHeading,
        },
        methods: {
            scrollTo(id) {
            const element = document.getElementById(id)
            const offset = 60
            const elementPos = element.getBoundingClientRect().top
            const offsetPosition = elementPos + window.pageYOffset - offset

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth',
            })
            }
        }
    }
</script>