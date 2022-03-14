import React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ImageIcon from '@mui/icons-material/Image';
// import WorkIcon from '@mui/icons-material/Work';
import { Avatar, ListItemAvatar } from '@mui/material';
// import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

import Icon from '@mui/material/Icon';

import RestoreIcon from '@mui/icons-material/Restore';
import ExploreIcon from '@mui/icons-material/Explore';
import AddIcon from '@mui/icons-material/Add';

import chats from './chats-data';
import messages from './messages-data';

// import { textAlign } from '@mui/system';
// const styles = theme => ({
//   root: {
//     position: 'relative',
//     display: 'flex',
//     width: '100%',
//     height: '100%',
//     backgroundColor: theme.palette.background.default,
//   },
//   appBar: {
//     
//   },
//   drawerPaper: {
//     
//   },
//   draweHeader: {
//     ...theme.mixins.toolbar,
//     paddingLeft: theme.spacing.unit * 3,
//     paddingRight: theme.spacing.unit * 3,
//   },
//   chatsList: {
//     height: 'calc(100% - 56px)',
//     overflowY: 'auto',
//   },
//   newChatButton: {
//     position: 'absolute',
//     left: 'auto',
//     right: theme.spacing.unit * 3,
//     bottom: theme.spacing.unit * 3 + 48, // + bottom navigation
//   },
//   chatLayout: {
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     paddingTop: '64px',
//     height: '100%',
//     overflow: 'hidden',
//   },
//   messagesWrapper: {
//     overflowX: 'scroll',
//     height: '100%',
//     width: '100%',
//     paddingTop: theme.spacing.unit * 3,
//     paddingBottom: '120px',
//   },
//   messageInputWrapper: {
//     position: 'fixed',
//     left: 'auto',
//     right: 0,
//     bottom: 0,
//     width: `calc(100% - 320px)`,
//     padding: theme.spacing.unit * 3,
//   },
//   messageInput: {
//     padding: theme.spacing.unit * 2,
//   },
//   messageWrapper: {
//     display: 'flex',
//     justifyContent: 'flex-start',
//     alignItems: 'center',
//     padding: `${theme.spacing.unit}px ${theme.spacing.unit * 3}px`,
//   },
//   messageWrappperFromMe: {
//     justifyContent: 'flex-end',
//   },
//   message: {
//     maxWidth: '70%',
//     minWidth: '10%',
//     padding: theme.spacing.unit,
//     marginLeft: theme.spacing.unit * 2,
//   },
//   messageFromMe: {
//     marginRight: theme.spacing.unit * 2,
//     backgroundColor: '#e6dcff'
//   },
// })

class App extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      // <div className={classes.root}>
      <div className="">

        {/* <AppBar color="primary" className={classes.appBar}> */}
        <AppBar color="primary"
          sx={{
            width: 'calc(100% - 320px)',
            position: 'fixed',
          }}
        >
          <Toolbar>
            <Typography variant="h6" noWrap component="div">
              CRA Chat
            </Typography>
          </Toolbar>
        </AppBar>

        <Drawer
          variant="permanent"
          sx={{
            position: 'relative',
            height: '100%',
            width: 320,
          }}
        // classes={{
        //   paper: classes.drawPaper,
        // }}
        >
          <Toolbar
            sx={{
              position: 'relative',
            }}
          >
            {/* <div className={classes.drawerHeader}> */}
            <div className="">
              <TextField fullWidth margin='normal' label="Поиск..." variant="standard" />
            </div>
          </Toolbar >
          <Divider />

          {/* <List className={classes.chatsList}> */}
          <List className="chatsList">

            {/* {chats.map((chat, index) => { */}
            <ListItem
              // key={index} 
              button>
              <ListItemAvatar>
                <Avatar>
                  <ImageIcon />

                </Avatar>
              </ListItemAvatar>
              <ListItemText
              // primary={chat.title} 
              />
            </ListItem>
            {/* })} */}
          </List>
          <Button
            variant="fab"
            color="primary"
          // className={classes.newChatButton}
          >
            <AddIcon />
          </Button>
          <BottomNavigation showLabels>
            <BottomNavigationAction label="Мои чаты" icon={<RestoreIcon />} />
            <BottomNavigationAction label="Explore" icon={<ExploreIcon />} />
          </BottomNavigation>
          <Box>
            <Icon>add_circle</Icon>
            <Icon color="primary">add_circle</Icon>
            <Icon fontSize="small">add_circle</Icon>
          </Box>
        </Drawer>

        {/* <main className={classes.chatLayout}> */}
        <main >
          {/* <div className={classes.messagesWrapper}> */}
          <div >
            {/* {messages && messages.map((message, index) => { */}
            {/* const isMessageFromMe = message.sender === 'me'; */}

            {/* const userAvatar = ( */}
            <Avatar>
              {/* {message.sender[0]} */}
            </Avatar>
            {/* ); */}

            return (
            {/* <div key={index} className={[ */}
            <div className={[
              // classes.messageWrapper,
              // isMessageFromMe ? classes.messageFromMe : ''
            ].join(' ')}>
              {/* {!isMessageFromMe && userAvatar} */}
              <Paper className={[
                // classes.message,
                // isMessageFromMe ? classes.messageFromMe : ''
              ].join(' ')}>
                <Typography variant="caption">
                  {/* {message.sender} */}
                </Typography>
                <Typography variant="body1">
                  {/* {message.content} */}
                </Typography>
              </Paper>
              {/* {isMessageFromMe && userAvatar} */}
            </div>
            )
            {/* })} */}
          </div>

          {/* <div className={classes.messageInputWrapper}> */}
          <div >
            {/* <Paper className={classes.messageInput} elevation={6}> */}
            <Paper elevation={6}>
              <Input fullWidth placeholder='Написать...' />
            </Paper>
          </div>

        </main>
      </div>
    )
  }
}

export default App; 
