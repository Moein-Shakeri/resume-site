import React from 'react'
import { AboutmeContent, AboutSvg, Desc, DescSpan, PageAboutmeContainer, Profile, ProfileItem, SvgWrapper, Text, TextSpan, TitleAboutmeWrapper, TitleH2 } from './AboutMeElement'
import profileSvg from "../../img/profile.svg"


const About = () => {
  return (
    <PageAboutmeContainer id='about'>
      <AboutmeContent>
        <TitleAboutmeWrapper>
          <TitleH2>درباره من بیشتر بدونید</TitleH2>
          <SvgWrapper>
            <AboutSvg src={profileSvg}/>
          </SvgWrapper>
        </TitleAboutmeWrapper>
        <Profile>
          <ProfileItem>
            <Text> نام : <TextSpan>محمد معین شاکری</TextSpan> </Text>
          </ProfileItem>
          <ProfileItem>
            <Text> تحصیلات : <TextSpan>دیپلم , قصد ادامه تحصیل</TextSpan> </Text>
          </ProfileItem>
          <ProfileItem>
            <Text> متولد : <TextSpan>1382</TextSpan> </Text>
          </ProfileItem>
          <ProfileItem>
            <Text> شماره تماس : <TextSpan>09035369770</TextSpan> </Text>
          </ProfileItem>
          <ProfileItem>
            <Text> ایمیل : <TextSpan>moxinshakeri@gmail.com</TextSpan> </Text>
          </ProfileItem>
          <ProfileItem>
            <Text> محل سکونت : <TextSpan>شهر قدس</TextSpan> </Text>
          </ProfileItem>
        </Profile>
        <Desc>
          مدتی هست که با برنامه نویسی اشنا شدم و تسلط نسبی به <DescSpan>HTML</DescSpan> , <DescSpan>CSS</DescSpan> , <DescSpan>JAVASCRIPT</DescSpan>  <DescSpan>BOOTSTRAP</DescSpan> , <DescSpan>REACT</DescSpan> , <DescSpan>REDUX</DescSpan> , <DescSpan>SASS</DescSpan> , <DescSpan>GIT</DescSpan>  دارم. نظم و متعهد بودن برای من اهمیت بالایی دارد  
        </Desc>
      </AboutmeContent>
    </PageAboutmeContainer>
  )
}

export default About