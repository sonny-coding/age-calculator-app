const AgeDisplay = ({ age }) => {
  return (
    <div>
      <p className="text-[5rem] font-extrabold leading-[6rem] text-left">
        <span className="text-violet-500 text-[5rem] font-black italic mr-3">
          {age.years}
        </span>
        years
      </p>
      <p className="text-[5rem] font-extrabold leading-[6rem] text-left">
        <span className="text-violet-500 text-[5rem] font-black italic mr-3">
          {age.months}
        </span>
        months
      </p>
      <p className="text-[5rem] font-extrabold leading-[6rem] text-left">
        <span className="text-violet-500 text-[5rem] font-black italic mr-3">
          {age.days}
        </span>
        days
      </p>
    </div>
  );
};

/* 
<div class="border-solid text-violet-500 text-[8.25rem] font-black leading-[8.25rem]" style="font-style: italic;">--</div>
*/

<div
  class="border-solid text-[8.25rem] font-bold leading-[8.25rem]"
  style="font-style: italic; outline: rgb(255, 0, 0) solid 0.666667px; unicode-bidi: isolate;"
>
  <div
    class="text-violet-500 font-black leading-[8.25rem]"
    style="font-style: italic;"
  >
    --
  </div>{" "}
  years
</div>;

export default AgeDisplay;
