import { TimerContext } from "@/context/TimerContext";
import React, { useContext, useEffect, useState } from "react";

const useMeditationTimer = (defaultDuration: number) => {
  const { duration, setDuration } = useContext(TimerContext);
  const [isMeditating, setMeditating] = useState(false);

  // Runs whenever the duration state changes.
  useEffect(() => {
    let timerId: NodeJS.Timeout;

    // When the secondsRemaining reaches 0, the timer stops and isMeditating is false. Same if user leaves the screen.
    if (duration === 0) {
      setMeditating(false);
      return;
    }

    // When isMeditating is true we set this timer to update the state every second and decrease the secondsRemaining by 1.
    if (isMeditating) {
      timerId = setTimeout(() => {
        setDuration(duration - 1);
      }, 1000); // Passing 1000ms (1 second) to update the state every second.
    }

    return () => clearTimeout(timerId);
  }, [duration, isMeditating]);

  const toggleMeditationSession = () => {
    if (duration === 0) setDuration(30);
    setMeditating(!isMeditating);
    console.log(isMeditating);
  };

  // Resets the timer to the default duration for example when user leaves the screen.
  const resetTimer = () => setDuration(30);

  // Formatting the secondsRemaining to display in the format of MM:SS.
  // Divides the total seconds by 60 to get the number of full minutes.
  // Uses Math.floor() to round down to the nearest whole number
  // If it’s less than 2 digits, it adds a 0 to start using padStart().
  const formattedMinutes = String(Math.floor(duration / 60)).padStart(2, "0");
  const formattedSeconds = String(duration % 60).padStart(2, "0");

  return {
    duration,
    isMeditating,
    toggleMeditationSession,
    resetTimer,
    formattedMinutes,
    formattedSeconds,
  };
};

export default useMeditationTimer;
