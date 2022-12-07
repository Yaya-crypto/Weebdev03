const { Employee, Task } = require('../models');

const seedDB = async () => {
	const dummyEmployee = await Employee.create({
		firstname: "Melissa",
		lastname: "Lynch",
		department: "Computer Science"
	});

	const dummyEmployee2 = await Employee.create({
		firstname: "Kim",
		lastname: "Kardashian"
	});

	const dummyTask = await Task.create({
		description: "Open the door",
        priorityLevel: 5,
        completionStatus: false
	});

	const dummyTask2 = await Task.create({
		description: "Close the door",
        priorityLevel: 5,
        completionStatus: false
	});

	await dummyTask.setEmployee(dummyEmployee);
	await dummyTask2.setEmployee(dummyEmployee2);
}

module.exports = seedDB;