import { FormControl, FormLabel, Input as ChakraInput, InputProps as ChakraInputProps } from "@chakra-ui/react";

interface InputProps extends ChakraInputProps{
    label?: string;
    name: string;
}

export function Input({name, label, ...rest}: InputProps){
    return(
        <FormControl>
            { !!label && <FormLabel htmlFor={name}>{label}</FormLabel>}
            <ChakraInput
            name={name}
            id={name}
            focusBorderColor='pink.500'
            bgColor='gray.900'
            variant='filled'
            size='lg'
            _hover={{
                bgColor: 'gray.900'
            }}
            {...rest}
            />
      </FormControl>
    )
}