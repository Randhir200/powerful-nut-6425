import React from 'react'
import { Box, Text } from '@chakra-ui/react'
import style from '../Styles/Time.module.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
 
    return (
        <Box className={style.Navbar} h="80px" w="100%">
            <Box h="100%" w="100%" display="flex" gap="40px" alignItems="center" paddingLeft={'40px'}>
                <Box >
                    <Link>
                    
                          <Text>List</Text>
                    </Link>
                </Box>
                <Box >
                <Link>
                    
                    <Text>List</Text>
              </Link>
                </Box>
                <Box >
                <Link>
                    
                    <Text>List</Text>
              </Link>
                </Box>
                <Box >
                <Link>
                    
                    <Text>List</Text>
              </Link>
                </Box>
                
           
        </Box>
        </Box>
    )
}

export default Navbar