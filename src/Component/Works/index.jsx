import React from 'react'
import { PageWorkContainer ,TitleWorks,TitleH2, ImgWorkWrapper, ImgItem, ImgWork, ImgDesc,WorkContent, WorkSvg, SvgWrapper, TextImgWrapper, Nameimg, LangImg, ImgIcon, ImgCaptionWrapper, CaptionItemTop, CaptionText, CaptionName, CaptionLang, CaptionIcon, Description} from './WorksElement'
import FilmaxImg from "../../img/Work/filmax.jpg"
import WorkPageImg from "../../img/workImg.svg"
import {BiCameraMovie} from 'react-icons/bi'
import { Link } from 'react-router-dom'


const Works = () => {
  return (
    <PageWorkContainer id='works'>
      <WorkContent>
        <TitleWorks>
          <TitleH2>
            نمونه کار ها
          </TitleH2>
          <SvgWrapper>
            <WorkSvg src={WorkPageImg}/>
          </SvgWrapper>
        </TitleWorks>
        
        <ImgWorkWrapper>
         
          <ImgItem >
            <Link to="/filmax">  
              <ImgWork src={FilmaxImg}/>
              <ImgDesc>
                <TextImgWrapper>
                  <Nameimg>
                    fillmax
                  </Nameimg>
                  <LangImg>
                    react , bootstrap
                  </LangImg>
                </TextImgWrapper>
                <ImgIcon>
                  <BiCameraMovie/>
                </ImgIcon>
              </ImgDesc>
            </Link>  
          </ImgItem>
          <ImgCaptionWrapper>
            
            <Description>
              در این پروژه سایتی مانند نتفلیکس را سعی کردم طراحی کنم و سعی کردم بخش های گوناگونه مثل ثبت نام در سایت و کار با لوکال استوریج را در ان قرار بدم
            </Description>
          </ImgCaptionWrapper>
        </ImgWorkWrapper>
      </WorkContent>
      
    </PageWorkContainer>
  )
}

export default Works