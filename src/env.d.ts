/// <reference types="astro/client" />

interface Member {
  id: number;
  name: string;
  designation: string;
  department: string;
  imgUrl: string;
}

interface EventBasic {
  name: string;
  summary: string;
  theme: string;
  slug: string;
  registrationLink: string;
  startDate: Date;
  endDate: Date;
  imgUrl: string;
}

interface EventWithTags extends EventBasic {
  tags: string[];
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
  bio: string;
  imgUrl: string;
}

interface EventDetailed extends EventWithTags {
  description: string;
  devfolioSlug: string | null;
  location: string;
  sponsors: Sponsor[];
  speakers: Speaker[];
}

interface Contributor {
  name: string;
  link: string | null;
}

interface Achievement {
  name: string;
  description: string;
  date: Date;
  imgUrl: string;
  contributors: Contributor[];
}

interface Project {
  name: string;
  description: string;
  link: string;
  imgUrl: string;
  contributors: Contributor[];
}

interface ImportMetaEnv {
  readonly API_BASE_URL: string;
  readonly API_KEY: string;
}
