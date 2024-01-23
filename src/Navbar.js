import React from "react";
import {
    Box,
    Flex,
    Spacer,
    Text,
    useDisclosure,
    Link,
    Container,
} from "@chakra-ui/react";

import { HamburgerIcon } from "@chakra-ui/icons";
import { useMediaQuery } from "react-responsive";

export const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({
        query: "(max-width:768px)",
    });

    return <>{isMobile && children}</>;
};

export const PC = ({ children }) => {
    const isPc = useMediaQuery({
        query: "(min-width:769px)",
    });

    return <>{isPc && children}</>;
};

function Navbar() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = React.useRef();

    return (
        <>
            <Mobile> mobile version is under construction</Mobile>
            <PC>
                <Flex
                    justify="space-between"
                    align="center"
                    backgroundColor="white"
                    height="70px"
                    paddingTop="5px"
                    style={{
                        boxShadow: "0 2px 2px 0 rgba(0,0,0,0.3)",
                    }}
                >
                    {/* left side */}

                    <Box marginLeft="5vw">
                        <Link href="#Landing">
                            <Text
                                marginLeft="15px"
                                style={{
                                    color: "MidnightBlue",
                                }}
                            >
                                John's Portfolio
                            </Text>
                        </Link>
                    </Box>
                    <Spacer />
                    {/* right side */}
                    <Container maxW="45vw" marginRight="8vw">
                        <Flex>
                            <Box>
                                <Link href="#AboutMe">About Me</Link>
                            </Box>
                            <Spacer />
                            <Box>
                                <Link href="#Skills">Skills</Link>
                            </Box>
                            <Spacer />
                            <Box>
                                <Link href="#Projects">Projects</Link>
                            </Box>
                            <Spacer />
                            <Box>
                                <Link href="#Experience">Experience</Link>
                            </Box>
                        </Flex>
                    </Container>
                </Flex>
            </PC>
        </>
    );
}

export default Navbar;
