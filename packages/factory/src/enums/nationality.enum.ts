export const Nationality = {
  US: 'US',
  JAPAN: '日本',
} as const;

export type Nationality = (typeof Nationality)[keyof typeof Nationality];

export const NATIONALITY_OPTIONS = [
  { label: 'US (English)', value: Nationality.US },
  { label: '日本 (Japanese)', value: Nationality.JAPAN },
];
