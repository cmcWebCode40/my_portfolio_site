const theme = {
  colors: {
    primary: '#229cff',
    gray: '#ccc',
    danger: 'red',
    bodyDark: '#7a92d6',
    light: '#ddd',
    textColor: '#333',
    whiteColor: '#fff',
  },
  styles: {
    borderRadius: '.5rem',
    borderRadiusRounded: '2.5rem',
    boxShadow: `0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048),
    0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072),
    0 41.8px 33.4px rgba(0, 0, 0, 0.086),
    0 100px 80px rgba(0, 0, 0, 0.12)`
  },
  mediaQueries: {
    smallest: '(max-width :25em)',
    iphone4: '(max-width :320px)',
    small: '(max-width :37.5em)',
    medium: '(max-width :768px)',
    large: '(max-width :1024px)',
    largest: '(max-width :1144px)',
    desktop: '(min-width :1105px)'
  }
};

export default theme;
