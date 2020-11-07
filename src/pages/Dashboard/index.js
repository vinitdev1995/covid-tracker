import React, {useState} from "react";
import Header from "../../common/components/Header";
import { Button, Row, Col, Input, Table } from "antd";
import {data} from "../../utils/data";
import "./Dashboard.scss";

const Dashboard = () => {
    const [search, setSearch] = useState("");
    const [tableData, setTableData] = useState(data || []);
    const columns = [
        {
            title: "ID",
            key: "id",
            dataIndex: "id",
        },
        {
            title: "Case Number",
            dataIndex: "case_number",
            key: "case_number",
        },
        {
            title: "Name",
            key: "name",
            dataIndex: "name",
        },
        {
            title: "Post",
            key: "post",
            dataIndex: "post",
        },
        {
            title: "Grade",
            key: "grade",
            dataIndex: "grade",
        },
        {
            title: "Cohort",
            key: "cohort",
            dataIndex: "cohort",
        },
        {
            title: "Teacher",
            key: "teacher",
            dataIndex: "teacher",
        },
        {
            title: "Current Status",
            key: "current_status",
            dataIndex: "current_status",
        },
        {
            title: "Date Started",
            key: "date_started",
            dataIndex: "date_started",
        },
        {
            title: "Status",
            key: "status",
            dataIndex: "status",
        }
    ];


    const onSearchChange = ({target:{value}}) => {
        setSearch(value);
    };

    const onSearch = () => {
        const tableData = [];
        data.forEach(a =>{if(a.name.includes(search)|| a.id.includes(search) || a.case_number.includes(search)){tableData.push(a);}});
        setTableData(tableData);
    };

    return(
        <>
            <Header title="Covid Tracer"/>
            <div className="page-container">
                <Row>
                    <Col md={6} sm={12} xs={12} className="mt-30">
                        <div className=" text-blue">Search by Name or ID or Case Number</div>
                        <div className="mt-20 mb-20">
                            <Button type="primary" style={{width:180}} onClick={onSearch}>Go</Button>
                        </div>
                    </Col>
                    <Col md={6} sm={12} xs={12} className="mt-30">
                        <Input
                            className="Input"
                            value={search}
                            placeholder="Search"
                            onChange={onSearchChange}
                        />
                    </Col>
                    <Col md={6} sm={12} xs={12}>
                        <div className="outer-box">
                            <div className="dark-box">Cases (YTD)</div>
                            <div className="light-box">{tableData.length}</div>
                        </div>
                        <div className="outer-box">
                            <div className="dark-box">48 Hours Wait</div>
                            <div className="light-box">{tableData.filter(a =>(a.current_status.toLowerCase() === "48 hours wait")).length}</div>
                        </div>
                        <div className="outer-box">
                            <div className="dark-box">Covid Symptoms</div>
                            <div className="light-box">{tableData.filter(a =>(a.current_status.toLowerCase() === "covid symptoms")).length}</div>
                        </div>
                        <div className="outer-box">
                            <div className="dark-box">False Alarms</div>
                            <div className="light-box">{tableData.filter(a =>(a.current_status.toLowerCase() === "false alarms")).length}</div>
                        </div>
                        <div className="outer-box">
                            <div className="dark-box">Returns Expected</div>
                            <div className="light-box">{tableData.filter(a =>(a.current_status.toLowerCase() === "returns expected")).length}</div>
                        </div>
                        <div className="outer-box">
                            <div className="dark-box">Returned</div>
                            <div className="light-box">{tableData.filter(a =>(a.current_status.toLowerCase() === "returned")).length}</div>
                        </div>
                    </Col>
                </Row>
                <div className="mt-20">
                    <Table
                        rowClassName={(record, index) => index % 2 === 0 ? 'table-row-dark' : 'table-row-light'}
                        dataSource={tableData}
                        columns={columns}
                        pagination={{pageSize: '20'}}
                        scroll={{x:1000}}
                    />
                </div>
            </div>
        </>
    )
};

export default Dashboard;