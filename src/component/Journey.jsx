import React, { useMemo, useState, useEffect, useRef } from "react";
import styled, { keyframes } from "styled-components";

const Journey = () => {
  const milestones = useMemo(
    () => [
      {
        year: "2017",
        title: "Moved to the U.S.",
        subtitle: "El Salvador → United States",
        details: [
          "Finished high school in the U.S.",
          "Adapted to a new country + language + system",
        ],
        tags: ["El Salvador", "U.S."],
      },
      {
        year: "2022",
        title: "Bergen Community College",
        subtitle: "A.S. in Information Technology",
        details: [
          "Built strong fundamentals in CS + software systems",
          "Prepared for transfer into a 4-year CS program",
        ],
        tags: ["Bergen CC", "A.S."],
      },
      {
        year: "2025",
        title: "Stevens Institute of Technology",
        subtitle: "B.S. in Computer Science",
        details: [
          "Software Engineering, Data Structures and Algorithms, AI/ML",
          "Internships, research, and TA roles in software engineering and CS courses",
        ],
        tags: ["Stevens", "B.S. CS"],
      },
      {
        year: "Experience",
        title: "Highlights",
        subtitle: "Work + research + teaching",
        details: [
          "Software Engineer for NYC start-ups",
          "Research Assistant at John Cabot University + Bergen",
          "TA and Tutor at Stevens + Bergen",
        ],
        tags: ["NYC", "Rome"],
      },
      {
        year: "2026",
        title: "New York University",
        subtitle: "M.S in Computer Science",
        details: [
          "Actively seeking research and TA positions",

        ],
        tags: ["NYC", "AI", "SWE"],
      },
    ],
    []
  );

  const [openIndex, setOpenIndex] = useState(0);

  // simple “reveal on scroll into view”
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.15 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <Wrap ref={sectionRef} data-inview={inView}>
      <Header>
        <h1>My Journey</h1>
        <p>
          Born and raised in El Salvador. Came to the U.S. in 2017, started at
          Bergen CC, and graduated from Stevens in 2025 with a B.S. in Computer Science. Currently pursuing
          an M.S degree in Computer Science at NYU
        </p>

        <StatsRow>
          <StatCard>
            <StatNum>2</StatNum>
            <StatLabel>Startups</StatLabel>
          </StatCard>
          <StatCard>
            <StatNum>2</StatNum>
            <StatLabel>Research roles</StatLabel>
          </StatCard>
          <StatCard>
            <StatNum>TA</StatNum>
            <StatLabel>& Tutor</StatLabel>
          </StatCard>
        </StatsRow>
      </Header>

      <Timeline>
        <Line />

        {milestones.map((m, idx) => {
          const isOpen = idx === openIndex;
          return (
            <Item key={m.year}>
              <Dot data-active={isOpen} />
              <Card
                role="button"
                tabIndex={0}
                onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    setOpenIndex(isOpen ? -1 : idx);
                  }
                }}
                data-open={isOpen}
              >
                <TopRow>
                  <Year>{m.year}</Year>
                  <Titles>
                    <Title>{m.title}</Title>
                    <Sub>{m.subtitle}</Sub>
                  </Titles>
                </TopRow>

                <Tags>
                  {m.tags.map((t) => (
                    <Tag key={t}>{t}</Tag>
                  ))}
                </Tags>

                <Expand data-open={isOpen}>
                  <ul>
                    {m.details.map((d) => (
                      <li key={d}>{d}</li>
                    ))}
                  </ul>
                </Expand>

                <Hint>{isOpen ? "Click to collapse" : "Click to expand"}</Hint>
              </Card>
            </Item>
          );
        })}
      </Timeline>
    </Wrap>
  );
};

export default Journey;

/* ---------------- styles ---------------- */

const reveal = keyframes`
  from { opacity: 0; transform: translateY(10px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const Wrap = styled.section`
  width: min(980px, 92vw);
  margin: 0 auto;
  padding: clamp(42px, 6vw, 72px) 0;

  &[data-inview="true"] {
    animation: ${reveal} 520ms ease both;
  }
