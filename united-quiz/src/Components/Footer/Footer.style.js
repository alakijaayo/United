import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  appBar: {
    top: 'auto',
    bottom: 0,
  },
  question: {
    marginLeft: theme.spacing(23)
  },
  score: {
    marginLeft : theme.spacing(50) 
  } 
}),
{ name: 'Footer' })