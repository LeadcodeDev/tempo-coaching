type Props = {
  icon: any;
  name: string;
};

export function Logo(props: Props) {
  return (
    <span className="flex items-center text-nowrap bg-gradient-to-br from-primary to-primary/50 bg-clip-text text-xl font-bold text-transparent">
      {props.name}
    </span>
  );
}
