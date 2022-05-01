import React from 'react';
import styled from 'styled-components';

const WrapperSection = styled.div`
  width: 100%;
  height: 540px;
  margin-top: -88px;
  .section {
    width: 100%;
    height: 540px;
    overflow: hidden;
    video{
      width: 100%;
    }
    background-color: black;
  }
`

const Section = () => {
  return (
    <WrapperSection>
      <div className='section'>
        <video src='/videos/main_video.mp4' loop autoPlay muted />
      </div>
    </WrapperSection>
  );
};

export default Section;