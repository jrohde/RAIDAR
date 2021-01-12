export interface Song {
  album_id: string;
  // $oid: string;
  song_id: string;
  song_title: string;
  song_writer: string;
  song_producer: string;
  recording_engineer: string;
  mixing_engineer: string;
  mastering_engineer: string;
  performer_known_as: string;
  file_location: string;
  file_preview_loc: string;
  license_terms: string;
  musical_key: string;
  recording_country: string;
  recording_date: any;
  recording_frmt: any;
  recording_location: any;
  ts: any;
  artwork_loc?: string;
  currency: string;
  price: string;
  bpm: number;
  has_vocals: any;
  user_id: string;
  artwork?: string;
  length?: string;
  mood?: string;
  genre?: string;
  tags?: string;
  vocal_langs?: any;
  verified?: number;
}
