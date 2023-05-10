import { useForm } from "react-hook-form";
import { daysInMonth, checkLeapYear, isObjEmpty, calcAge } from "../utils";

const DateForm = ({ setShowAge }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ mode: "onChange" });
  const onSubmit = (data) => {
    if (isObjEmpty(errors)) {
      const bDay = new Date(data.year, data.month - 1, data.day);
      console.log(bDay);
      calcAge(bDay);
      setShowAge(true);
    }
  };
  console.log(errors);
  console.log(watch());
  return (
    <form action="" onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="name">Day</label>
      <input
        id="name"
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
      {<span>{errors.day?.message}</span>}
      <label htmlFor="month">Month</label>
      <input
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
      {<span>{errors.month?.message}</span>}
      <label htmlFor="year">Year</label>
      <input
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
      {<span>{errors.year?.message}</span>}
      <input type="submit" />
    </form>
  );
};

export default DateForm;
