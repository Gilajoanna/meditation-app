// Contexts acts as a wrapper component so that I can manage this Timer state through the whole app.

import { createContext, Dispatch, SetStateAction, useState } from "react";

interface TimerContextType {
  duration: number;
  setDuration: Dispatch<SetStateAction<number>>;
}

export const TimerContext = createContext<TimerContextType>({
  duration: 30,
  setDuration: () => {},
});

interface TimerProviderProps {
  children: React.ReactNode;
}

const TimerProvider = ({ children }: TimerProviderProps) => {
  const [duration, setDuration] = useState(30);

  return (
    <TimerContext.Provider value={{ duration, setDuration }}>
      {children}
    </TimerContext.Provider>
  );
};

export default TimerProvider;
