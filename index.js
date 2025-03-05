// Sample dailyWages array (replace with actual data if needed)
const dailyWages = [160, 80, 160, 0, 160, 80, 160, 160, 0, 160, 80, 160, 160, 80, 160, 160, 0, 160, 80, 160];

// a. Calculate total wage using reduce
const totalWage = dailyWages.reduce((total, wage) => total + wage, 0);
console.log("Total Wage:", totalWage);

// b. Show the day along with daily wage using map
const dailyWageWithDay = dailyWages.map((wage, index) => ({
    day: index + 1,
    wage: wage
}));
console.log("Daily Wage with Day:", dailyWageWithDay);

// c. Show days when full-time wage of 160 was earned using filter
const fullTimeWageDays = dailyWages
    .map((wage, index) => wage === 160 ? index + 1 : null)
    .filter(day => day !== null);
console.log("Days with Full-Time Wage (160):", fullTimeWageDays);

// d. Find the first occurrence when Full-Time Wage was earned using find
const firstFullTimeWageDay = dailyWages.findIndex(wage => wage === 160) + 1;
console.log("First Full-Time Wage Day:", firstFullTimeWageDay);

// e. Check if every element of Full-Time Wage is truly holding Full-Time wage
const isAllFullTimeWage = dailyWages.every(wage => wage === 160);
console.log("Are all wages Full-Time (160)?", isAllFullTimeWage);

// f. Check if there is any Part-Time Wage
const hasPartTimeWage = dailyWages.some(wage => wage < 160 && wage > 0);
console.log("Is there any Part-Time Wage?", hasPartTimeWage);

// g. Find the number of days the Employee Worked
const daysWorked = dailyWages.filter(wage => wage > 0).length;
console.log("Number of Days Worked:", daysWorked);