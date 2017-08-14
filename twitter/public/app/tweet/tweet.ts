export interface ITweet {
  created_at: Date;
  profile_image_url: string;
  text: string;
  url?: string;
  media_url?: string;
  followers_count: string;
  friends_count: string;
  location?: string;
}