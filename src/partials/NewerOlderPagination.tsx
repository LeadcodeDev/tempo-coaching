import type { Page } from 'astro';

type Props = {
  page: Page;
};

export function NewerOlderPagination(props: Props) {
  return (
    <div className="flex justify-center gap-8">
      {props.page.url.prev && (
        <a href={props.page.url.prev}>← Dernier articles</a>
      )}
      {props.page.url.next && (
        <a href={props.page.url.next}>Ancien articles →</a>
      )}
    </div>
  );
}
