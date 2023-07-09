import React, { createContext, ReactNode, useState, useEffect } from 'react';
import { IEntry, MoodContextData, IChartData } from '../interfaces';
import { feelings as feelingValues } from '../utils';

export const MoodContext = createContext({} as MoodContextData);

export const MoodProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [rate, setRate] = useState<number | null>(null);
  const [feelings, setFeelings] = useState<string[]>([]);
  const [entries, setEntries] = useState<IEntry[] | null>(null);
  const [chartData, setChartData] = useState<IChartData[]>([]);

  const addNewEntry = (entry: IEntry) => {
    setEntries((prevEntries) => {
      if (prevEntries) {
        return [...prevEntries, entry];
      }
      return [entry];
    });
  };

  const processChartsData = () => {
    if (entries) {
      const entriesArray: IChartData[] = [];
      feelingValues.forEach((feeling) => {
        const entriesWithFeeling = entries.filter((entry) =>
          entry.feelings.includes(feeling.value)
        );
        const arrayRatePerFeeling = entriesWithFeeling.map((entry) => entry.rate);
        entriesArray.push({
          feeling: feeling.label,
          total: entriesWithFeeling.length,
          rates: arrayRatePerFeeling.sort((a, b) => a - b),
        });
      });
      setChartData(entriesArray.sort((a, b) => b.total - a.total));
    }
  };

  useEffect(() => {
    processChartsData();
  }, [entries]);

  return (
    <MoodContext.Provider
      value={{
        rate,
        setRate,
        feelings,
        setFeelings,
        entries,
        setEntries,
        addNewEntry,
        chartData,
      }}
    >
      {children}
    </MoodContext.Provider>
  );
};

export default MoodProvider;
