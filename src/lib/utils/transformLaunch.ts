type Launch = {
  id: string
  missionName: string
  launchDateUtc: string
  details: string | null
  links: {
    flickrImages: string[]
  }
  rocket: {
    fairings: {
      recovered: boolean | null
    }
  }
}

type ApiLaunch = {
  id: string
  mission_name: string
  launch_date_utc: string
  details: string | null
  links: {
    flickr_images: string[]
  }
  rocket: {
    fairings: {
      recovered: boolean | null
    }
  }
}

export const transformLaunch = (apiLaunch: ApiLaunch): Launch => {
  return {
    id: apiLaunch.id,
    missionName: apiLaunch.mission_name,
    launchDateUtc: apiLaunch.launch_date_utc,
    details: apiLaunch.details,
    links: {
      flickrImages: apiLaunch.links.flickr_images,
    },
    rocket: {
      fairings: {
        recovered: apiLaunch.rocket.fairings.recovered,
      },
    },
  }
} 