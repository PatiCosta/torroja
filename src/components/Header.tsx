import { Flex, Image } from "@chakra-ui/react";
import { Button } from "./Button";
import { MoveRight } from "lucide-react";
import { PageButton } from "./PageButton";
import { SocialButtons } from "./SocialButtons";

export function Header() {
    return (
        <>
            <Flex
                w='100%'
                alignItems="center"
                justifyContent="space-between"
                mx={{ base: 10, lg: 32 }}
                pt={12}
                px={{ base: 8, lg: 32 }}
            >
                <Image
                    src="/assets/img/logo-inv.png"
                    alt="logo"
                    h={{ base: 20, lg: 36 }}
                />
                <Flex
                    alignItems={{ base: "end", lg: "center" }}
                    direction={{ base: "column", lg: "row" }}
                    gap={{ base: 2, lg: 10 }}
                >
                    <PageButton path="/" text="Home" />
                    <PageButton path="/sobre" text="Sobre nós" />
                </Flex>
                <Flex
                    alignItems="center"
                    gap={10}
                    display={{ base: "none", lg: "flex" }}
                >
                    <SocialButtons />
                    <Button
                        variant="fill"
                        text="Faça seu orçamento"
                        icon={MoveRight}
                    />
                </Flex>
            </Flex>
        </>
    );
}
