import type { MarkdownInstance } from 'astro';
import type { IFrontmatter } from 'astro-boilerplate-components';
import { Section } from 'astro-boilerplate-components';

import { BlogGallery } from '@/partials/BlogGallery';
import { GradientText } from '@/partials/GradientText';

type IRecentPostsProps = {
  postList: MarkdownInstance<IFrontmatter>[];
};

function RecentPosts(props: IRecentPostsProps) {
  return (
    <Section
      title={
        <div className="flex items-baseline justify-between">
          <div>
            <GradientText>Blogs et </GradientText>
            <GradientText>articles de presse</GradientText>
          </div>

          <div className="text-sm">
            <a href="/posts/">Voir tous les articles →</a>
          </div>
        </div>
      }
    >
      <BlogGallery postList={props.postList} />
    </Section>
  );
}

export { RecentPosts };
