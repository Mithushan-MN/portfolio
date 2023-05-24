import React from 'react'
import{Element} from "react-scroll"
import "./SkillContainer.css";
import skillImg from "../../assets/skill.jpeg"
import { Stack, LinearProgress } from '@mui/material';

const SkillContainer = () => {
  return (
    <Element className="skillContainer" id="skills">
        <div className='skillContainer__image'>
            <img src={skillImg} alt=''/>
        </div>
        <div className='skillContainer__text'>
            <h2>SKILLSET</h2>
            <div className='skillContainer__skillSet'>
                <h5>FrontEnd Development</h5>
                <Stack className='skillContainer__slider skillContainer__slider1'>
                    <LinearProgress variant='determinate' value={90} />
                </Stack>
                <h5>BackEnd Development</h5>
                <Stack className='skillContainer__slider skillContainer__slider2'>
                    <LinearProgress variant='determinate' value={50} />
                </Stack>
                <h5>UI/UX Design</h5>
                <Stack className='skillContainer__slider skillContainer__slider3'>
                    <LinearProgress variant='determinate' value={85} />
                </Stack>
                <h5>Graphics Design</h5>
                <Stack className='skillContainer__slider skillContainer__slider4'>
                    <LinearProgress variant='determinate' value={90} />
                </Stack>
                <h5>Video Editing</h5>
                <Stack className='skillContainer__slider skillContainer__slider5'>
                    <LinearProgress variant='determinate' value={70} />
                </Stack>
                <h5>App Development</h5>
                <Stack className='skillContainer__slider skillContainer__slider6'>
                    <LinearProgress variant='determinate' value={40} />
                </Stack>
            </div>
        </div>
    </Element>
  
  )
}

export default SkillContainer
