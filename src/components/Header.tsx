import { Flex, Image } from "@chakra-ui/react";
import { Button } from "./Button";
import { MoveRight } from "lucide-react";
import { PageButton } from "./PageButton";
import { SocialButtons } from "./SocialButtons";

export function Header() {
    return (
        <>
            <Flex
                alignItems="center"
                justifyContent="space-between"
                mx={{ base: 10, lg: 32 }}
                pt={12}
            >
                <Image
                    src="/assets/img/logo.svg"
                    alt="logo"
                    h={{ base: 20, lg: "fit-content" }}
                />
                <Flex
                    alignItems={{ base: "end", lg: "center" }}
                    direction={{ base: "column", lg: "row" }}
                    gap={{ base: 2, lg: 10 }}
                >
                    <PageButton path="/" text="Home" />
                    <PageButton path="/projects" text="Projetos" />
                </Flex>
                <Flex
                    alignItems="center"
                    gap={10}
                    display={{ base: "none", lg: "flex" }}
                >
                    <SocialButtons />
                    <Button
                        variant="outline"
                        text="Faça seu orçamento"
                        icon={MoveRight}
                    />
                </Flex>
            </Flex>
        </>
    );
}
