// @ts-nocheck

const { API_BASE_URL, API_KEY } = import.meta.env;
import { GraphQLClient } from 'graphql-request';
import {
  Get2023MembersQuery,
  Get2022MembersQuery,
  GetLatestEventQuery,
  GetEventsQuery,
  GetEventQuery,
  GetAchievementsQuery,
  GetProjectsQuery,
  Get2024MembersQuery,
} from './queries';

const client = new GraphQLClient(`${API_BASE_URL}/graphql`, {
  headers: {
    Authorization: `bearer ${API_KEY}`,
  },
});

async function get2024TeamMembers(): Promise<Member[]> {
  const { members } = await client.request(Get2024MembersQuery);

  return members.data.map(member => ({
    id: member.id,
    name: member.attributes.name,
    designation: member.attributes.designation,
    department: member.attributes.department,
    imgUrl:
      member.attributes.image.data.attributes.formats?.medium?.url ??
      member.attributes.image.data.attributes.url,
  }));
}

async function get2023TeamMembers(): Promise<Member[]> {
  const { members } = await client.request(Get2023MembersQuery);

  return members.data.map(member => ({
    id: member.id,
    name: member.attributes.name,
    designation: member.attributes.designation,
    department: member.attributes.department,
    imgUrl:
      member.attributes.image.data.attributes.formats?.medium?.url ??
      member.attributes.image.data.attributes.url,
  }));
}

async function get2022TeamMembers(): Promise<Member[]> {
  const { members } = await client.request(Get2022MembersQuery);

  return members.data.map(member => ({
    id: member.id,
    name: member.attributes.name,
    designation: member.attributes.designation,
    department: member.attributes.department,
    imgUrl:
      member.attributes.image.data.attributes.formats?.medium?.url ??
      member.attributes.image.data.attributes.url,
  }));
}

async function getLatestEvent(): Promise<EventBasic> {
  const { events } = await client.request(GetLatestEventQuery);
  const latestEvent = events.data[0].attributes;

  return {
    name: latestEvent.name,
    summary: latestEvent.summary,
    theme: latestEvent.theme,
    slug: latestEvent.slug,
    registrationLink: latestEvent.registration_link,
    startDate: new Date(latestEvent.start),
    endDate: new Date(latestEvent.end),
    imgUrl: latestEvent.image.data.attributes.url,
  };
}

async function getEvents(): Promise<EventWithTags[]> {
  const { events } = await client.request(GetEventsQuery);
  return events.data.map(event => {
    const tags = event.attributes.event_tags.data.map(
      tag => tag.attributes.tag,
    );

    return {
      name: event.attributes.name,
      summary: event.attributes.summary,
      theme: event.attributes.theme,
      slug: event.attributes.slug,
      tags,
      registrationLink: event.attributes.registration_link,
      startDate: new Date(event.attributes.start),
      endDate: new Date(event.attributes.end),
      imgUrl: event.attributes.image.data.attributes.url,
    };
  });
}

async function getEvent(slug: string): Promise<EventDetailed> {
  const { events } = await client.request(GetEventQuery, { slug });
  const event = events.data[0].attributes;

  return {
    name: event.name,
    summary: event.summary,
    description: event.description,
    theme: event.theme,
    tags: event.event_tags.data.map(tag => tag.attributes.tag),
    slug: event.slug,
    registrationLink: event.registration_link,
    devfolioSlug: event.devfolio_slug,
    imgUrl: event.image.data.attributes.url,
    location: event.location,
    startDate: new Date(event.start),
    endDate: new Date(event.end),
    speakers: event.speakers.data.map(speaker => ({
      name: speaker.attributes.name,
      designation: speaker.attributes.designation,
      bio: speaker.attributes.bio,
      imgUrl: speaker.attributes.image.data.attributes.url,
      website: speaker.attributes.website,
      youtubeLink: speaker.attributes.youtube_link,
      wikipediaLink: speaker.attributes.wikipedia_link,
      twitterLink: speaker.attributes.twitter_link,
      instagramLink: speaker.attributes.instagram_link,
      githubLink: speaker.attributes.github_link,
      linkedinLink: speaker.attributes.linkedin_link,
      blogLink: speaker.attributes.blog_link,
      googleScholarLink: speaker.attributes.google_scholar_link,
    })),
    sponsors: event.sponsors.data.map(sponsor => ({
      name: sponsor.attributes.name,
      link: sponsor.attributes.link,
      tier: sponsor.attributes.tier,
      imgUrl: sponsor.attributes.image.data.attributes.url,
    })),
  };
}

async function getAchievements(): Promise<Achievement[]> {
  const { achievements } = await client.request(GetAchievementsQuery);

  return achievements.data.map(achievement => ({
    name: achievement.attributes.name,
    description: achievement.attributes.description,
    date: new Date(achievement.attributes.date),
    imgUrl: achievement.attributes.image.data.attributes.url,
    contributors: achievement.attributes.contributors.data.map(contributor => ({
      name: contributor.attributes.name,
      link: contributor.attributes.profile_link,
    })),
  }));
}

async function getProjects(): Promise<Project[]> {
  const { projects } = await client.request(GetProjectsQuery);

  return projects.data.map(project => ({
    name: project.attributes.name,
    description: project.attributes.description,
    imgUrl: project.attributes.image.data.attributes.url,
    link: project.attributes.link,
    contributors: project.attributes.contributors.data.map(contributor => ({
      name: contributor.attributes.name,
      link: contributor.attributes.profile_link,
    })),
  }));
}

export {
  get2023TeamMembers,
  get2022TeamMembers,
  getLatestEvent,
  getEvents,
  getEvent,
  getAchievements,
  getProjects,
  get2024TeamMembers as getTeamMembers,
};
