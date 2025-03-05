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