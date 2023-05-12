import dayjs from "dayjs";
export const genetate = (
  month = dayjs().month(),
  year = dayjs().year(),
  start = dayjs().toDate().toDateString()
) => {
  const firstDateOfMonth = dayjs().year(year).month(month).startOf("month");
  const lastDayOfMonth = dayjs().year(year).month(month).endOf("month");

  let arrayofDates = [];

  // generates prefix dates
  for (let i = 0; i < firstDateOfMonth.day(); ++i) {
    arrayofDates.push({
      date: firstDateOfMonth.date(i),
      currentMonth: false,
      pastMonth: true,
      past: dayjs(firstDateOfMonth.date(i).toDate().toDateString()).isBefore(start),
    });
  }
  // generates current dates
  for (let i = firstDateOfMonth.date(); i <= lastDayOfMonth.date(); ++i) {
    // console.log();
    arrayofDates.push({
      date: firstDateOfMonth.date(i),
      past: dayjs(firstDateOfMonth.date(i).toDate().toDateString()).isBefore(start),
      currentMonth: true,
      istoday:
        firstDateOfMonth.date(i).toDate().toDateString() ===
        dayjs().toDate().toDateString(),
    });
  }

  // remaining

  const remainingDays = 42 - arrayofDates.length;
  for (
    let i = lastDayOfMonth.date() + 1;
    i <= remainingDays + lastDayOfMonth.date();
    ++i
  ) {
    arrayofDates.push({
      date: lastDayOfMonth.date(i),
      currentMonth: false,
      past: dayjs(lastDayOfMonth.date(i).toDate().toDateString()).isBefore(start),
    });
  }
  return arrayofDates;
};

export const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
