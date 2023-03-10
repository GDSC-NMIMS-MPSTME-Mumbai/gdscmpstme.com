/// <reference types="astro/client" />

interface Member {
  id: number;
  name: string;
  designation: string;
  department: string;
  imgUrl: string | null;
}

interface EventBasic {
  name: string;
  summary: string;
  theme: string;
  slug: string;
  registrationLink: string | null;
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
  tier: 'Giga' | 'Tera' | null;
  imgUrl: string;
}

interface Speaker {
  name: string;
  designation: string;
  bio: string;
  imgUrl: string;
  website: string | null;
  youtubeLink: string | null;
  wikipediaLink: string | null;
  twitterLink: string | null;
  instagramLink: string | null;
  githubLink: string | null;
  linkedinLink: string | null;
  blogLink: string | null;
  googleScholarLink: string | null;
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

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
