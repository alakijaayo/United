import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  appBar: {
    top: 'auto',
    bottom: 0,
  },
  username: {
    fontWeight: 'bold'
  },
  question: {
    marginLeft: theme.spacing(23),
    fontWeight: 'bold'
  },
  score: {
    marginLeft : theme.spacing(47),
    fontWeight: 'bold' 
  } 
}),
{ name: 'Footer' })