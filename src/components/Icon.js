import React from 'react';
// import styled, { keyframes } from 'styled-components';

const Icon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
      <g fill="#fff" fillRule="evenodd">
        <g transform="matrix(1.28244 0 0 1.28846 -3.857 -10.962)">
          <ellipse ry="9" rx="9.273" cy="29" cx="13.273"/>
          <circle r="14.182" cy="23.818" cx="26.727"/>
          <circle r="11" cy="27" cx="40.636"/>
        </g>
          <ellipse className="raindrop" cx="29.883" cy="39.043" rx="1.091" ry="2.545" transform="rotate(20)"/>
          <ellipse className="raindrop" transform="rotate(20)" ry="2.545" rx="1.091" cy="31.864" cx="37.912"/>
          <ellipse className="raindrop" cx="58.585" cy="24.34" rx="1.091" ry="2.545" transform="rotate(20)"/>
          <ellipse className="raindrop" transform="rotate(20)" ry="2.545" rx="1.091" cy="32.203" cx="48.677"/>
      </g>
    </svg>
  )
}

// const raining = () => keyframes`
//   0% { opacity: 1; }
//   50% { opacity: 0; }
//   100% { opacity: 1; }
// `;



// const Icon = () => {
//   return (
//     <StyledIcon viewBox="0 0 64 64">
//       <g fill="#fff" fillRule="evenodd">
//          <g transform="matrix(1.28244 0 0 1.28846 -3.857 -10.962)">
//            <ellipse ry="9" rx="9.273" cy="29" cx="13.273"/>
//            <circle r="14.182" cy="23.818" cx="26.727"/>
//            <circle r="11" cy="27" cx="40.636"/>
//          </g>
//            <ellipse className="raindrop" cx="29.883" cy="39.043" rx="1.091" ry="2.545" transform="rotate(20)"/>
//            <ellipse className="raindrop" transform="rotate(20)" ry="2.545" rx="1.091" cy="31.864" cx="37.912"/>
//            <ellipse className="raindrop" cx="58.585" cy="24.34" rx="1.091" ry="2.545" transform="rotate(20)"/>
//            <ellipse className="raindrop" transform="rotate(20)" ry="2.545" rx="1.091" cy="32.203" cx="48.677"/>
//        </g>
//     </StyledIcon>
//   );
// }
//
// const StyledIcon = styled.svg`
//   animation: rain 2s infinite;
// `;


export default Icon;
