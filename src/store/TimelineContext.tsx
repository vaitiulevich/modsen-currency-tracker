import React, { createContext, useContext, useState } from 'react';

interface DataPoint {
  x: Date;
  o: number;
  h: number;
  l: number;
  c: number;
}

export interface TimelineContextType {
  data: DataPoint[];
  addData: (newData: DataPoint) => void;
}

const TimelineContext = createContext<TimelineContextType | undefined>(
  undefined,
);

export const TimelineProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [data, setData] = useState<DataPoint[]>([]);

  const addData = (newData: DataPoint) => {
    setData((prevData) => [...prevData, newData]);
  };

  return (
    <TimelineContext.Provider value={{ data, addData }}>
      {children}
    </TimelineContext.Provider>
  );
};

export const useTimelineContext = () => {
  const context = useContext(TimelineContext);
  if (!context) {
    throw new Error(
      'useTimelineContext must be used within a TimelineProvider',
    );
  }
  return context;
};

export default TimelineContext;
