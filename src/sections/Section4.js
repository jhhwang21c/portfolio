import {
    Box,
    Link,
    Center,
    Image,
    Flex,
    HStack,
    Text,
    Divider,
    Spacer,
    VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";

import "./section4.css";
import matseonim1 from "../images/matseonim.gif";
import matseonim2 from "../images/matseonim2.gif";
import acceptedDAO from "../images/acceptedDAO.png";
import safeport1 from "../images/safeport1.png";
import safeport2 from "../images/safeport2.png";
import kisa1 from "../images/KISA1.png";
import kisa2 from "../images/KISA2.png";

function Section4() {
    const slides = [
        <Box
            width="75vw"
            height="77vh"
            borderWidth="2px"
            borderRadius="20px"
            overflow="hidden"
            boxShadow="2xl"
            padding="10px"
            borderColor="grey"
        >
            <Text fontSize="xl" as="b">
                Matseonim
            </Text>
            <Text>2021</Text>
            <HStack justify="center" marginTop="20px">
                <Image src={matseonim1} height="400px" />
                <Image src={matseonim2} height="400px" />
                <Flex
                    width="50%"
                    height="400px"
                    padding="10px"
                    marginLeft="40px"
                    direction="column"
                >
                    <Box textAlign="justify">
                        <Text>
                            Matseonim is an "In-military expert matching app".
                            It is a platform for matching individuals in need of
                            assistance in specific areas with a specialist
                            during their military service.
                        </Text>
                        <Text marginTop="5px">
                            I developed this app during my service in the ROK
                            Air Force. It was my first project using Flutter.
                            With this app, I received the Air Force Chief of
                            Staff Award, the most prestigious award in the Air
                            Force.
                        </Text>
                    </Box>
                    <Spacer />
                    <Divider orientation="horizontal" />
                    <Spacer />
                    <Box textAlign="start">
                        <HStack>
                            <Text as="b">Stacks: </Text>
                            <Text>
                                Flutter, Dart, Firebase Authentication,
                                Firestore
                            </Text>
                        </HStack>
                        <Text as="b">Links</Text>
                        <VStack align="start" fontSize="sm">
                            <Link
                                href="https://github.com/jhhwang21c/APP_Matseonim_CupHoldings"
                                isExternal
                            >
                                🔗 Github (in Korean)
                            </Link>
                            <Link
                                href="https://youtu.be/HfG5JgnUkIw?si=l169icYkfWCNLLe-"
                                isExternal
                            >
                                🔗 YouTube (in Korean)
                            </Link>
                        </VStack>
                    </Box>
                </Flex>
            </HStack>
        </Box>,
        <Box
            width="75vw"
            height="77vh"
            borderWidth="2px"
            borderRadius="20px"
            overflow="hidden"
            boxShadow="2xl"
            padding="10px"
            borderColor="grey"
        >
            <Text fontSize="xl" as="b">
                Accepted DAO
            </Text>
            <Text>2022</Text>
            <HStack justify="center" marginTop="20px">
                <Image src={acceptedDAO} height="350px" />
                <Flex
                    width="50%"
                    height="400px"
                    padding="10px"
                    marginLeft="20px"
                    direction="column"
                >
                    <Box textAlign="justify">
                        <Text>
                            Accepted DAO is a decentralized college counseling
                            and peer tutoring platform live on Rinkeby Ethereum
                            test network. Users can actively help other users or
                            get help in our DAO.
                        </Text>
                        <Text marginTop="5px">
                            I developed this platform alone during my internship
                            at Hanwha Life. It was my first time working on a
                            Web 3.0 project, and I learned a lot; I now know how
                            to develop and deploy smart contracts and connect
                            those to working web services. It got recognized as
                            the best project in the internship program.
                        </Text>
                    </Box>
                    <Spacer />
                    <Divider orientation="horizontal" />
                    <Spacer />
                    <Box textAlign="start">
                        <HStack>
                            <Text as="b">Stacks: </Text>
                            <Text>React, JS, CSS, Solidity, Firestore</Text>
                        </HStack>

                        <Text as="b">Links</Text>
                        <VStack align="start" fontSize="sm">
                            <Link
                                href="https://github.com/jhhwang21c/Accepted_DAO"
                                isExternal
                            >
                                🔗 Github
                            </Link>
                            <Link
                                href="https://accepteddao.netlify.app/"
                                isExternal
                            >
                                🔗 accepteddao.netlify.app
                            </Link>
                        </VStack>
                    </Box>
                </Flex>
            </HStack>
        </Box>,
        <Box
            width="75vw"
            height="77vh"
            borderWidth="2px"
            borderRadius="20px"
            overflow="hidden"
            boxShadow="2xl"
            padding="10px"
            borderColor="grey"
        >
            <Text fontSize="xl" as="b">
                SafePort
            </Text>
            <Text>2022</Text>
            <HStack justify="center" marginTop="20px">
                <VStack>
                    <Image src={safeport1} height={185} />
                    <Image src={safeport2} height={185} />
                </VStack>
                <Flex
                    width="50%"
                    height="400px"
                    padding="10px"
                    marginLeft="20px"
                    direction="column"
                >
                    <Box textAlign="justify">
                        <Text>
                            Built on Web 3.0, SafePort addresses the issues
                            raised by the traditional warehousing and P2P
                            collectibles market. Instead of having to lug around
                            an illiquid physical item, users can store their
                            physical items in one of our secure freeport
                            warehouses, while also tapping into unparalleled
                            liquidity and interoperability with digital NFTs.
                        </Text>
                        <Text marginTop="5px">
                            I developed this platform during Hack Harvard
                            hackathon. It let me wonder about the many
                            possibilities of NFT.
                        </Text>
                    </Box>
                    <Spacer />
                    <Divider orientation="horizontal" />
                    <Spacer />
                    <Box textAlign="start">
                        <HStack>
                            <Text as="b">Stacks: </Text>
                            <Text>React, JS, CSS, Solidity, Firestore</Text>
                        </HStack>

                        <Text as="b">Links</Text>
                        <VStack align="start" fontSize="sm">
                            <Link
                                href="https://github.com/jhhwang21c/safeport"
                                isExternal
                            >
                                🔗 Github
                            </Link>
                            <Link
                                href="https://youtu.be/f69xUTRfirM?si=Tsp51tFNBLb1b6tS"
                                isExternal
                            >
                                🔗 YouTube
                            </Link>
                            <Link
                                href="https://safeport.netlify.app/"
                                isExternal
                            >
                                🔗 safeport.netlify.app
                            </Link>
                        </VStack>
                    </Box>
                </Flex>
            </HStack>
        </Box>,
        <Box
            width="75vw"
            height="77vh"
            borderWidth="2px"
            borderRadius="20px"
            overflow="hidden"
            boxShadow="2xl"
            padding="10px"
            borderColor="grey"
        >
            <Text fontSize="xl" as="b">
                Harvard College KISA Website
            </Text>
            <Text>2023</Text>
            <HStack justify="center" marginTop="20px">
                <VStack>
                    <Image src={kisa1} height={185} />
                    <Image src={kisa2} height={185} />
                </VStack>
                <Flex
                    width="50%"
                    height="400px"
                    padding="10px"
                    marginLeft="20px"
                    direction="column"
                >
                    <Box textAlign="justify">
                        <Text>
                            It is the first ever website for Harvard Korean
                            International Students Association. Club members use
                            this website to check notices and event schedules.
                            They can also browse and download photos taken in
                            events. Admins can edit some parts of the website
                            and upload photos. It is a fully responsive website,
                            and mobile is also supported.
                        </Text>
                        <Text marginTop="5px">
                            As a Tech chair of HCKISA, I took initiative to
                            develop and deploy the club’s first website,
                            resulting in 2x inbound sponsorship opportunities
                            and new member recruitment. I designed this website
                            in a specific way that even when I am gone, it can
                            go through easy maintenance by the next board
                            members.
                        </Text>
                    </Box>
                    <Spacer />
                    <Divider orientation="horizontal" />
                    <Spacer />
                    <Box textAlign="start">
                        <HStack>
                            <Text as="b">Stacks: </Text>
                            <Text>
                                React, JS, CSS, Firebase Authentication,
                                Firestore
                            </Text>
                        </HStack>

                        <Text as="b">Links</Text>
                        <VStack align="start" fontSize="sm">
                            <Link
                                href="https://github.com/jhhwang21c/Harvard-KISA-Website"
                                isExternal
                            >
                                🔗 Github
                            </Link>
                            <Link href="https://harvardkisa.com/" isExternal>
                                🔗 harvardkisa.com
                            </Link>
                        </VStack>
                    </Box>
                </Flex>
            </HStack>
        </Box>,
    ];

    const [currentSlide, setCurrentSlide] = useState(
        Math.floor(Math.random() * slides.length)
    );
    console.log(currentSlide);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    return (
        <Box width="100%" height="100%">
            <Flex alignItems="center" justify="center" paddingTop="3%">
                <ArrowLeftIcon onClick={prevSlide} />
                <div className="slide" key={currentSlide}>
                    {slides[currentSlide]}
                </div>
                <ArrowRightIcon onClick={nextSlide} />
            </Flex>
        </Box>
    );
}

export default Section4;
