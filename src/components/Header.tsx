import { Flex, Text, Input, Icon, HStack, Box, Avatar } from "@chakra-ui/react";
import { RiSearchLine, RiNotificationLine, RiUserAddLine } from 'react-icons/ri'

export function Header(){

    return(
       <Flex
          w='100%'
          as="header"
          maxWidth='1480'
          h='20'
          mt='4'
          mx='auto'
          px='6'
          align='center'
        >
            <Text
                fontSize='3xl'
                fontWeight='bold'
                letterSpacing='tight'
                w='64'
            >
                Dashgo
                <Text as='span' marginLeft='1' color='pink.500'>.</Text>
            </Text>
            <Flex 
                as='label'
                flex='1'
                px='8'
                py='4'
                ml='6'
                maxWidth={400}
                alignSelf='center'
                color='gray.200'
                position='relative'
                bg='gray.800'
                borderRadius='full'
                cursor='pointer'
            >
                <Input 
                    color='gray.50'
                    variant='unstyled'
                    placeholder='Buscar na plataforma'
                    mr='4'
                    px='4'
                    _placeholder={{color:'gray.400'}}
                />
                <Icon as={RiSearchLine} fontSize='20'/>
            </Flex>
            <Flex 
                align='center' 
                ml='auto'
            >
                <HStack
                    spacing='8'
                    mx='8'
                    pr='8'
                    py='1'
                    color='gray.300'
                    borderRightWidth={1}
                    borderColor='gray.700'
                >
                    <Icon as={RiNotificationLine} fontSize='20'/>
                    <Icon as={RiUserAddLine} fontSize='20'/>
                </HStack>
                <Flex align='center'>
                    <Box mr='4' textAlign='right'>
                        <Text>Whelisson Dias</Text>
                        <Text color='gray.300' fontSize='small'>whelidias@hotmail.com</Text>
                    </Box>
                    <Avatar size='md' name='Whelisson Dias'/>
                </Flex>
            </Flex>
        </Flex>
    )
}