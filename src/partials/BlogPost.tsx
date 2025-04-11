import type { IFrontmatter } from 'astro-boilerplate-components';
import { Section } from 'astro-boilerplate-components';
import type { ReactNode } from 'react';

import { PostContent } from '@/partials/PostContent';

type IBlogPostProps = {
  frontmatter: IFrontmatter;
  children: ReactNode;
};

const BlogPost = (props: IBlogPostProps) => (
  <Section>
    <h1 className="text-center text-3xl font-bold">
      {props.frontmatter.title}
    </h1>
    <PostContent content={props.frontmatter}>
      <div className="text-gray-700">{props.children}</div>
    </PostContent>
  </Section>
);

export { BlogPost };
