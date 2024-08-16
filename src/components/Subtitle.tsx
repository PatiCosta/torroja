import {
    Text as ChakraText,
    TextProps as ChakraTextProps,
} from "@chakra-ui/react";
import { ReactNode } from "react";

interface SubtitleProps extends ChakraTextProps {
    children: ReactNode;
    variant: "xl" | "lg" | "md" | "sm";
}

export function Subtitle({ children, variant, ...rest }: SubtitleProps) {
    const fontSizes = {
        xl: "1.25rem",
        lg: "1rem",
        md: "0.875rem",
        sm: "0.75rem",
    };

    const weights = {
        xl: 500,
        lg: 600,
        md: 700,
        sm: 700,
    };

    return (
        <ChakraText
            fontWeight={weights[variant]}
            fontSize={fontSizes[variant]}
            lineHeight={`calc(1.6*${fontSizes[variant]})`}
            {...rest}
        >
            {children}
        </ChakraText>
    );
}
