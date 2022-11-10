type Rocket = {
  rocket_id: String;
  rocket_name: String;
  rocket_type: String;
};

type Payload = {
  payload_id: String;
  nationality: String;
  manufacturer: String;
  payload_type: String;
};

type SecondStage = {
  payloads: Array<Payload>;
};

type LaunchSite = {
  site_id: String;
  site_name: String;
  site_name_long: String;
};

export type Launch = {
  flight_number: Number;
  mission_name: String;
  launch_date_utc: Date;
  rocket: Rocket;
  second_stage: SecondStage;
  launch_site: LaunchSite;
  launch_success: Boolean;
  details: String;
};

export type Launches = Array<Launch>;
