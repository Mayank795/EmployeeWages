// Sample data for Daily Wage Map and Daily Hour Map
const dailyWageMap = new Map([
    [1, 160], [2, 80], [3, 160], [4, 0], [5, 160],
    [6, 80], [7, 160], [8, 160], [9, 0], [10, 160],
    [11, 80], [12, 160], [13, 160], [14, 80], [15, 160],
    [16, 160], [17, 0], [18, 160], [19, 80], [20, 160]
]);

const dailyHourMap = new Map([
    [1, 8], [2, 4], [3, 8], [4, 0], [5, 8],
    [6, 4], [7, 8], [8, 8], [9, 0], [10, 8],
    [11, 4], [12, 8], [13, 8], [14, 4], [15, 8],
    [16, 8], [17, 0], [18, 8], [19, 4], [20, 8]
]);

// a. Calculate total wage and total hours worked
const totalWage = Array.from(dailyWageMap.values()).reduce((total, wage) => total + wage, 0);
const totalHoursWorked = Array.from(dailyHourMap.values()).reduce((total, hours) => total + hours, 0);
console.log("Total Wage:", totalWage);
console.log("Total Hours Worked:", totalHoursWorked);

// b. Show full working days, part working days, and no working days
const fullWorkingDays = Array.from(dailyHourMap)
    .filter(([day, hours]) => hours === 8)
    .map(([day]) => day);

const partWorkingDays = Array.from(dailyHourMap)
    .filter(([day, hours]) => hours === 4)
    .map(([day]) => day);

const noWorkingDays = Array.from(dailyHourMap)
    .filter(([day, hours]) => hours === 0)
    .map(([day]) => day);

console.log("Full Working Days:", fullWorkingDays);
console.log("Part Working Days:", partWorkingDays);
console.log("No Working Days:", noWorkingDays);