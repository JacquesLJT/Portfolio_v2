<template>
    <c-flex 
        w="100%"
        h="100vh"
        justify-content="center"
        flex-wrap="wrap"
        id="skills"
    >
        <c-flex m="5" w="100vw" justify="center">
            <c-text font-family="Quicksand, sans-serif" fontSize="5xl" font-weight="700">
                Skills
            </c-text>
        </c-flex>
        <c-flex>
            <c-text fontSize="3xl" >
                Programming Languages / Frameworks / Libraries
            </c-text>
        </c-flex>
        <c-flex
            mb="5" 
            w="100vw" 
            justify="center"
            flex-wrap="wrap"
            fontSize="xl"
            color="#FFEAEC"
        >
            <c-flex m="2" bg="#E56B6F" py="2" px="4" rounded="10" border="#101935 solid 4px">
                Python
            </c-flex>
            <c-flex m="2" bg="#E56B6F" py="2" px="4" rounded="10" border="#101935 solid 4px">
                C
            </c-flex>
            <c-flex m="2" bg="#E56B6F" py="2" px="4" rounded="10" border="#101935 solid 4px">
                JavaScipt
            </c-flex>
            <c-flex m="2" bg="#E56B6F" py="2" px="4" rounded="10" border="#101935 solid 4px">
                HTML
            </c-flex>
            <c-flex m="2" bg="#E56B6F" py="2" px="4" rounded="10" border="#101935 solid 4px">
                CSS
            </c-flex>
            <c-flex m="2" bg="#E56B6F" py="2" px="4" rounded="10" border="#101935 solid 4px">
                Verilog
            </c-flex>
            <c-flex m="2" bg="#E56B6F" py="2" px="4" rounded="10" border="#101935 solid 4px">
                Vue
            </c-flex>
            <c-flex m="2" bg="#E56B6F" py="2" px="4" rounded="10" border="#101935 solid 4px">
                React
            </c-flex>
            <c-flex m="2" bg="#E56B6F" py="2" px="4" rounded="10" border="#101935 solid 4px">
                Node
            </c-flex>
            <c-flex m="2" bg="#E56B6F" py="2" px="4" rounded="10" border="#101935 solid 4px">
                Nuxt
            </c-flex>
        </c-flex>
        <c-flex>
            <c-text fontSize="3xl">
                Software
            </c-text>
        </c-flex>
        <c-flex
            mb="5" 
            w="100vw" 
            justify="center"
            flex-wrap="wrap"
            fontSize="xl"
            color="#FFEAEC"
        >
            <c-flex m="2" bg="#E56B6F" py="2" px="4" rounded="10" border="#101935 solid 4px">
                Git CLI
            </c-flex>
            <c-flex m="2" bg="#E56B6F" py="2" px="4" rounded="10" border="#101935 solid 4px">
                GitHub
            </c-flex>
            <c-flex m="2" bg="#E56B6F" py="2" px="4" rounded="10" border="#101935 solid 4px">
                VirtualBox
            </c-flex>
            <c-flex m="2" bg="#E56B6F" py="2" px="4" rounded="10" border="#101935 solid 4px">
                VMware Workstation
            </c-flex>
            <c-flex m="2" bg="#E56B6F" py="2" px="4" rounded="10" border="#101935 solid 4px">
                JetBrains suite of IDEs
            </c-flex>
            <c-flex m="2" bg="#E56B6F" py="2" px="4" rounded="10" border="#101935 solid 4px">
                Visual Studio Code
            </c-flex>
            <c-flex m="2" bg="#E56B6F" py="2" px="4" rounded="10" border="#101935 solid 4px">
                Ecipse
            </c-flex>
            <c-flex m="2" bg="#E56B6F" py="2" px="4" rounded="10" border="#101935 solid 4px">
                Quartus
            </c-flex>
            <c-flex m="2" bg="#E56B6F" py="2" px="4" rounded="10" border="#101935 solid 4px">
                Google Firebase
            </c-flex>
            <c-flex m="2" bg="#E56B6F" py="2" px="4" rounded="10" border="#101935 solid 4px">
                Microsoft Office
            </c-flex>
        </c-flex>
        <c-flex>
            <c-text fontSize="3xl">
                Related Courses
            </c-text>
        </c-flex>
        <c-flex
            mb="5" 
            w="100vw" 
            justify="center"
            flex-wrap="wrap"
            fontSize="xl"
            color="#FFEAEC"
        >
            <c-flex m="2" bg="#E56B6F" py="2" px="4" rounded="10" border="#101935 solid 4px">
                Cloud Computing
            </c-flex>
            <c-flex m="2" bg="#E56B6F" py="2" px="4" rounded="10" border="#101935 solid 4px">
                Data Structures and Algorithms
            </c-flex>
            <c-flex m="2" bg="#E56B6F" py="2" px="4" rounded="10" border="#101935 solid 4px">
                Computer Architecture
            </c-flex>
        </c-flex>
    </c-flex>
</template>

<script>
    import {
        CFlex,
        CText,
        CBox,
        CAvatar,
    } from '@chakra-ui/vue'

    export default {
        name: 'About',
        components: {
            CFlex,
            CText,
            CBox,
            CAvatar,
        }
    }
</script>