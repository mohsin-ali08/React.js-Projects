module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      primary: ['Poppins', 'sans-serif'],
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '30px',
        lg: '0',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1440px',
    },
    extend: {
      colors: {
        primary: '#222222',
        secondary: '#F5E6E0',
      },
      backgroundImage: {
        hero: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0)), url('/src/img/Hero_section.jpg')", // Added gradient
      },
      navbarbackgroundImage: {
        navbar: "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0)), url('/src/img/Hero_section.jpg",
      },
      
      
    },
  },
  plugins: [],
};
