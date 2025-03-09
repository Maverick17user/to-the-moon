

export interface Launch {
  id: string
  mission_name: string
  mission_id: string[]
  launch_date_utc: string
  details: string | null
  links: {
    flickr_images: string[]
    mission_patch: string | null
  }
  rocket: {
    rocket_name: string
    fairings?: {
      recovered: boolean | null
    }
  }
  launch_success: boolean
} 