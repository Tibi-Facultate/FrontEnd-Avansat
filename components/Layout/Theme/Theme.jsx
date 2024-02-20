import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
    semanticTokens: {
        colors: {
            error: 'red.500',
            success: 'green.500',
            main: {
                50: {
                    default: "#fffff0",
                    _dark: "#fffff0",
                },
                100: {
                    default: "#fefcbf",
                    _dark: "#fefcbf",
                },
                200: {
                    default: "#faf089",
                    _dark: "#ED8936",
                },
                300: {
                    default: "#f6e05e",
                    _dark: "#C05621",
                },
                400: {
                    default: "#ecc94b",
                    _dark: "#ecc94b",
                },
                500: {
                    default: "#d69e2e",
                    _dark: "#48BB78",
                },
                600: {
                    default: "#b7791f",
                    _dark: "#b7791f",
                },
                700: {
                    default: "#975a16",
                    _dark: "#975a16",
                },
                800: {
                    default: "#744210",
                    _dark: "#744210",
                },
                900: {
                    default: "#5F370E",
                    _dark: "#5F370E",
                },
            },
            secondary: {
                background: {
                    default: "#FBF7EF",
                    _dark: "#1A202C",
                },
                link: {
                    default: "#4A5568",
                    _dark: "#FBF7EF",
            },
                card: {
                    default: "#ffffff",
                    _dark: "#3182CE",
                },
                inputHelper: {
                    default: "#CBD5E0",
                    _dark: "#CBD5E0",
                }
            },
            navItem: {
                50: {
                    default: "#F7FAFC",
                    _dark: "#F7FAFC",
                },
                100: {
                    default: "#EDF2F7",
                    _dark: "#EDF2F7",
                },
                400: {
                    default: "#A0AEC0",
                    _dark: "#A0AEC0",
                },
                500: {
                    default: "#FBF7EF",
                    _dark: "#FBF7EF",
                },
                600: {
                    default: "#FBF7EF",
                    _dark: "#4A5568",
                },
                700: {
                    default: "#D69E2E",
                    _dark: "#2D3748",
                }
            },
            card: {
                100:{
                    default: "gray.500",
                    _dark: "#1a202c",
                },
                200:{
                    default:"#718096",
                    _dark:"#F7FAFC",
                },
                300:{
                    default:"#B7791F",
                    _dark:"#27303f",
                },
            },
        },
    },
})

export default theme;