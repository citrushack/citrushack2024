const Title = ({ title }) => {
  return (
    <div
      data-cy={`${title}-title`}
      className="text-2xl font-racing pr-5 hidden lg:block text-citrus-green-200"
    >
      {title}
    </div>
  );
};

export default Title;