`;

const Header = styled.div`
  text-align: center;
  display: grid;
  gap: 14px;

  h1 {
    margin: 0;
    font-family: "Poppins", sans-serif;
    font-weight: 760;
    font-size: clamp(34px, 3vw, 54px);
    letter-spacing: -0.03em;
  }

  p {
    margin: 0 auto;
    max-width: 70ch;
    opacity: 0.82;
    line-height: 1.8;
    font-family: "Poppins", sans-serif;
  }
`;

const StatsRow = styled.div`
  margin-top: 10px;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 12px;

  @media (max-width: 650px) {
    grid-template-columns: 1fr;
  }
`;

const StatCard = styled.div`
  border-radius: 18px;
  padding: 14px 14px;
  border: 1px solid rgba(48, 207, 208, 0.22);
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(10px);
`;

const StatNum = styled.div`
  font-family: "Poppins", sans-serif;
  font-weight: 750;
  font-size: 22px;
`;

const StatLabel = styled.div`
  margin-top: 2px;
  font-family: "Poppins", sans-serif;
  opacity: 0.78;
  font-size: 13px;
`;

const Timeline = styled.div`
  position: relative;
  margin-top: 28px;
  display: grid;
  gap: 14px;
`;

const Line = styled.div`
  position: absolute;
  left: 14px;
  top: 0;
  bottom: 0;
  width: 2px;
  background: linear-gradient(
    to bottom,
    rgba(48, 207, 208, 0.0),
    rgba(48, 207, 208, 0.35),
    rgba(51, 8, 103, 0.35),
    rgba(48, 207, 208, 0.0)
  );
`;

const Item = styled.div`
  position: relative;
  padding-left: 44px;
`;

const Dot = styled.div`
  position: absolute;
  left: 8px;
  top: 22px;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  border: 2px solid rgba(48, 207, 208, 0.5);
  background: rgba(0, 0, 0, 0.6);

  &[data-active="true"] {
    background: rgba(48, 207, 208, 0.35);
    box-shadow: 0 0 0 6px rgba(48, 207, 208, 0.12);
  }
`;

const Card = styled.div`
  border-radius: 22px;
  padding: 16px 16px 14px;
  border: 1px solid rgba(48, 207, 208, 0.2);
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(10px);
  cursor: pointer;
  transition: transform 180ms ease, border-color 180ms ease;

  &:hover {
    transform: translateY(-2px);
    border-color: rgba(48, 207, 208, 0.38);
  }

  &[data-open="true"] {
    border-color: rgba(48, 207, 208, 0.5);
  }
`;

const TopRow = styled.div`
  display: flex;
  gap: 14px;
  align-items: baseline;
`;

const Year = styled.div`
  font-family: "Poppins", sans-serif;
  font-weight: 750;
  letter-spacing: -0.02em;
  opacity: 0.95;
`;

const Titles = styled.div`
  display: grid;
  gap: 2px;
`;

const Title = styled.div`
  font-family: "Poppins", sans-serif;
  font-weight: 650;
  font-size: 16px;
`;

const Sub = styled.div`
  font-family: "Poppins", sans-serif;
  font-size: 13px;
  opacity: 0.8;
`;

const Tags = styled.div`
  margin-top: 10px;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const Tag = styled.span`
  font-family: "Poppins", sans-serif;
  font-size: 12px;
  padding: 6px 10px;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(255, 255, 255, 0.04);
  opacity: 0.9;
`;

const Expand = styled.div`
  margin-top: 10px;
  overflow: hidden;
  max-height: 0;
  opacity: 0;
  transition: max-height 260ms ease, opacity 220ms ease;

  ul {
    margin: 0;
    padding-left: 18px;
    line-height: 1.75;
    opacity: 0.86;
    font-family: "Poppins", sans-serif;
    font-size: 14px;
  }

  &[data-open="true"] {
    max-height: 240px;
    opacity: 1;
  }
`;

const Hint = styled.div`
  margin-top: 10px;
  font-family: "Poppins", sans-serif;
  font-size: 12px;
  opacity: 0.55;
`;
