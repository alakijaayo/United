import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    maxHeight: '100%'
  },
  text: {
    fontWeight: 'bold',
    margin: '20px'
  },
  inputName: {
    margin: '20px'
  },
  button: {
    padding: '15px',
    margin: '25px',
    minHeight: '60px',
    minWidth: '250px',
    fontWeight: 'bold',
    fontSize: '20px',
    '&:hover': {
      backgroundColor: '#000000'
    },
  }
}),
{ name: 'Homepage' })