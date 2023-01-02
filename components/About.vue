<template>
    <c-flex 
        w="100%"
        :h="{ base: '100%', xl: '100vh'}"
        justify-content="center"
        flex-wrap="wrap"
        color="#101935"
        id="about"
        bg="#d9e3f2"
    >
        <c-flex 
            w="100%"
            my="10"
            justify="center"
            align="center"
        >
            <c-text 
                font-family="Quicksand, sans-serif"
                :font-size="{ base: '4xl', sm: '6xl'}"
                font-weight="700"
                h="max-content"
            >
                About Me
            </c-text>
        </c-flex>
        <c-flex 
            w="100%" 
            h="max-content"
            mb="10"
            justify="center"
            align="center"
        >
            <c-flex
                :mx="{ base: '0', xl: '8%'}"
                :justify="{ base: 'none', xl: 'space-between'}"
                :flex-wrap="{ base: 'wrap', xl: 'nowrap'}"
            >
            <c-flex 
                :w="{ base: '100%', xl: '60%'}"
                justify="center"
            >
                <c-flex
                    :font-size="{ base: 'lg', sm: '2xl'}"
                    font-weight="500"
                    :px="{ base: '10', xl: '0'}"
                >
                    <c-stack :spacing="5" text-align="justify">
                        <c-text>
                            I've been interested in computer science for as long as I can remember. 
                            Growing up, my father – an electrical engineer – had a home office filled with 
                            electronics and computers. Although I had no idea what all of those gadgets 
                            did, I was fascinated by them. My father would explain to me how he could 
                            control industrial machines with the components in his office and show me 
                            circuit diagrams and programs printed out on paper. As a kid, most of this 
                            went right over my head, but I was eager to learn more.
                        </c-text>
                        <c-text>
                            I started teaching myself how to program by watching tutorials on YouTube. I 
                            began by learning HTML and building a very basic website that displayed 
                            some pictures. From there, I moved on to batch scripting and even made a
                            simple text game. I also attended a few robotics summer camps where I built
                            small lego robots that could follow a line and avoid obstacles. I even learned 
                            how to use an Arduino microcontroller and program it in C with the help of a 
                            neighborhood friend.
                        </c-text>
                        <c-text>
                            By the time I reached high school, I knew that my career path would
                            be in computer science. I took the only computer science class offered at my 
                            school, an introduction to JavaScript, and was excited to see what I'd learn 
                            in college. Now, as a senior at the University of Maine in Orono, I'm pursuing a 
                            Bachelor's of Science in Computer Science with a minor in Computer 
                            Engineering. My skills and interests are constantly growing, and I'm excited 
                            to begin my career and see where it takes me.
                        </c-text>
                    </c-stack>
                </c-flex>
            </c-flex>
            <c-flex
                    flex-direction="column"
                    :w="{ base: '100%', xl: '40%'}"
                    :mt="{ base: '10', xl: '0'}"
                    :ml="{ base: '0', xl: '20'}"
                    justify="center"
                    :align="{ base: 'center', xl: 'start'}"
            >
                <c-image
                    rounded="full"
                    :w="{ base: '50%', xl: '100%'}"
                    alt="Placeholder"
                    :src="require('@/assets/landon.jpg')"
                    object-fit="cover"
                    border="5px solid #101935"
                />
            </c-flex>
            </c-flex>
        </c-flex>
    </c-flex>
</template>

<script>
    import {
        CFlex,
        CText,
        CBox,
        CImage,
        CStack,
    } from '@chakra-ui/vue'

    export default {
        name: 'About',
        components: {
            CFlex,
            CText,
            CBox,
            CImage,
            CStack,
        }
    }
</script>