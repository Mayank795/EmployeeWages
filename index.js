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
    const wageRate = 20; // Wage rate per hour
    const dailyWage = workHours * wageRate; // Calculate daily wage
    return dailyWage;
};

// Function to calculate wages until a condition is met
const calculateWagesTillCondition = () => {
    const maxWorkingDays = 20; // Maximum number of working days in a month
    const maxWorkingHours = 160; // Maximum total working hours in a month
    let totalWorkingHours = 0; // Initialize total working hours
    let totalWages = 0; // Initialize total wages
    let day = 0; // Initialize day counter

    // Loop until either condition is met
    while (day < maxWorkingDays && totalWorkingHours < maxWorkingHours) {
        day++; // Increment day counter
        const workHours = getWorkHours(); // Get work hours for the day
        const dailyWage = calculateDailyWage(workHours); // Calculate daily wage
        totalWorkingHours += workHours; // Add work hours to total
        totalWages += dailyWage; // Add daily wage to total wages

        console.log(`Day ${day}: Work Hours: ${workHours}, Daily Wage: $${dailyWage}, Total Hours: ${totalWorkingHours}, Total Wages: $${totalWages}`);
    }

    return { totalWorkingHours, totalWages, daysWorked: day }; // Return results
};

// Example usage
const { totalWorkingHours, totalWages, daysWorked } = calculateWagesTillCondition();
console.log(`Total Working Hours: ${totalWorkingHours}, Total Wages: $${totalWages}, Days Worked: ${daysWorked}`);