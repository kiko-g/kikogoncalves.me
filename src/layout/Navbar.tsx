import React from 'react'
import { Link } from 'gatsby'
import { Disclosure } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { DarkModeSwitchMinimal } from './DarkModeSwitchMinimal'
import { HomeIcon, EmojiHappyIcon, BriefcaseIcon, DocumentDuplicateIcon, CodeIcon } from '@heroicons/react/outline'

const navigation = [
  { title: 'Home', location: '/', icon: <HomeIcon className="mr-1.5 mt-0.5 h-[1.2rem] w-[1.2rem]" /> },
  { title: 'Me', location: '/me', icon: <EmojiHappyIcon className="mr-1.5 mt-0.5 h-[1.2rem] w-[1.2rem]" /> },
  { title: 'CV', location: '/cv', icon: <BriefcaseIcon className="mr-1.5 mt-0.5 h-[1.2rem] w-[1.2rem]" /> },
  { title: 'Blog', location: '/blog', icon: <DocumentDuplicateIcon className="mr-1.5 h-[1.2rem] w-[1.2rem]" /> },
  { title: 'Portfolio', location: '/portfolio', icon: <CodeIcon className="mr-1.5 mt-0.5 h-[1.2rem] w-[1.2rem]" /> },
]

type Props = {
  siteTitle: string
  location: string
}

export const Navbar = ({ siteTitle, location }: Props) => {
  return (
    <Disclosure as="nav" className="navbar">
      {({ open }) => {
        return (
          <>
            <div className={`${open ? 'p-0' : 'p-2'} relative flex items-center justify-between md:py-0`}>
              <Hamburger open={open} />
              <Header title={siteTitle} location={location} />
            </div>
            <Mobile location={location} />
          </>
        )
      }}
    </Disclosure>
  )
}

const Hamburger = ({ open }) => (
  <div
    className={`z-50 md:hidden ${
      open
        ? 'absolute top-2 right-2 my-auto flex h-6 items-center justify-end space-x-2'
        : 'flex w-full items-center justify-between'
    }`}
  >
    <Link to="/">
      {open ? (
        <img className="avatar top-0.5 h-5 w-5" src={'/images/avatar.png'} alt="Francisco Gonçalves" />
      ) : (
        <img className="avatar h-6 w-6" src={'/images/avatar.png'} alt="Francisco Gonçalves" />
      )}
    </Link>

    <div className="flex items-center space-x-1">
      <DarkModeSwitchMinimal />
      <Disclosure.Button className="hamburger group">
        <span className="sr-only">Open nav menu</span>
        {open ? (
          <XIcon
            className="ease block h-6 w-6 transition duration-200 group-hover:text-primary/75 dark:group-hover:text-primary/75"
            aria-hidden="true"
          />
        ) : (
          <MenuIcon
            className="ease block h-6 w-6 transition duration-200 group-hover:text-primary/75 dark:group-hover:text-primary/75"
            aria-hidden="true"
          />
        )}
      </Disclosure.Button>
    </div>
  </div>
)

const Header = ({ title, location }) => (
  <div className="header">
    <div className="relative hidden h-auto space-x-12 self-center duration-200 hover:opacity-75 md:inline-flex">
      <Link to="/" className="flex items-center space-x-2">
        <img
          src={'/images/avatar.png'}
          alt="Francisco Gonçalves"
          className="z-20 inline-flex h-6 w-6 rounded-full transition"
        />
        <h2 className="text-xs font-bold tracking-tighter duration-150 lg:text-base">{title}</h2>
      </Link>
    </div>

    <div className="hidden space-x-8 self-center md:inline-flex">
      {navigation.map((link, index) => (
        <Link to={link.location} key={`nav-${index}`} className="relative py-1">
          <button
            type="button"
            className={`flex h-12 items-center justify-center font-medium uppercase tracking-wider transition ${
              location === link.title
                ? 'text-primary dark:text-white'
                : 'text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white'
            }`}
          >
            <span className="flex items-center justify-center">
              {link.icon}
              {link.title}
            </span>
          </button>
          {location === link.title ? (
            <span className="absolute bottom-0 h-1 w-full rounded-t-sm bg-primary dark:bg-tertiary" />
          ) : null}
        </Link>
      ))}
    </div>

    <div className="hidden self-center md:inline-flex">
      <DarkModeSwitchMinimal />
    </div>
  </div>
)

const Mobile = ({ location }) => (
  <Disclosure.Panel className="flex flex-col space-y-3 py-2 md:hidden">
    {navigation.map((link, index) => (
      <Link to={link.location} className="relative h-auto" key={`mobile-nav-${index}`}>
        <button
          type="button"
          className={`flex h-auto items-center justify-center font-medium uppercase tracking-wider transition ${
            location === link.title
              ? 'text-primary dark:text-white'
              : 'text-gray-800/70 hover:text-gray-800 dark:text-white/60 dark:hover:text-white'
          }`}
        >
          <span className="flex items-center justify-center">
            {link.icon}
            {link.title}
          </span>
          {location === link.title ? (
            <span className="absolute -left-4 h-full w-1 rounded-sm bg-primary dark:bg-tertiary" />
          ) : null}
        </button>
      </Link>
    ))}
  </Disclosure.Panel>
)
