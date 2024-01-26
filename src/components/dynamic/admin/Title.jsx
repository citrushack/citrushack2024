const Title = ({ title }) => {
  return (
    <div
      data-cy={`${title}-title`}
      className="text-2xl font-russo pr-5 hidden lg:block text-citrus-black"
    >
      {title}
    </div>
  );
};

export default Title;
