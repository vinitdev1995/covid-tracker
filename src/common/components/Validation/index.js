export const Validation = (name, value) => {
  switch (name) {
    case "caseNumber":
      if (!value) {
        return "Case Number is required";
      } else {
        return null;
      }
    case "lastName":
      if (!value) {
        return "Student Last Name is required";
      } else {
        return null;
      }
    case "firstName":
      if (!value) {
        return "Student First Name is required";
      } else {
        return null;
      }
    case "date":
      if (!value) {
        return "Date is required";
      } else {
        return null;
      }
    case "reference":
      if (!value) {
        return "Reference is required";
      } else {
        return null;
      }
    case "studentID":
      if (!value) {
        return "Student ID name is required";
      } else {
        return null;
      }
    case "studentGrade":
      if (!value) {
        return "student Grade name is required";
      } else {
        return null;
      }

    case "handoutProvidedID":
      if (!value) {
        return "Handout Provided is required";
      } else {
        return null;
      }
    case "checkInDate":
      if (!value) {
        return "Date is required";
      } else {
        return null;
      }
    case "covidDate":
      if (!value) {
        return "Date is required";
      } else {
        return null;
      }
    case "teacherID":
      if (!value) {
        return "Teacher is required";
      } else {
        return null;
      }
    case "gradeID":
      if (!value) {
        return "Student Grade is required";
      } else {
        return null;
      }
    case "tempratureID":
      if (!value) {
        return "Temprature is required";
      } else {
        return null;
      }
    case "affectedAreaID":
      if (!value) {
        return "Affected Area is required";
      } else {
        return null;
      }
    case "selectSymptomsID":
      if (!value.length) {
        return "Symptoms is required";
      } else {
        return null;
      }
    case "currentStatusID":
      if (!value.length) {
        return "Current Status is required";
      } else {
        return null;
      }
    case "currentStatus":
      if (!value) {
        return "CurrentStatus is required";
      } else {
        return null;
      }
    case "statusID":
      if (!value) {
        return "Status is required";
      } else {
        return null;
      }
    case "symptomsID":
      if (!value.length) {
        return "Symptoms is required";
      } else {
        return null;
      }
    case "changeRemoteID":
      if (!value) {
        return "Student Change in Remote is required";
      } else {
        return null;
      }
    case "teacherNotifiedID":
      if (!value) {
        return "Teacher Notified is required";
      } else {
        return null;
      }
    case "sisChangeConductedID":
      if (!value) {
        return "SIS Change Conducted is required";
      } else {
        return null;
      }
    case "handoutProvided":
      if (!value) {
        return "Handout Provided is required";
      } else {
        return null;
      }
    case "anticipatedReturnDate":
      if (!value) {
        return "Anticipated Return Date is required";
      } else {
        return null;
      }
    case "studentNegativeCovidTestDate":
      if (!value) {
        return "Student Negative Covid Test Date is required";
      } else {
        return null;
      }
    case "studentReturnDate":
      if (!value) {
        return "Student Return Date is required";
      } else {
        return null;
      }
    case "teacherNotifiedReturnDateID":
      if (!value) {
        return "Teacher Notified Return Date is required";
      } else {
        return null;
      }
    case "teacherNotifiedReturnID":
      if (!value) {
        return "Teacher Notified Return is required";
      } else {
        return null;
      }
    case "studentNegativeCovidTestID":
      if (!value) {
        return "Student Negative Covid Test is required";
      } else {
        return null;
      }
    case "studentReturnID":
      if (!value) {
        return "Student Return is required";
      } else {
        return null;
      }
    case "studentChangeSisID":
      if (!value) {
        return "Student Change Sis is required";
      } else {
        return null;
      }
    case "currentSymptomsID":
      if (!value.length) {
        return "Current Symptoms is required";
      } else {
        return null;
      }
    default:
      return null;
  }
};
