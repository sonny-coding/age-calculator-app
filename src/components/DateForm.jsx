import { useForm } from "react-hook-form";
import { daysInMonth, checkLeapYear, isObjEmpty, calcAge } from "../utils";

const DateForm = () => {
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
    }
  };
  console.log(errors);
  console.log(watch());
  return (
    <form action="" onSubmit={handleSubmit(onSubmit)}>
      <input
        type="number"
        placeholder="DD"
        {...register("day", {
          required: "this is required",
          min: { value: 1, message: "day must be greater or equal to 1" },
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
              return v <= max || `day should be equal or less than ${max} `;
            },
          },
        })}
      />
      {<span>{errors.day?.message}</span>}
      <input
        type="number"
        placeholder="MM"
        {...register("month", {
          required: "this is required",
          min: { value: 1, message: "month must be greater or equal to 1" },
          max: {
            value: 12,
            message: "month must be less than or equal to 12",
          },
          valueAsNumber: true,
          deps: ["day"],
        })}
        // onChange={handleMonthChange}
      />
      {<span>{errors.month?.message}</span>}

      <input
        type="number"
        placeholder="YYYY"
        {...register("year", {
          required: "this is required",
          max: {
            value: 2023,
            message: "Cannot be greater than the current year",
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
