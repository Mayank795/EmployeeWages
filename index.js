// Function to check if the employee is present or absent
const checkAttendance = () => {
    const randomValue = Math.random(); // Generates a random number between 0 and 1
    let attendanceStatus; // Use let because this variable will be reassigned

    if (randomValue < 0.5) {
        attendanceStatus = "Absent";
    } else {
        attendanceStatus = "Present";
    }

    return attendanceStatus;
};

// Example usage
const employeeStatus = checkAttendance(); // Use const because the result won't be reassigned
console.log(`Employee is ${employeeStatus}`);

// Function to calculate daily employee wage
const calculateDailyWage = () => {
    const randomValue = Math.random(); // Generates a random number between 0 and 1
    let workHours; // Use let because this variable will be reassigned

    // Determine work type using switch statement
    switch (true) {
        case randomValue < 0.3: // 30% chance of No Time (Absent)
            workHours = 0;
            break;
        case randomValue < 0.6: // 30% chance of Part Time (4 hours)
            workHours = 4;
            break;
        default: // 40% chance of Full Time (8 hours)
            workHours = 8;
            break;
    }

    const wageRate = 20; // Wage rate per hour
    const dailyWage = workHours * wageRate; // Calculate daily wage
    return { workHours, dailyWage };
};

// Example usage
const { workHours, dailyWage } = calculateDailyWage(); // Destructure the result
console.log(`Work Hours: ${workHours}, Daily Wage: $${dailyWage}`);