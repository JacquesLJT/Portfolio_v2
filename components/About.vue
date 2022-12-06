<template>
    <c-flex 
        w="100%"
        justify-content="center"
        flex-wrap="wrap"
        bg="#982649"
        color="#FFEAEC"
        id="about"
    >
        <c-flex m="5" w="100vw" justify="center">
            <c-text font-family="Quicksand, sans-serif" fontSize="5xl" font-weight="700">
                About Me
            </c-text>
        </c-flex>
        <c-flex w="100%" mb="10">
                <c-flex w="60%" justify="center">
                    <c-flex w="80%" fontSize="3xl" font-weight="500">
                        <c-stack :spacing="5">
                            <c-text>
                                I have been interested in Computer Science since I has young. My father was an Electrical Engineer while I was growing up and
                                his office was filled with electronics and computers. I had no idea what all those gadgets did, but I was fascinated by them.
                                My father would tell me about how he could control industrial machines with the components in his office. He showed me circuit
                                diagrams and programs printed out on paper. Of course as a kid all of this went right over my head, but I wanted to learn.
                            </c-text>
                            <c-text>
                                I started to learn how to program by watch tutorials on YouTube. I began by learning how websites were created and through that I learned
                                some HTML. I built a very rudimentary website that simply displayed some pictures. I learned a little batch scripting by following a tutorial
                                on how to make a simple text game. From there, I went to a few robotics summer camps where I built small lego robots that could follow
                                a line and avoid obstacles. I also learned how to use an Arduino microcontroller and how to program it in C from a neighborhood friend.
                                By the time I got to high school, I knew that my career path would be in Computer Science. I took the only Computer Science class that the
                                school offered, an introduction to JavaScipt, and was excited to see what I'd be learning in college. 
                            </c-text>
                            <c-text>
                                Here I am now as a senior at the University of Maine in Orono where I'm pursuing a Bachelor's of Science in Computer Science with a minor in Computer Engineering.
                                My skills and interests are constantly growing and I'm excited to start my career and see where it takes me.
                            </c-text>
                        </c-stack>
                    </c-flex>
                </c-flex>
                <c-flex w="40%" mr="20">
                    <c-image
                        alt="Placeholder"
                        :src="require('@/assets/brain.svg')"
                    />
                </c-flex>
            </c-flex>
    </c-flex>
</template>

<script>
    import {
        CFlex,
        CText,
        CBox,
    } from '@chakra-ui/vue'

    export default {
        name: 'About',
        components: {
            CFlex,
            CText,
            CBox,
        }
    }
</script>