// const BlogGallery = (props) => (jsx("div", { className: "grid grid-cols-1 gap-6 md:grid-cols-3", children: props.postList.map((elt) => (jsx(BlogCard, { instance: elt }, elt.url))) }));

import { BlogCard } from '@/partials/BlogCard';

type Props = {
  postList: any[];
};
export function BlogGallery(props: Props) {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
      {props.postList.map((elt, index) => (
        <BlogCard key={index} instance={elt} />
      ))}
    </div>
  );
}
