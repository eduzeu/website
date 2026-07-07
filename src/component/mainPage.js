import React, {useState } from 'react';
import styled from 'styled-components';
import Navbar from '../NavBar';
import self from "../images/self.jpeg";
import Typewriter from 'react-typewriter-effect';
import SocialMedia from "../connect";
import Chip from './Chip';
import Journey from './Journey';

const MainPage = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

const handleSkillsClick = () => {
  document.getElementById("journey")?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};



  return (
    <AppContainer onMouseMove={handleMouseMove}>
      <Background>
        <GradientOverlay x={mousePos.x} y={mousePos.y} />
        <Navbar />

        <HeroSection>
          <HeroContainer>
            <ProfileCard>
              <AvatarWrap>
                <Portrait src={self} alt="Eduardo" />
                <AvatarGlow />
              </AvatarWrap>

              <TitleBlock>
                <MiniTitle>Software Engineer</MiniTitle>
                <MiniSub>NYC / NJ • Full-stack • React + Node</MiniSub>
              </TitleBlock>


              

              <SocialRow>
                <SocialMedia />
              </SocialRow>
              <PrimaryActions>
                <PrimaryButton onClick={handleSkillsClick}>
                  View Journey
                </PrimaryButton>

              </PrimaryActions>
            </ProfileCard>

            <HeroCopy>
              <Name>
                <Typewriter
                  text="Eduardo"
                  typeSpeed={55}
                  startDelay={350}
                  cursor={false}
                />
              </Name>
                <Name>
                <Typewriter
                  text="Hernandez"
                  typeSpeed={55}
                  startDelay={350}
                  cursor={false}
                />
              </Name>


            <Education>
              <School>
                🎓 B.S. Computer Science • Stevens Institute of Technology
              </School>
              <School>
                📚 M.S. Computer Science • New York University
              </School>
            </Education>

              <Tagline>
               I am passionate about software development, especially building, designing and 
               scaling backend systems and APIs. 
               I also enjoy working on frontend interfaces and improving user experience.
              </Tagline>

              <Bio>
                I’m a Stevens CS grad with experience in full-stack development. 
                I like building systems that feel fast, reliable, and easy to use.
              </Bio>

              <Chips>
                <Chip>React</Chip>
                <Chip>TypeScript</Chip>
                <Chip>Node/Express</Chip>
                <Chip>MongoDB</Chip>
                <Chip>Redis</Chip>
                <Chip>AWS</Chip>
                <Chip>Testing</Chip>
                <Chip>Python</Chip>
                <Chip>Java</Chip>
                <Chip>C++</Chip>
   
              </Chips>
            </HeroCopy>
          </HeroContainer>
        </HeroSection>

        <div id="journey">
        <Journey />
      </div>

  
      </Background>
    </AppContainer>
  );
};

/* -------------------- styles -------------------- */

const AppContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  overflow-x: hidden;
`;

const Background = styled.div`
  background: #000;
  color: white;
  position: relative;
  overflow: hidden;
`;

const HeroSection = styled.section`
  padding: calc(clamp(28px, 6vw, 72px) + 10px) 0 clamp(24px, 5vw, 56px);
`;

// marke the card go down 

const HeroContainer = styled.div`
  width: min(1120px, 92vw);
  margin: 0 auto;
  display: grid;
  grid-template-columns: 360px 1fr;
  gap: clamp(28px, 4vw, 60px); 
  align-items: center;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    justify-items: center;
    text-align: center;
  }
`;

const ProfileCard = styled.div`
  width: 100%;
  max-width: 420px;
  border-radius: 28px;
  padding: 20px 18px 18px;
  border: 1px solid rgba(48, 207, 208, 0.25);
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(10px);
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.45);
  transition: transform 220ms ease, border-color 220ms ease;

  &:hover {
    transform: translateY(-4px);
    border-color: rgba(48, 207, 208, 0.45);
  }

  @media (max-width: 900px) {
    max-width: 520px;
  }
`;

const AvatarWrap = styled.div`
  position: relative;
  width: 100%;
  display: grid;
  place-items: center;
  margin-top: 6px;
`;

const Portrait = styled.img`
  width: 210px;
  height: 210px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid rgba(48, 207, 208, 0.35);
  box-shadow: 0 14px 45px rgba(0, 0, 0, 0.55);

  @media (max-width: 500px) {
    width: 180px;
    height: 180px;
  }
