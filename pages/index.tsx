import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';
import Layout from '@/components/pages/home/Layout';
import Button from '@/components/common/Button';
import landing1 from '@/public/images/resource/desktop/landging1.png';
import landing2 from '@/public/images/resource/desktop/landging2.png';
import landing3 from '@/public/images/resource/desktop/landging3.png';
import landing4 from '@/public/images/resource/desktop/landging4.png';
import landing5 from '@/public/images/resource/desktop/landging5.png';
import { BLACK, WHITE, GRAY, VIOLET } from '@/styles/ColorStyles';
import { FONT_16, FONT_18, FONT_18_B, FONT_22, FONT_28_B } from '@/styles/FontStyles';

function Home() {
  return (
    <Layout>
      <Container>
        <Image src="/images/tasky_home_main.png" alt="메인 이미지" width={722} height={423} />
        <TitleContainer>
          <Title>새로운 일정 관리</Title>
          <TaskifyTitle>Taskify</TaskifyTitle>
        </TitleContainer>
        <Subtitle>서비스의 메인 설명 들어갑니다.</Subtitle>
        <Link href="/login">
          <ButtonWrapper>
            <Button.Plain style="primary" roundSize="L">
              로그인하기
            </Button.Plain>
          </ButtonWrapper>
        </Link>
        <SectionContainer>
          <FirstSection>
            <Text>
              <Point>Point 1</Point>
              <Content>
                일의 <SPAN>우선순위</SPAN>를<br />
                관리하세요
              </Content>
            </Text>
            <Image src={landing1} alt="랜딩 1" />
          </FirstSection>
          <SecondSection>
            <Image src={landing2} alt="랜딩 2" />
            <Text>
              <Point>Point 2</Point>
              <Content>해야 할 일을 등록하세요</Content>
            </Text>
          </SecondSection>
          <ThirdSection>
            <ThirdSectionTitle>생산성을 높이는 다양한 설정 ⚡</ThirdSectionTitle>
            <ThirdContainer>
              <WrapperBox>
                <ImageBox>
                  <Image src={landing3} alt="랜딩 3" height="133" />
                </ImageBox>
                <TextBox>
                  <Text1>대시보드 설정</Text1>
                  <Text2>대시보드 사진과 이름을 변경할 수 있어요.</Text2>
                </TextBox>
              </WrapperBox>
              <WrapperBox>
                <ImageBox>
                  <Image src={landing4} alt="랜딩 4" width="323" height="176" />
                </ImageBox>
                <TextBox>
                  <Text1>초대</Text1>
                  <Text2>새로운 팀원을 초대할 수 있어요.</Text2>
                </TextBox>
              </WrapperBox>
              <WrapperBox>
                <ImageBox>
                  <Image src={landing5} alt="랜딩 5" height="210" />
                </ImageBox>
                <TextBox>
                  <Text1>구성원</Text1>
                  <Text2>구성원을 초대하고 내보낼 수 있어요.</Text2>
                </TextBox>
              </WrapperBox>
            </ThirdContainer>
          </ThirdSection>
        </SectionContainer>
      </Container>
    </Layout>
  );
}

export default Home;

const Container = styled.div`
  margin-top: 94px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  margin: 48px 20px 24px 0;
  font-size: 76px;
  font-weight: 700;
  color: ${BLACK[1]};
`;

const TaskifyTitle = styled(Title)`
  font-family: Montserrat;
  font-size: 90px;
  line-height: 65px; /* 72.222% */
  color: ${VIOLET[1]};
  letter-spacing: -1px;
`;

const Subtitle = styled.span`
  margin-bottom: 66px;
  ${FONT_18};
  font-weight: 400;
  color: ${BLACK[1]};
  letter-spacing: -1px;
`;

const SectionContainer = styled.div`
  width: 1200px;
  margin: 184px 0 160px 0;
  display: flex;
  flex-direction: column;
  gap: 90px;
`;

const FirstSection = styled.div`
  width: 100%;
  height: 600px;
  padding: 103px 0 0 60px;
  position: relative;
  display: flex;
  justify-content: space-between;
  background: #f7f0fa;
  border-radius: 8px;
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  gap: 100px;
`;

const Point = styled.p`
  ${FONT_22};
  color: ${GRAY[40]};
  font-feature-settings:
    'clig' off,
    'liga' off;
`;

const Content = styled.p`
  font-size: 48px;
  font-style: normal;
  font-weight: 700;
  line-height: 64px; /* 133.333% */
  color: ${BLACK[1]};
  font-feature-settings:
    'clig' off,
    'liga' off;
`;

const SPAN = styled.span`
  color: ${GRAY[30]};
`;

const SecondSection = styled.div`
  width: 100%;
  height: 600px;
  padding: 98px 310px 0 108px;
  position: relative;
  display: flex;
  gap: 100px;
  background: #f7f0fa;
  border-radius: 8px;
`;

const ThirdSection = styled.div`
  width: 100%;
  height: 600px;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 36px;
  background: ${WHITE}; //배경 색이랑 똑같게
  border-radius: 8px;
`;

const ThirdSectionTitle = styled.p`
  ${FONT_28_B};
  color: ${BLACK[1]};
  font-feature-settings:
    'clig' off,
    'liga' off;
`;

const ThirdContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 33px;
`;

const WrapperBox = styled.div`
  width: 378px;
  display: flex;
  flex-direction: column;
  background-color: ${VIOLET[1]};
`;

const ImageBox = styled.div`
  width: 100%;
  height: 260px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TextBox = styled.div`
  background: #f7f0fa;
  width: 100%;
  height: 124px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Text1 = styled.p`
  color: ${BLACK[1]};
  ${FONT_18_B};
`;

const Text2 = styled.p`
  color: ${BLACK[1]};
  ${FONT_16};
`;

const ButtonWrapper = styled.div`
  width: 280px;
  height: 50px;
`;
