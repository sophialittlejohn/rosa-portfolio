module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'false'
  theme: {
    extend: {
      backgroundColor: {
        primaryA: "var(--color-lightGray)",
        primaryB: "var(--color-blackish)",
      },
      textColor: {
        primaryA: "var(--color-lightGray)",
        primaryB: "var(--color-blackish)",
      },
      height: {
        fullscreen: "75vh"
      },
      width: {
        xxxl: "800px"
      },
      typography: {
        DEFAULT: {
          css: {
            p: {
              color: "initial"
            }
          }
        },
        sm: {
          css: {
            p: {
              fontWeight: "normal",
              fontSize: "20px",
              lineHeight: "24px",
              letterSpacing: "0.08em",
            },
            h1: {
              marginBottom: "0px",
              backgroundColor: "pink"
            }
          },
        },
        lg: {
          css: {
            p: {
              fontWeight: "normal",
              fontSize: "20px",
              lineHeight: "24px",
              letterSpacing: "0.08em",
            },
            h1: {
              marginBottom: "1rem",
            }
          }
        },

        dark: {
          css: {
            DEFAULT: {
              textColor: "#FFFFFF",
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
