"use strict";
var GenderType;
(function (GenderType) {
    GenderType[GenderType["Male"] = 0] = "Male";
    GenderType[GenderType["Female"] = 1] = "Female";
})(GenderType || (GenderType = {}));
var studentID = 12345;
var studentName = 'Jenny Kim';
var age = 21;
var gender = 'female';
function getStudentDetails(studentID) {
    return {
        studentID: 12345,
        studentName: 'jenny',
        age: 20,
        gender: GenderType.Male
    };
}
function saveStudentDetails(student) {
}
saveStudentDetails({
    studentID: 12345,
    studentName: 'jihye',
    age: 21,
    gender: GenderType.Female
});
