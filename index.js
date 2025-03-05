// Function to determine work hours based on random value
const getWorkHours = () => {
    const randomValue = Math.random(); // Generates a random number between 0 and 1

    // Determine work hours using switch statement
    switch (true) {
        case randomValue < 0.3: // 30% chance of No Time (Absent)
            return 0;
        case randomValue < 0.6: // 30% chance of Part Time (4 hours)
            return 4;
        default: // 40% chance of Full Time (8 hours)
            return 8;
    }
};

// Function to calculate daily employee wage
const calculateDailyWage = (workHours) => {
    const wageRate = 20;
    const dailyWage = workHours * wageRate;
    return dailyWage;
};

// Function to calculate wages until a condition is met and store in a Map
const calculateWagesUsingMap = () => {
    const maxWorkingDays = 20; 
    const maxWorkingHours = 160; 
    let totalWorkingHours = 0; 
    let totalWages = 0; 
    let day = 0;
    const dailyWageMap = new Map(); 

    // Loop until either condition is met
    while (day < maxWorkingDays && totalWorkingHours < maxWorkingHours) {
        day++; 
        const workHours = getWorkHours(); 
        const dailyWage = calculateDailyWage(workHours); 
        totalWorkingHours += workHours; 
        totalWages += dailyWage; 
        dailyWageMap.set(day, dailyWage); 

        console.log(`Day ${day}: Work Hours: ${workHours}, Daily Wage: $${dailyWage}, Total Hours: ${totalWorkingHours}, Total Wages: $${totalWages}`);
    }

    return { totalWorkingHours, totalWages, dailyWageMap }; // Return results
};


const { totalWorkingHours, totalWages, dailyWageMap } = calculateWagesUsingMap();
console.log(`Total Working Hours: ${totalWorkingHours}, Total Wages: $${totalWages}`);


const totalWageFromMap = Array.from(dailyWageMap.values()).reduce((total, wage) => total + wage, 0);
console.log("Total Wage from Map:", totalWageFromMap);

// b. Show the day along with daily wage using the Map
console.log("Day-wise Wage from Map:");
dailyWageMap.forEach((wage, day) => {
    console.log(`Day ${day}: Wage: $${wage}`);
});

// c. Show days when full-time wage of 160 was earned using the Map
const fullTimeWageDays = Array.from(dailyWageMap)
    .filter(([day, wage]) => wage === 160)
    .map(([day]) => day);
console.log("Days with Full-Time Wage (160):", fullTimeWageDays);

// d. Find the first occurrence when Full-Time Wage was earned using the Map
const firstFullTimeWageDay = Array.from(dailyWageMap)
    .find(([day, wage]) => wage === 160)?.[0];
console.log("First Full-Time Wage Day:", firstFullTimeWageDay);

// e. Check if every element of Full-Time Wage is truly holding Full-Time wage
const isAllFullTimeWage = Array.from(dailyWageMap.values()).every(wage => wage === 160);
console.log("Are all wages Full-Time (160)?", isAllFullTimeWage);

// f. Check if there is any Part-Time Wage
const hasPartTimeWage = Array.from(dailyWageMap.values()).some(wage => wage < 160 && wage > 0);
console.log("Is there any Part-Time Wage?", hasPartTimeWage);

// g. Find the number of days the Employee Worked
const daysWorked = dailyWageMap.size;
console.log("Number of Days Worked:", daysWorked);