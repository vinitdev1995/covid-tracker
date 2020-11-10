import React, { useEffect, useState } from "react";
import Header from "../../common/components/Header";
import { CustomInput } from "../../common/components/Input";
import { CustomSelectInput } from "../../common/components/SelectInput";
import moment from "moment";
import { updateData, data3 } from "../../utils/data";
import { CustomSwitchInput } from "../../common/components/SwitchInput";
import { DataPickerInput } from "../../common/components/DataPickerInput";
import { Validation } from "../../common/components/Validation";
import "./patient-record.scss";
import { Form, Row, Layout, PageHeader, Col, Table } from "antd";
const { Content } = Layout;
const PatientRecord = () => {
  const [formData, setFormData] = useState(data3);
  const columns1 = [
    {
      title: "Number",
      key: "number",
      dataIndex: "number"
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name"
    },
    {
      title: "Student / Teacher / Staff",
      key: "post",
      dataIndex: "post"
    },
    {
      title: "Date Tracked",
      key: "date_tracked",
      dataIndex: "date_tracked"
    },
    {
      title: "Date Notified",
      key: "date_notified",
      dataIndex: "date_notified"
    },
    {
      title: "Date Of Contact",
      key: "date_of_contact",
      dataIndex: "date_of_contact"
    },
    {
      title: "Symptoms of Covid",
      key: "s_o_covid",
      dataIndex: "s_o_covid",
      render: symptoms => (
        <>
          {symptoms.map((symptom, index) => {
            return <span key={index}>{symptom} </span>;
          })}
        </>
      )
    },
    {
      title: "Status",
      key: "status",
      dataIndex: "status"
    }, //eslint-disable-line
  ];

  useEffect(() => {
    // const findList = data.filter(item => (props.match.params.id = item)); //eslint-disable-line
  }, []);

  const handleChange = (e, type) => {
    const data = formData;
    const changeData = formData[type];
    changeData[e.target.name] = e.target.value;
    data[type] = changeData;
    setFormData(prev => ({ ...prev, [type]: changeData }));
  };

  const onDateChange = (name, date, dateString, type) => {
    const data = formData;
    const changeData = formData[type];
    changeData[name] = dateString;
    data[type] = changeData;
    setFormData(prev => ({ ...prev, [type]: changeData }));
  };

  const submit = () => {
    const initialDataAllError = {};
    const HourTrackerAllError = {};
    const ReturnTrackerAllError = {};
    Object.keys(formData.initialData).forEach(key => {
      const error = Validation(key, formData.initialData[key]);
      if (error) {
        initialDataAllError[key] = error;
      }
    });

    Object.keys(formData.HourTracker).forEach(key => {
      const error = Validation(key, formData.HourTracker[key]);
      if (error) {
        HourTrackerAllError[key] = error;
      }
    });
    Object.keys(formData.ReturnTracker).forEach(key => {
      const error = Validation(key, formData.ReturnTracker[key]);
      if (error) {
        ReturnTrackerAllError[key] = error;
      }
    });
    if (
      Object.keys(
        initialDataAllError || ReturnTrackerAllError || HourTrackerAllError
      ).length
    ) {
      setFormData(prev => ({
        ...prev,
        error: {
          initialDataError: {
            ...initialDataAllError
          },
          hourTrackerError: {
            ...HourTrackerAllError
          },
          returnTrackerError: {
            ...ReturnTrackerAllError
          }
        }
      }));
    }
  };
  const initialDataError =
    (formData && formData.error && formData.error.initialDataError) || "";

  const hourTrackerError =
    (formData && formData.error && formData.error.hourTrackerError) || "";

  const returnTrackerError =
    (formData && formData.error && formData.error.returnTrackerError) || "";

  return (
    <div>
      <Header title="Covid Patient Record" />
      <Layout>
        <Content>
          <div className="mt-10 ml-10 text-blue">
            {moment().format("dddd, MMMM D YYYY")}
          </div>
          <Row style={{ marginTop: 10 }}>
            <Col md={8} style={{ padding: 10 }}>
              <Form
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 18 }}
                layout="horizontal"
              >
                <CustomInput
                  label="Case Number"
                  name="caseNumber"
                  value={formData.initialData.caseNumber}
                  error={initialDataError.caseNumber || ""}
                  onChange={e => handleChange(e, "initialData")}
                />
                <CustomSelectInput
                  label="Student ID"
                  name="studentID"
                  value={formData.initialData.studentID || []}
                  error={initialDataError.studentID || ""}
                  onChange={value =>
                    handleChange(
                      {
                        target: { name: "studentID", value }
                      },
                      "initialData"
                    )
                  }
                  options={formData.initialData.studentIDList}
                />

                <CustomInput
                  label="Student Last Name"
                  name="lastName"
                  value={formData.initialData.lastName}
                  error={initialDataError.lastName || ""}
                  onChange={e => handleChange(e, "initialData")}
                />
                <CustomInput
                  label="Student First Name"
                  name="firstName"
                  value={formData.initialData.firstName}
                  error={initialDataError.firstName || ""}
                  onChange={e => handleChange(e, "initialData")}
                />
                <CustomSelectInput
                  label="Student Grade"
                  name="gradeID"
                  value={formData.initialData.gradeID}
                  error={initialDataError.gradeID || ""}
                  onChange={value =>
                    handleChange(
                      { target: { name: "gradeID", value } },
                      "initialData"
                    )
                  }
                  options={formData.initialData.grade}
                />
                <CustomSelectInput
                  label="Teacher"
                  name="teacherID"
                  value={formData.initialData.teacherID}
                  error={initialDataError.teacherID || ""}
                  onChange={value =>
                    handleChange(
                      {
                        target: { name: "teacherID", value }
                      },
                      "initialData"
                    )
                  }
                  options={formData.initialData.teacher}
                />
                <CustomSwitchInput
                  label="Sent Home From School"
                  name="isHome"
                  checked={formData.initialData.isHome}
                  handleChange={value =>
                    handleChange(
                      { target: { name: "isHome", value } },
                      "initialData"
                    )
                  }
                />
                <CustomSwitchInput
                  label="Nurse execused following P/G Contact"
                  name="PG"
                  checked={formData.initialData.PG}
                  handleChange={value =>
                    handleChange(
                      { target: { name: "PG", value } },
                      "initialData"
                    )
                  }
                />
                <DataPickerInput
                  label="Date student was last in buildings"
                  error={initialDataError.date || ""}
                  handleChange={(e, value) =>
                    onDateChange("Date", e, value, "initialData")
                  }
                />
                <CustomInput
                  label="Reference"
                  name="reference"
                  value={formData.initialData.reference}
                  error={initialDataError.reference || ""}
                  onChange={e => handleChange(e, "initialData")}
                />
                <CustomSelectInput
                  label="Select Stymptoms"
                  mode="multiple"
                  name="selectSymptomsID"
                  error={initialDataError.selectSymptomsID || ""}
                  value={formData.initialData.selectSymptomsID}
                  onChange={value =>
                    handleChange(
                      {
                        target: { name: "selectSymptomsID", value }
                      },
                      "initialData"
                    )
                  }
                  options={formData.initialData.selectSymptoms}
                />
                <CustomSelectInput
                  label="Temprature"
                  name="tempratureID"
                  error={initialDataError.tempratureID || ""}
                  value={formData.initialData.tempratureID}
                  onChange={value =>
                    handleChange(
                      {
                        target: { name: "tempratureID", value }
                      },
                      "initialData"
                    )
                  }
                  options={formData.initialData.temprature}
                />
                <CustomSelectInput
                  label="Effected areas in the buildings"
                  name="affectedAreaID"
                  value={formData.initialData.affectedAreaID}
                  error={initialDataError.affectedAreaID || ""}
                  onChange={value =>
                    handleChange(
                      {
                        target: { name: "affectedAreaID", value }
                      },
                      "initialData"
                    )
                  }
                  options={formData.initialData.affectedArea}
                />
                <CustomSwitchInput
                  label="Building staff notified"
                  name="isStafNotified"
                  checked={formData.initialData.isStafNotified}
                  handleChange={value =>
                    handleChange(
                      {
                        target: { name: "isStafNotified", value }
                      },
                      "initialData"
                    )
                  }
                />
              </Form>
            </Col>
            <Col md={8} style={{ padding: 10 }}>
              <Form
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 18 }}
                layout="horizontal"
              >
                <PageHeader
                  title="48 Hour Tracker"
                  subTitle="should show up after 48 hours"
                />
                <DataPickerInput
                  label="Check in Date"
                  error={hourTrackerError.covidDate || ""}
                  handleChange={(e, value) =>
                    onDateChange("checkInDate", e, value, "HourTracker")
                  }
                />
                <CustomSelectInput
                  label="Status"
                  name="statusID"
                  error={hourTrackerError.statusID || ""}
                  value={formData.HourTracker.statusID}
                  onChange={value =>
                    handleChange(
                      {
                        target: { name: "statusID", value }
                      },
                      "HourTracker"
                    )
                  }
                  options={formData.HourTracker.status}
                />
                {formData.HourTracker.statusID !== "Return to school" && (
                  <CustomSelectInput
                    label="Symptoms"
                    name="symptomsID"
                    mode="multiple"
                    error={hourTrackerError.symptomsID || ""}
                    value={formData.HourTracker.symptomsID}
                    onChange={value =>
                      handleChange(
                        {
                          target: { name: "symptomsID", value }
                        },
                        "HourTracker"
                      )
                    }
                    options={formData.HourTracker.symptoms}
                  />
                )}
                <CustomSelectInput
                  label="Student Change in Remote"
                  name="changeRemoteID"
                  error={hourTrackerError.changeRemoteID || ""}
                  value={formData.HourTracker.changeRemoteID}
                  onChange={value =>
                    handleChange(
                      {
                        target: { name: "changeRemoteID", value }
                      },
                      "HourTracker"
                    )
                  }
                  options={formData.HourTracker.changeRemote}
                />
                <CustomSelectInput
                  label="Teacher Notified"
                  name="teacherNotifiedID"
                  error={hourTrackerError.teacherNotifiedID || ""}
                  value={formData.HourTracker.teacherNotifiedID}
                  onChange={value =>
                    handleChange(
                      {
                        target: { name: "teacherNotifiedID", value }
                      },
                      "HourTracker"
                    )
                  }
                  options={formData.HourTracker.teacherNotified}
                />
                <CustomSelectInput
                  label="Sis Change Conducted"
                  name="sisChangeConductedID"
                  error={hourTrackerError.sisChangeConductedID || ""}
                  value={formData.HourTracker.sisChangeConductedID}
                  onChange={value =>
                    handleChange(
                      {
                        target: { name: "sisChangeConductedID", value }
                      },
                      "HourTracker"
                    )
                  }
                  options={formData.HourTracker.sisChangeConducted}
                />
                <CustomSelectInput
                  label="Handout Provided"
                  name="handoutProvidedID"
                  error={hourTrackerError.handoutProvidedID || ""}
                  value={formData.HourTracker.handoutProvidedID}
                  onChange={value =>
                    handleChange(
                      {
                        target: { name: "handoutProvidedID", value }
                      },
                      "HourTracker"
                    )
                  }
                  options={formData.HourTracker.handoutProvided}
                />
                <DataPickerInput
                  label="Check in Date/Covid"
                  error={hourTrackerError.covidDate || ""}
                  handleChange={(e, value) =>
                    onDateChange("covidDate", e, value, "HourTracker")
                  }
                  options={formData.HourTracker.currentStatus}
                />
                <CustomSelectInput
                  label="Current Stutus"
                  name="currentStatusID"
                  mode="multiple"
                  error={hourTrackerError.currentStatusID || ""}
                  value={formData.HourTracker.currentStatusID}
                  onChange={value =>
                    handleChange(
                      {
                        target: { name: "currentStatusID", value }
                      },
                      "HourTracker"
                    )
                  }
                  options={formData.HourTracker.currentStatus}
                />
              </Form>
            </Col>
            <Col md={8} style={{ padding: 10 }}>
              <Form
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 18 }}
                layout="horizontal"
              >
                <PageHeader
                  title="Return Tracker"
                  subTitle="should show up after 14 Days"
                />
                <DataPickerInput
                  label="Check in Date"
                  error={returnTrackerError.checkInDate || ""}
                  handleChange={(e, value) =>
                    onDateChange("checkInDate", e, value, "ReturnTracker")
                  }
                />
                <DataPickerInput
                  label="Anticipated Return Date"
                  error={returnTrackerError.anticipatedReturnDate || ""}
                  handleChange={(e, value) =>
                    onDateChange(
                      "anticipatedReturnDate",
                      e,
                      value,
                      "ReturnTracker"
                    )
                  }
                />
                <CustomSelectInput
                  label="Teacher Notified of Return"
                  name="teacherNotifiedReturnID"
                  error={returnTrackerError.teacherNotifiedReturnID || ""}
                  value={formData.ReturnTracker.teacherNotifiedReturnID}
                  onChange={value =>
                    handleChange(
                      {
                        target: { name: "teacherNotifiedReturnID", value }
                      },
                      "ReturnTracker"
                    )
                  }
                  options={formData.ReturnTracker.teacherNotifiedReturn}
                />
                <CustomSelectInput
                  label="Teacher Notified of Return Date"
                  name="teacherNotifiedReturnDateID"
                  error={returnTrackerError.teacherNotifiedReturnDateID || ""}
                  value={formData.ReturnTracker.teacherNotifiedReturnDateID}
                  onChange={value =>
                    handleChange(
                      {
                        target: { name: "teacherNotifiedReturnDateID", value }
                      },
                      "ReturnTracker"
                    )
                  }
                  options={formData.ReturnTracker.teacherNotifiedReturnDate}
                />
                <CustomSelectInput
                  label="Student Nagetive Covid Test"
                  name="studentNegativeCovidTestID"
                  error={returnTrackerError.studentNegativeCovidTestID || ""}
                  value={formData.ReturnTracker.studentNegativeCovidTestID}
                  onChange={value =>
                    handleChange(
                      {
                        target: { name: "studentNegativeCovidTestID", value }
                      },
                      "ReturnTracker"
                    )
                  }
                  options={formData.ReturnTracker.studentNegativeCovidTest}
                />
                <DataPickerInput
                  label="Date Student Negative Covid Test"
                  error={returnTrackerError.studentNegativeCovidTestDate || ""}
                  handleChange={(e, value) =>
                    onDateChange(
                      "studentNegativeCovidTestDate",
                      e,
                      value,
                      "ReturnTracker"
                    )
                  }
                />
                <CustomSelectInput
                  label="Student Return"
                  name="studentReturnID"
                  error={returnTrackerError.studentReturnID || ""}
                  value={formData.ReturnTracker.studentReturnID}
                  onChange={value =>
                    handleChange(
                      {
                        target: { name: "studentReturnID", value }
                      },
                      "ReturnTracker"
                    )
                  }
                  options={formData.ReturnTracker.studentReturn}
                />
                <DataPickerInput
                  label="Date of Student Return"
                  error={returnTrackerError.studentNegativeCovidTestDate || ""}
                  handleChange={(e, value) =>
                    onDateChange(
                      "studentNegativeCovidTestDate",
                      e,
                      value,
                      "ReturnTracker"
                    )
                  }
                />
                <CustomSelectInput
                  label="Student Change to in-person in SIS"
                  name="studentChangeSisID"
                  error={returnTrackerError.studentChangeSisID || ""}
                  value={formData.ReturnTracker.studentChangeSisID}
                  onChange={value =>
                    handleChange(
                      {
                        target: { name: "studentChangeSisID", value }
                      },
                      "ReturnTracker"
                    )
                  }
                  options={formData.ReturnTracker.studentChangeSis}
                />
                <CustomSelectInput
                  label="Current Symptoms"
                  mode="multiple"
                  name="currentSymptomsID"
                  error={returnTrackerError.currentSymptomsID || ""}
                  value={formData.ReturnTracker.currentSymptomsID}
                  onChange={value =>
                    handleChange(
                      {
                        target: { name: "currentSymptomsID", value }
                      },
                      "ReturnTracker"
                    )
                  }
                  options={formData.ReturnTracker.currentSymptoms}
                />
              </Form>
            </Col>
          </Row>
        </Content>
        <div
          style={{ margin: 15 }}
          className="d-flex flex-row justify-content-end"
        >
          <button
            type="primary"
            style={{ width: 180, background: "#005677" }}
            onClick={submit}
          >
            Submit
          </button>
        </div>
        <div className="mt-20 container-fluid">
          <Table
            rowKey={record => record.number}
            rowClassName={(record, index) =>
              index % 2 === 0 ? "table-row-dark" : "table-row-light"
            }
            dataSource={updateData}
            columns={columns1}
            pagination={{ pageSize: "20" }}
            scroll={{ x: 1000 }}
          />
        </div>
      </Layout>
    </div>
  );
};

export default PatientRecord;
