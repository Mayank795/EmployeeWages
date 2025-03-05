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

// Function to calculate monthly wages
const calculateMonthlyWages = () => {
    const workingDays = 20; // Number of working days in a month
    let totalWages = 0; // Initialize total wages for the month

    for (let day = 1; day <= workingDays; day++) {
        const workHours = getWorkHours(); // Get work hours for the day
        const dailyWage = calculateDailyWage(workHours); // Calculate daily wage
        totalWages += dailyWage; // Add daily wage to total wages

        console.log(`Day ${day}: Work Hours: ${workHours}, Daily Wage: $${dailyWage}`);
    }

    return totalWages;
};

// Example usage
const monthlyWages = calculateMonthlyWages(); // Calculate total wages for the month
console.log(`Total Monthly Wages: $${monthlyWages}`);