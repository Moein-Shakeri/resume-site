import React from 'react'
import { HomeContainer,ContentPage ,StaticContent,Munu,DaynamicContent, MenuUl, ItemMunu, ImgWrapper, ImgStatic, TextWrapper, Text1Stc, NameH1, NameSpan, Text2Stc, TextSpan, SocialWrapper, SocialUl, SocialLi, PageCont, LinkMenu, MenoIconWrapper, LinkSc} from './HomeElement'
import {FaInstagram,FaTelegram, FaGithub, FaLinkedin} from "react-icons/fa"
import imgStatic from "../../img/imgstatic.svg"
import { Outlet} from 'react-router-dom'
import {ImProfile,ImPencil} from "react-icons/im"

const HomeSection = () => {
  return (
    <HomeContainer id='home'>            
            <ContentPage>
                <StaticContent>
                <Munu>
                    <MenuUl>
                        <ItemMunu>
                                <LinkSc to='contentMenu'>
                            <LinkMenu to="/">
                                    <MenoIconWrapper>
                                        <ImProfile/>
                                    </MenoIconWrapper>
                                    درباره من
                            </LinkMenu>
                                </LinkSc>
                        </ItemMunu>
                        <ItemMunu>
                                    <LinkSc to='contentMenu'>
                                <LinkMenu to="Works">
                                        <MenoIconWrapper>
                                            <ImPencil/>
                                        </MenoIconWrapper>
                                        نمونه کار 
                                </LinkMenu>
                                    </LinkSc>
                        </ItemMunu>
                    </MenuUl>
                    </Munu>
                    
                    <ImgWrapper>
                        <ImgStatic src={imgStatic}/>
                    </ImgWrapper>
                    <TextWrapper>
                        <Text1Stc>سلام , خوش آمدید</Text1Stc>
                        <NameH1> <NameSpan>معین شاکری</NameSpan> هستم</NameH1>
                        <Text2Stc>برنامه نویس <TextSpan>فرانت اند</TextSpan></Text2Stc>
                    </TextWrapper>
                    <SocialWrapper>
                        <SocialUl>
                            <SocialLi>
                                <FaInstagram/>
                            </SocialLi>
                            <SocialLi>
                                <FaGithub/>
                            </SocialLi>
                            <SocialLi>
                                <FaTelegram/>
                            </SocialLi>
                            <SocialLi>
                                <FaLinkedin/>
                            </SocialLi>
                        </SocialUl>
                    </SocialWrapper>
                </StaticContent>
                <DaynamicContent id='contentMenu'>
                    <Outlet/>
                </DaynamicContent>
                    
            </ContentPage>
    </HomeContainer>
) 
}


export default HomeSection