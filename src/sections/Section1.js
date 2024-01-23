import { Box, Button, Container, Flex, Text } from "@chakra-ui/react";
import background from "../images/background2.png";

function Section1() {
    return (
        <Box
            width="100%"
            height="100%"
            backgroundImage={background}
            backgroundRepeat="no-repeat"
            backgroundPosition="center"
        >
            <Flex direction="column" paddingTop="10%" align="center">
                <Text color="white" fontSize="40px">
                    An Innovator, Early Adopter, Cooperator.
                </Text>
                <Container paddingTop="50px">
                    <Text color="white" fontSize="28px">
                        My name is John Hwang, and I am a Computer Science
                        student at Harvard University and a Full-Stack
                        developer.
                    </Text>
                </Container>
                <Button width="180px" marginTop="5%" as="a" href="#AboutMe">
                    Learn More ⬇
                </Button>
            </Flex>
        </Box>
    );
}

export default Section1;
