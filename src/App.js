import React from 'react';
import { Box, Grommet } from 'grommet';
import theme from './theme'

const AppBar = props => (
  <Box 
    tag='header'
    direction='row'
    align='center'
    justify='between'
    background='brand'
    pad={{ left: 'medium', right: 'small', vertical: 'small' }}
    elevation='medium'
    style={{ zIndex: '1' }}
    {...props}
  />
)

const Narrative = props => (
  <Box
    flex
    align='center'
    justify='center'
    { ...props }
  />
)

const Interaction = props => (
  <Box
    width='medium'
    background='light-2'
    elevation='small'
    align='center'
    justify='center'
    {...props}
  />
)

function App() {
  return (
    <Grommet theme={theme}>
      <AppBar>{process.env.REACT_APP_APP_NAME}</AppBar>

      <Box direction='row' flex overflow={{ horizontal: 'hidden' }}>
        <Narrative>Narrative</Narrative>
        <Interaction>Interaction</Interaction>
      </Box>      
    </Grommet>
  );
}

export default App;
