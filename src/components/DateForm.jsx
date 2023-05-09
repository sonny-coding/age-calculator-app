// import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";

const DateForm = () => {
  const daysInNormalYear = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const daysInLeapYear = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const [maxDay, setMaxDay] = useState(31);
  const [isLeap, setIsLeap] = useState(false);

  const checkLeapYear = (year) => {
    return year % 100 === 0 ? year % 400 === 0 : year % 4 === 0;
  };
  const handleMonthChange = (e) => {
    console.log("handle month change");
    const month = Number(e.target.value);
    console.log(month);
    if (isLeap) {
      setMaxDay(daysInLeapYear[month - 1] || 31);
    } else {
      setMaxDay(daysInNormalYear[month - 1] || 31);
    }
    console.log(`maxDay: ${maxDay}`);
  };
  const handleYearChange = (e) => {
    const year = Number(e.target.value);
    setIsLeap(checkLeapYear(year));
  };
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ mode: "onChange" });
  const onSubmit = (data) => {
    console.log(data);
  };
  console.log(watch("day"));
  console.log(errors);
  // console.log(`errors: ${errors}`);
  return (
    <form action="" onSubmit={handleSubmit(onSubmit)}>
      <input
        type="number"
        placeholder="DD"
        {...register("day", {
          required: "this is required",
          min: { value: 1, message: "day must be greater or equal to 1" },
          max: {
            value: maxDay,
            message: `day must be less than or equal to ${maxDay}`,
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
            message: "day must be less than or equal to 12",
          },
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
        })}
        onChange={handleYearChange}
      />
      {<span>{errors.year?.message}</span>}
      <input type="submit" />
    </form>
  );
};

export default DateForm;
