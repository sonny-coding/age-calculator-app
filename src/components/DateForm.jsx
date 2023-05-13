import { useForm } from "react-hook-form";
import { daysInMonth, checkLeapYear, isObjEmpty, calcAge } from "../utils";
import { ArrowIcon } from "../assets";

const DateForm = ({ setShowAge, setAge }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ mode: "onChange" });
  const onSubmit = (data) => {
    if (isObjEmpty(errors)) {
      const bDay = calcAge(new Date(data.year, data.month - 1, data.day));
      setAge(bDay);
      console.log(bDay);
      setShowAge(true);
    }
  };
  return (
    <form
      action=""
      onSubmit={handleSubmit(onSubmit)}
      // className="border-solid t  ext-2xl"
    >
      {/* 3 md:grid-cols-[repeat(3,10rem)] */}
      <div className="grid font-bold gap-4 grid-cols-3 md:grid-cols-[repeat(3,10rem)] bg-neutral-white min-h-[8.5rem]">
        <div className="flex flex-col gap-1 md:gap-2.5">
          <label
            className={`text-sm uppercase ${
              errors.day ? "text-primary-red" : "text-neutral-smokeyGrey"
            }`}
            htmlFor="day"
          >
            Day
          </label>
          <input
            className={`w-full rounded-lg border-[1px] px-3.5 py-3 text-neutral-offBlack outline-none text-xl md:text-3xl md:px-5 md:py-4 ${
              errors.day ? "border-primary-red" : ""
            }`}
            id="day"
            type="number"
            placeholder="DD"
            {...register("day", {
              required: "This field is required",
              min: { value: 1, message: "Must be a valid day" },
              valueAsNumber: true,
              validate: {
                lessThanMax: (v, values) => {
                  let max;
                  if (values.month === 2 && checkLeapYear(values.year)) {
                    max = 29;
                  } else if (values.month) {
                    max = daysInMonth(values.month);
                  } else {
                    max = 31;
                  }
                  return v <= max || `Must be a valid day`;
                },
              },
            })}
          />
          {
            <p className="mt-0.5 text-sm font-normal italic text-primary-red">
              {errors.day?.message}
            </p>
          }
        </div>
        <div className="flex flex-col gap-1 md:gap-2.5">
          <label
            className={`text-sm uppercase ${
              errors.month ? "text-primary-red" : "text-neutral-smokeyGrey"
            }`}
            htmlFor="month"
          >
            Month
          </label>
          <input
            className={`w-full rounded-lg border-[1px] px-3.5 py-3 text-neutral-offBlack outline-none text-xl md:text-3xl md:px-5 md:py-4 ${
              errors.month ? "border-primary-red" : ""
            }`}
            id="month"
            type="number"
            placeholder="MM"
            {...register("month", {
              required: "This field is required",
              min: { value: 1, message: "Must be a valid month" },
              max: {
                value: 12,
                message: "Must be a valid month",
              },
              valueAsNumber: true,
              deps: ["day"],
            })}
          />
          {
            <p className="mt-0.5 text-sm font-normal italic text-primary-red">
              {errors.month?.message}
            </p>
          }
        </div>
        <div className="flex flex-col gap-1 md:gap-2.5">
          <label
            className={`text-sm uppercase ${
              errors.year ? "text-primary-red" : "text-neutral-smokeyGrey"
            }`}
            htmlFor="year"
          >
            Year
          </label>
          <input
            className={`w-full rounded-lg border-[1px] px-3.5 py-3 text-neutral-offBlack outline-none text-xl md:text-3xl md:px-5 md:py-4 ${
              errors.year ? "border-primary-red" : ""
            }`}
            id="year"
            type="number"
            placeholder="YYYY"
            {...register("year", {
              required: "This field is required",
              min: { value: 1, message: "Must be a valid year" },
              max: {
                value: new Date().getFullYear(),
                message: "Must be in the past",
              },
              valueAsNumber: true,
              deps: ["day", "month"],
            })}
          />
          {
            <p className="mt-0.5 text-sm font-normal italic text-primary-red">
              {errors.year?.message}
            </p>
          }
        </div>
      </div>
      <div className="relative flex justify-center lg:justify-end items-center before:absolute before:bg-neutral-lightGrey before:h-[2px] before:w-full">
        <button
          type="submit"
          className="border-none outline-none bg-primary-purple text-neutral-white p-4 transition-all duration-300 hover:bg-neutral-offBlack flex items-center justify-center rounded-full z-10"
        >
          <ArrowIcon />
        </button>
      </div>
    </form>
  );
};

export default DateForm;
