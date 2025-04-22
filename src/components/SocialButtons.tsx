import { instagramLink, mailLink, whatsappLink } from "@/utils";
import { Flex, Icon, Link } from "@chakra-ui/react";
import { Envelope, InstagramLogo, WhatsappLogo } from "phosphor-react";

export function SocialButtons() {
    return (
        <Flex alignItems="center" gap={{ base: 3, lg: 5 }}>
            <Link href={mailLink()}>
                <Icon
                    as={Envelope}
                    weight="duotone"
                    h={{ base: 6, lg: 7 }}
                    w={{ base: 6, lg: 7 }}
                    cursor="pointer"
                    color="#23ABE3"
                    _hover={{ bgColor: "#23ABE3", transition: '600ms', borderRadius: '8', color: 'light' }}
                    transition="color 0.2s ease"
                />
            </Link>
            <Link href={instagramLink()}>
                <Icon
                    as={InstagramLogo}
                    weight="duotone"
                    h={{ base: 6, lg: 7 }}
                    w={{ base: 6, lg: 7 }}
                    cursor="pointer"
                    color="#EE2A7B"
                    _hover={{ bgColor: "#EE2A7B", transition: '600ms', borderRadius: '8', color: 'light' }}
                    transition="color 0.2s ease"
                />
            </Link>
            <Link href={whatsappLink()}>
                <Icon
                    as={WhatsappLogo}
                    weight="duotone"
                    h={{ base: 6, lg: 7 }}
                    w={{ base: 6, lg: 7 }}
                    cursor="pointer"
                    color="#25D366"
                    _hover={{ bgColor: "#25D366", transition: '600ms', borderRadius: '8', color: 'light' }}
                    transition="color 0.2s ease"
                />
            </Link>
        </Flex>
    );
}
