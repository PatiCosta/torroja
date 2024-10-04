import {
    Text as ChakraText,
    TextProps as ChakraTextProps,
} from "@chakra-ui/react";
import { ReactNode } from "react";

interface HighlightHeadingProps extends ChakraTextProps {
    children: ReactNode;
    variant: "lg" | "md" |"sm" | "2xs";
}

export function HighlightHeading({
    children,
    variant,
    ...rest
}: HighlightHeadingProps) {
    const fontSizes = {
        lg: "2.5rem",
        md: "2.25rem",
        sm: "1.5rem",
        "2xs": "1.125rem",
    };

    const weights = {
        lg: 400,
        md: 450,
        sm: 500,
        "2xs": 500,
    };

    return (
        <ChakraText
            fontWeight={weights[variant]}
            fontSize={fontSizes[variant]}
            lineHeight={`calc(1.25*${fontSizes[variant]})`}
            fontFamily="var(--font-bodoniModa)"
            {...rest}
        >
            {children}
        </ChakraText>
    );
}
