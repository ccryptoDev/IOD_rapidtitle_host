
export interface TitleType {
  titleId: number;
  metadataURI: string;
  data: {
    number: string;
    type: string;
    body_type_model: string;
    year_model: string;
    make: string;
    model: string;
    plate_number: string;
    plate_model: string;
    class: string;
    trust_number: string;
    fees_paid: string;
    issue_date: string;
    expiration_date: string;
    registered_owners: string;
    address: string;
    city: string;
    state: string;
    cost: string;
    floor_plan: string;
    images: string[];
  };
  numHolds: number;
  completedHolds: number;
  status: number;
  created_at: string;
}

export interface IMessage {
  filePath: string[];
  message: string;
  fname: string;
  __createdtime__: number;
}

export interface VehicleType {
  number: string;
  type: string;
  body_type_model: string;
  year_model: string;
  make: string;
  model: string;
  plate_number: string;
  plate_model: string;
  class: string;
  trust_number: string;
  fees_paid: string;
  issue_date: string;
  expiration_date: string;
  registered_owners: string;
  address: string;
  city: string;
  state: string;
  cost: string;
  floor_plan: string;
  images: string[];
}