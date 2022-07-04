import { Flex, IconButton, useBreakpointValue, Icon } from "@chakra-ui/react";
import { RiMenuLine } from "react-icons/ri";
import { useSidebarDrawer } from "../../contexts/SidebarDrawerContext";
import { Logo } from "./Logo";
import { NotificationsNav } from "./NotificationsNav";
import { Profile } from "./Profile";
import { SearchBox } from "./SearchBox";

export function Header(){
    const { onOpen } = useSidebarDrawer()
    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true,
    })

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
            {!isWideVersion && (
                <IconButton 
                    aria-label="Open navigation"
                    icon={<Icon as= {RiMenuLine}/>}
                    fontSize='24'
                    variant='unstyled'
                    onClick={onOpen}
                    mr={2}
                />
            )}
            <Logo/>
            {isWideVersion && <SearchBox/> }
            <Flex 
                align='center' 
                ml='auto'
            >

                <NotificationsNav/>
                <Profile showProfileData={isWideVersion}/>
            </Flex>
        </Flex>
    )
}