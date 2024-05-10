import { Box, Button, Container, Flex, Heading, Image, Link, Text, VStack } from "@chakra-ui/react";
import { FaRocket } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Flex direction="column" align="center" justify="center" minHeight="100vh" bg="gray.800" color="white">
        <VStack spacing={8} textAlign="center" px={6}>
          <Image src="https://images.unsplash.com/photo-1503455637927-730bce8583c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMHRlY2glMjBiYWNrZ3JvdW5kfGVufDB8fHx8MTcxNTMxMzgwM3ww&ixlib=rb-4.0.3&q=80&w=1080" boxSize="150px" borderRadius="full" alt="Vela Logo" />
          <Heading as="h1" size="2xl" fontWeight="bold">
            Welcome to Vela
          </Heading>
          <Text fontSize="xl" maxW="lg">
            Explore the decentralized trading protocol of the future. Swap, earn, and build on the leading decentralized crypto trading protocol.
          </Text>
          <Button rightIcon={<FaRocket />} colorScheme="purple" size="lg">
            Launch App
          </Button>
        </VStack>
      </Flex>
      <Box bg="white" color="gray.800" py={10}>
        <Flex justify="space-around" wrap="wrap" maxW="container.md" mx="auto" px={6}>
          <Box p={5} textAlign="center">
            <Heading as="h3" size="lg">
              Trade
            </Heading>
            <Text mt={3}>Swap tokens with ease and security on our decentralized platform.</Text>
          </Box>
          <Box p={5} textAlign="center">
            <Heading as="h3" size="lg">
              Earn
            </Heading>
            <Text mt={3}>Earn fees by providing liquidity in our various pools.</Text>
          </Box>
          <Box p={5} textAlign="center">
            <Heading as="h3" size="lg">
              Build
            </Heading>
            <Text mt={3}>Access our open-source smart contracts and SDKs to build on Vela.</Text>
          </Box>
        </Flex>
      </Box>
      <Flex bg="gray.700" color="white" p={10} align="center" justify="center">
        <VStack spacing={4}>
          <Heading as="h2" size="xl">
            Join the Community
          </Heading>
          <Text>Stay up to date and contribute to the Vela protocol.</Text>
          <Link href="https://github.com/vela" isExternal color="purple.300">
            Vela on GitHub
          </Link>
        </VStack>
      </Flex>
    </Container>
  );
};

export default Index;
