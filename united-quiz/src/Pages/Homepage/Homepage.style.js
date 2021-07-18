import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
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
    marginLeft: theme.spacing(20),
    fontWeight: 'bold',
    fontSize: '20px'
  }
}),
{ name: 'Homepage' })