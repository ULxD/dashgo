import { Stack } from "@chakra-ui/react";
import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";
import { RiDashboardLine, RiContactsLine, RiInputMethodLine, RiGitMergeLine } from 'react-icons/ri'

export function SideBarNav() {

    return (
        <Stack spacing='12' align='flex-start'>
            <NavSection title='Geral'>
                <NavLink href='/dashboard' icon={RiDashboardLine}>DashBoard</NavLink>
                <NavLink href='/users' icon={RiContactsLine}>Usuarios</NavLink>
            </NavSection>
            <NavSection title='Automação'>
                <NavLink href='/forms' icon={RiInputMethodLine}>Formulários</NavLink>
                <NavLink href='/automation'  icon={RiGitMergeLine}>Automação</NavLink>
            </NavSection>
        </Stack>
    )
}