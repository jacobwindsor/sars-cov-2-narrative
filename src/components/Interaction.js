import React from 'react';
import { Box, Button, Collapsible, Layer } from 'grommet';
import { FormClose, FormAdd } from 'grommet-icons'


export default props => {
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