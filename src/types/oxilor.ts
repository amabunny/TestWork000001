export type ParentRegion = {
  id: string;
  name: string;
};

export type Location = {
  id: string;
  name: string;
  latitude: number;
  longitude: number;
  continentCode: string;
  countryCode: string;
  division1Code: string;
  division2Code: string | null;
  division3Code: string | null;
  division4Code: string | null;
  population: string;
  timezone: string;
  type: string;
  parentRegions: ParentRegion[];
};

export type LocationResponse = Location[];
