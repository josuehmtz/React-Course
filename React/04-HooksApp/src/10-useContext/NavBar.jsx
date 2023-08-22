import { Link, NavLink } from "react-router-dom"
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
    { name: 'Home', href: '/', current: true },
    { name: 'Login', href: 'login', current: false },
    { name: 'About', href: 'about', current: false },
]
    
export const NavBar = () => {
  return (
    <>
        <Disclosure as="nav" className="bg-gray-800  rounded-md">
            {({ open }) => (
                <>
                    <div className="mx-auto max-w-10xl px-2 sm:px-6 lg:px-8">
                        <div className="relative flex h-16 items-center justify-between">
                            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                            <div className="flex flex-shrink-0 items-center">
                                <Link to={`/`} className="text-md text-white">UseContext App</Link>
                            </div>
                            <div className="hidden sm:ml-6 sm:block">
                                <div className="flex space-x-4">
                                    {
                                        navigation.map((item) => (
                                            <NavLink
                                                key={item.name}
                                                to={`${item.href}`}
                                                className={({isActive}) => `text-white rounded-md px-3 py-2 text-sm font-medium ${ isActive ? 'bg-gray-900' : 'text-gray-300 hover:bg-gray-700 hover:text-white'} `}
                                            >
                                                {item.name}
                                            </NavLink>                                            
                                        ))
                                    }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
            </Disclosure>
    </>
  )
}
