
export interface Citation {
  source: string;
  page: number | string;
}

export interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: number;
  citations?: Citation[];
  isLoading?: boolean;
}

export interface KnowledgeEntry {
  category: string;
  content: string;
  source: string;
  page: number | string;
}

export enum CampusCategory {
  ADMISSIONS = 'Admissions',
  FEES = 'Fee Structure',
  PROGRAMS = 'Academic Programs',
  CALENDAR = 'Academic Calendar',
  CONVOCATION = 'Convocation',
  GENERAL = 'General Info'
}
