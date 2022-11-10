import {
  Flex,
  Container,
  Heading,
  Stack,
  Text,
  Button,
  Image,
  Box,
} from "@chakra-ui/react";

import lockedImage from "@assets/locked.png";
import { forwardRef } from "react";

const Hero = forwardRef((props, ref) => {
  return (
    <Container maxW={"5xl"} ref={ref}>
      <Stack
        textAlign={"center"}
        align={"center"}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
      >
        <Heading
          fontWeight={600}
          fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }}
          lineHeight={"110%"}
        >
          당신의{" "}
          <Text as={"span"} color={"purple.400"}>
            비
          </Text>
          밀을&nbsp;
          <Text as={"span"} color={"purple.400"}>
            담
          </Text>
          아주세요
        </Heading>
        <Text maxW={"2xl"} lineHeight={"180%"}>
          당신의 비밀을 영원히 안전하게 보관해 주는 서비스 비담입니다.
          <br />
          블록체인 기술을 활용해 당신의 비밀을 어느 누구도 확인할 수 없습니다.
          <br />
          또한 당신의 비밀을 어느 누구도 삭제할 수 없습니다.
          <br />
          오로지 당신만 확인할 수 있고 간직할 수 있습니다.
        </Text>
        <Stack spacing={6} direction={"row"}>
          <Button
            rounded={"full"}
            px={6}
            bg={"purple.400"}
            _hover={{ bg: "purple.600" }}
          >
            비담 시작하기
          </Button>
          <Button rounded={"full"} bg={"gray.600"} px={6}>
            비담 알아보기
          </Button>
        </Stack>
        <Flex w={"full"} align={"center"} justify={"center"} pos={"relative"}>
          <Image src={lockedImage} height={"80px"}></Image>
          <Box
            w={"90px"}
            h={"90px"}
            bgGradient="linear(to-r, #F213A4, #040BBF)"
            pos={"absolute"}
            opacity={0.5}
            rounded="10px"
          />
        </Flex>
      </Stack>
    </Container>
  );
});

export default Hero;
