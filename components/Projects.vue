<template>
    <c-flex
        w="100%"
        justify-content="center"
        flex-wrap="wrap"
        bg="#982649"
        pb="5"
        color="#FFEAEC"
        fontSize="lg"
        id="projects"
    >
        <c-flex border-bottom="solid #E56B6F" w="100%" justify-content="center" m="5" pb="5" flex-wrap="wrap">
            <c-flex w="100vw" justify-content="center">
                <c-text font-family="Quicksand, sans-serif" fontSize="5xl" font-weight="700">
                    Projects
                </c-text>
            </c-flex>
        </c-flex>

        <c-flex w="100%" flex-wrap="wrap" border-bottom="solid #E56B6F" pb="5">
            <c-flex w="100%" justify="center" pb="5" fontSize="3xl" font-weight="500">
                <c-text>Portfolio Website</c-text>
            </c-flex>
            <c-flex w="100%" :flex-wrap="{ base: 'wrap', xl: 'nowrap'}">
                <c-flex :w="{ base: '100%', xl: '60%'}" justify="center">
                    <c-flex w="80%" color="#FFEAEC" fontSize="2xl" font-weight="500">
                        <c-stack :spacing="5">
                            <c-text>
                                This is the second version of my portfolio website built using Vue.js and Chakra Ui.
                                I wanted to build something that would set me apart from other students and job applicants
                                and I thought that the best way for me to do that was to build a portfolio website that
                                would showcase my skills and abilities.
                            </c-text>
                            <c-text>
                                Before building the first version of my portfolio website, I had no experience with web development.
                                I wanted to build something myself, so I took the initiative to learn HTML, CSS, and JavaScript.
                                In just a few weeks I was able to start work on the first version of my portfolio. I had heard of 
                                React.js and decided I would use that to build my portfolio. I'm happy with the results that came from
                                having no prior web development experience to building a portfolio that I can proudly show to potential
                                employers and colleagues.
                            </c-text>
                            <c-text>
                                I decided to build the second version of my portfolio using Vue.js and Chakra Ui. The first version of
                                my portfolio needed some improvemts and at the same time I wanted to learn a new framework. I decided to
                                try out Vue.js as I had heard some good things about it. I also wanted to use chakra ui as I had some
                                previous experience with it and wanted to soely use it for this project. I'm happy with the results and
                                I'm excited to continue to build on this project.
                            </c-text>
                            <c-text>
                                This version and the first version of the portfolio can be viewd on my github page by clicking the buttons below.
                            </c-text>
                        </c-stack>
                    </c-flex>
                </c-flex>
                <c-flex :w="{ base: '100%', xl: '40%'}" :mt="{ base: '5', xl: '0'}" :mr="{ base: '0', xl: '20'}" :justify="{ base: 'center', xl: 'none'}">
                    <c-image 
                        :src="require('@/assets/portfolio_v1.png')"
                        alt="portfolio"
                        w="560px"
                        object-fit="cover"
                        border="4px solid #FFEAEC"
                    />
                </c-flex>
            </c-flex>
        </c-flex>

        <c-flex w="100%" flex-wrap="wrap" border-bottom="solid #E56B6F" pb="5">
            <c-flex w="100%" justify="center" py="5" fontSize="3xl" font-weight="500">
                <c-text>CSwap</c-text>
            </c-flex>
            <c-flex w="100%" :flex-wrap="{ base: 'wrap', xl: 'nowrap'}">
                <c-flex :w="{ base: '100%', xl: '60%'}" justify="center">
                    <c-flex w="80%" color="#FFEAEC" fontSize="2xl" font-weight="500">
                        <c-stack :spacing="5">
                            <c-text>
                                During the second semester of my third year, I was enrolled in a course called Intro to Software Engineering.
                                This course involved a term long group project where we were tasked to building some sort of application.
                                My group came up with the idea to build a web application that was a niche marketplace for students to buy and sell
                                college related items. Users could sell textbooks, apartment leases, and other college related items.
                            </c-text>
                            <c-text>
                                This project was built using React.js and Firebase. During this prject, I was introduced to user authentication
                                and database managment. 
                            </c-text>
                            <c-text>
                                While the project was not fully completed, I was able to learn a lot about team software development as well as
                                being introduced to software developement methodologies such as agile and scrum.
                            </c-text>
                        </c-stack>
                    </c-flex>
                </c-flex>
                <c-flex :w="{ base: '100%', xl: '40%'}" :mt="{ base: '5', xl: '0'}" :mr="{ base: '0', xl: '20'}" :justify="{ base: 'center', xl: 'none'}">
                    <c-image 
                        :src="require('@/assets/cswap_screenshot.png')"
                        alt="cswap_screenshot"
                        w="560px"
                        object-fit="cover"
                        border="4px solid #FFEAEC"
                    />
                </c-flex>
            </c-flex>
        </c-flex>

        <c-flex w="100%" flex-wrap="wrap" border-bottom="solid #E56B6F" pb="5">
            <c-flex w="100%" justify="center" py="5" fontSize="3xl" font-weight="500">
                <c-text>Wikipedia Scraper</c-text>
            </c-flex>
            <c-flex w="100%" :flex-wrap="{ base: 'wrap', xl: 'nowrap'}">
                <c-flex :w="{ base: '100%', xl: '60%'}" justify="center">
                    <c-flex w=80% color="#FFEAEC" fontSize="2xl" font-weight="500">
                        <c-stack :spacing="5">
                            <c-text>
                                This project was built using Python and the BeautifulSoup library. The purpose of this project was to
                                introduce myself to web scraping by scraping data from Wikipeadia and displaying a summary of the current webpage.
                                The program starts at the web scraping wikipedia page and then scrapes the first link on the page and continues.
                                The program asks the user if they would like a summary of the current page or if they'd like to continue to the
                                next page. The program will continue to scrape the next page until the user decides to stop.
                            </c-text>
                        </c-stack>
                    </c-flex>
                </c-flex>
                <c-flex :w="{ base: '100%', xl: '40%'}" :mt="{ base: '5', xl: '0'}" :mr="{ base: '0', xl: '20'}" :justify="{ base: 'center', xl: 'none'}">
                    <c-image
                        :src="require('@/assets/wikiscraper.png')"
                        alt="wikiscraper"
                        w="560px"
                        object-fit="cover"
                        border="4px solid #FFEAEC"
                    />
                </c-flex>
            </c-flex>
        </c-flex>

        <c-flex w="100%" flex-wrap="wrap" border-bottom="solid #E56B6F" pb="5">
            <c-flex w="100%" justify="center" py="5" fontSize="3xl" font-weight="500">
                <c-text>Verilog Pong Game</c-text>
            </c-flex>
            <c-flex w="100%" :flex-wrap="{ base: 'wrap', xl: 'nowrap'}">
                <c-flex :w="{ base: '100%', xl: '60%'}" justify="center">
                    <c-flex w=80% color="#FFEAEC" fontSize="2xl" font-weight="500">
                        <c-stack :spacing="5">
                            <c-text>
                                One of the courses that I took to progress towards a minor in Computer Engineering was Sequential Logic Systems. 
                                This course taught me, on an introductory level, how to design sequential logic and implementing logic on Altera FPGAs.
                            </c-text>
                            <c-text>
                                As a final project in the course, we were tasked in groups of two to recreate the game of pong using Verilog and implement on the FPGA. 
                                We were provided with the modules resposible with correct output to a VGA monitor, as well as a demonstration on how to use the module, 
                                but we were responsible for the rest of the functionality.
                            </c-text>
                            <c-text>
                                My role in the project was to design the play area of the game, draw the ball, and draw the paddles. 
                                I was also responsible for writting the logic to move the ball as well as for detecting collisions between the ball and the paddles, 
                                and between the ball and the edges of the play area.
                            </c-text>
                            <c-text>
                                This project was a great introduction to FPGA design and Verilog. I learned a lot about how to design sequential logic and how to implement it on an FPGA.
                            </c-text>
                            <c-text>
                                Below the final project report can be read as well as a link to the Github repository where the verilog code can be found.
                            </c-text>
                        </c-stack>
                    </c-flex>
                </c-flex>
                <c-flex :w="{ base: '100%', xl: '40%'}" :mt="{ base: '5', xl: '0'}" :mr="{ base: '0', xl: '20'}" :justify="{ base: 'center', xl: 'none'}">
                    <c-flex h="max-content" border="#101935 solid 4px">
                        <iframe 
                            width="560" 
                            height="315" 
                            src="https://www.youtube.com/embed/SYCcguFv3_A" 
                            title="YouTube video player" 
                            frameborder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowfullscreen>
                        </iframe>
                    </c-flex>
                </c-flex>
            </c-flex>
        </c-flex>

    </c-flex>
</template>

<script>
    import {
        CFlex,
        CText,
        CStack,
    } from '@chakra-ui/vue'

    export default {
        name: 'Projects',
        components: {
            CFlex,
            CText,
            CStack,
        }
    }
</script>