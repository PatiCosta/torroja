/* theme.ts */
import {
    extendBaseTheme,
    theme as chakraTheme,
    IconButton,
} from "@chakra-ui/react";

const { Button, Accordion } = chakraTheme.components;

export const theme = extendBaseTheme({
    fonts: {
        heading: "var(--font-lora)",
        body: "var(--font-lora)",
    },
    components: {
        Button,
        Accordion,
        IconButton,
    },
    colors: {
        red: "#08699e",
        eerie: "#202222",
        silver: "#b1b1ae",
        light: "#fefefe",
        grayly: "#d9dade",
    },
    radii: {
        sm: "4px",
        full: "9999px",
    },
    styles: {
        global: {
            "html, body": {
                bgColor: '#d9dade',
                fontWeight: "500",
                color: "eerie",
                scrollBehavior: "smooth",
            },
        },
    },
    shadows: {
        default: "15px 15px 50px 0 rgba(0, 0, 0, 0.20)",
        light: "10px 10px 50px 0 rgba(254, 254, 254, 0.15)",
    },
});
