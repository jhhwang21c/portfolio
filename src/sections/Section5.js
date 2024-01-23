import {
    Container,
    Flex,
    Image,
    Text,
    VStack,
    Divider,
    HStack,
    Box,
} from "@chakra-ui/react";

import "./section5.css";
import hanwha from "../images/hanwha.jpeg";
import rokaf from "../images/ROKAF.png";

function Section3() {
    return (
        <Flex
            direction="column"
            paddingTop="20px"
            align="center"
            backgroundColor="whitesmoke"
            height="100%"
        >
            <Box overflow="auto">
                <Text fontSize="40px" fontWeight="bold">
                    Experience
                </Text>
                <Container maxW="70vw" marginTop="20px">
                    <HStack className="description">
                        <Image
                            src={hanwha}
                            boxSize="120px"
                            borderRadius="full"
                        />
                        <Divider
                            orientation="vertical"
                            borderColor="blackAlpha"
                            borderWidth={2}
                            height="150px"
                        />
                        <VStack>
                            <HStack>
                                <Text as="b">
                                    Software Engineer Intern, Hanwha Life
                                </Text>
                                <Text>| Jun 2022 — Aug 2022</Text>
                            </HStack>
                            <li>
                                Launched three dApps in a spin-off team that
                                specializes in Blockchain projects.
                            </li>
                            <li>
                                Developed a decentralized college counseling
                                platform live on Ethereum from scratch and got
                                selected as the best project in the internship
                                program.
                            </li>
                        </VStack>
                    </HStack>
                </Container>

                <Container maxW="70vw" marginTop="20px">
                    <HStack className="description">
                        <Image
                            src={rokaf}
                            objectFit="contain"
                            boxSize="120px"
                            borderRadius="full"
                        />
                        <Divider
                            orientation="vertical"
                            borderColor="blackAlpha"
                            borderWidth={2}
                            height="150px"
                        />
                        <VStack>
                            <HStack>
                                <Text as="b">
                                    Staff Sergeant, Republic of Korea Air Force
                                </Text>
                                <Text>| Aug 2020 — May 2022</Text>
                            </HStack>
                            <li>
                                Managed multi-million-dollar aviation electronic
                                equipment Technical Orders.
                            </li>
                            <li>
                                Deployed for two months to assist in
                                simultaneous interpretation, translation, and
                                lectures between the ROK Air Force and an
                                Israeli defense company.
                            </li>
                            <li>
                                Founded and led a developer club. Developed an
                                "In-military expert matching app" with Flutter
                                and received the Air Force Chief of Staff Award.
                            </li>
                        </VStack>
                    </HStack>
                </Container>
                <Container maxW="70vw" marginTop="20px">
                    <HStack className="description">
                        <Image
                            src={hanwha}
                            boxSize="120px"
                            borderRadius="full"
                        />
                        <Divider
                            orientation="vertical"
                            borderColor="blackAlpha"
                            borderWidth={2}
                            height="150px"
                        />
                        <VStack>
                            <HStack>
                                <Text as="b">
                                    Software Engineer Intern, Hanwha Life
                                </Text>
                                <Text>| Jun 2020 — Aug 2020</Text>
                            </HStack>
                            <li>
                                Spearheaded a digital startup that links users
                                with compatible therapists from ideation to
                                fully functional web prototype utilizing HTML,
                                JavaScript, PHP, and SQL.
                            </li>
                            <li>
                                Pitched to top-level executives for an
                                investment opportunity.
                            </li>
                        </VStack>
                    </HStack>
                </Container>
            </Box>
        </Flex>
    );
}

export default Section3;
