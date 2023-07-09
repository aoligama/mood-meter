export interface IEntry {
  datetime: string;
  rate: number;
  feelings: string[];
}

export interface MoodContextData {
  rate: number | null;
  setRate: (rate: number) => void;
  feelings: string[];
  setFeelings: (feelings: string[]) => void;
  entries: IEntry[] | null;
  setEntries: (entries: IEntry[]) => void;
  addNewEntry: (entry: IEntry) => void;
  chartData: IChartData[];
}

export interface IChartData {
  feeling: string;
  total: number;
  rates: number[];
}
