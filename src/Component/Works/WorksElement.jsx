import styled from "styled-components";
import {
    Link
} from "react-router-dom";

export const PageWorkContainer = styled.div `
    width: 100%;
    background-color: #f8f8f8;
    min-height: 100%;
    border-radius: 50px 0px 0px 50px;

    @media screen and (max-width:992px) {
        width: 90%;
        border-radius: 0px 0px 50px 50px;
        padding: 50px 0;
        margin: auto;
    }
    `
export const WorkContent = styled.div `
    width: 90%;
    margin: 0 auto;
`

export const TitleWorks = styled.div `
    padding-top: 10px;
`
export const TitleH2 = styled.h2 `
    font-size: 30px;
    position: relative;
    border-radius: 10px;
    padding: 10px;
    &::after{
        content: "";
        position: absolute;
        width: 2px;
        height: 40px;
        background-color: #ff9f29;
        bottom: 50%;
        transform: translateY(50%);
        right: 0;
        
    }


    
    @media screen and (max-width: 640px){
        font-size: 25px;
    }
    `
export const SvgWrapper = styled.div `
    width: 100%;
    text-align: center;
`
export const WorkSvg = styled.img `
    width: 230px;
    
`
export const ImgWorkWrapper = styled.div `
    width: 100%;
    display: flex;
    flex-direction : column ;
    align-items: center;
    justify-content: center;
    margin: 40px 0;


    @media screen and (max-width:768px) {
        height: 350px;
        width: 100%;
    }
    `

export const ImgWork= styled.img `
    width: 100%;
    height: 150px;
    position: relative;
    
    `
export const ImgDesc= styled.div `
 position: absolute;
 top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 150px;
  width: 100%;
  transition: .3s ease;
  background:linear-gradient(to right,rgb(0,0,0,.9),#ff9f2980);
  color: #fff;
  opacity: 0;
  
  

  &:hover{
    opacity: 1;
  }
`
export const TextImgWrapper= styled.div `
    position: absolute;
    bottom: 50px;
    left: 15px;
    text-align: center;

`
export const Nameimg= styled.h5 `
    color: #fff;
    display: inline-block;
    font-weight: 700;
    font-family: Arial, Helvetica, sans-serif;

    transition: all .3s ease-in-out;
    transform: translateY(-50px);
    
    `
export const LangImg= styled.h6 `
    font-size: 13px;
    font-family: Arial, Helvetica, sans-serif;

    transition: all .3s ease-in-out;
    transform: translateY(50px);
    
    `
export const ImgIcon= styled.div `
    position:absolute;
    bottom: 10px;
    right: 15px;    
    font-size: 25px;
    color: #fff;
    transition: all .3s ease-in-out;
    transform: translateX(30px);
    
`



export const ImgItem= styled.div `
    width: 50% ;
    height: 100%;
    position: relative;
    cursor: pointer;

       
    &:hover ${LangImg}{   
        transform: translateY(0);
    }
    &:hover ${Nameimg}{   
        transform: translateY(0);
    } 
    &:hover ${ImgIcon}{   
        transform: translateX(0);
    } 

  
    &::before{
        content: "";
        position:absolute;
        top: -3px;
        left: 0px;
        width: 50px;
        height: 3px;
        background-color: #ff9f29;
        transition:all .3s ;
        z-index: 5;
    }
    &::after{
        content: "";
        position:absolute;
        top: -3px;
        left: -3px;
        width: 3px;
        height: 50px;
        background-color: #ff9f29;
        transition:all .3s ;
    }
    &:hover::after{
        width: 4px;
        height: 80px;
    }
    &:hover::before{
        height: 4px;
        width: 80px;
    }


    @media screen and (max-width:768px){
        width: 75%;
        height: auto;
    }
    
`





export const ImgCaptionWrapper = styled.div`
    width: 50%;
    background-color:#ff9f29;
    border-radius:0 0 10px 10px;

    
    @media screen and (max-width:768px){
        width: 75%;
        height: auto;
    }
`
// export const CaptionItemTop = styled.div`
//     display: flex;
//     justify-content: space-between;
//     padding: 10px 4px;

//     ${ImgItem}:hover {
//         background-color: #000;
//     }
// `
// export const CaptionText = styled.div`
//     display: flex;
//     flex-direction: column;
//     align-items:center ;
//     justify-content: center;
    
// `
// export const CaptionName = styled.h5`
//     color: #fff;
//     display: inline-block;
//     font-weight: 700;
//     font-family: Arial, Helvetica, sans-serif;
//     transition: all .3s ease-in-out;
// `
// export const CaptionLang = styled.h6`
//     font-size: 13px;
//     font-family: Arial, Helvetica, sans-serif;
//     transition: all .3s ease-in-out;
//     color: #fff;
// `
// export const CaptionIcon = styled.div`    
//     font-size: 25px;
//     color: #fff;
// `
export const Description = styled.p`    
    font-size: 12px;
    color: #fff;
    padding: 5px;
`



