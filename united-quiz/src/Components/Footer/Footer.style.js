import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    width: '100%',
    flexGrow: 1
  },
  appBar: {
    top: 'auto',
    bottom: 0,
    width: '100%'
  },
  text: {
    fontWeight: 'bold',
    padding: theme.spacing(1),
  }
}),
{ name: 'Footer' })