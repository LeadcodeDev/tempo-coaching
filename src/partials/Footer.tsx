type Props = {
  site_name: string;
};

export function Footer(props: Props) {
  return (
    <div className="mt-10 flex h-20 items-center justify-center border-t border-gray-200 bg-white">
      <div className="text-sm text-gray-700">
        <p>
          © Copyright {new Date().getFullYear()} {props.site_name} • Créé avec{' '}
          <span className="text-red-600">♥</span> par{' '}
          <a href="https://www.linkedin.com/in/baptiste-parmantier/">
            Baptiste Parmantier
          </a>
          .
        </p>
      </div>
    </div>
  );
}
