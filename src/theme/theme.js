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
    boxShadow: ` 0 1px 1px rgba(0, 0, 0, 0.11), 0 2px 2px rgba(0, 0, 0, 0.11),
    0 4px 4px rgba(0, 0, 0, 0.11), 0 6px 8px rgba(0, 0, 0, 0.11),
    0 8px 16px rgba(0, 0, 0, 0.11)`
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
