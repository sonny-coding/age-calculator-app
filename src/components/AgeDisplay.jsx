const AgeDisplay = ({ age }) => {
  return (
    <div>
      <p className="block mt-3 text-4xl md:text-5xl font-bold text-left">
        <span className="text-primary-purple font-black italic mr-2">
          {age.years}
        </span>
        years
      </p>
      <p className="mt-3 text-4xl md:text-5xl font-bold text-left">
        <span className="text-primary-purple font-black italic mr-2">
          {age.months}
        </span>
        months
      </p>
      <p className="mt-3 text-4xl md:text-5xl font-bold text-left">
        <span className="text-primary-purple font-black italic mr-2">
          {age.days}
        </span>
        days
      </p>
    </div>
  );
};

export default AgeDisplay;