`;

const AvatarGlow = styled.div`
  position: absolute;
  width: 260px;
  height: 260px;
  border-radius: 50%;
  filter: blur(22px);
  opacity: 0.55;
  background: radial-gradient(
    circle,
    rgba(48, 207, 208, 0.35),
    rgba(51, 8, 103, 0.0) 60%
  );
  z-index: -1;

  @media (max-width: 500px) {
    width: 220px;
    height: 220px;
  }
`;

/* NEW: centers title + subtitle as one block */
const TitleBlock = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 14px;
`;

const MiniTitle = styled.div`
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  font-size: 18px;
  margin: 0;
`;

const MiniSub = styled.div`
  margin-top: 6px;
  font-family: 'Poppins', sans-serif;
  font-size: 13px;
  opacity: 0.85;
`;

const SocialRow = styled.div`
  margin-top: 14px;
  display: flex;
  justify-content: center;
`;

const PrimaryActions = styled.div`
  margin-top: 16px;
  display: grid;
  gap: 10px;
`;

const buttonBase = `
  width: 100%;
  border-radius: 999px;
  font-family: 'Poppins', sans-serif;
  cursor: pointer;
  transition: transform 180ms ease, opacity 180ms ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  &:hover { transform: translateY(-1px); }
  &:active { transform: translateY(0px); opacity: 0.9; }
`;

const PrimaryButton = styled.button`
  ${buttonBase}
  border: none;
  padding: 11px 16px;
  font-size: 15.5px;
  color: #fff;
  background: linear-gradient(to bottom right, #30cfd0, #330867);
`;


const HeroCopy = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  align-items: flex-start;

  padding-left: 28px;
  max-width: 680px;

  @media (max-width: 900px) {
    align-items: center;
    padding-left: 0;
    max-width: 100%;
  }
`;


const Name = styled.h1`
  font-family: 'Poppins', sans-serif;
  font-weight: 750;
  letter-spacing: -0.03em;
  font-size: clamp(37px, 3vw, 54px);
  line-height: 1.05;
  margin: 0;

  white-space: nowrap;
  transform: translateX(2px);

  @media (max-width: 900px) {
    white-space: normal;
    text-align: center;
    transform: none;
  }
`;

const Tagline = styled.p`
  margin: 0;
  max-width: 58ch;
  font-family: 'Poppins', sans-serif;
  font-size: clamp(16px, 1.5vw, 20px);
  line-height: 1.65;
  opacity: 0.92;

  @media (max-width: 900px) {
    text-align: center;
  }
`;

const Bio = styled.p`
  margin: 0;
  max-width: 62ch;
  font-family: 'Poppins', sans-serif;
  font-size: clamp(14px, 1.25vw, 18px);
  line-height: 1.8;
  opacity: 0.82;

  @media (max-width: 900px) {
    text-align: center;
  }
`;
const Chips = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 6px;

  @media (min-width: 900px) {
    justify-content: flex-start;
    margin-left: 4px;
  }

  @media (max-width: 900px) {
    justify-content: center;
  }
`;

/* mouse effect — kept */
const GradientOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  background: radial-gradient(
    circle at ${(props) => props.x}px ${(props) => props.y}px,
    rgba(0, 34, 68, 0.5) 0%,
    rgba(0, 34, 68, 0) 30%
  );
  transition: background 0.1s;
  mix-blend-mode: screen;
`;


const EducationBlock = styled.div`
  margin-top: 14px;
  padding: 12px 14px;
  border-radius: 18px;
  text-align: center;
  background: rgba(255, 255, 255, 0.045);
  border: 1px solid rgba(48, 207, 208, 0.18);
`;

const EducationLabel = styled.div`
  font-family: 'Poppins', sans-serif;
  font-size: 12px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  opacity: 0.65;
  margin-bottom: 8px;
`;

 const Education = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 4px;
  margin-bottom: 8px;

  @media (max-width: 900px) {
    align-items: center;
  }
`;

const School = styled.div`
  font-family: 'Poppins', sans-serif;
  font-size: 15px;
  color: rgba(255, 255, 255, 0.82);
  line-height: 1.5;
`;

export default MainPage;
