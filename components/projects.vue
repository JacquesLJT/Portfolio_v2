<template>
    <c-flex
        id="projects"
        w="100%"
        h="100%"
        bg="#D9E3F2"
        flex-wrap="wrap"
    >
        <c-flex
            w="100%"
            h="max-content"
            m="5%"
            justify="center"
            align-items="center"
            flex-wrap="wrap"
        >
            <c-text
                font-family="Quicksand, sans-serif"
                :font-size="{ base: '4xl', sm: '6xl' }"
                font-weight="700"
                color="#101935"
                h="max-content"
                justify="center"
                align-items="center"
            >
                Projects
            </c-text>
        </c-flex>
        <c-flex
            id="projects"
            w="100%"
            justify="center"
            flex-wrap="wrap"
        >

            <c-flex
                id="Portfolio"
                w="100%"
                h="max-content"
                justify="center"
                align-items="center"
                align-content="center"
                flex-wrap="wrap"
            >
                <c-text
                    w="100%"
                    font-family="Quicksand, sans-serif"
                    :font-size="{ base: '3xl', sm: '4xl' }"
                    font-weight="700"
                    color="#101935"
                    h="max-content"
                    justify="center"
                    align="center"
                    pt="2%"
                    border-top="4px solid #101935"
                >
                    Portfolio Website
                </c-text>
                <c-flex
                    :width="{ base: '100%', xl: '60%'}"
                    py="2%"
                    px="5%"
                >
                    <c-stack
                        :spacing="5"
                        :font-size="{ base: 'lg', sm: '2xl' }"
                        fontWeight="500"
                        text-align="justify"
                    >
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
                <c-flex
                    :width="{ base: '80%', xl: '40%'}"
                    :mt="{ base: '5%', xl: '0%'}"
                    :pr="{ base: '0%', xl: '5%'}"
                    justify="center"
                    align="center"
                >
                    <c-flex
                        border="4px solid #101935"
                    >
                        <nuxt-img
                            src="/portfolio_v1.webp"
                            alt="portfolio"
                            fit="cover"
                        />
                    </c-flex>
                </c-flex>
                <c-flex
                    w="100%"
                    justify="center"
                    align-items="center"
                    my="2%"
                >
                    <c-button 
                        as = "a"
                        size = "lg"
                        href="https://github.com/JacquesLJT/Portfolio"
                        target="_blank"
                        rel = "noopener noreferrer"
                        px = "4"
                        py = "2"
                        rounded = "md"
                        shadow = "md"
                        bg = "#C6D5EB"
                        color = "#101935"
                        border = "2px solid #101935"
                        :_hover = "{ bg: '#8DABD8', color: '#D9E3F2' }"
                    >
                        View on GitHub
                    </c-button>
                </c-flex>
            </c-flex>

            <c-flex
                id="cswap"
                w="100%"
                h="max-content"
                justify="center"
                align-items="center"
                align-content="center"
                flex-wrap="wrap"
            >
                <c-text
                    w="100%"
                    font-family="Quicksand, sans-serif"
                    :font-size="{ base: '3xl', sm: '4xl' }"
                    font-weight="700"
                    color="#101935"
                    h="max-content"
                    justify="center"
                    align="center"
                    pt="2%"
                    border-top="4px solid #101935"
                >
                    CSwap
                </c-text>
                <c-flex
                    :width="{ base: '100%', xl: '60%'}"
                    py="2%"
                    px="5%"
                >
                    <c-stack
                        :spacing="5"
                        :font-size="{ base: 'lg', sm: '2xl' }"
                        fontWeight="500"
                        text-align="justify"
                    >
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
                <c-flex
                    :width="{ base: '80%', xl: '40%'}"
                    :mt="{ base: '5%', xl: '0%'}"
                    :pr="{ base: '0%', xl: '5%'}"
                    justify="center"
                    align="center"
                >
                    <c-flex
                        border="4px solid #101935"
                    >
                        <nuxt-img
                            src="/cswap.webp"
                            alt="cswap"
                            fit="cover"
                        />
                    </c-flex>
                </c-flex>
                <c-flex
                    w="100%"
                    justify="center"
                    align-items="center"
                    my="2%"
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
                        bg = "#C6D5EB"
                        color = "#101935"
                        border = "2px solid #101935"
                        :_hover = "{ bg: '#8DABD8', color: '#D9E3F2' }"
                    >
                        View on GitHub
                    </c-button>
                </c-flex>
            </c-flex>

            <c-flex
                id="pong"
                w="100%"
                h="max-content"
                justify="center"
                align-items="center"
                align-content="center"
                flex-wrap="wrap"
            >
                <c-text
                    w="100%"
                    font-family="Quicksand, sans-serif"
                    :font-size="{ base: '3xl', sm: '4xl' }"
                    font-weight="700"
                    color="#101935"
                    h="max-content"
                    justify="center"
                    align="center"
                    pt="2%"
                    border-top="4px solid #101935"
                >
                    Verilog Implementation of Pong
                </c-text>
                <c-flex
                    :width="{ base: '100%', xl: '60%'}"
                    py="2%"
                    px="5%"
                >
                    <c-stack
                        :spacing="5"
                        :font-size="{ base: 'lg', sm: '2xl' }"
                        fontWeight="500"
                        text-align="justify"
                    >
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
                <c-flex
                    :width="{ base: '80%', xl: '40%'}"
                    :mt="{ base: '5%', xl: '0%'}"
                    :pr="{ base: '0%', xl: '5%'}"
                    justify="center"
                    align="center"
                >
                    <c-flex
                        :width="{ base: '100%', sm: '560px'}"
                        :height="{ base: '100%', sm: '315px'}"
                        border="4px solid #101935"
                    >
                        <iframe
                            width="100%"
                            height="100%"
                            src="https://www.youtube.com/embed/SYCcguFv3_A" 
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowfullscreen
                        />
                    </c-flex>
                </c-flex>
                <c-flex
                    w="100%"
                    justify="center"
                    align-items="center"
                    my="2%"
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
                        bg = "#C6D5EB"
                        color = "#101935"
                        border = "2px solid #101935"
                        :_hover = "{ bg: '#8DABD8', color: '#D9E3F2' }"
                    >
                        View on GitHub
                    </c-button>
                </c-flex>
            </c-flex>

            <c-flex
                id="raspberry-pi"
                w="100%"
                h="max-content"
                justify="center"
                align-items="center"
                align-content="center"
                flex-wrap="wrap"
            >
                <c-text
                    w="100%"
                    font-family="Quicksand, sans-serif"
                    :font-size="{ base: '3xl', sm: '4xl' }"
                    font-weight="700"
                    color="#101935"
                    h="max-content"
                    justify="center"
                    align="center"
                    pt="2%"
                    border-top="4px solid #101935"
                >
                    Connecting PS/2 Keyboard to Raspberry Pi over GPIO
                </c-text>
                <c-flex
                    :width="{ base: '100%', xl: '60%'}"
                    py="2%"
                    px="5%"
                >
                    <c-stack
                        :spacing="5"
                        :font-size="{ base: 'lg', sm: '2xl' }"
                        fontWeight="500"
                        text-align="justify"
                    >
                        <c-text>
                            In this project, I connected a PS2 keyboard to a Raspberry Pi using the general-purpose 
                            input/output (GPIO) pins. I wrote a program in C to handle the communication between 
                            the two devices. The program was able to decode the incoming data from the keyboard 
                            into scan codes, which are unique numerical values assigned to each key on the keyboard. 
                            I also implemented a function to output the scan codes to the terminal, allowing me to see 
                            the input from the keyboard in real-time.
                        </c-text>
                        <c-text>
                            In the future, I plan to finish adding all the scan codes to the lookup table, which is a data 
                            structure that maps each scan code to its corresponding key on the keyboard. This will 
                            enable the program to accurately interpret the input from the keyboard and perform the 
                            appropriate actions. I also plan to send data to the keyboard to turn on the LED lights, 
                            allowing me to customize the appearance of the keyboard.
                        </c-text>
                        <c-text>
                            This project demonstrates my ability to work with hardware and software to create a 
                            functional system. It also showcases my skills in C programming and debugging, as well 
                            as my understanding of computer hardware and communication protocols. Overall, this is 
                            a valuable addition to my portfolio, highlighting my technical capabilities and problem-solving abilities.
                        </c-text>
                    </c-stack>
                </c-flex>
                <c-flex
                    :width="{ base: '80%', xl: '40%'}"
                    :my="{ base: '5%', xl: '0%'}"
                    :pr="{ base: '0%', xl: '5%'}"
                    justify="center"
                    align="center"
                >
                    <c-flex
                        border="4px solid #101935"
                    >
                        <nuxt-img
                            src="/rpi_ps2.webp"
                            alt="Raspberry Pi and PS2 Keyboard"
                            fit="cover"
                        />
                    </c-flex>
                </c-flex>
            </c-flex>

            <c-flex
                id="wikiscraper"
                w="100%"
                h="max-content"
                justify="center"
                align-items="center"
                align-content="center"
                flex-wrap="wrap"
            >
                <c-text
                    w="100%"
                    font-family="Quicksand, sans-serif"
                    :font-size="{ base: '3xl', sm: '4xl' }"
                    font-weight="700"
                    color="#101935"
                    h="max-content"
                    justify="center"
                    align="center"
                    pt="2%"
                    border-top="4px solid #101935"
                >
                    Wikipedia Web Scraper
                </c-text>
                <c-flex
                    :width="{ base: '100%', xl: '60%'}"
                    py="2%"
                    px="5%"
                >
                    <c-stack
                        :spacing="5"
                        :font-size="{ base: 'lg', sm: '2xl' }"
                        fontWeight="500"
                        text-align="justify"
                    >
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
                <c-flex
                    :width="{ base: '80%', xl: '40%'}"
                    :my="{ base: '5%', xl: '0%'}"
                    :pr="{ base: '0%', xl: '5%'}"
                    justify="center"
                    align="center"
                >
                    <c-flex
                        border="4px solid #101935"
                    >
                        <nuxt-img
                            src="/wikiscraper.webp"
                            alt="wikiscraper"
                            fit="cover"
                        />
                    </c-flex>
                </c-flex>
            </c-flex>

        </c-flex>
    </c-flex>
</template>

<script>
    import { CButton, CFlex, CStack, CText } from "@chakra-ui/vue";

    export default {
        name: "Projects",
        components: {
            CButton,
            CFlex,
            CStack,
            CText,
        },
    };
</script>

<style>

</style>