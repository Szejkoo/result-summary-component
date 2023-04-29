import React from "react";
import styled from "styled-components";
import IconMemory from "../img/icon-memory.svg";
import IconReaction from "../img/icon-reaction.svg";
import IconVerbal from "../img/icon-verbal.svg";
import IconVisual from "../img/icon-visual.svg";

const Container = styled.div`
  @media (min-width: 400px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  @media (min-width: 700px) {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
  }
`;

const Box = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  height: 50vh;
  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 50px;
  background: rgb(53, 42, 237);
  background: linear-gradient(
    0deg,
    rgba(53, 42, 237, 1) 0%,
    rgba(102, 67, 255, 1) 100%
  );
  @media (min-width: 700px) {
    border-radius: 50px;
    height: 50vh;
  }
  @media (min-width: 400px) {
    max-width: 400px;
  }
`;
const SecondBox = styled.div`
  height: 50vh;
  margin: 0 50px;
  @media (min-width: 700px) {
    margin: 0 10px;
  }
`;

const Heading = styled.h3`
  color: #fff;
  font-size: 32px;
  margin: 25px 0 0 0;
  @media (min-width: 700px) {
    margin: 70px 0 0 0;
  }
`;

const SecondHeading = styled.h3`
  color: rgba(0, 0, 0, 0.7);
`;
const Text = styled.p`
  color: rgba(255, 255, 255, 0.5);
  font-size: 18px;
  font-weight: bold;
`;
const CircleText = styled.p`
  color: rgba(255, 255, 255, 0.5);
  font-size: 18px;
  margin: 0;
`;
const InfoText = styled.p`
  display: flex;
  width: 250px;
  text-align: center;
  color: rgba(255, 255, 255, 0.7);
  margin: 10px;
`;
const Num = styled.p`
  font-size: 64px;
  font-weight: bold;
  color: #fff;
  margin: 0;
`;
const Circle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  flex-direction: column;
  width: 160px;
  height: 160px;
  border-radius: 50%;
  background: rgb(75, 53, 245);
  background: linear-gradient(
    0deg,
    rgba(75, 53, 245, 1) 0%,
    rgba(73, 37, 215, 1) 100%
  );
`;
const Panel = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 300px;
  background-color: #ff57571a;
  border-radius: 10px;
`;
const IconText = styled.div`
  display: flex;
  align-items: center;
`;
const PanelText = styled.h4`
  color: hsl(0, 100%, 67%);
  font-weight: bold;
  margin: 0 10px;
`;
const PanelNum = styled.h4`
  display: flex;
  color: rgba(0, 0, 0, 0.5);
`;
const SecondPanel = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 300px;

  background-color: #ffb01f1a;
  border-radius: 10px;
  margin: 10px 0;
`;
const SecondPanelText = styled.h4`
  color: hsl(39, 100%, 56%);
  font-weight: bold;
  margin: 0 10px;
`;
const ThridPanel = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 300px;

  background-color: #00bd911a;
  border-radius: 10px;
  margin: 10px 0;
`;
const ThridPanelText = styled.h4`
  color: hsl(166, 100%, 37%);
  font-weight: bold;
  margin: 0 10px;
`;
const FourthPanel = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 300px;

  background-color: #1125d41a;
  border-radius: 10px;
  margin: 10px 0;
`;
const FourthPanelText = styled.h4`
  color: hsl(234, 85%, 45%);
  font-weight: bold;
  margin: 0 10px;
`;

const Btn = styled.button`
  width: 300px;
  height: 50px;
  background-color: hsl(224, 30%, 27%);
  font-weight: bold;
  color: #fff;
  border: none;
  border-radius: 25px;
  transition: background-color 0.5s;
  cursor: pointer;
  &:hover {
    background-color: hsl(252, 100%, 67%);
  }
`;

const TextColor = styled.div`
  color: #333;
`;
function Main() {
  return (
    <Container>
      <Box>
        <Text>Your Result</Text>
        <Circle>
          <Num>76</Num>
          <CircleText>of 100</CircleText>
        </Circle>
        <Heading>Great</Heading>
        <InfoText>
          You scored higher than 65% of the people who have taken these tests.
        </InfoText>
      </Box>
      <SecondBox>
        <SecondHeading>Summary</SecondHeading>
        <Panel>
          <IconText>
            <img src={IconReaction} alt="LightningIcon" />
            <PanelText>Reaction</PanelText>
          </IconText>
          <PanelNum>
            <TextColor>80</TextColor>/ 100
          </PanelNum>
        </Panel>
        <SecondPanel>
          <IconText>
            <img src={IconMemory} alt="BrainIcon" />
            <SecondPanelText>Memory</SecondPanelText>
          </IconText>
          <PanelNum>
            <TextColor>92</TextColor>/ 100
          </PanelNum>
        </SecondPanel>
        <ThridPanel>
          <IconText>
            <img src={IconVerbal} alt="MessageIcon" />
            <ThridPanelText>Verbal</ThridPanelText>
          </IconText>
          <PanelNum>
            <TextColor>61</TextColor> / 100
          </PanelNum>
        </ThridPanel>
        <FourthPanel>
          <IconText>
            <img src={IconVisual} alt="EyeIcon" />
            <FourthPanelText>Visual</FourthPanelText>
          </IconText>
          <PanelNum>
            <TextColor>72</TextColor> / 100
          </PanelNum>
        </FourthPanel>
        <Btn>Continue</Btn>
      </SecondBox>
    </Container>
  );
}

export default Main;
