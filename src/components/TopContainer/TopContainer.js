import React from 'react'
import { Element } from 'react-scroll'
import TopContant from '../TopContant/TopContant'
import "./TopContainer.css"

const TopContainer = () => {
  return (
    <Element name="about" className='topContainer'>
        <TopContant />
    </Element>
  )
}

export default TopContainer
