module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'false'
  theme: {
    extend: {
      backgroundColor: {
        primaryA: "var(--color-lightGray)",
        primaryB: "var(--color-blackish)",
        colorAccent: "var(--color-accent)"
      },
      textColor: {
        primaryA: "var(--color-lightGray)",
        primaryB: "var(--color-blackish)",
        colorAccent: "var(--color-accent)"
      },
      height: {
        fullscreen: "75vh" // not 100 to make next element visible in viewport
      },
      width: {
        xxxl: "800px"
      },
      typography: {
        DEFAULT: {
          css: {
            p: {
              textColor: "#3E3025",
            },
            h2: {
              fontSize: "24px",
              fontWeight: "400",
              lineHeight: "36px",
              marginBottom: "8px",
              color: "var(--color-accent)",
            },
            h3: {
              fontSize: "24px",
              fontWeight: "300",
              lineHeight: "36px",
              marginBottom: "20px",
            },
            thead: {
              borderColor: "transparent"
            },
            tr: {
              borderWidth: "0 !important",
            },
            td: {
              py: 0
            }
          }
        },
        sm: {
          css: {
            p: {
              fontWeight: "normal",
              fontSize: "20px",
              lineHeight: "32px",
              letterSpacing: "0.08em",
            },
            h1: {
              marginBottom: "0px",
            },
            tr: {
              fontWeight: "normal",
              fontSize: "20px",
              lineHeight: "32px",
              letterSpacing: "0.08em",
              borderWidth: "0",
            },
            td: {
              py: 0
            }
          },
        },
        lg: {
          css: {
            p: {
              fontWeight: "normal",
              fontSize: "20px",
              lineHeight: "32px",
              letterSpacing: "0.08em",
            },
            h1: {
              marginBottom: "1rem",
            },
            tr: {
              fontWeight: "normal",
              fontSize: "20px",
              lineHeight: "32px",
              letterSpacing: "0.08em",
              borderWidth: "0",
            },
            td: {
              py: 0
            }
          }
        },

        dark: {
          css: {
            DEFAULT: {
              textColor: "var(--color-primaryB)",
            },
            sm: {
              textColor: "var(--color-primaryB)",
            },
            md: {
              textColor: "var(--color-primaryB)",
            },
            lg: {
              textColor: "var(--color-primaryB)",
            }
          }
        }
      }
    },
    fontFamily: {
      body: ['Lato', 'Helvetica', 'Arial', 'sans-serif'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
