import { css } from "styled-components";

export const mobile = (props)=> {
    return css`
      @media screen and (max-width: 480px){
          ${props}
      }
    `;
}


export const tablet = (props)=> {
  return css`
    @media screen and (min-width: 481px) and (max-width: 767px){
        ${props}
    }
  `;
}


export const medium = (props)=> {
    return css`
      @media screen and (min-width: 768px) and (max-width: 1023px){
          ${props}
      }
    `;
}

export const large = (props)=> {
  return css`
     @media (min-width: 1030px){
        ${props}
    }
  `;
}