interface IMetro {
  distance: number;
  line: string;
  name: string;
}

interface ICityDistrict {
  fias_id: null;
  kladr_id: null;
  type: string;
  type_full: string;
  name: string;
  name_with_type: string;
}

interface IDivisions {
  administrative: {
    area: null;
    city: null;
    city_district: ICityDistrict;
    settlement: null;
    planning_structure: null;
  };
}

export interface IAddressResponseItem {
  source: string;
  result: string;
  postal_code: string;
  country: string;
  country_iso_code: string;
  federal_district: string;
  region_fias_id: string;
  region_kladr_id: string;
  region_iso_code: string;
  region_with_type: string;
  region_type: string;
  region_type_full: string;
  region: string;
  area_fias_id: null;
  area_kladr_id: null;
  area_with_type: null;
  area_type: null;
  area_type_full: null;
  area: null;
  city_fias_id: null;
  city_kladr_id: null;
  city_with_type: null;
  city_type: null;
  city_type_full: null;
  city: null;
  city_area: string;
  city_district_fias_id: null;
  city_district_kladr_id: null;
  city_district_with_type: string;
  city_district_type: string;
  city_district_type_full: string;
  city_district: string;
  settlement_fias_id: null;
  settlement_kladr_id: null;
  settlement_with_type: null;
  settlement_type: null;
  settlement_type_full: null;
  settlement: null;
  street_fias_id: string;
  street_kladr_id: string;
  street_with_type: string;
  street_type: string;
  street_type_full: string;
  street: string;
  stead_fias_id: null;
  stead_kladr_id: null;
  stead_cadnum: null;
  stead_type: null;
  stead_type_full: null;
  stead: null;
  house_fias_id: string;
  house_kladr_id: string;
  house_cadnum: string;
  house_type: string;
  house_type_full: string;
  house: string;
  house_flat_count: string;
  block_type: null;
  block_type_full: null;
  block: null;
  entrance: null;
  floor: null;
  flat_fias_id: string;
  flat_cadnum: string;
  flat_type: string;
  flat_type_full: string;
  flat: string;
  flat_area: string;
  square_meter_price: string;
  flat_price: string;
  postal_box: null;
  room_type: null;
  room_type_full: null;
  room: null;
  fias_id: string;
  fias_code: string;
  fias_level: string;
  fias_actuality_state: string;
  kladr_id: string;
  geoname_id: string;
  capital_marker: string;
  okato: string;
  oktmo: string;
  tax_office: string;
  tax_office_legal: string;
  timezone: string;
  geo_lat: string;
  geo_lon: string;
  beltway_hit: string;
  beltway_distance: null;
  qc_geo: number;
  qc_complete: number;
  qc_house: number;
  qc: number;
  unparsed_parts: null;
  metro: IMetro[];
  divisions: IDivisions;
}
