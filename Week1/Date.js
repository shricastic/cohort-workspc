function dateMethods() {
  const currentDate = new Date();
  console.log("Current Date: ", currentDate);

  console.log("Date: ", currentDate.getDate())
  console.log("Month: ", currentDate.getMonth())
  console.log("Year: ", currentDate.getFullYear())
  console.log("Hours: ", currentDate.getHours())
  console.log("Minutes: ", currentDate.getMinutes())
  console.log("Seconds: ", currentDate.getSeconds()) 
  
  currentDate.setFullYear(2022)
  console.log("Updated year: ", currentDate.getFullYear())
  
  console.log("Time in milisecond: ", currentDate.getTime())
}

dateMethods()
