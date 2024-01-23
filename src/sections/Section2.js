import {
    Box,
    Link,
    Center,
    Container,
    Flex,
    Image,
    Spacer,
    Grid,
    GridItem,
    Text,
    VStack,
    Divider,
} from "@chakra-ui/react";
import profilePic from "../images/profile.JPG";
import { CopyToClipboard } from "react-copy-to-clipboard";

function Section2() {
    return (
        <Box width="100%" height="100%">
            <Flex direction="column" paddingTop="5%">
                <Text fontSize="50px" fontWeight="bold">
                    ABOUT ME
                </Text>
                <Box width="1000px" alignSelf="center">
                    <Grid
                        h="55vh"
                        templateRows="repeat(3, 1fr)"
                        templateColumns="repeat(3, 1fr)"
                        gap={4}
                    >
                        <GridItem rowSpan={3} bg="DarkSeaGreen">
                            <VStack paddingTop="8%">
                                <Image
                                    borderRadius="full"
                                    boxSize="200px"
                                    objectFit="cover"
                                    src={profilePic}
                                />
                                <Text fontSize="2xl">Jungho Hwang (John)</Text>
                                <Text fontSize="xl">2000.05.20</Text>
                                <Text fontSize="xl">Republic of Korea 🇰🇷</Text>
                            </VStack>
                        </GridItem>
                        <GridItem rowSpan={3} bg="papayawhip">
                            <VStack paddingTop="20px">
                                <Text fontSize="3xl">Education 📚</Text>
                                <Divider orientation="horizontal" />
                                <Text fontSize="xl" paddingTop="10px">
                                    Harvard University
                                </Text>
                                <Text>Sept 2019 ~ May 2025</Text>
                                <Text>
                                    A.B. in Computer Science and Secondary in
                                    Neuroscience
                                </Text>
                                <Text fontSize="xl" paddingTop="20px">
                                    Hankuk Academy of Foreign Studies
                                </Text>
                                <Text>Mar 2017 ~ Feb 2019</Text>
                                <Text>International Program</Text>
                            </VStack>
                        </GridItem>
                        <GridItem bg="Khaki">
                            <VStack paddingTop="20px">
                                <Text fontSize="xl">Email</Text>
                                <CopyToClipboard
                                    text="johnhwang@college.harvard.edu"
                                    onCopy={() => alert("Copied to Clipboard")}
                                >
                                    <Link>johnhwang@college.harvard.edu</Link>
                                </CopyToClipboard>
                            </VStack>
                        </GridItem>
                        <GridItem bg="Khaki">
                            <VStack paddingTop="20px">
                                <Text fontSize="xl">LinkedIn</Text>
                                <Link
                                    href="https://www.linkedin.com/in/jhhwang21c/"
                                    isExternal
                                >
                                    linkedin.com/in/jhhwang21c/
                                </Link>
                            </VStack>
                        </GridItem>
                        <GridItem bg="Khaki">
                            <VStack paddingTop="20px">
                                <Text fontSize="xl">Github</Text>
                                <Link
                                    href="https://github.com/jhhwang21c"
                                    isExternal
                                >
                                    github.com/jhhwang21c
                                </Link>
                            </VStack>
                        </GridItem>
                    </Grid>
                </Box>
            </Flex>
        </Box>
    );
}

export default Section2;
