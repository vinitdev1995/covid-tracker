import React, { useState } from 'react';
import Header from "../../common/components/Header";
import {CustomInput} from "./Common/Input"
import {CustomSelectInput} from "./Common/SelectInput"
import {data1} from "../../utils/data";
import "./patient-record.scss";
import {
    Form,
    Input,
    Button,
    Radio,
    Select,
    Cascader,
    DatePicker,
    InputNumber,
    TreeSelect,
    Switch,
    Row,
    Layout,
    PageHeader,
    Col,
    Table
} from 'antd';
const {Content} = Layout;
class PatientRecord extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
           newData: {
               StudentIDList: ["1", "2"],
               CaseNumber: "",
               LastName : "",
               FirstName : "",
               Grade: ["1","2","4"],
               Teacher: ["wqwq","wqwq","wwwq"],
               isHome : true,
               PG: true,
               Date: "",
               Reference: "",
               SelectSymptoms:  ["wqwq","aawqwq","wwwq"],
               Temprature: ["10","20", "30"],
               AffectedArea: ["a","b", "c"],
               isStafNotified: true,
               SelectSymptomsID: [],
               StudentID : "",
               TeacherID: "",
               GradeId: "",
               TempratureID: "",
               AffectedAreaID: "",
               error: {SelectSymptomsID: "", StudentID: "", TeacherID: "", GradeId: "", TempratureID: "", AffectedAreaID: ""}
           },
            HourTracker : {
                CheckInDate: "",
                Status: ["Return to school", "Remote  Quarantine"],
                Symptoms: ["ew", "ewew", "ewew"],
                ChangeRemote: ["ew", "ewew", "ewew"],
                TeacherNotified: ["ew", "ewew", "ewew"],
                SisChangeConducted: ["ew", "ewew", "ewew"],
                HandoutProvided: ["ew", "ewew", "ewew"],
                covidDate: "",
                CurrentStatus:  "",
                StatusID: "",
                SymptomsID: [],
                ChangeRemoteID: "",
                TeacherNotifiedID: "",
                SisChangeConductedID: "",
                HandoutProvidedID: ""
            },
            ReturnTracker: {
                CheckInDate: "",
                AnticipatedReturnDate: "",
                TeacherNotifiedReturn: ["re","Rere", "Rer"],
                TeacherNotifiedReturnDate: ["ss","dwd", "dww"],
                StudentNegativeCovidTest: ["Re","Rere","Re"],
                StudentNegativeCovidTestDate: "",
                StudentReturn: ["Ee", "Rere", "Rere"],
                StudentChangeSis: ["dsd", "Dsds", "sd"],
                StudentReturnDate: "",
                CurrentSymptoms:  ["ewew", "ew", "Ee", "we"],
                CurrentSymptomsID: [],
                TeacherNotifiedReturnDateID: "",
                TeacherNotifiedReturnID: "",
                StudentNegativeCovidTestID: "",
                StudentReturnID: "",
                StudentChangeSisID: "",

            }
        }
    }

    handleChange = (e) => {
        this.setState({
            newData: {
                ...this.state.newData,
                [e.target.name]: e.target.value
            }
        })

    }

    onDateChange = ( date, dateString) => {
        this.setState({
            newData: {
                ...this.state.newData,
                "Date": dateString

            }
        })
    }

    handleDataChange = (type, date, dateString) => {debugger
        this.setState({
            HourTracker: {
                ...this.state.HourTracker,
                [type] : dateString
            }
        })
    }

    handleOnChange = (e) => {
        this.setState({
            HourTracker: {
                ...this.state.HourTracker,
                [e.target.name]: e.target.value
            }
        })
    }

    ReturnTrackerChange = (type, date, dateString) => {
        this.setState({
            ReturnTracker: {
                ...this.state.ReturnTracker,
                [type] : dateString
            }
        })
    }

    Change = (e) => {debugger
        this.setState({
            ReturnTracker: {
                ...this.state.ReturnTracker,
                [e.target.name]: e.target.value
            }
        })
    }


    render() {
        const {newData, HourTracker, ReturnTracker} = this.state
        const columns1 = [
            {
                title: "Number",
                key: "number",
                dataIndex: "number",
            },
            {
                title: "Name",
                dataIndex: "name",
                key: "name",
            },
            {
                title: "Student / Teacher / Staff",
                key: "post",
                dataIndex: "post",
            },
            {
                title: "Date Tracked",
                key: "date_tracked",
                dataIndex: "date_tracked",
            },
            {
                title: "Date Notified",
                key: "date_notified",
                dataIndex: "date_notified",
            },
            {
                title: "Date Of Contact",
                key: "date_of_contact",
                dataIndex: "date_of_contact",
            },
            {
                title: "Symptoms of Covid",
                key: "s_o_covid",
                dataIndex: "s_o_covid",
            },
            {
                title: "Status",
                key: "status",
                dataIndex: "status",
            }
        ];
            return (
                <div>
                    <Header title="Covid Patient Record"/>
                    <Layout>
                        <Content style={{padding: '0 50px'}}>
                            <Row style={{marginTop: 10}}>
                                <Col md={8} style={{padding: 10}}>
                                    <Form
                                        labelCol={{ span: 8 }}
                                        wrapperCol={{ span: 18 }}
                                        layout="horizontal"
                                    >
                                        <CustomInput label="Case Number" name="CaseNumber" value={newData.CaseNumber} onChange={this.handleChange}/>
                                        <CustomSelectInput label="Student ID" name="StudentID" value={newData.StudentID} onChange={(value) => this.handleChange({target: {name: "StudentID", value}})} optionValues={newData.StudentIDList}/>
                                        <CustomInput label="Student Last Name" name="LastName" value={newData.LastName} onChange={this.handleChange}/>
                                        <CustomInput label="Student First Name" name="FirstName" value={newData.FirstName} onChange={this.handleChange}/>
                                        <CustomSelectInput label="Student Grade" name="GradeID" value={newData.GradeID} onChange={(value) => this.handleChange({target: {name: "GradeID", value}})} optionValues={newData.Grade}/>
                                        <CustomSelectInput label="Teacher" name="TeacherID" value={newData.TeacherID} onChange={(value) => this.handleChange({target: {name: "TeacherID", value}})} optionValues={newData.Teacher}/>
                                        <Form.Item label="Sent Home From School?">
                                            <Switch size="small" name="isHome" checked={newData.isHome} onChange={(value) => this.handleChange({target: {name: "isHome", value}})} />
                                        </Form.Item>
                                        <Form.Item label="Nurse execused following P/G Contact">
                                            <Switch size="small" name="PG" checked={newData.PG} onChange={(value) => this.handleChange({target: {name: "PG", value}})} />
                                        </Form.Item>
                                        <Form.Item label="Date student was last in buildings">
                                            <DatePicker onChange={this.onDateChange} />
                                        </Form.Item>
                                        <CustomInput label="Reference" name="Reference" value={newData.Reference} o onChange={this.handleChange}/>
                                        <CustomSelectInput label="Selecte Stymptoms" mode="multiple" name="SelectSymptomsID" value={newData.SelectSymptomsID} onChange={(value) => this.handleChange({target: {name: "SelectSymptomsID", value}})} optionValues={newData.SelectSymptoms}/>
                                        <CustomSelectInput label="temprature" name="TeacherID" value={newData.TempratureID} onChange={(value) => this.handleChange({target: {name: "TempratureID", value}})} optionValues={newData.Temprature}/>
                                        <CustomSelectInput label="Effected areas in the buildings" name="AffectedAreaID" value={newData.AffectedAreaID} onChange={(value) => this.handleChange({target: {name: "AffectedAreaID", value}})} optionValues={newData.AffectedArea}/>
                                        <Form.Item label="Building staff notified">
                                            <Switch size="small" name="isStafNotified" checked={newData.isStafNotified} onChange={(value) => this.handleChange({target: {name: "isStafNotified", value}})} />
                                        </Form.Item>

                                    </Form>
                                </Col>
                                <Col md ={8} style={{padding: 10}}>
                                    <Form
                                        labelCol={{ span: 8 }}
                                        wrapperCol={{ span: 18 }}
                                        layout="horizontal"
                                    >

                                        <PageHeader
                                            title="48 Hour Tracker"
                                            subTitle="should show up after 48 hours"
                                            extra="22"
                                        />
                                        <Form.Item label="Check in Date">
                                            <DatePicker onChange={(e,value) => this.handleDataChange("CheckInDate",e,value)} />
                                        </Form.Item>
                                        <CustomSelectInput label="Status" name="StatusID" value={HourTracker.StatusID} onChange={(value) => this.handleOnChange({target: {name: "StatusID", value}})} optionValues={HourTracker.Status}/>
                                        {
                                            HourTracker.StatusID !== "Return to school" &&
                                            <CustomSelectInput label="Symptoms" name="SymptomsID" mode="multiple" value={HourTracker.SymptomsID} onChange={(value) => this.handleOnChange({target: {name: "SymptomsID", value}})} optionValues={HourTracker.Symptoms}/>
                                        }
                                        <CustomSelectInput label="Student Change in Remote" name="ChangeRemoteID" value={HourTracker.ChangeRemoteID} onChange={(value) => this.handleOnChange({target: {name: "ChangeRemoteID", value}})} optionValues={HourTracker.ChangeRemote}/>
                                        <CustomSelectInput label="Teacher Notified" name="TeacherNotifiedID" value={HourTracker.TeacherNotifiedID} onChange={(value) => this.handleOnChange({target: {name: "TeacherNotifiedID", value}})} optionValues={HourTracker.TeacherNotified}/>
                                        <CustomSelectInput label="Sis Change Conducted" name="SisChangeConductedID" value={HourTracker.SisChangeConductedID} onChange={(value) => this.handleOnChange({target: {name: "SisChangeConductedID", value}})} optionValues={HourTracker.SisChangeConducted}/>
                                        <CustomSelectInput label="andout Provided" name="HandoutProvidedID" value={HourTracker.HandoutProvidedID} onChange={(value) => this.handleOnChange({target: {name: "HandoutProvidedID", value}})} optionValues={HourTracker.HandoutProvided}/>
                                        <Form.Item label="Check in Date/Covid">
                                            <DatePicker onChange={(e,value) => this.handleDataChange("covidDate",e,value)} />
                                        </Form.Item>
                                        <Form.Item label="Current Stutus">
                                            <Input/>
                                        </Form.Item>
                                    </Form>
                                </Col>
                                <Col md={8} style={{padding: 10}}>
                                    <Form
                                        labelCol={{ span: 8 }}
                                        wrapperCol={{ span: 18 }}
                                        layout="horizontal"
                                    >
                                        <PageHeader
                                            title="Return Tracker"
                                            subTitle="should show up after 14 Days"
                                        />
                                        <Form.Item label="Check in Date">
                                            <DatePicker onChange={(e,value) => this.ReturnTrackerChange("CheckInDate",e,value)} />
                                        </Form.Item>
                                        <Form.Item label="Anticipated Return Date">
                                            <DatePicker onChange={(e,value) => this.ReturnTrackerChange("AnticipatedReturnDate",e,value)} />
                                        </Form.Item>
                                        <CustomSelectInput label="Teacher Notified of Return" name="TeacherNotifiedReturnID" value={ReturnTracker.TeacherNotifiedReturnID} onChange={(value) => this.Change({target: {name: "TeacherNotifiedReturnID", value}})} optionValues={ReturnTracker.TeacherNotifiedReturn}/>
                                        <CustomSelectInput label="Teacher Notified of Return Date" name="TeacherNotifiedReturnDateID" value={ReturnTracker.TeacherNotifiedReturnDateID} onChange={(value) => this.Change({target: {name: "TeacherNotifiedReturnDateID", value}})} optionValues={ReturnTracker.TeacherNotifiedReturnDate}/>
                                        <CustomSelectInput label="Student Nagetive Covid Test" name="StudentNegativeCovidTestID" value={ReturnTracker.StudentNegativeCovidTestID} onChange={(value) => this.Change({target: {name: "StudentNegativeCovidTestID", value}})} optionValues={ReturnTracker.StudentNegativeCovidTest}/>
                                        <Form.Item label="Date Student Negative Covid Test">
                                            <DatePicker onChange={(e,value) => this.ReturnTrackerChange("StudentNegativeCovidTestDate",e,value)} />
                                        </Form.Item>
                                        <CustomSelectInput label="Student Return" name="StudentReturnID" value={ReturnTracker.StudentReturnID} onChange={(value) => this.Change({target: {name: "StudentReturnID", value}})} optionValues={ReturnTracker.StudentReturn}/>
                                        <Form.Item label="Date of Student Return">
                                            <DatePicker onChange={(e,value) => this.ReturnTrackerChange("StudentNegativeCovidTestDate",e,value)} />
                                        </Form.Item>
                                        <CustomSelectInput label="Student Change to in-person in SIS" name="StudentChangeSisID" value={ReturnTracker.StudentChangeSisID} onChange={(value) => this.Change({target: {name: "StudentChangeSisID", value}})} optionValues={ReturnTracker.StudentChangeSis}/>
                                        <CustomSelectInput label="Current Symptoms" mode="multiple" name="CurrentSymptomsID" value={ReturnTracker.CurrentSymptomsID} onChange={(value) => this.Change({target: {name: "CurrentSymptomsID", value}})} optionValues={ReturnTracker.CurrentSymptoms}/>
                                    </Form>
                                </Col>
                            </Row>
                        </Content>
                        <div className="mt-20">
                            <Table
                                rowClassName={(record, index) => index % 2 === 0 ? 'table-row-dark' : 'table-row-light'}
                                dataSource={data1}
                                columns={columns1}
                                pagination={{pageSize: '20'}}
                                scroll={{x:1000}}
                            />
                        </div>
                    </Layout>
                </div>
            );

    }
};

export default PatientRecord;