import { makeStyles } from '@material-ui/core/styles';


export default makeStyles((theme) => ({
  root: {
    width: '100%'
  },
  answersTop: {
    minHeight: '70px',
    minWidth: '400px',
    fontWeight: 'bold',
    marginTop: theme.spacing(10),
    marginLeft: theme.spacing(25),
    position: 'fixed',
    fontSize: '20px',
    '&:hover': {
        backgroundColor: '#000000'
    }
  },
  answersBottom: {
    minHeight: '70px',
    minWidth: '400px',
    fontWeight: 'bold',
    position: 'fixed',
    marginTop: theme.spacing(30),
    marginLeft: theme.spacing(25),
    fontSize: '20px',
    '&:hover': {
        backgroundColor: '#000000'
    }
  },
  text: {
    fontWeight: 'bold'
  }
}),
{name: 'QuestionsPage'})