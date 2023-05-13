import type React from "react";
import { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import Button from "./Button";

interface CountdownProps {
  updateTimeLeft: (timeLeft: number) => void;
  setTimeLeft: React.Dispatch<React.SetStateAction<number>>;
}

const CountdownWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 20px;
`;

const Countdown: React.FC<CountdownProps> = ({
  updateTimeLeft,
  setTimeLeft,
}) => {
  const localTimeLeftRef = useRef<number | null>(null);
  const [countdownStarted, setCountdownStarted] = useState(false);

  useEffect(() => {
    let intervalId: NodeJS.Timeout | undefined = undefined;

    if (
      countdownStarted &&
      localTimeLeftRef.current !== null &&
      localTimeLeftRef.current > 0
    ) {
      intervalId = setInterval(() => {
        localTimeLeftRef.current = localTimeLeftRef.current
          ? localTimeLeftRef.current - 1
          : null;
        updateTimeLeft(localTimeLeftRef.current ?? 0);
      }, 1000);
    } else if (localTimeLeftRef.current === 0) {
      setCountdownStarted(false);
      clearInterval(intervalId);
      localTimeLeftRef.current = 15;
      setTimeLeft(15);
    }

    return () => {
      if (intervalId !== undefined) {
        clearInterval(intervalId);
      }
    };
  }, [countdownStarted, updateTimeLeft, setTimeLeft]);

  const handleStartClick = () => {
    localTimeLeftRef.current = 15;
    setCountdownStarted(true);
  };

  return (
    <CountdownWrapper>
      <Button handleClick={handleStartClick} text="Start Countdown" />
    </CountdownWrapper>
  );
};

export default Countdown;
