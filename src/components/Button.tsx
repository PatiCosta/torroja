import {
    Button as ChakraButton,
    ButtonProps as ChakraButtonProps,
    Icon,
    // keyframes,
} from "@chakra-ui/react";
import { Subtitle } from "./Subtitle";
import { ForwardRefExoticComponent, RefAttributes, useState } from "react";
import { LucideProps } from "lucide-react";

interface ButtonProps extends ChakraButtonProps {
    text: string;
    icon: ForwardRefExoticComponent<
        Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
    >;
    variant: "outline" | "fill";
}

// const bounce = keyframes`
//     0%, 20%, 50%, 80%, 100% {transform: translateX(0);}
// 	40% {transform: translateX(-10px);}
// 	60% {transform: translateX(-5px);}
// `;

export function Button({ text, icon, variant, ...rest }: ButtonProps) {
    const [isHovered, setIsHovered] = useState(false);
    // const bounceAnimation = `${bounce} 2s ease infinite`;

    return (
        <ChakraButton
            bgColor={variant === "outline" ? "transparent" : "red"}
            border="1px solid"
            borderColor={variant === "fill" ? "transparent" : "red"}
            borderRadius="full"
            display="flex"
            alignItems="center"
            justifyContent={{ base: "space-between", lg: "center" }}
            gap={8}
            py={2}
            px={4}
            color={variant === "outline" ? "red" : "light"}
            transition="all 0.5s ease"
            _hover={{
                bgColor: "red",
                color: "light",
                pr:8
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            {...rest}
        >
            <Subtitle variant="lg">{text}</Subtitle>
            <Icon
                as={icon}
                boxSize={4}
                // animation={isHovered ? bounceAnimation : "none"}
            />
        </ChakraButton>
    );
}
