import Icon from '@chakra-ui/icon'
import { HStack } from '@chakra-ui/layout'
import React from 'react'
import { FaFacebookF, FaGoogle, FaSpotify, FaShopify } from 'react-icons/fa'

function Social() {
    return (
        <HStack spacing="12">
            <Icon as={FaFacebookF} boxSize="10" />
            <Icon as={FaGoogle} boxSize="10" />
            <Icon as={FaSpotify} boxSize="10" />
            <Icon as={FaShopify} boxSize="10" />
        </HStack>
    )
}

export default Social
