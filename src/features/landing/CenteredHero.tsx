const CenteredHero = (props: {
  title: React.ReactNode;
  description: string;
}) => (
  <>
    {/* <div className="text-center">
      <a href={props.banner.href} target="_blank" rel="noopener">
        {props.banner.text}
      </a>
    </div> */}

    <div className="mt-3 text-center text-5xl font-bold tracking-tight">
      {props.title}
    </div>

    <div className="mx-auto mt-5 max-w-screen-md text-center text-xl">
      {props.description}
    </div>
  </>
);

export { CenteredHero };
