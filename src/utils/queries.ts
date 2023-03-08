const GetMembersQuery = `
  query GetMembers {
    members(sort: "id", pagination: { limit: 100 }) {
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

const GetLatestEventQuery = `
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

const GetEventsQuery = `
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

const GetEventQuery = `
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

const GetAchievementsQuery = `
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

const GetProjectsQuery = `
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
  GetMembersQuery,
  GetLatestEventQuery,
  GetEventsQuery,
  GetEventQuery,
  GetAchievementsQuery,
  GetProjectsQuery,
};
