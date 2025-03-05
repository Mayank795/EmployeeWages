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
const calculateDailyWage = () => {
    const workHours = getWorkHours(); // Get work hours using the helper function
    const wageRate = 20; // Wage rate per hour
    const dailyWage = workHours * wageRate; // Calculate daily wage
    return { workHours, dailyWage }; 
};


const { workHours, dailyWage } = calculateDailyWage();
console.log(`Work Hours: ${workHours}, Daily Wage: $${dailyWage}`);