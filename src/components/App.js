import React, { useState } from 'react';
import { Box, Button, Collapsible, Grommet, Heading, Layer, ResponsiveContext } from 'grommet';
import { FormClose, FormAdd } from 'grommet-icons'
import theme from '../theme'

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

const Interaction = props => {
  if (!props.show || props.size !== 'small') return (
    <Collapsible direction='horizontal' open={props.show}>
      <Box
        flex
        width='medium'
        background='light-2'
        elevation='small'
        align='center'
        justify='center'
      >Interaction</Box>
    </Collapsible>
  )

  return (
    <Layer>
      <Box
        background='light-2'
        tag='header'
        justify='end'
        align='center'
        direction='row'
      >
        <Button
          icon={<FormClose />}
          onClick={() => props.setShow(!props.show)}
        />
      </Box>
      <Box
       fill
       background='light-2'
       align='center'
       justify='center'
      >
        Interaction
      </Box>
    </Layer>
  )
}


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
