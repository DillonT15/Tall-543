'use client';
import React from 'react';

const Aside: React.FC = () => {
return (
    <aside style={{ padding: '1rem', backgroundColor: 
    '#3ae7f0',minWidth: '200px', }}>
    <h2>Aside</h2>
        <ul>
        <li>Home</li>
        <li>Resume</li>
        <li>Projects</li>
        <li>Education</li>
        <li>Certifications</li>
      </ul>
    </aside>
    );
};
export default Aside;