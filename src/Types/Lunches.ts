type Payload = {
  payload_id: String;
  nationality: String;
  manufacturer: String;
  payload_type: String;
  orbit: String;
};

type SecondStage = {
  payloads: Array<Payload>;
};

type Rocket = {
  rocket_id: String;
  rocket_name: String;
  rocket_type: String;
  second_stage: SecondStage;
};

type LaunchSite = {
  site_id: String;
  site_name: String;
  site_name_long: String;
};

type Links = {
  article_link: string;
  wikipedia: string;
  video_link: string;
}

export type Launch = {
  flight_number: Number;
  mission_name: String;
  launch_date_utc: Date;
  rocket: Rocket;
  launch_site: LaunchSite;
  launch_success: Boolean;
  details: String;
  links: Links;
};

export type Launches = Array<Launch>;
