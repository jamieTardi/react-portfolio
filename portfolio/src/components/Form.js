import React from 'react'
import { makeStyles, createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import {TextField, InputBase} from '@material-ui/core';
import green from '@material-ui/core/colors/green';
import styled from 'styled-components'



const useStyles = makeStyles({
    root: {
        primary:{
            main: '#000000'
        },
        
    },
    textField: {
        backgroundColor: 'inherit',
        border: 'none',
        borderRadius: '5px'  
        
    },
    input: {
        color: '#ffffff'
    },
    notchedOutline: {
        borderWidth: "1px",
        borderColor: "white",
      },
    focus: {
        color: 'red',
    }
    
    

})


const theme = createMuiTheme({
    palette: {
        primary:{
            main: '#00D261'
        },
        secondary: {
            // This is green.A700 as hex.
            main: '#ffffff',
          },
    }
})



export default function Form() {
    const classes = useStyles()
    return (
        <ThemeProvider theme={theme}>
        <form className={classes.root} noValidate autoComplete="off">
        <TextField
          id="outlined-password-input"
          label="Name"
          type="text"
          autoComplete="current-password"
          variant="outlined"
          className={classes.textField}
          color="primary"
          autoFocus="true"
          size="large"
          InputLabelProps={{
            style: { color: '#fff' },
          }}
          InputProps={{
            classes: {
               root: classes.root,
               disabled: classes.disabled,
               notchedOutline: classes.notchedOutline,
               input: classes.input,
               focused: classes.focus
            }
         }}
        />
        <TextField
          id="outlined-password-input"
          label="Email"
          InputLabelProps={{
            style: { color: '#fff' },
          }}
          type="text"
          autoComplete="current-email"
          variant="outlined"
          className={classes.textField}
          color="primary"
          size="large"
          InputProps={{
            classes: {
                root: classes.root,
                disabled: classes.disabled,
                notchedOutline: classes.notchedOutline,
                input: classes.input
             }
        }}
        />
         <TextField
          id="outlined-password-input"
          label="Message"
          InputLabelProps={{
            style: { color: '#fff' },
          }}
          type="text"
          multiline="true"
          rows="10"
          variant="outlined"
          className={classes.textField}
          color="primary"
          size="large"
          InputProps={{
            classes: {
                root: classes.root,
                disabled: classes.disabled,
                notchedOutline: classes.notchedOutline,
                input: classes.input
             }
        }}
        />

        </form>
            
        </ThemeProvider>
    )
    
}




