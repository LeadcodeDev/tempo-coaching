import type { IFrontmatter } from 'astro-boilerplate-components';
import { PostHeader, Section } from 'astro-boilerplate-components';
import type { ReactNode } from 'react';

import { PostContent } from '@/partials/PostContent';
import { AppConfig } from '@/utils/AppConfig';

type IBlogPostProps = {
  frontmatter: IFrontmatter;
  children: ReactNode;
};

const BlogPost = (props: IBlogPostProps) => (
  <Section>
    <PostHeader content={props.frontmatter} author={AppConfig.author} />
    <PostContent content={props.frontmatter}>
      <div className="text-gray-700">{props.children}</div>
    </PostContent>
  </Section>
);

export { BlogPost };
