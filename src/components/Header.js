import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  height: 88px;
  line-height: 88px;
  font-size: 15px;
  background-color: #ffffffd9;
  backdrop-filter: blur(10px);
  position: relative;
  z-index: 100;
  .menuList {
    position: fixed;
    .home {
      font-size: 17px;
      margin-left: 12px;
    }
    .menu {
      padding: 0 20px;
    }
  }
`

const Header = () => {
  return (
    <Wrapper>
      <div className='menuList'>
        <span className='home menu'>JiYoung Blog</span>
        <span className='menu'>Tech</span>
        <span className='menu'>Diary</span>
        <span className='menu'>Project</span>
      </div>
    </Wrapper>
  );
};

export default Header;