type Props = {
  icon: any;
  name: string;
};

export function Logo(props: Props) {
  return (
    <div className="flex items-center bg-gradient-to-br from-primary to-primary/50 bg-clip-text text-xl font-bold text-transparent">
      {props.icon}
      {props.name}
    </div>
  );
}
