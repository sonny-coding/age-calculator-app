const AgeDisplay = ({ age }) => {
  return (
    <div>
      <p>{age.years}years</p>
      <p>{age.months}months</p>
      <p>{age.days}days</p>
    </div>
  );
};

export default AgeDisplay;
