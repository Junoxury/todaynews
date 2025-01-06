import { Geist } from "next/font/google";
import styled from "styled-components";

const geistSans = Geist({
  subsets: ["latin"],
});

const Container = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  min-height: 100vh;
  background-color: #f0f4ff;
`;

const Header = styled.header`
  margin-bottom: 3rem;
  text-align: center;
  background: linear-gradient(135deg, #6b46c1 0%, #805ad5 100%);
  padding: 2rem;
  border-radius: 20px;
  color: white;
  box-shadow: 0 4px 20px rgba(107, 70, 193, 0.2);
`;

const Title = styled.h1`
  font-family: ${geistSans.style.fontFamily};
  color: white;
  font-size: 2.5rem;
  margin-bottom: 1rem;
  font-weight: 700;
`;

const Subtitle = styled.p`
  color: rgba(255, 255, 255, 0.9);
  font-size: 1.1rem;
  margin-bottom: 0;
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  padding: 1rem;
`;

const Card = styled.div`
  background: white;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  cursor: pointer;
  border: 1px solid #e9ecef;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 25px rgba(107, 70, 193, 0.15);
  }
`;

const CardImage = styled.div`
  width: 100%;
  height: 160px;
  background-color: #e9ecef;
  background-image: ${props => `url(${props.src})`};
  background-size: cover;
  background-position: center;
`;

const CardContent = styled.div`
  padding: 1.5rem;
  background: linear-gradient(180deg, #ffffff 0%, #f8f9ff 100%);
`;

const CardTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 0.75rem;
`;

const CardDescription = styled.p`
  font-size: 0.95rem;
  color: #4a5568;
  line-height: 1.6;
  margin-bottom: 1rem;
`;

const CardMeta = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 1rem;
  border-top: 1px solid #edf2ff;
`;

const CardDate = styled.span`
  font-size: 0.85rem;
  color: #718096;
  display: flex;
  align-items: center;
  
  &:before {
    content: "📅";
    margin-right: 0.5rem;
  }
`;

const CardTag = styled.span`
  background: ${props => {
    switch (props.tag) {
      case "프로그램":
        return "#6b46c1";
      case "신청":
        return "#805ad5";
      case "안내":
        return "#9f7aea";
      default:
        return "#6b46c1";
    }
  }};
  color: white;
  padding: 0.4rem 1rem;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 500;
`;

export default function Home() {
  const cards = [
    {
      id: 1,
      title: "청년우대형 프로그램",
      description: "2024년 상반기 청년우대형 프로그램 신청 안내",
      image: "/program1.jpg",
      date: "2024.01.06",
      tag: "프로그램"
    },
    {
      id: 2,
      title: "프로그램 기간 연장",
      description: "프로그램 기간이 2024년 5월 11일까지 연장되었습니다",
      image: "/program2.jpg",
      date: "2024.01.06",
      tag: "안내"
    },
    {
      id: 3,
      title: "신청 서류 준비",
      description: "프로그램 신청을 위한 필수 서류 안내",
      image: "/program3.jpg",
      date: "2024.01.06",
      tag: "신청"
    },
    {
      id: 4,
      title: "프로그램 설명회",
      description: "온라인 프로그램 설명회 참여 안내",
      image: "/program4.jpg",
      date: "2024.01.06",
      tag: "안내"
    }
  ];

  return (
    <main className={geistSans.className}>
      <Container>
        <Header>
          <Title>청년우대형 프로그램</Title>
          <Subtitle>2024년 상반기 프로그램 안내</Subtitle>
        </Header>
        <CardGrid>
          {cards.map(card => (
            <Card key={card.id}>
              <CardImage src={card.image} />
              <CardContent>
                <CardTitle>{card.title}</CardTitle>
                <CardDescription>{card.description}</CardDescription>
                <CardMeta>
                  <CardDate>{card.date}</CardDate>
                  <CardTag tag={card.tag}>{card.tag}</CardTag>
                </CardMeta>
              </CardContent>
            </Card>
          ))}
        </CardGrid>
      </Container>
    </main>
  );
}

