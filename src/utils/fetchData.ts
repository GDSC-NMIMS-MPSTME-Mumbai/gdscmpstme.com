const { API_BASE_URL } = import.meta.env;
import { GraphQLClient } from 'graphql-request';
import { GetMembersQuery } from './queries';

const client = new GraphQLClient(`${API_BASE_URL}/graphql`);

interface Member {
  id: number;
  name: string;
  designation: string;
  department: string;
  imgUrl: string;
}

async function getTeamMembers(): Promise<Member[]> {
  const { members } = await client.request(GetMembersQuery);
  return members.data.map(member => ({
    id: member.id,
    name: member.attributes.name,
    designation: member.attributes.designation,
    department: member.attributes.department,
    imgUrl: member.attributes.image.data.attributes.url,
  }));
}

interface Event {
  name: string;
  summary: string;
  type: string;
  link: string;
  theme: string;
  startDate: Date;
  endDate: Date;
  imgUrl: string;
}

async function getLatestEvent() {
  // TODO - for home page
}

async function getEvents() {
  // TODO - for events page
}

interface Sponsor {
  name: string;
  link: string;
  tier: 'Giga' | 'Tera';
  imgUrl: string;
}

interface Speaker {
  name: string;
  designation: string;
  about: string;
  imgUrl: string;
}

interface EventDetailed extends Event {
  description: string;
  location: string;
  sponsors?: Sponsor[];
  speaker?: Speaker[];
}

async function getEvent(eventId: number) {
  // TODO - for event details page
}

interface Contributor {
  name: string;
  link?: string;
}

interface Achievement {
  name: string;
  description: string;
  date: Date;
  imgUrl: string;
  contributors: Contributor[];
}

async function getAchievements() {
  // TODO - for achievements and projects page
}

interface Project {
  name: string;
  description: string;
  link: string;
  imgUrl: string;
  contributors: Contributor[];
}

async function getProjects() {
  // TODO - for achievements and projects page
}

export {
  getTeamMembers,
  getLatestEvent,
  getEvents,
  getEvent,
  getAchievements,
  getProjects,
};
