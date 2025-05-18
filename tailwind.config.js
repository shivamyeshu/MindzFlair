module.exports = {
  darkMode: 'class', // already good
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
        animation: {
    'bounce-fold': 'bounceFold 1.2s ease-out forwards',
    'ripple': 'ripple 0.6s ease-out forwards',
  },
  keyframes: {
    bounceFold: {
      '0%': { opacity: 0, transform: 'translateY(0) scaleY(1)' },
      '40%': { opacity: 1, transform: 'translateY(40px) scaleY(0.8)' }, // fall and squash
      '60%': { transform: 'translateY(-20px) scaleY(1.1)' }, // bounce up
      '80%': { transform: 'translateY(10px) scaleY(0.9)' }, // small drop down
      '100%': { transform: 'translateY(0) scaleY(1)' }, // rest position
    },
    ripple: {
      '0%': {
        transform: 'scale(1)',
        opacity: 0.6,
        filter: 'blur(2px)',
      },
      '50%': {
        transform: 'scale(1.3)',
        opacity: 0.2,
      },
      '100%': {
        transform: 'scale(1)',
        opacity: 1,
        filter: 'blur(0px)',
      },
    },
  },
    },
  },
  plugins: [],
}

// extend: {

// },

