<template>
    <c-flex
        class="hero"
        id = "home"
        v-bind:style="{ 
                        backgroundImage: 'url(' + require('@/assets/hero2.jpeg') + ')', 
                        backgroundSize: 'cover', 
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        backgroundAttachment: 'fixed' 
                    }"
        w = "100%"
        h = "100vh"
        flex-wrap = "wrap"
        color = "#101935"
        justify = "center"
        align-items = "center"
    >
        <c-flex
            w="100%"
            h="max-content"
            justify="center"
            align-items="center"
        >
            <c-text 
                font-family="Quicksand, sans-serif"
                :font-size="{ base: '72px', sm: '96px' }"
                font-weight="700" 
                justify="center" 
                align="center"
            >
                Hey, I'm Landon!
            </c-text>
        </c-flex>
        <c-flex 
            w = "100%"
            justify = "center"
            :style = "{ position: 'absolute', bottom: '30px' }"
        >
            <font-awesome-icon 
                v-if="showArrow" 
                icon="fa-solid fa-arrow-down"
                size="8x"
                class="arrow down" 
                color="#101935"
            />
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