
tailwind.config = {
    darkMode: "class",
    theme: {
        extend: {
            "colors": {
                "on-primary": "#30009b",
                "tertiary": "#c8c6c5",
                "inverse-primary": "#5f3de2",
                "tertiary-fixed": "#e5e2e1",
                "primary-fixed": "#e6deff",
                "secondary": "#ccbeff",
                "on-background": "#e2e2e2",
                "on-primary-fixed": "#1b0063",
                "on-tertiary-fixed": "#1c1b1b",
                "on-tertiary-container": "#c6c4c3",
                "on-error-container": "#ffdad6",
                "background": "#131313",
                "on-primary-container": "#c7bcff",
                "surface-dim": "#131313",
                "on-secondary-container": "#bba9ff",
                "surface-variant": "#353535",
                "on-surface": "#e2e2e2",
                "error-container": "#93000a",
                "on-secondary-fixed": "#1e0060",
                "on-error": "#690005",
                "surface-tint": "#c9beff",
                "inverse-surface": "#e2e2e2",
                "error": "#ffb4ab",
                "on-tertiary": "#313030",
                "surface-container": "#1f1f1f",
                "secondary-fixed": "#e7deff",
                "surface-bright": "#393939",
                "primary-fixed-dim": "#c9beff",
                "tertiary-container": "#525151",
                "primary-container": "#512bd4",
                "outline": "#938ea1",
                "on-primary-fixed-variant": "#4618ca",
                "on-secondary": "#350097",
                "on-secondary-fixed-variant": "#4c15c8",
                "surface-container-highest": "#353535",
                "inverse-on-surface": "#303030",
                "outline-variant": "#484555",
                "surface": "#131313",
                "surface-container-lowest": "#0e0e0e",
                "tertiary-fixed-dim": "#c8c6c5",
                "on-surface-variant": "#c9c4d8",
                "secondary-container": "#4c15c8",
                "surface-container-high": "#2a2a2a",
                "on-tertiary-fixed-variant": "#474646",
                "primary": "#c9beff",
                "secondary-fixed-dim": "#ccbeff",
                "surface-container-low": "#1b1b1b"
            },
            "borderRadius": {
                "DEFAULT": "0.125rem",
                "lg": "0.25rem",
                "xl": "0.5rem",
                "full": "0.75rem"
            },
            "spacing": {
                "stack-sm": "8px",
                "unit": "4px",
                "gutter": "24px",
                "section-gap": "120px",
                "container-max": "1200px",
                "stack-md": "16px",
                "margin-mobile": "20px",
                "stack-lg": "32px"
            },
            "fontFamily": {
                "label-md": ["JetBrains Mono", "monospace"],
                "body-md": ["Inter", "sans-serif"],
                "code-sm": ["JetBrains Mono", "monospace"],
                "display": ["Inter", "sans-serif"],
                "headline-md": ["Inter", "sans-serif"],
                "headline-lg-mobile": ["Inter", "sans-serif"],
                "headline-lg": ["Inter", "sans-serif"],
                "body-lg": ["Inter", "sans-serif"]
            },
            "fontSize": {
                "label-md": ["14px", { "lineHeight": "1.4", "fontWeight": "500" }],
                "body-md": ["16px", { "lineHeight": "1.6", "fontWeight": "400" }],
                "code-sm": ["13px", { "lineHeight": "1.5", "fontWeight": "400" }],
                "display": ["64px", { "lineHeight": "1.1", "letterSpacing": "-0.02em", "fontWeight": "800" }],
                "headline-md": ["30px", { "lineHeight": "1.3", "fontWeight": "600" }],
                "headline-lg-mobile": ["32px", { "lineHeight": "1.2", "fontWeight": "700" }],
                "headline-lg": ["48px", { "lineHeight": "1.2", "letterSpacing": "-0.01em", "fontWeight": "700" }],
                "body-lg": ["18px", { "lineHeight": "1.6", "fontWeight": "400" }]
            }
        }
    }
}

let footerText = document.getElementById("footer-text");
const currentYear = new Date().getFullYear();
footerText.textContent = `© ${currentYear} Luiz Antônio Gonçalves. Built with HTML and Tailwind CSS.`;