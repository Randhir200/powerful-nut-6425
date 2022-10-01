import React from 'react'
import { Box} from "@chakra-ui/react";
function SideCard() {
  return (
    <Box w="100%"

    padding='20px'
    
  
    className="sidecard">

<Box color='red.400'>Next</Box>
<Box mt='0.5rem'>
<Box fontSize='lg'  fontWeight='bold'>New Timeline</Box>
<Box color='gray.500' className="text">Sync assignments from your connected integrations automatically once you add a task assignee and a due date th..<span className='Link'>Learn more</span></Box>
</Box>
<Box mt='0.5rem'>
<Box fontSize='lg'  fontWeight='bold'>Updates to Tracking Time Without a Task</Box>
<Box color='gray.500' className="text">Now you can track time without a task and it will show up on team timesheets immediately.<span className='Link'>Learn more</span></Box>
</Box>
<Box mt='0.5rem'>
<Box fontSize='lg'   fontWeight='bold'>Integration with Todoist</Box>
<Box color='gray.500' className="text">Everhour now integrates with Todoist!<span className='Link'>Learn more</span></Box>
</Box>

<Box>


</Box>


    </Box>
  )
}

export default SideCard
