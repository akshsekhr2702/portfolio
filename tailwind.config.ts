import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      
    
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        fade: {
          '0%': { color: 'transparent', textShadow: '0 0 10px rgba(255, 255, 255, 0.5)', opacity: '1' },
          '10%': { color: 'white', textShadow: '0 0 10px rgba(255, 255, 255, 1)', opacity: '0.75' },
          '20%': { color: 'transparent', textShadow: '0 0 10px rgba(255, 255, 255, 1)', opacity: '0.50' },
          '30%': { color: 'white', textShadow: '0 0 10px rgba(255, 255, 255, 0.5)', opacity: '0.25' },
          '40%': { color: 'transparent', textShadow: '0 0 10px rgba(255, 255, 255, 0.5)', opacity: '0' },
          '50%': { color: 'white', textShadow: '0 0 10px rgba(255, 255, 255, 0.5)', opacity: '0.25' },
          '60%': { color: 'transparent', textShadow: '0 0 10px rgba(255, 255, 255, 0.5)', opacity: '0.5' },
          '70%': { color: 'white', textShadow: '0 0 10px rgba(255, 255, 255, 0.5)', opacity: '0.75' },
          '80%': { color: 'transparent', textShadow: '0 0 10px rgba(255, 255, 255, 0)', opacity: '1' },
          '90%': { color: 'white', textShadow: '0 0 10px rgba(255, 255, 255, 0)', opacity: '0.75' },
          '100%': { color: 'transparent', textShadow: '0 0 10px rgba(255, 255, 255, 0)', opacity: '0.5' },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        'text-space-in-out': {
          '0%, 100%': { letterSpacing: 'normal' },
          '50%': { letterSpacing: '0.1em' },
        },
        
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        'scale-up-down': 'scale-up-down 2s ease-in-out infinite',
      
          'text-space-in-out': 'text-space-in-out 4s ease-in-out infinite',
          fade: ' 20s ease-out infinite fade',
       
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config