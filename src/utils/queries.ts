import { gql } from 'graphql-request';

const Get2024MembersQuery = gql`
  query Get2024CoreMembers {
    members(
      sort: "id"
      pagination: { limit: 100 }
      filters: { year: { eq: 2024 } }
    ) {
      data {
        id
        attributes {
          name
          designation
          department
          image {
            data {
              attributes {
                url
                formats
              }
            }
          }
        }
      }
    }
  }
`;
const Get2023MembersQuery = gql`
  query Get2023Members {
    members(
      sort: "id"
      pagination: { limit: 100 }
      filters: { year: { eq: 2023 } }
    ) {
      data {
        id
        attributes {
          name
          designation
          department
          image {
            data {
              attributes {
                url
                formats
              }
            }
          }
        }
      }
    }
  }
`;

const Get2022MembersQuery = gql`
  query Get2022Members {
    members(
      sort: "id"
      pagination: { limit: 100 }
      filters: { year: { eq: 2022 } }
    ) {
      data {
        id
        attributes {
          name
          designation
          department
          image {
            data {
              attributes {
                url
                formats
              }
            }
          }
        }
      }
    }
  }
`;

const GetLatestEventQuery = gql`
  query GetLatestEvent {
    events(sort: "start:desc", pagination: { limit: 1 }) {
      data {
        attributes {
          name
          summary
          theme
          slug
          registration_link
          image {
            data {
              attributes {
                url
              }
            }
          }
          start
          end
        }
      }
    }
  }
`;

const GetEventsQuery = gql`
  query GetEvents {
    events(sort: "start:desc", pagination: { limit: 100 }) {
      data {
        attributes {
          name
          summary
          theme
          event_tags {
            data {
              attributes {
                tag
              }
            }
          }
          slug
          registration_link
          devfolio_slug
          image {
            data {
              attributes {
                url
              }
            }
          }
          start
          end
        }
      }
    }
  }
`;

const GetEventQuery = gql`
  query GetEvent($slug: String!) {
    events(filters: { slug: { eq: $slug } }) {
      data {
        attributes {
          name
          summary
          description
          theme
          event_tags {
            data {
              attributes {
                tag
              }
            }
          }
          slug
          registration_link
          devfolio_slug
          image {
            data {
              attributes {
                url
              }
            }
          }
          location
          start
          end
          speakers {
            data {
              attributes {
                name
                designation
                bio
                image {
                  data {
                    attributes {
                      url
                    }
                  }
                }
                website
                youtube_link
                wikipedia_link
                twitter_link
                instagram_link
                github_link
                linkedin_link
                blog_link
                google_scholar_link
              }
            }
          }
          sponsors {
            data {
              attributes {
                name
                tier
                link
                image {
                  data {
                    attributes {
                      url
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

const GetAchievementsQuery = gql`
  query GetAchievements {
    achievements(sort: "date:desc", pagination: { limit: 100 }) {
      data {
        attributes {
          name
          description
          date
          image {
            data {
              attributes {
                url
              }
            }
          }
          contributors {
            data {
              attributes {
                name
                profile_link
              }
            }
          }
        }
      }
    }
  }
`;

const GetProjectsQuery = gql`
  query GetProjects {
    projects(sort: "id:desc", pagination: { limit: 100 }) {
      data {
        attributes {
          name
          link
          description
          image {
            data {
              attributes {
                url
              }
            }
          }
          contributors {
            data {
              attributes {
                name
                profile_link
              }
            }
          }
        }
      }
    }
  }
`;

export {
  Get2023MembersQuery,
  Get2022MembersQuery,
  GetLatestEventQuery,
  GetEventsQuery,
  GetEventQuery,
  GetAchievementsQuery,
  GetProjectsQuery,
  Get2024MembersQuery,
};
