<template>
    <c-flex
        id="skills"
        w="100%"
        :h="{ base: '100%', xl: '100vh'}"
        justify="center"
        flex-wrap="wrap"
        color="#D9E3F2"
        v-bind:style="{ 
            backgroundImage: 'url(' + require('@/assets/skills7.jpeg') + ')',
            backgroundSize: 'cover', 
            backgroundPosition: 'top',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'fixed' 
            }"
        
    >
        <c-flex
            w="100%"
            mt="10"
            justify="center"
            align="center"
            flex-wrap="wrap"
        >
            <c-text
                font-family="Quicksand, sans-serif"
                :font-size="{ base: '4xl', sm: '6xl'}"
                font-weight="700"
                h="max-content"
                justify="center"
                align-items="center"
            >
                Skills
            </c-text>
        </c-flex>
            <c-flex
                :flex-direction="{ base: 'column', xl: 'row'}"
                align-items="stretch"
                :align-content="{ base: 'center', xl: 'none'}"
                :flex-wrap="{ base: 'wrap', xl: 'nowrap'}"
                w="100%"
                mt="10"
                mx="5%"
                height="max-content"
                mb="18"
            >
                <c-flex 
                    justify="center"
                    flex-direction="column"
                    bg = "rgb(256, 256, 256, 0.35)"
                    rounded = "lg"
                    :width="{ base: '100%', md: '80%', xl: '27%'}"
                    :ml="{ base: '0', xl: '2%'}"
                    justify-content="start"
                    color="black"
                    p="5"
                    :mb="{ base: '5', xl: '0'}"
                    border = "2px solid black"
                >
                    <c-text
                        font-family="Quicksand, sans-serif"
                        :font-size="{ base: '2xl', sm: '3xl'}"
                        font-weight="700"
                        justify="center"
                        align="center"
                    >
                        Programming Languages / Frameworks
                    </c-text>
                    <c-list
                        spacing="3"
                        :font-size="{ base: 'lg', sm: 'xl'}"
                        font-weight="700"
                    >
                        <c-list-item class="list-item">
                            <c-list-icon icon="arrow-forward" color="black" />
                            Python
                        </c-list-item>
                        <c-list-item class="list-item">
                            <c-list-icon icon="arrow-forward" color="black" />
                            C
                        </c-list-item>
                        <c-list-item class="list-item">
                            <c-list-icon icon="arrow-forward" color="black" />
                            JavaScript
                        </c-list-item>
                        <c-list-item class="list-item">
                            <c-list-icon icon="arrow-forward" color="black" />
                            HTML
                        </c-list-item>
                        <c-list-item class="list-item">
                            <c-list-icon icon="arrow-forward" color="black" />
                            CSS
                        </c-list-item>
                        <c-list-item class="list-item">
                            <c-list-icon icon="arrow-forward" color="black" />
                            Java
                        </c-list-item>
                        <c-list-item class="list-item">
                            <c-list-icon icon="arrow-forward" color="black" />
                            Verilog
                        </c-list-item>
                        <c-list-item class="list-item">
                            <c-list-icon icon="arrow-forward" color="black" />
                            Lisp
                        </c-list-item>
                        <c-list-item class="list-item">
                            <c-list-icon icon="arrow-forward" color="black" />
                            Vue.js
                        </c-list-item>
                        <c-list-item class="list-item">
                            <c-list-icon icon="arrow-forward" color="black" />
                            React.js
                        </c-list-item>
                        <c-list-item class="list-item">
                            <c-list-icon icon="arrow-forward" color="black" />
                            Node.js
                        </c-list-item>
                        <c-list-item class="list-item">
                            <c-list-icon icon="arrow-forward" color="black" />
                            Nuxt.js
                        </c-list-item>
                    </c-list>
                </c-flex>
                <c-flex
                    justify="center"
                    flex-direction="column"
                    bg = "rgb(256, 256, 256, 0.35)"
                    rounded = "lg"
                    border = "2px solid black"
                    p="5"
                    :width="{ base: '100%', md: '80%', xl: '26%'}"
                    :mx="{ base: '0', xl: '8%'}"
                    justify-content="start"
                    color="black"
                    :my="{ base: '5', xl: '0'}"
                >
                    <c-text 
                        font-family="Quicksand, sans-serif"
                        :font-size="{ base: '2xl', sm: '3xl'}"
                        font-weight="700"
                        justify="center"
                        align="center"
                    >
                        Software
                    </c-text>
                    <c-list
                        spacing="3"
                        :font-size="{ base: 'lg', sm: 'xl'}"
                        font-weight="700"
                    >
                        <c-list-item class="list-item">
                            <c-list-icon icon="arrow-forward" color="black" />
                            Git CLI
                        </c-list-item>
                        <c-list-item class="list-item">
                            <c-list-icon icon="arrow-forward" color="black" />
                            GitHub
                        </c-list-item>
                        <c-list-item class="list-item">
                            <c-list-icon icon="arrow-forward" color="black" />
                            VirtualBox
                        </c-list-item>
                        <c-list-item class="list-item">
                            <c-list-icon icon="arrow-forward" color="black" />
                            VMware Workstation
                        </c-list-item>
                        <c-list-item class="list-item">
                            <c-list-icon icon="arrow-forward" color="black" />
                            Docker
                        </c-list-item>
                        <c-list-item class="list-item">
                            <c-list-icon icon="arrow-forward" color="black" />
                            JetBrains IDEs
                        </c-list-item>
                        <c-list-item class="list-item">
                            <c-list-icon icon="arrow-forward" color="black" />
                            Visual Studio Code
                        </c-list-item>
                        <c-list-item class="list-item">
                            <c-list-icon icon="arrow-forward" color="black" />
                            Eclipse
                        </c-list-item>
                        <c-list-item class="list-item">
                            <c-list-icon icon="arrow-forward" color="black" />
                            Quartus
                        </c-list-item>
                        <c-list-item class="list-item">
                            <c-list-icon icon="arrow-forward" color="black" />
                            Google Firebase
                        </c-list-item>
                        <c-list-item class="list-item">
                            <c-list-icon icon="arrow-forward" color="black" />
                            Microsoft Office
                        </c-list-item>
                    </c-list>
                </c-flex>
                <c-flex
                    p="5"
                    justify="center"
                    flex-direction="column"
                    bg = "rgb(256, 256, 256, 0.35)"
                    rounded = "lg"
                    border = "2px solid black"
                    :width="{ base: '100%', md: '80%', xl: '27%'}"
                    justify-content="start"
                    color="black"
                    :my="{ base: '5', xl: '0'}"
                >
                    <c-text 
                        font-family="Quicksand, sans-serif"
                        :font-size="{ base: '2xl', sm: '3xl'}"
                        font-weight="700"
                        justify="center"
                        align="center"
                    >
                        Relevant Courses
                    </c-text>
                    <c-list
                        spacing="3"
                        :font-size="{ base: 'lg', sm: 'xl'}"
                        font-weight="700"
                    >
                        <c-list-item class="list-item">
                            <c-list-icon icon="arrow-forward" color="black" />
                            Cloud Computing
                        </c-list-item>
                        <c-list-item class="list-item">
                            <c-list-icon icon="arrow-forward" color="black" />
                            Computer Architecture
                        </c-list-item>
                        <c-list-item class="list-item">
                            <c-list-icon icon="arrow-forward" color="black" />
                            Data Structures and Algorithms
                        </c-list-item>
                        <c-list-item class="list-item">
                            <c-list-icon icon="arrow-forward" color="black" />
                            Discrete Structures
                        </c-list-item>
                        <c-list-item class="list-item">
                            <c-list-icon icon="arrow-forward" color="black" />
                            Introduction to Software Engineering
                        </c-list-item>
                        <c-list-item class="list-item">
                            <c-list-icon icon="arrow-forward" color="black" />
                            Introduction to Artificial Intelligence
                        </c-list-item>
                        <c-list-item class="list-item">
                            <c-list-icon icon="arrow-forward" color="black" />
                            Capstone 1 and 2
                        </c-list-item>
                        <c-list-item class="list-item">
                            <c-list-icon icon="arrow-forward" color="black" />
                            Sequential Logic Systems
                        </c-list-item>
                        <c-list-item class="list-item">
                            <c-list-icon icon="arrow-forward" color="black" />
                            Embedded Systems
                        </c-list-item>
                    </c-list>
                </c-flex>
            </c-flex>
        </c-flex>
</template>

<script>
    import {
        CFlex,
        CText,
        CImage,
        CList,
        CListItem,
        CIcon,
    } from '@chakra-ui/vue'

    export default {
        name: 'Skills',
        components: {
            CFlex,
            CText,
            CImage,
            CList,
            CListItem,
            CIcon,
        },
    }
</script>

<style>
</style>