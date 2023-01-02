<template>
    <c-flex
        id="projects"
        w="100%"
        justify-content="center"
        flex-wrap="wrap"
        bg="#D9E3F2"
    >
        <c-flex w="100%" justify-content="center" m="5" flex-wrap="wrap">
            <c-flex w="100vw" justify-content="center">
                <c-text font-family="Quicksand, sans-serif" fontSize="6xl" font-weight="700">
                    Projects
                </c-text>
            </c-flex>
        </c-flex>

        <c-flex w="100%" h="100vh" flex-wrap="wrap" pb="5">
            <c-flex w="100%" justify="center" fontSize="3xl" font-weight="700">
                <c-text>Portfolio Website</c-text>
            </c-flex>
            <c-flex w="100%" :flex-wrap="{ base: 'wrap', xl: 'nowrap'}">
                <c-flex :w="{ base: '100%', xl: '60%'}" justify="center">
                    <c-flex w="80%" fontSize="2xl" font-weight="500">
                        <c-stack :spacing="5">
                            <c-text>
                                This is the second version of my portfolio website, built using Vue.js and
                                Chakra UI. I wanted to create something that would set me apart from other
                                students and job applicants, so I decided to build a portfolio website that
                                showcases my skills and abilities.
                            </c-text>
                            <c-text>
                                Before building the first version of my portfolio website, I had no experience 
                                in web development. However, I was eager to learn and took the initiative to 
                                teach myself HTML, CSS, and JavaScript. Within a few weeks, I was able to 
                                start work on the first version of my portfolio using React.js. Although I had 
                                no prior web development experience, I was happy with the results and 
                                proud to show my portfolio to potential employers and colleagues.
                            </c-text>
                            <c-text>
                                For the second version of my portfolio, I wanted to improve upon the first 
                                version and also learn a new framework. I chose to use Vue.js and Chakra UI, 
                                as I had heard good things about Vue.js and had previous experience with 
                                Chakra UI. I'm pleased with the results and excited to continue building on 
                                this project.
                            </c-text>
                            <c-text>
                                Both the first and second versions of my portfolio can be viewed on my 
                                GitHub page by clicking the buttons below.
                            </c-text>
                        </c-stack>
                    </c-flex>
                </c-flex>
                <c-flex 
                        :w="{ base: '100%', xl: '40%'}" 
                        :mt="{ base: '5', xl: '0'}" 
                        :mr="{ base: '0', xl: '20'}" 
                        :justify="{ base: 'center', xl: 'center'}"
                >
                    <c-image 
                        :src="require('@/assets/portfolio_v1.png')"
                        alt="portfolio"
                        object-fit="cover"
                    />
                </c-flex>
            </c-flex>
            <c-flex
                    w="100%"
                    justify="center"
                >
                <c-button 
                    as = "a"
                    size = "lg"
                    href="https://github.com/JacquesLJT/Pong"
                    target="_blank"
                    rel = "noopener noreferrer"
                    px = "4"
                    py = "2"
                    rounded = "md"
                    shadow = "md"
                    bg = "#FFEAEC"
                    color = "#982649"
                    border = "2px solid #982649"
                    :_hover = "{ bg: '#E56B6F', color: '#FFEAEC' }"
                >
                    View on GitHub
                </c-button>
            </c-flex>
        </c-flex>

        <c-flex w="100%" flex-wrap="wrap" pb="5">
            <c-flex w="100%" justify="center" py="5" fontSize="3xl" font-weight="500">
                <c-text>CSwap</c-text>
            </c-flex>
            <c-flex w="100%" :flex-wrap="{ base: 'wrap', xl: 'nowrap'}">
                <c-flex :w="{ base: '100%', xl: '60%'}" justify="center">
                    <c-flex w="80%" fontSize="2xl" font-weight="500">
                        <c-stack :spacing="5">
                            <c-text>
                                During my third year of college, I participated in a term-long group project 
                                for my Intro to Software Engineering course. Our task was to build some sort 
                                of application, and my group came up with the idea for "CSwap," an online 
                                marketplace for college students to buy and sell items related to college. 
                                This included items such as textbooks, apartment leases, and other college-related items.
                            </c-text>
                            <c-text>
                                To build CSwap, we used React.js and Firebase. Through this project, I 
                                gained experience with user authentication and database management. 
                                Although the project was not fully completed, I learned a lot about team 
                                software development and was introduced to agile and scrum software 
                                development methodologies. Overall, this project was a valuable learning 
                                experience for me and gave me insight into the software development process.
                            </c-text>
                        </c-stack>
                    </c-flex>
                </c-flex>
                <c-flex :w="{ base: '100%', xl: '40%'}" :mt="{ base: '5', xl: '0'}" :mr="{ base: '0', xl: '20'}" :justify="{ base: 'center', xl: 'none'}">
                    <c-image 
                        :src="require('@/assets/cswap_screenshot.png')"
                        alt="cswap_screenshot"
                        object-fit="cover"
                    />
                </c-flex>
            </c-flex>
            <c-flex
                    w="100%"
                    justify="center"
                >
                <c-button 
                    as = "a"
                    size = "lg"
                    href="https://github.com/JacquesLJT/COS420_Project"
                    target="_blank"
                    rel = "noopener noreferrer"
                    px = "4"
                    py = "2"
                    rounded = "md"
                    shadow = "md"
                    bg = "#FFEAEC"
                    color = "#982649"
                    border = "2px solid #982649"
                    :_hover = "{ bg: '#E56B6F', color: '#FFEAEC' }"
                >
                    View on GitHub
                </c-button>
            </c-flex>
        </c-flex>

        <c-flex w="100%" flex-wrap="wrap" pb="5">
            <c-flex w="100%" justify="center" py="5" fontSize="3xl" font-weight="500">
                <c-text>Wikipedia Scraper</c-text>
            </c-flex>
            <c-flex w="100%" :flex-wrap="{ base: 'wrap', xl: 'nowrap'}">
                <c-flex :w="{ base: '100%', xl: '60%'}" justify="center">
                    <c-flex w=80% fontSize="2xl" font-weight="500">
                        <c-stack :spacing="5">
                            <c-text>
                                This project was a web scraping tool built using Python and the 
                                BeautifulSoup library. The goal was to scrape data from Wikipedia and 
                                display a summary of the current webpage to the user.
                            </c-text>
                            <c-text>
                                The program starts on the web scraping Wikipedia page and then scrapes 
                                the first link on the page. It continues to scrape the next page, asking the 
                                user if they would like a summary of the current page or if they'd like to 
                                continue to the next page. This continues until the user decides to stop.
                            </c-text>
                            <c-text>
                                Through this project, I gained experience with web scraping and had 
                                the opportunity to practice using the BeautifulSoup library in Python. Overall, it 
                                was a valuable learning experience that helped me understand more about 
                                how web scraping works.
                            </c-text>
                        </c-stack>
                    </c-flex>
                </c-flex>
                <c-flex :w="{ base: '100%', xl: '40%'}" 
                        :mt="{ base: '5', xl: '0'}" 
                        :mr="{ base: '0', xl: '20'}" 
                        :justify="{ base: 'center', xl: 'none'}"
                >
                    <c-image
                        :src="require('@/assets/wikiscraper.png')"
                        alt="wikiscraper"
                        object-fit="cover"
                    />
                </c-flex>
            </c-flex>
        </c-flex>

        <c-flex w="100%" flex-wrap="wrap" pb="5">
            <c-flex w="100%" justify="center" py="5" fontSize="3xl" font-weight="500">
                <c-text>Verilog Pong Game</c-text>
            </c-flex>
            <c-flex w="100%" :flex-wrap="{ base: 'wrap', xl: 'nowrap'}">
                <c-flex :w="{ base: '100%', xl: '60%'}" justify="center">
                    <c-flex w=80% fontSize="2xl" font-weight="500">
                        <c-stack :spacing="5">
                            <c-text>
                                As part of my minor in Computer Engineering, I took a course called 
                                Sequential Logic Systems, which introduced me to the basics of designing 
                                sequential logic and implementing it on Altera FPGAs. For our final project, 
                                my team and I were tasked with recreating the game of Pong using Verilog 
                                and implementing it on an FPGA.
                            </c-text>
                            <c-text>
                                Our project included modules responsible for correct output to a VGA 
                                monitor, but we were responsible for the rest of the functionality. 
                                I was responsible for designing the play area of the game, drawing the 
                                ball and paddles, and writing the logic to move the ball and detect collisions 
                                between the ball and paddles, as well as the edges of the play area.
                            </c-text>
                            <c-text>
                                This project was a great introduction to FPGA design and Verilog. I learned a 
                                lot about how to design sequential logic and how to implement it on an FPGA. 
                                The final project report and the Verilog code for this project can be found in
                                the GitHub repository linked below.
                            </c-text>
                        </c-stack>
                    </c-flex>
                </c-flex>
                <c-flex :w="{ base: '100%', xl: '40%'}" :mt="{ base: '5', xl: '0'}" :mr="{ base: '0', xl: '20'}" :justify="{ base: 'center', xl: 'none'}">
                    <c-flex h="max-content">
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
            <c-flex
                    w="100%"
                    justify="center"
                >
                <c-button 
                    as = "a"
                    size = "lg"
                    href="https://github.com/JacquesLJT/Pong"
                    target="_blank"
                    rel = "noopener noreferrer"
                    px = "4"
                    py = "2"
                    rounded = "md"
                    shadow = "md"
                    bg = "#FFEAEC"
                    color = "#982649"
                    border = "2px solid #982649"
                    :_hover = "{ bg: '#E56B6F', color: '#FFEAEC' }"
                >
                    View on GitHub
                </c-button>
            </c-flex>
        </c-flex>

    </c-flex>
</template>

<script>
    import {
        CFlex,
        CText,
        CStack,
        CButton,
    } from '@chakra-ui/vue'

    export default {
        name: 'Projects',
        components: {
            CFlex,
            CText,
            CStack,
            CButton,
        }
    }
</script>