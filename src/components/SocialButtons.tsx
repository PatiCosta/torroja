import { Flex, Icon } from "@chakra-ui/react";
import { Envelope, InstagramLogo, WhatsappLogo } from "phosphor-react";

export function SocialButtons() {
    return (
        <Flex alignItems="center" gap={{ base: 3, lg: 5 }}>
            <Icon
                as={Envelope}
                weight="duotone"
                color="light"
                h={{ base: 6, lg: 7 }}
                w={{ base: 6, lg: 7 }}
                cursor="pointer"
                _hover={{ color: "#23ABE3" }}
                transition="color 0.2s ease"
            />
            <Icon
                as={InstagramLogo}
                weight="duotone"
                color="light"
                h={{ base: 6, lg: 7 }}
                w={{ base: 6, lg: 7 }}
                cursor="pointer"
                _hover={{ color: "#EE2A7B" }}
                transition="color 0.2s ease"
            />
            <Icon
                as={WhatsappLogo}
                weight="duotone"
                color="light"
                h={{ base: 6, lg: 7 }}
                w={{ base: 6, lg: 7 }}
                cursor="pointer"
                _hover={{ color: "#25D366" }}
                transition="color 0.2s ease"
            />
        </Flex>
    );
}
