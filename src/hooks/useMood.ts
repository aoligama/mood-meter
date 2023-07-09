import { useContext } from 'react';
import { MoodContext } from '../contexts/MoodProvider';

export default function useMood() {
  const { rate, setRate, feelings, setFeelings, entries, setEntries, addNewEntry, chartData } =
    useContext(MoodContext);

  return {
    rate,
    setRate,
    feelings,
    setFeelings,
    entries,
    setEntries,
    addNewEntry,
    chartData,
  };
}
