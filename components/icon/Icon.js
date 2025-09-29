import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React from 'react'



export default function Icon({iconName, url}) {
  return (
    <Link href={url||'#'}>
        <FontAwesomeIcon 
        icon={iconName} 
        className=
        "flex items-end justify-end icon font-normal text-xl bg-FooterIconColor ms:p-1 ms:text-xl l:text-md ll:p-2 4k:text-5xl rounded-md delay-100 hover:-translate-y-1 ease-in hover:text-blue-400"/>
    </Link>
  )
}
