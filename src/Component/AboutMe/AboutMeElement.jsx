import styled from "styled-components";



export const PageAboutmeContainer = styled.div `
    width: 100%;
    margin: auto;
    background-color: #f8f8f8;
    min-height: 100%;
    border-radius: 50px 0px 0px 50px;
    
    @media screen and (max-width:992px) {
        width: 90%;
        border-radius: 0px 0px 50px 50px;
        padding: 50px 0;
    }
    
    `
export const AboutmeContent = styled.div `
    width: 90%;
    margin: 0 auto;
`

export const TitleAboutmeWrapper   = styled.div `
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
    margin-top:40px ;
    width: 100%;
    text-align: center;

    @media screen and (max-width: 992px){
        margin-top: 80px;
    }
    `
export const AboutSvg = styled.img `
    width: 350px;

    @media screen and (max-width: 500px){
       width: 260px;
    }
`
export const Profile = styled.div `
    margin-top: 30px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-start;

    @media screen and (max-width: 992px){
        margin: 40px 0;
    }
`
export const ProfileItem = styled.div `
    width: calc(50% - 10px);
    margin: 10px 0;
    border-bottom: 1px solid #c9c9c9;
    
    @media screen and (max-width: 640px){
        width: 100%;
    }
`
export const Text = styled.h6 `
    font-size: 14px;

    `
export const TextSpan = styled.span `
    background-color: #34B3F1;
    color: #f9f9f9;
    padding: 0 5px;
    border-radius:10px ;
    @media screen and (max-width: 1200px){
        font-size: 12px;
        padding: 3px;
    }
`
export const Desc = styled.p`
    margin-top: 15px;
    font-size: 14px;
    line-height: 23px;
    text-align: center;
    @media screen and (max-width: 640px){
        font-size: 12px;
        line-height: 20px;
        
    }
`
export const DescSpan = styled.span`
    color:#ff9f29;
    margin: 0 5px;


`

