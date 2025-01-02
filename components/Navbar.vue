<template>
    <c-flex
        w="100%"
        pos="fixed"
        justify-content="center"
        align-items="center"
        id="navbar-container"
        class="transition"
        z-index="1"
    >
        <!-- Main Navbar container -->
        <c-flex
            class="navbar"
            :class="{ 'nav-scrolling': isScrolling }"
            bg="#101935"
            rounded="lg"
            h="80px"
            w="100%"
            margin="6"
            align-items="center"
            :justify-content="{ base: 'center', md: 'space-between' }"
        >
            <!-- Logo -->
            <c-flex ml="10">
                <c-link href="/">
                    <c-image
                        class="logo"
                        h="40px"
                        :class="{ 'logo-small': isScrolling }"
                        :src="require('~/assets/logo-no-background.svg')"
                        loading="eager"
                        @load="logoLoaded = true"
                        :style="{ opacity: logoLoaded ? 1 : 0 }"
                        transition="opacity 0.3s"
                    />
                </c-link>
            </c-flex>

            <!-- Rest of your navbar code remains the same -->
            <!-- Desktop Links -->
            <c-flex :display="{ base: 'none', xl: 'flex' }">
                <c-pseudo-box
                    v-for="(item, idx) in menuItems"
                    :key="item.id"
                    as="button"
                    color="#FFEAEC"
                    font-family="quicksand, sans-serif"
                    font-weight="700"
                    fontSize="3xl"
                    m="5"
                    @click="handleMenuClick(item.id)"
                    :_hover="{ borderBottom: '2px solid #D9E3F2' }"
                    :borderBottom="activeSection === item.id ? '2px solid #D9E3F2' : 'none'"
                >
                    {{ item.label }}
                </c-pseudo-box>
            </c-flex>

            <!-- Contact button -->
            <c-flex mr="10">
                <c-pseudo-box
                    as="button"
                    color="#FFEAEC"
                    font-family="quicksand, sans-serif"
                    font-weight="700"
                    fontSize="xl"
                    px="6"
                    py="2"
                    border="3px solid #FFEAEC"
                    border-radius="5px"
                    @click="scrollTo('contact')"
                    :_hover="{
                        bg: '#D9E3F2',
                        color: '#101935',
                        boxShadow: '0 0 10px #D9E3F2',
                    }"
                    :display="{ base: 'none', md: 'block' }"
                >
                    Let's Talk!
                </c-pseudo-box>

                <!-- Hamburger icon (mobile) -->
                <c-pseudo-box
                    as="button"
                    :display="{ base: 'block', xl: 'none' }"
                    ml="4"
                    color="#FFEAEC"
                    fontSize="3xl"
                    @click="toggleMenu"
                >
                    <font-awesome-icon :icon="['fas', isOpen ? 'xmark' : 'bars']" />
                </c-pseudo-box>
            </c-flex>
        </c-flex>

        <!-- Mobile Drawer -->
        <c-drawer :isOpen="isOpen" placement="right" @close="toggleMenu">
            <c-drawer-content bg="#101935" pt="20">
                <c-drawer-body>
                    <c-stack spacing="6" mt="10">
                        <c-pseudo-box
                            v-for="(item, idx) in menuItems"
                            :key="item.id"
                            as="button"
                            color="#FFEAEC"
                            fontSize="2xl"
                            @click="handleDrawerClick(item.id)"
                            :_hover="{ borderBottom: '2px solid #D9E3F2' }"
                            :borderBottom="activeSection === item.id ? '2px solid #D9E3F2' : 'none'"
                        >
                            {{ item.label }}
                        </c-pseudo-box>

                        <c-pseudo-box
                            as="button"
                            color="#FFEAEC"
                            font-weight="700"
                            fontSize="2xl"
                            px="6"
                            border="3px solid #FFEAEC"
                            border-radius="5px"
                            @click="handleDrawerClick('contact')"
                            :_hover="{
                                bg: '#D9E3F2',
                                color: '#101935',
                                boxShadow: '0 0 10px #D9E3F2',
                            }"
                        >
                            Let's Talk!
                        </c-pseudo-box>
                    </c-stack>
                </c-drawer-body>
            </c-drawer-content>
        </c-drawer>
    </c-flex>
</template>

<script>
    import {
        CImage,
        CFlex,
        CLink,
        CPseudoBox,
        CDrawer,
        CDrawerContent,
        CDrawerCloseButton,
        CDrawerBody,
        CStack
    } from '@chakra-ui/vue'

    export default {
        name: 'Navbar',
        components: {
            CFlex,
            CLink,
            CImage,
            CPseudoBox,
            CDrawer,
            CDrawerContent,
            CDrawerCloseButton,
            CDrawerBody,
            CStack
        },
        data() {
            return {
                isScrolling: false,
                isOpen: false,
                activeSection: '',
                logoLoaded: false,
                menuItems: [
                    { label: 'Home', id: 'home' },
                    { label: 'About', id: 'about' },
                    { label: 'Skills', id: 'skills' },
                    { label: 'Projects', id: 'projects' },
                    { label: 'Experience/Certifications', id: 'experience' },
                ],
                sectionOffsets: {}
            }
        },
        mounted() {
            if (process.client) {
                window.addEventListener('scroll', this.handleScroll)
            }
            this.updateSectionOffsets()
        },
        beforeDestroy() {
            if (process.client) {
                window.removeEventListener('scroll', this.handleScroll)
            }
        },
        methods: {
            scrollTo(id) {
                const element = document.getElementById(id)
                if (!element) return

                const offset = 60
                const elementPos = element.getBoundingClientRect().top
                const offsetPosition = elementPos + window.pageYOffset - offset

                window.scrollTo({ top: offsetPosition, behavior: 'smooth' })
            },
            handleScroll() {
                // If the user has scrolled more than 50px, shrink navbar
                this.isScrolling = window.scrollY > 50

                // Determine which section is currently in view
                this.setActiveSectionByScroll()
            },
            toggleMenu() {
                this.isOpen = !this.isOpen
            },
            handleMenuClick(id) {
                // Still scroll to the section on click
                this.activeSection = id
                this.scrollTo(id)
            },
            handleDrawerClick(id) {
                this.activeSection = id
                this.scrollTo(id)
                this.toggleMenu() // close the drawer
            },
            updateSectionOffsets() {
                // For each item in menuItems, find its offsetTop
                // and store it so we can quickly reference in setActiveSectionByScroll
                this.menuItems.forEach(item => {
                    const sectionEl = document.getElementById(item.id)
                    if (sectionEl) {
                        this.sectionOffsets[item.id] = sectionEl.offsetTop
                    }
                })
            },
            setActiveSectionByScroll() {
                // Current scroll position + optional offset
                const scrollPos = window.scrollY + 70 // or some offset so you catch the "midpoint"

                // We'll find which section offset is the greatest but still <= scrollPos
                let currentSectionId = ''

                for (let i = 0; i < this.menuItems.length; i++) {
                    const itemId = this.menuItems[i].id
                    const sectionTop = this.sectionOffsets[itemId]

                    // If the user has scrolled below this section's top,
                    // we consider that section the "current" one
                    if (sectionTop <= scrollPos) {
                        currentSectionId = itemId
                    } else {
                        // As soon as we find a section that is beyond the scroll position,
                        // we break out
                        break
                    }
                }

                // Now update the activeSection if it's different
                if (currentSectionId && currentSectionId !== this.activeSection) {
                    this.activeSection = currentSectionId
                }
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
        will-change: opacity;
    }

    .logo.logo-small {
        height: 35px;
    }
</style>
