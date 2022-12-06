<template>
    <c-flex
        w="100%"
        pt="80px"
        justify-content="center"
        flex-wrap="wrap"
        bg="#FFEAEC"
        id="home"
    >
        <c-flex
            m="5"
            w="100vw"
            justify="center"
        >
            <c-text font-family="Quicksand, sans-serif" fontSize="6xl" font-weight="700" color="#982649">
                Hey, I'm Landon!
            </c-text>
        </c-flex>
        <c-flex
            w="100%"
            flex-wrap="wrap"
        >
            <c-flex w="60%" justify="center" align="center">
                <c-flex w="80%" font-family="Exo 2, sans-serif" fontSize="4xl" font-weight="500" color="#982649">
                    <c-text>
                        I'm a student studying at the University of Maine in Orono. I'm pursuing a Bachelor's of Science in Computer Science with a minor in Computer Engineering. 
                        Graduating in the spring of 2023.
                    </c-text>
                </c-flex>
            </c-flex>
            <c-flex w="40%" justify="center">
                <c-image
                    h="400px"
                    w="400px"
                    object-fit="cover"
                    rounded="full"
                    :src="require('@/assets/landon.jpg')"
                    border="4px solid #101935"
                />
            </c-flex>
            <c-flex w="100%" justify="center">
                <c-icon name="arrow-down" size="20" v-if="showArrow" class="arrow down" color="#101935"/>
            </c-flex>
        </c-flex>
    </c-flex>
</template>

<style>

    .arrow {
        animation: bounce 2s infinite;
    }

    .down {
        animation-direction: alternate;
    }

    @keyframes bounce {
        0% {
            transform: translateY(0);
        }
        100% {
            transform: translateY(-30px);
        }
    }

</style>

<script>
    import {
        CFlex,
        CText,
        CImage,
    } from '@chakra-ui/vue'

    export default {
        name: 'Hero',
        components: {
            CFlex,
            CText,
            CImage,
        },
        data() {
            return {
                showArrow: true,
            }
        },

    };

</script>