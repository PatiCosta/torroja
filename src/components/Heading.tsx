import {
    Text as ChakraText,
    TextProps as ChakraTextProps,
} from "@chakra-ui/react";
import { ReactNode } from "react";

interface HeadingProps extends ChakraTextProps {
    children: ReactNode;
    variant: "lg" | "md" | "sm" | "xs";
}

export function Heading({ children, variant, ...rest }: HeadingProps) {
    const fontSizes = {
        lg: "2.5rem",
        md: "1.5rem",
        sm: "1.125rem",
        xs: "0.875rem",
    };

    const weights = {
        lg: 600,
        md: 700,
        sm: 700,
        xs: 700,
    };

    return (
        <ChakraText
            fontWeight={weights[variant]}
            fontSize={fontSizes[variant]}
            lineHeight={`calc(1.25*${fontSizes[variant]})`}
            {...rest}
        >
            {children}
        </ChakraText>
    );
}
