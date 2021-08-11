enum GenderType {
    Male,
    Female
}
let studentID :number =12345;
let studentName = 'Jenny Kim';
let age =21;
let gender='female';

interface Student {
    studentID: number;
    studentName : string;
    age? :number; //선택적 프로퍼티 : ?
    gender? :GenderType;
}
function getStudentDetails(studentID: number)
:Student{
    return {
        studentID: 12345,
        studentName : 'jenny',
        age : 20,
        gender : GenderType.Male
    };
}

function saveStudentDetails(student : Student): void{

}
saveStudentDetails({
    studentID : 12345,
    studentName : 'jihye',
    age : 21,
    gender : GenderType.Female
})