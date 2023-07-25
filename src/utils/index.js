export const chooseDataGrouping = (grouping, data) => {
  switch (grouping) {
    case "hour":
      return data;
    case "day":
      return dailyData(data);
    case "week":
      return weeklyData(data);
    case "month":
      return monthlyData(data);
    default:
      break;
  }
};

const dailyData = (inputData) => {
  const electricDay = [];

  inputData.map((element) => {
    const currentDate = new Date(
      new Date(element.interval_start).setHours(0, 0, 0, 0)
    );

    const index = electricDay.findIndex(
      (e) => e.interval_start.valueOf() === currentDate.valueOf()
    );

    if (index === -1) {
      electricDay.push({
        interval_start: currentDate,
        consumption: element.consumption,
      });
    } else {
      const newConsumption =
        electricDay[index].consumption + element.consumption;
      electricDay[index].consumption = newConsumption;
    }
  });

  return electricDay;
};

const weeklyData = (inputData) => {
  const electricWeek = [];

  inputData.map((element) => {
    const currentDate = new Date(element.interval_start);

    let diff =
      currentDate.getDate() -
      currentDate.getDay() +
      (currentDate.getDay() === 0 ? -6 : 1);

    const newWeekDate = new Date(
      new Date(currentDate.setDate(diff)).setHours(0, 0, 0, 0)
    );

    const index = electricWeek.findIndex(
      (e) => e.interval_start.valueOf() === newWeekDate.valueOf()
    );

    if (index === -1) {
      electricWeek.push({
        interval_start: newWeekDate,
        consumption: element.consumption,
      });
    } else {
      const newConsumption =
        electricWeek[index].consumption + element.consumption;
      electricWeek[index].consumption = newConsumption;
    }
  });

  return electricWeek;
};

const monthlyData = (inputData) => {
  const electricMonth = [];

  inputData.map((element) => {
    const currentDate = new Date(
      new Date(element.interval_start).getFullYear(),
      new Date(element.interval_start).getMonth(),
      1
    );

    const index = electricMonth.findIndex(
      (e) => e.interval_start.valueOf() === currentDate.valueOf()
    );

    if (index === -1) {
      electricMonth.push({
        interval_start: currentDate,
        consumption: element.consumption,
      });
    } else {
      const newConsumption =
        electricMonth[index].consumption + element.consumption;
      electricMonth[index].consumption = newConsumption;
    }
  });

  return electricMonth;
};
