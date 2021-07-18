import createPalette from '@material-ui/core/styles/createPalette';
import createTheme from '@material-ui/core/styles/createTheme';

const palette =  createPalette({
  primary: {
    main: '#f00'
  },
  secondary: {
    main: '#FFFFFF'
  }
});

export default createTheme({
  palette,
})
