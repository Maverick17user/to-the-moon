import { gql } from '@apollo/client'

export const LAUNCH_FRAGMENT = gql`
  fragment LaunchFields on Launch {
    id
    mission_name
    mission_id
    launch_date_utc
    rocket {
      rocket_name
      fairings {
        recovered
      }
    }
    details
    links {
      flickr_images
      mission_patch
    }
    launch_success
  }
`

export const GET_LAUNCHES = gql`
  query GetLaunches {
    # sort Doesn't fork for some reason o_O, implemented on a client side instead
    launches(sort: "mission_name", order: "asc") {
      ...LaunchFields
    }
  }
  ${LAUNCH_FRAGMENT}
`

export const SEARCH_LAUNCHES = gql`
  query SearchLaunches {
    launches {
      ...LaunchFields
    }
  }
  ${LAUNCH_FRAGMENT}
`