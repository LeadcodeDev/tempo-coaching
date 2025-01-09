// const BlogCard = (props) => (jsx("a", { className: "hover:translate-y-1", href: props.instance.url, children: jsxs("div", { className: "overflow-hidden rounded-md bg-slate-800", children: [jsx("div", { className: "aspect-w-3 aspect-h-2", children: jsx("img", { className: "h-full w-full object-cover object-center", src: props.instance.frontmatter.imgSrc, alt: props.instance.frontmatter.imgAlt, loading: "lazy" }) }), jsxs("div", { className: "px-3 pt-4 pb-6 text-center", children: [jsx("h2", { className: "text-xl font-semibold", children: props.instance.frontmatter.title }), jsx("div", { className: "mt-1 text-xs text-gray-400", children: format(new Date(props.instance.frontmatter.pubDate), 'LLL d, yyyy') }), jsx("div", { className: "mt-2 text-sm", children: props.instance.frontmatter.description })] })] }) }));

export function BlogCard(props: { instance: any }) {
  return (
    <a className="hover:translate-y-1" href={props.instance.url}>
      <div className="overflow-hidden rounded-lg border border-gray-200 bg-white">
        <div className="aspect-h-2 aspect-w-3">
          <div className="p-3">
            <img
              className="size-full rounded-md object-cover object-center"
              src={props.instance.frontmatter.imgSrc}
              alt={props.instance.frontmatter.imgAlt}
              loading="lazy"
            />
          </div>
        </div>
        <div className="px-3 pb-6 pt-4 text-center">
          <h2 className="text-xl font-semibold">
            {props.instance.frontmatter.title}
          </h2>
          <div className="mt-2 text-sm">
            {props.instance.frontmatter.description}
          </div>
        </div>
      </div>
    </a>
  );
}
