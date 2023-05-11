import { useForm } from "react-hook-form";
import { daysInMonth, checkLeapYear, isObjEmpty, calcAge } from "../utils";

const DateForm = ({ setShowAge, setAge }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ mode: "onChange" });
  const onSubmit = (data) => {
    if (isObjEmpty(errors)) {
      //   const bDay = new Date(data.year, data.month - 1, data.day);
      //   console.log(bDay);
      const bDay = calcAge(new Date(data.year, data.month - 1, data.day));
      setAge(bDay);
      console.log(bDay);
      setShowAge(true);
    }
  };
  console.log(errors);
  console.log(watch());
  return (
    <form action="" onSubmit={handleSubmit(onSubmit)}>
      <div className="grid font-bold gap-4 xsm:grid-cols-3 md:grid-cols-[repeat(3,10rem)] bg-white">
        <div className="flex flex-col gap-1 md:gap-2.5">
          <label
            className={`text-sm uppercase ${
              errors.day ? "text-red-500" : "text-neutral-500"
            }`}
            htmlFor="day"
          >
            Day
          </label>
          <input
            className={`w-full rounded-lg border-[1px] px-3.5 py-3 text-xl text-neutral-900 outline-none md:text-3xl md:px-5 md:py-4 `}
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
            <p className="mt-0.5 text-xs font-normal italic text-red-600">
              {errors.day?.message}
            </p>
          }
        </div>
        <div className="flex flex-col gap-1 md:gap-2.5">
          <label
            className={`text-sm uppercase ${
              errors.month ? "text-red-500" : "text-neutral-500"
            }`}
            htmlFor="month"
          >
            Month
          </label>
          <input
            className={`w-full rounded-lg border-[1px] px-3.5 py-3 text-xl text-neutral-900 outline-none md:text-3xl md:px-5 md:py-4 `}
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
            <p className="mt-0.5 text-xs font-normal italic text-red-600">
              {errors.month?.message}
            </p>
          }
        </div>
        <div className="flex flex-col gap-1 md:gap-2.5">
          <label
            className={`text-sm uppercase ${
              errors.year ? "text-red-500" : "text-neutral-500"
            }`}
            htmlFor="year"
          >
            Year
          </label>
          <input
            className={`w-full rounded-lg border-[1px] px-3.5 py-3 text-xl text-neutral-900 outline-none md:text-3xl md:px-5 md:py-4 `}
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
              deps: ["day"],
            })}
          />
          {
            <p className="mt-0.5 text-xs font-normal italic text-red-600">
              {errors.year?.message}
            </p>
          }
        </div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default DateForm;
