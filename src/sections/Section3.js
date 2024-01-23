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
    SimpleGrid,
    Card,
    CardBody,
    CardHeader,
} from "@chakra-ui/react";
import webPNG from "../images/htmljscss.png";
import reactPNG from "../images/react.png";
import flutterPNG from "../images/flutter.png";
import pythonPNG from "../images/python.png";
import mysqlPNG from "../images/mysql.png";
import firebasePNG from "../images/firebase.png";
import nodePNG from "../images/node.png";
import awsPNG from "../images/AWS.png";
import netlifyPNG from "../images/netlify.png";
import dockerPNG from "../images/docker.png";

function Section3() {
    const paddingImg = "15px";
    return (
        <Box width="100%" height="100%" backgroundColor="Gold">
            <Flex direction="column" paddingTop="20px">
                <Text fontSize="45px" fontWeight="bold">
                    SKILLS
                </Text>
                <SimpleGrid
                    width="80%"
                    alignSelf="center"
                    columns="3"
                    spacing="40px"
                    marginTop="2%"
                >
                    <Card alignItems="center" height="450px">
                        <CardHeader>
                            <Text fontSize="3xl">Frontend</Text>
                        </CardHeader>
                        <CardBody>
                            <Center>
                                <Image height="100px" src={webPNG} />
                            </Center>
                            <Center>
                                <Image
                                    height="100px"
                                    src={reactPNG}
                                    paddingTop={paddingImg}
                                />
                            </Center>
                            <Image
                                height="100px"
                                src={flutterPNG}
                                paddingTop={paddingImg}
                            />
                        </CardBody>
                    </Card>
                    <Card alignItems="center" height="480px">
                        <CardHeader>
                            <Text fontSize="3xl">Backend</Text>
                        </CardHeader>
                        <CardBody>
                            <Center>
                                <Image height="80px" src={pythonPNG} />
                            </Center>
                            <Center>
                                <Image
                                    height="100px"
                                    src={nodePNG}
                                    paddingTop={paddingImg}
                                />
                            </Center>
                            <Image
                                height="80px"
                                src={mysqlPNG}
                                paddingTop={paddingImg}
                            />
                            <Image
                                height="100px"
                                src={firebasePNG}
                                paddingTop={paddingImg}
                            />
                        </CardBody>
                    </Card>
                    <Card alignItems="center" height="420px">
                        <CardHeader>
                            <Text fontSize="3xl">Deployment</Text>
                        </CardHeader>
                        <CardBody>
                            <Center>
                                <Image height="80px" src={awsPNG} />
                            </Center>
                            <Center>
                                <Image
                                    height="110px"
                                    src={netlifyPNG}
                                    paddingTop={paddingImg}
                                />
                            </Center>
                            <Image
                                height="80px"
                                src={dockerPNG}
                                paddingTop={paddingImg}
                            />
                        </CardBody>
                    </Card>
                </SimpleGrid>
            </Flex>
        </Box>
    );
}

export default Section3;
