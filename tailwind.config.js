module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            screens: {
                "xs": "400px",
                "sm": "520px",
                "md": "850px",
                "lg": "1280px",
                "xl": "1450px",
            },
            colors: {
                brand: {
                    DEFAULT: "#001461",
                    light: "#2a4bff",
                    dark: "#011050",
                },
                background: "var(--background)",
                foreground: "var(--foreground)",
            },
        },
    },
    plugins: [],
}