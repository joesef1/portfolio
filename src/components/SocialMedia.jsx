import React from 'react';
import { AiFillLinkedin ,AiFillGithub } from 'react-icons/ai';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a style={{transform: 'translateY(2px)'}} href="https://www.linkedin.com/in/yousef-el-kholy-190126214/">
        <AiFillLinkedin />
      </a>
      
    </div>
    <div>
      <a style={{transform: 'translateY(2px)'}} href="https://github.com/joesef1">
          <AiFillGithub />
      </a>
    
    </div>
  </div>
);

export default SocialMedia;