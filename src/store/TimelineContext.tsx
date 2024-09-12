import { CACHE_KEY } from '@constants/cache';
import { ERR_TIMLINE_CONTEXT } from '@constants/messages';
import {
  TimelineContextType,
  TimelineData,
} from 'interfaces/timeline.interface';
import React, { createContext, useContext, useState } from 'react';

const TimelineContext = createContext<TimelineContextType | undefined>(
  undefined,
);

export const timelineColors = { up: '#16C782', down: '#EA3943' };

export const TimelineProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [currentFinance, setCurrentFinance] = useState<TimelineData>({
    x: new Date(),
    o: 0,
    h: 0,
    l: 0,
    c: 0,
  });
  const [data, setData] = useState<TimelineData[]>([]);

  const addData = (newData: TimelineData) => {
    setData((prevData) => {
      const existingIndex = prevData.findIndex(
        (item) => item.x.getTime() === newData.x.getTime(),
      );

      let updatedData;
      if (existingIndex !== -1) {
        updatedData = [...prevData];
        updatedData[existingIndex] = newData;
      } else {
        updatedData = [...prevData, newData];
      }

      localStorage.setItem(CACHE_KEY, JSON.stringify(updatedData));
      return updatedData;
    });
  };

  const setTimlineData = (newData: TimelineData[]) => {
    setData(newData);
  };

  const onSetCurrentFinance = (newFinance: TimelineData) => {
    setCurrentFinance(newFinance);
  };

  return (
    <TimelineContext.Provider
      value={{
        data,
        addData,
        setTimlineData,
        currentFinance,
        onSetCurrentFinance,
      }}
    >
      {children}
    </TimelineContext.Provider>
  );
};

export const useTimelineContext = () => {
  const context = useContext(TimelineContext);
  if (!context) {
    throw new Error(ERR_TIMLINE_CONTEXT);
  }
  return context;
};

export default TimelineContext;
