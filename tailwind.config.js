/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		maxWidth: {
  			page: '1500px'
  		},
  		fontFamily: {
  			headline: [
  				'TanHeadline',
  				'system-ui',
  				'sans-serif'
  			],
  			bogart: [
  				'Bogart',
  				'system-ui',
  				'sans-serif'
  			]
  		},
		colors: {
			brand: {
				DEFAULT: '#e1a8f0',
				light: '#edc4f5',
				dark: '#c47de0',
				50: '#fdf8fe',
				100: '#f9f0fc',
				200: '#f3e1f9',
				300: '#e9c8f4',
				400: '#e1a8f0',
				500: '#d17de6',
				600: '#ba54d9',
				700: '#9c3bb8',
				800: '#7d3093',
				900: '#5e2570',
			},
  			surface: {
  				DEFAULT: '#0a0a0b',
  				50: '#18181b',
  				100: '#1f1f23',
  				200: '#27272a',
  				300: '#2e2e32',
  				400: '#3f3f46',
  				500: '#52525b',
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		fontSize: {
  			caption: '0.75rem',
  			'body-compact': '0.875rem',
  			body: '1rem',
  			'heading-compact': '1.25rem',
  			heading: '1.5rem',
  			title: '2rem',
  			display: '3rem'
  		},
  		spacing: {
  			'spacing-01': '0.125rem',
  			'spacing-02': '0.25rem',
  			'spacing-03': '0.5rem',
  			'spacing-04': '0.75rem',
  			'spacing-05': '1rem',
  			'spacing-06': '1.5rem',
  			'spacing-07': '2rem',
  			'spacing-08': '2.5rem',
  			'spacing-09': '3rem'
  		},
  		borderRadius: {
  			glass: '1rem',
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		animation: {
  			float: 'float 5s ease-in-out infinite',
  			'pulse-slow': 'pulse-slow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
  			'delay-200': 'fadeIn 0.7s ease forwards 0.2s',
  			'delay-400': 'fadeIn 0.7s ease forwards 0.4s',
  			'delay-600': 'fadeIn 0.7s ease forwards 0.6s',
  			'delay-800': 'fadeIn 0.7s ease forwards 0.8s',
  			'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
  		},
  		keyframes: {
  			float: {
  				'0%, 100%': {
  					transform: 'translateY(0)'
  				},
  				'50%': {
  					transform: 'translateY(-10px)'
  				}
  			},
  			'pulse-slow': {
  				'0%, 100%': {
  					opacity: '1'
  				},
  				'50%': {
  					opacity: '0.7'
  				}
  			},
  			'glow-pulse': {
  				'0%, 100%': {
  					opacity: '0.4'
  				},
  				'50%': {
  					opacity: '0.7'
  				}
  			}
  		},
  		backdropBlur: {
  			glass: '12px',
  			'glass-light': '8px',
  		},
  		transitionProperty: {
  			'all-transform': 'all, transform'
  		}
  	}
  },
  plugins: [
    require("tailwindcss-animate"),
    function ({ addComponents, addUtilities }) {
      // OPTIMIZED: Glass panels without backdrop-blur for better performance
      // Using solid semi-transparent backgrounds instead
      addComponents({
        // Primary glass panel - solid background, no blur
        ".glass-panel": {
          background: "rgba(15, 15, 18, 0.85)",
        },
        // Glass panel with gradient
        ".glass-panel-light": {
          background: "linear-gradient(180deg, rgba(20, 20, 24, 0.9) 0%, rgba(15, 15, 18, 0.95) 100%)",
        },
        // Brand-tinted glass panel
        ".glass-panel-brand": {
          background: "rgba(20, 15, 22, 0.9)",
        },
        // Subtle inner stroke (inset only)
        ".glass-inner-stroke": {
          boxShadow: "inset 0 0 0 1px rgba(255, 255, 255, 0.04)",
        },
        // Light inner stroke for emphasis
        ".glass-inner-stroke-light": {
          boxShadow: "inset 0 0 0 1px rgba(255, 255, 255, 0.06)",
        },
        // Brand inner stroke
        ".glass-inner-stroke-brand": {
          boxShadow: "inset 0 0 0 1px rgba(225, 168, 240, 0.08)",
        },
        // Button glass base - solid background
        ".glass-button": {
          background: "rgba(255, 255, 255, 0.06)",
        },
        // Button glass brand - solid
        ".glass-button-brand": {
          background: "rgba(225, 168, 240, 0.85)",
        },
      });
      
      // Utility classes for atmospheric effects
      addUtilities({
        // Subtle inner glow for hover states
        ".glow-inner": {
          boxShadow: "inset 0 1px 20px rgba(255, 255, 255, 0.03)",
        },
        // Brand inner glow
        ".glow-inner-brand": {
          boxShadow: "inset 0 1px 24px rgba(225, 168, 240, 0.06)",
        },
        // Atmospheric section separator
        ".section-fade": {
          background: "linear-gradient(180deg, transparent 0%, rgba(255, 255, 255, 0.01) 50%, transparent 100%)",
        },
      });
    },
  ],
};
