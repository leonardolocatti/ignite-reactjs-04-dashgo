import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Leonardo Locatti</Text>
        <Text color="gray.300" fontSize="small">
          leo@llocatti.com.br
        </Text>
      </Box>

      <Avatar size="md" name="Leonardo Locatti" src="https://github.com/leonardolocatti.png" />
    </Flex>
  )
}