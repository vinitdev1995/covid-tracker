import React, { useEffect, useState } from "react";
import Header from "../../common/components/Header";
import { CustomInput } from "../../common/components/Input";
import { CustomSelectInput } from "../../common/components/SelectInput";
import moment from "moment";
import { data1, data, data3 } from "../../utils/data";
import { CustomSwitchInput } from "../../common/components/SwitchInput";
import { DatePickerInput } from "../../common/components/DatePickerInput";
import "./patient-record.scss";
import { Form, Input, Row, Layout, PageHeader, Col, Table } from "antd";
const { Content } = Layout;
const PatientRecord = props => {
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
      dataIndex: "s_o_covid"
    },
    {
      title: "Status",
      key: "status",
      dataIndex: "status"
    }, //eslint-disable-line
  ];

  useEffect(() => {
    const findList = data.filter(item => (props.match.params.id = item)); //eslint-disable-line
  }, []);

  const onInitialDataChange = e => {
    const initialData = formData.initialData;
    initialData[e.target.name] = e.target.value;
    const data1 = { ...formData, initialData };
    setFormData(data1);
  };

  const onInitialDateChange = (date, dateString) => {
    const initialData = formData.initialData;
    initialData["Date"] = dateString;
    const data1 = { ...formData, initialData };
    setFormData(data1);
  };

  const onHourDateChange = (type, date, dateString) => {
    const HourTracker = formData.HourTracker;
    HourTracker[type] = dateString;
    const data1 = { ...formData, HourTracker };
    setFormData(data1);
  };

  const onHourDataChange = e => {
    const HourTracker = formData.HourTracker;
    HourTracker[e.target.name] = e.target.value;
    const data1 = { ...formData, HourTracker };
    setFormData(data1);
  };

  const onReturnTrackerChange = (type, date, dateString) => {
    const ReturnTracker = formData.ReturnTracker;
    ReturnTracker[type] = dateString;
    const data1 = { ...formData, ReturnTracker };
    setFormData(data1);
  };

  const onReturnDateChange = e => {
    const ReturnTracker = formData.ReturnTracker;
    ReturnTracker[e.target.name] = e.target.value;
    const data1 = { ...formData, ReturnTracker };
    setFormData(data1);
  };

  return (
    <div>
      <Header title="Covid Patient Record" />
      <Layout>
        <Content>
          <div className="mt-10 text-blue">
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
                  value={formData.initialData.caseNumber || ""}
                  onChange={onInitialDataChange}
                />
                <CustomSelectInput
                  label="Student ID"
                  name="studentID"
                  value={formData.initialData.studentID || []}
                  onChange={value =>
                    onInitialDataChange({
                      target: { name: "studentID", value }
                    })
                  }
                  options={formData.initialData.studentIDList}
                />

                <CustomInput
                  label="Student Last Name"
                  name="lastName"
                  value={formData.initialData.lastName}
                  onChange={onInitialDataChange}
                />
                <CustomInput
                  label="Student First Name"
                  name="firstName"
                  value={formData.initialData.firstName}
                  onChange={onInitialDataChange}
                />
                <CustomSelectInput
                  label="Student Grade"
                  name="gradeID"
                  value={formData.initialData.gradeID}
                  onChange={value =>
                    onInitialDataChange({ target: { name: "gradeID", value } })
                  }
                  options={formData.initialData.grade}
                />
                <CustomSelectInput
                  label="Teacher"
                  name="teacherID"
                  value={formData.initialData.teacherID}
                  onChange={value =>
                    onInitialDataChange({
                      target: { name: "teacherID", value }
                    })
                  }
                  options={formData.initialData.teacher}
                />
                <CustomSwitchInput
                  label="Sent Home From School"
                  name="isHome"
                  checked={formData.initialData.isHome}
                  handleChange={value =>
                    onInitialDataChange({ target: { name: "isHome", value } })
                  }
                />
                <CustomSwitchInput
                  label="Nurse execused following P/G Contact"
                  name="PG"
                  checked={formData.initialData.PG}
                  handleChange={value =>
                    onInitialDataChange({ target: { name: "PG", value } })
                  }
                />
                <DatePickerInput
                  label="Date student was last in buildings"
                  handleChange={onInitialDateChange}
                />
                <CustomInput
                  label="Reference"
                  name="reference"
                  value={formData.initialData.reference}
                  o
                  onChange={onInitialDataChange}
                />
                <CustomSelectInput
                  label="Selecte Stymptoms"
                  mode="multiple"
                  name="selectSymptomsID"
                  value={formData.initialData.selectSymptomsID}
                  onChange={value =>
                    onInitialDataChange({
                      target: { name: "selectSymptomsID", value }
                    })
                  }
                  options={formData.initialData.selectSymptoms}
                />
                <CustomSelectInput
                  label="Temprature"
                  name="tempratureID"
                  value={formData.initialData.tempratureID}
                  onChange={value =>
                    onInitialDataChange({
                      target: { name: "tempratureID", value }
                    })
                  }
                  options={formData.initialData.temprature}
                />
                <CustomSelectInput
                  label="Effected areas in the buildings"
                  name="affectedAreaID"
                  value={formData.initialData.affectedAreaID}
                  onChange={value =>
                    onInitialDataChange({
                      target: { name: "affectedAreaID", value }
                    })
                  }
                  options={formData.initialData.affectedArea}
                />
                <CustomSwitchInput
                  label="Building staff notified"
                  name="isStafNotified"
                  checked={formData.initialData.isStafNotified}
                  handleChange={value =>
                    onInitialDataChange({
                      target: { name: "isStafNotified", value }
                    })
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
                <DatePickerInput
                  label="Check in Date"
                  handleChange={(e, value) =>
                    onHourDateChange("checkInDate", e, value)
                  }
                />
                <CustomSelectInput
                  label="Status"
                  name="statusID"
                  value={formData.HourTracker.statusID}
                  onChange={value =>
                    onHourDataChange({
                      target: { name: "statusID", value }
                    })
                  }
                  options={formData.HourTracker.status}
                />
                {formData.HourTracker.StatusID !== "Return to school" && (
                  <CustomSelectInput
                    label="Symptoms"
                    name="symptomsID"
                    mode="multiple"
                    value={formData.HourTracker.symptomsID}
                    onChange={value =>
                      onHourDataChange({
                        target: { name: "symptomsID", value }
                      })
                    }
                    options={formData.HourTracker.symptoms}
                  />
                )}
                <CustomSelectInput
                  label="Student Change in Remote"
                  name="changeRemoteID"
                  value={formData.HourTracker.changeRemoteID}
                  onChange={value =>
                    onHourDataChange({
                      target: { name: "changeRemoteID", value }
                    })
                  }
                  options={formData.HourTracker.changeRemote}
                />
                <CustomSelectInput
                  label="Teacher Notified"
                  name="teacherNotifiedID"
                  value={formData.HourTracker.teacherNotifiedID}
                  onChange={value =>
                    onHourDataChange({
                      target: { name: "teacherNotifiedID", value }
                    })
                  }
                  options={formData.HourTracker.teacherNotified}
                />
                <CustomSelectInput
                  label="Sis Change Conducted"
                  name="sisChangeConductedID"
                  value={formData.HourTracker.sisChangeConductedID}
                  onChange={value =>
                    onHourDataChange({
                      target: { name: "sisChangeConductedID", value }
                    })
                  }
                  options={formData.HourTracker.sisChangeConducted}
                />
                <CustomSelectInput
                  label="andout Provided"
                  name="handoutProvidedID"
                  value={formData.HourTracker.handoutProvidedID}
                  onChange={value =>
                    onHourDataChange({
                      target: { name: "handoutProvidedID", value }
                    })
                  }
                  options={formData.HourTracker.handoutProvided}
                />
                <DatePickerInput
                  label="Check in Date/Covid"
                  handleChange={(e, value) =>
                    onHourDateChange("covidDate", e, value)
                  }
                />
                <Form.Item label="Current Stutus">
                  <Input />
                </Form.Item>
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
                <DatePickerInput
                  label="Check in Date"
                  handleChange={(e, value) =>
                    onReturnTrackerChange("checkInDate", e, value)
                  }
                />
                <DatePickerInput
                  label="Anticipated Return Date"
                  handleChange={(e, value) =>
                    onReturnTrackerChange("anticipatedReturnDate", e, value)
                  }
                />
                <CustomSelectInput
                  label="Teacher Notified of Return"
                  name="teacherNotifiedReturnID"
                  value={formData.ReturnTracker.teacherNotifiedReturnID}
                  onChange={value =>
                    onReturnDateChange({
                      target: { name: "teacherNotifiedReturnID", value }
                    })
                  }
                  options={formData.ReturnTracker.teacherNotifiedReturn}
                />
                <CustomSelectInput
                  label="Teacher Notified of Return Date"
                  name="teacherNotifiedReturnDateID"
                  value={formData.ReturnTracker.teacherNotifiedReturnDateID}
                  onChange={value =>
                    onReturnDateChange({
                      target: { name: "teacherNotifiedReturnDateID", value }
                    })
                  }
                  options={formData.ReturnTracker.teacherNotifiedReturnDate}
                />
                <CustomSelectInput
                  label="Student Nagetive Covid Test"
                  name="studentNegativeCovidTestID"
                  value={formData.ReturnTracker.studentNegativeCovidTestID}
                  onChange={value =>
                    onReturnDateChange({
                      target: { name: "studentNegativeCovidTestID", value }
                    })
                  }
                  options={formData.ReturnTracker.studentNegativeCovidTest}
                />
                <DatePickerInput
                  label="Date Student Negative Covid Test"
                  handleChange={(e, value) =>
                    onReturnTrackerChange(
                      "studentNegativeCovidTestDate",
                      e,
                      value
                    )
                  }
                />
                <CustomSelectInput
                  label="Student Return"
                  name="studentReturnID"
                  value={formData.ReturnTracker.studentReturnID}
                  onChange={value =>
                    onReturnDateChange({
                      target: { name: "studentReturnID", value }
                    })
                  }
                  options={formData.ReturnTracker.studentReturn}
                />
                <DatePickerInput
                  label="Date of Student Return"
                  handleChange={(e, value) =>
                    onReturnTrackerChange(
                      "studentNegativeCovidTestDate",
                      e,
                      value
                    )
                  }
                />
                <CustomSelectInput
                  label="Student Change to in-person in SIS"
                  name="studentChangeSisID"
                  value={formData.ReturnTracker.studentChangeSisID}
                  onChange={value =>
                    onReturnDateChange({
                      target: { name: "studentChangeSisID", value }
                    })
                  }
                  options={formData.ReturnTracker.studentChangeSis}
                />
                <CustomSelectInput
                  label="Current Symptoms"
                  mode="multiple"
                  name="currentSymptomsID"
                  value={formData.ReturnTracker.currentSymptomsID}
                  onChange={value =>
                    onReturnDateChange({
                      target: { name: "currentSymptomsID", value }
                    })
                  }
                  options={formData.ReturnTracker.currentSymptoms}
                />
              </Form>
            </Col>
          </Row>
        </Content>
        <div className="mt-20 container-fluid">
          <Table
            rowClassName={(record, index) =>
              index % 2 === 0 ? "table-row-dark" : "table-row-light"
            }
            dataSource={data1}
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
