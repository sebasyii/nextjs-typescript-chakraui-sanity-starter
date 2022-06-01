import {
  Box,
  ButtonGroup,
  Container,
  IconButton,
  Stack,
  Text,
} from "@chakra-ui/react";
import * as React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import Logo from "../shared/Logo";

const FooterWithSocialIcons = () => {
  return (
    <Box backgroundColor="gray.100">
      <Container as="footer" py={{ base: "12", md: "16" }} role="contentinfo">
        <Stack spacing={{ base: "4", md: "5" }}>
          <Stack align="center" justify="space-between" direction="row">
            <Logo />
            <ButtonGroup variant="ghost">
              <IconButton
                as="a"
                aria-label="LinkedIn"
                href="#"
                icon={<FaLinkedin fontSize="1.25rem" />}
              />
              <IconButton
                as="a"
                aria-label="GitHub"
                href="#"
                icon={<FaGithub fontSize="1.25rem" />}
              />
              <IconButton
                as="a"
                aria-label="Twitter"
                href="#"
                icon={<FaTwitter fontSize="1.25rem" />}
              />
            </ButtonGroup>
          </Stack>
          <Text color="subtle" fontSize="sm">
            &copy; {new Date().getFullYear()} Chakra UI Pro, Inc. All rights
            reserved.
          </Text>
        </Stack>
      </Container>
    </Box>
  );
};

export default FooterWithSocialIcons;
