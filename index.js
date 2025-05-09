// You are building a feature rollout system for a startup where a FeatureToggle constructor function has
//  properties: featureName (string), isEnabled (boolean), and userGroupAccess (array of strings like "betaTesters", "admins"), 
// and you must use a prototype method canAccess(userRole) to return true or false, a method toggleFeature(flag) to enable or disable the feature,
//  and simulate access attempts using if-else and switch statements for different roles.


function FeatureToggle(featureName, isEnabled, userGroupAccess) {
    this.featureName = featureName;
    this.isEnabled = isEnabled;
    this.userGroupAccess = userGroupAccess;
}

FeatureToggle.prototype.canAccess = function(userRole) {
    return this.isEnabled && this.userGroupAccess.includes(userRole);
};

FeatureToggle.prototype.toggleFeature = function(flag) {

};

const feature = new FeatureToggle("Dashboard", false, ["betaTesters", "admins"]);
console.log(feature)
console.log(feature.toggleFeature());

const roles = ["staff","guest", "betaTesters", "admins"];

roles.forEach(role => {
        switch (role) {
            case "guest":
                console.log("Guest access denied");
                break;
            case "betaTesters":
                console.log("Beta tester access granted");
                break;
            case "admins":
                console.log("Admin access granted");
                break;
            default:
                console.log("Unknown user");
                break;
        }
    }
);


// In a freelancer time-tracking platform, create a TimeLog constructor function with properties: 
// freelancerName (string), projectDetails (object with name and hourlyRate), 
// and logs (array of objects with date, hoursWorked), then add prototype methods to calculate total earnings, 
// filter logs by date range, and determine if weekly hours exceed 40 using if-else logic.

function Timelog(freelancerName, projectDetails, logs) {
    this.freelancerName = freelancerName;
    this.projectDetails = projectDetails;
    this.logs = logs;
}

Timelog.prototype.calcTotalEarning = function(){
let totalHours = this.logs.reduce((acc,item)=> acc+item,0)
return totalHours*this.projectDetails.hourlyRate

}


Timelog.prototype.dateRange = function(){

}

Timelog.prototype.weeklyHours = function(){

}

// You are developing a startup’s order management system where an Order constructor 
// function should contain customer (object with name and email),
//  items (array of objects with productName, quantity, and unitPrice), and status (string), 
// then implement prototype methods to compute total cost, update order status based on payment, 
// and categorize order urgency using switch and conditional statements.

function Order(customer, items, status) {
    this.customer = customer;
    this.items = items;
    this.status = status;
}

Order.prototype.computeTotCost = function(){
let totPrice = this.items.unitPrice*this.items.quantity
return totPrice
}

Order.prototype.orderStatusUpdate = function(payment){
if (payment >=this.computeTotCost()){
return (this.status="paid")
}else{
    return this.status
}
}

Order.prototype.orderUrgency = function(){
if(this.computeTotCost== this.payment){
   return "High priority" 
}else{
    return "not priority"
}
};

const order = new Order({name:"Angela",email:"angie102@gmail.com"},[{productName:"apple",quantity:10,unitPrice:40}],"not paid")
console.log(order)
console.log(order.computeTotCost)

// In a startup’s employee review tool, design an Employee class with properties: 
// id (number), name (string), performanceMetrics (object with keys like communication, efficiency, and reliability),
//  and feedback (array of strings), then use prototypes to calculate an average score, 
// classify performance level using control flow, and add new feedback based on conditions.

class Employee {
    constructor(idNumber, name, performanceMetrics, feedback) {
        this.idNumber = idNumber;
        this.name = name;
        this.performanceMetrics = performanceMetrics;
        this.feedback = feedback;
    }

averageScore = function(){

}

}

// Build a simple e-learning system where a Course class has properties: title (string), 
// instructor (object with name and expertise), and students (array of objects with name and 
// completionStatus), then add prototype methods to return names of students who completed the course, 
// count enrolled students by expertise area, and use control flow to output
//  different messages for instructors with more or less than 5 students.

class Course{
    constructor(title,instructor,students){
        this.title = title;
        this.instructor = instructor;
        this.students = students
    }
completedCourse(){
    let complete = this.students.filter(student=> student.completeStatus ==="complete")
    return complete
}

}

const course = new Course("Finance",{name:"Sage",expertise:"Accountant",},[{name:"Mercy",completeStatus:"complete"},{name:"Ruby",completeStatus:"incomplete"} ])
console.log(course.completedCourse())

