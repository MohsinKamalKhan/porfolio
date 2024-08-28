'use client';

import Image from 'next/image';
import styles from './skills.module.css';
import { useState } from 'react';

export default function Skills({skills_arr} : {skills_arr : string[]}) {
    const [skills, setSkills] = useState(skills_arr);

    function shiftRightSkills() {
        const skills_copy = [...skills];
        skills_copy.push(skills_copy.shift()!);
        setSkills(skills_copy);
    }

    function shiftLeftSkills() {
        const skills_copy = [...skills];
        skills_copy.unshift(skills_copy.pop()!);
        setSkills(skills_copy);
    }

    return (
        <div className={styles.background}>
            <div>
                <p onClick={shiftLeftSkills} className={styles.buttons}><Image  alt="P" src='/images/prev_next_button.svg' width={16} height={16} /></p>
            </div>
           
            <div>
                {skills.slice(0, 4).map(skill => {
                    return <p key={skill} className={styles.skill}>{skill}</p>
                })}
            </div>

            <div>
                <p onClick={shiftRightSkills} style={{transform: 'rotate(180deg)'}} className={styles.buttons}><Image alt="P" src='/images/prev_next_button.svg' width={16} height={16} /></p>
            </div>
        </div>
    );
}