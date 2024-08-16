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
        red: "#ef4444",
        eerie: "#202222",
        silver: "#b1b1ae",
        light: "#fefefe",
    },
    radii: {
        sm: "4px",
        full: "9999px",
    },
    styles: {
        global: {
            "html, body": {
                bgColor: "eerie",
                fontWeight: "500",
                color: "light",
                scrollBehavior: "smooth",
            },
        },
    },
    shadows: {
        default: "15px 15px 50px 0 rgba(0, 0, 0, 0.20)",
        light: "10px 10px 50px 0 rgba(254, 254, 254, 0.15)",
    },
});
