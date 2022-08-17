import styled from "styled-components";
import {
    Link
} from 'react-router-dom'
import {
    Link as LinkS
} from 'react-scroll'

export const HomeContainer = styled.div `
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const PageCont = styled.div `
    width: 90%;
    display: flex;
    justify-content: center;
    height: 600px;
    
`
export const ContentPage = styled.div `
    width: 80%;
    height: 600px;
    display: flex;
    align-items: center;
    

    @media screen and (max-width:992px) {
        flex-direction: column;
    }
`
export const StaticContent = styled.div `
    flex:1; 
    height: 100%;    
    display: flex;
    flex-direction: column; 
    align-items: center;
    position: relative;
    background-color: #FAF3E3;
    border-radius: 10px;

    @media screen and (max-width:992px) {
        width: 100%;
        height: 700px;
    }
    `

export const Munu = styled.div `
    height: 200px;
    position: absolute;
    right: -90px;
    top: 0;
    width: 90px;

    @media screen and (max-width:992px) {
        position: fixed;
        right: 20px;
        top: 20%;
    }
    @media screen and (max-width:768px) {
        right: 10px;
    }
    
    @media screen and (max-width: 640px){
        right: 10px;
        z-index: 2;
    }
    `
export const MenuUl = styled.ul `
    width: 100%;
    list-style: none;
    text-align: center;

 `
export const ItemMunu = styled.li `
    width: 80px;
    margin-bottom: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media screen and (max-width:992px) {
        width: 60px;
    }
    @media screen and (max-width: 640px){
        width: 50px;
    }
    `
export const MenoIconWrapper = styled.div `
    color: #fff;
    font-size: 20px;
    
    @media screen and (max-width:992px) {
        font-size: 18px;
    }
`
export const LinkSc = styled(LinkS)`
    width: 100%;
    font-size: 14px;
    text-decoration: none;
    color: #fff;
    background-color: #34B3F1;
    padding: 5px ;
    border-radius: 10px;
    transition: .1s;
    color: #fff;
    &:hover{
        color: #fff;
        background-color:#ff9f29;
    }
    @media screen and (max-width:992px) {
        font-size: 10px;
    }
    
    `

export const LinkMenu = styled(Link)`
    color: #fff;
    text-decoration: none;
    
    
    &:hover{
        color: #fff;
    }

`
export const ImgWrapper = styled.div `
    width: 100%;
    margin: 60px 0;
`
export const ImgStatic = styled.img `
    width: 100%;

`
export const TextWrapper = styled.div `

`
export const Text1Stc = styled.h6 `

    @media screen and (max-width:992px) {
        font-size: 18px;
    }
`
export const NameH1 = styled.h2 `
    font-size: 25px;
    margin-right: 5px;


    @media screen and (max-width:992px) {
        font-size: 40px;
    }
`
export const NameSpan = styled.span `
    color: #ff9f29;
    font-size: 30px;
`
export const Text2Stc = styled.h6 `


    @media screen and (max-width:992px) {
        font-size: 18px;
    }
`
export const TextSpan = styled.span `
    color: #ff9f29;

`
export const SocialWrapper = styled.div `
    margin-top: 20px;
    width: 40%;
`
export const SocialUl = styled.ul `
    display: flex;
    justify-content: space-between;
    width:100%;
    list-style: none;
`
export const SocialLi = styled.li `
    margin: 10px;
    font-size: 25px;
`
export const DaynamicContent = styled.div `
    flex:2; 
    
    height: 580px;



    @media screen and (max-width:992px) {
        width: 100%;
       
    }
`