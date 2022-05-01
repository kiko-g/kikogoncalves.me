import React from 'react'
import Seo from '../components/Seo'
import { Link } from 'gatsby'
import { classNames } from '../utils'
import { Tab } from '@headlessui/react'
import { Layout } from '../layout/Layout'
import { ArrowNarrowRightIcon } from '@heroicons/react/outline'
import { Gallery, About, Skills, Experience } from '../components/hero'
import '../styles/index.css'

const IndexPage = () => {
  const [focusRing] = React.useState(false)
  const [selectedIndex, setSelectedIndex] = React.useState(0)
  const headers = ['About', 'Skills', 'Experience', 'Gallery']
  const content = [<About />, <Skills />, <Experience />, <Gallery />]

  const nextTab = () => {
    setSelectedIndex((selectedIndex + 1) % content.length)
  }

  return (
    <Layout location="Home" background={false}>
      <Seo title="Home" />
      <div className="index-wrapper">
        <Tab.Group selectedIndex={selectedIndex} onChange={setSelectedIndex}>
          <Tab.List className="tab-list">
            {headers.map(category => (
              <Tab
                key={category}
                className={({ selected }) =>
                  classNames('tab', focusRing ? 'tab-focus-ring' : '', selected ? 'tab-selected' : 'tab-not-selected')
                }
              >
                {category}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels className="tab-panels">
            {content.map((content: JSX.Element, index: number) => (
              <Tab.Panel key={index} className={classNames('tab-panel', focusRing ? 'tab-focus-ring' : '')}>
                {content}
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>

        <div className="see-more-wrapper">
          <div className="see-more-left"></div>
          <div className="see-more-right">
            <Link to="/me" className="see-more-button">
              <span>
                <span>See more</span>
                <ArrowNarrowRightIcon className="inline-flex h-5 w-5" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
