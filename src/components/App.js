import React, { useState } from 'react';
import { Box, Button, Grommet, Heading, ResponsiveContext } from 'grommet';
import { FormClose, FormAdd } from 'grommet-icons'
import theme from '../theme'
import Interaction from './Interaction'

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
  >
    <Heading level='3' margin='none'>{process.env.REACT_APP_APP_NAME}</Heading>
  </Box>
)

const Narrative = props => (
  <Box
    flex
    align='center'
    justify='center'
    { ...props }
  />
)


const App = () => {
  const [showInteraction, setShowInteraction] = useState(true)

  return (
    <Grommet theme={theme} full>
      <ResponsiveContext.Consumer>
        {size => (
          <Box fill>
            <AppBar size={size} />

            <Box direction='row' flex overflow={{ horizontal: 'hidden' }}>
              <Narrative>
                <p>Narrative</p>
                <Button
                  onClick={() => setShowInteraction(!showInteraction)}
                  label={`${showInteraction ? 'Hide' : 'Show'} interaction`}
                  icon={showInteraction ? <FormClose/> : <FormAdd />}
                />
              </Narrative>
              <Interaction show={showInteraction} setShow={setShowInteraction} size={size} />
            </Box>
          </Box>
        )}
      </ResponsiveContext.Consumer>    
    </Grommet>
  );
}

export default App;
