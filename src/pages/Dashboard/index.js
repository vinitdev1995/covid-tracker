import React, { useState } from "react";
import Header from "../../common/components/Header";
import { Row, Col, Table } from "antd";
import moment from "moment";
import { data } from "../../utils/data";
import { CustomInput } from "../../common/components/Input";
import "./Dashboard.scss";

const Dashboard = props => {
  const { history } = props;
  const [search, setSearch] = useState("");
  const [tableData, setTableData] = useState(data || []);
  const columns = [
    {
      title: "ID",
      key: "id",
      dataIndex: "id",
      render: (text, record) => <a onClick={() => onRowClick(record)}>{text}</a>
    },
    {
      title: "Case Number",
      dataIndex: "case_number",
      key: "case_number",
      render: (text, record) => <a onClick={() => onRowClick(record)}>{text}</a>
    },
    {
      title: "Name",
      key: "name",
      dataIndex: "name",
      render: (text, record) => <a onClick={() => onRowClick(record)}>{text}</a>
    },
    {
      title: "Post",
      key: "post",
      dataIndex: "post"
    },
    {
      title: "Grade",
      key: "grade",
      dataIndex: "grade"
    },
    {
      title: "Cohort",
      key: "cohort",
      dataIndex: "cohort"
    },
    {
      title: "Teacher",
      key: "teacher",
      dataIndex: "teacher"
    },
    {
      title: "Current Status",
      key: "current_status",
      dataIndex: "current_status"
    },
    {
      title: "Date Started",
      key: "date_started",
      dataIndex: "date_started"
    },
    {
      title: "Status",
      key: "status",
      dataIndex: "status"
    } //  eslint-disable-line
  ];

  const onRowClick = record => {
    history.push(`patient-record/${record.id}`);
  };

  const onSearchChange = ({ target: { value } }) => {
    setSearch(value);
  };

  const onSearch = () => {
    const tableData = [];
    data.forEach(a => {
      if (
        a.name.toLowerCase().includes(search.toLowerCase()) ||
        a.id.toLowerCase().includes(search.toLowerCase()) ||
        a.case_number.toLowerCase().includes(search.toLowerCase())
      ) {
        tableData.push(a);
      }
    });
    setTableData(tableData);
  };

  return (
    <div className="page-container">
      <Header title="Covid Tracer" />
      <div className="container-fluid">
        <div className="mt-10 text-blue">
          {moment().format("dddd, MMMM D YYYY")}
        </div>
        <Row>
          <Col md={14} sm={12} xs={12} className="mt-30">
            <div className="d-flex flex-row search-box">
              <div className="text-blue">
                Search by Name or ID or Case Number
              </div>
              <CustomInput
                className="Input"
                value={search}
                placeholder="Search"
                onChange={onSearchChange}
              />
            </div>
            <div className="mt-20 mb-20">
              <button
                type="primary"
                style={{ width: 180, background: "#005677" }}
                onClick={onSearch}
              >
                Go
              </button>
            </div>
          </Col>
          <div className="ml-20"></div>
          <Col md={8} sm={12} xs={12}>
            <div className="outer-box">
              <div className="dark-box">Cases (YTD)</div>
              <div className="light-box">{tableData.length}</div>
            </div>
            <div className="outer-box">
              <div className="dark-box">48 Hours Wait</div>
              <div className="light-box">
                {
                  tableData.filter(
                    a => a.current_status.toLowerCase() === "48 hours wait"
                  ).length
                }
              </div>
            </div>
            <div className="outer-box">
              <div className="dark-box">Covid Symptoms</div>
              <div className="light-box">
                {
                  tableData.filter(
                    a => a.current_status.toLowerCase() === "covid symptoms"
                  ).length
                }
              </div>
            </div>
            <div className="outer-box">
              <div className="dark-box">False Alarms</div>
              <div className="light-box">
                {
                  tableData.filter(
                    a => a.current_status.toLowerCase() === "false alarms"
                  ).length
                }
              </div>
            </div>
            <div className="outer-box">
              <div className="dark-box">Returns Expected</div>
              <div className="light-box">
                {
                  tableData.filter(
                    a => a.current_status.toLowerCase() === "returns expected"
                  ).length
                }
              </div>
            </div>
            <div className="outer-box">
              <div className="dark-box">Returned</div>
              <div className="light-box">
                {
                  tableData.filter(
                    a => a.current_status.toLowerCase() === "returned"
                  ).length
                }
              </div>
            </div>
          </Col>
        </Row>
        <div className="mt-20">
          <Table
            rowKey={record => record.id}
            rowClassName={(record, index) =>
              index % 2 === 0 ? "table-row-dark" : "table-row-light"
            }
            dataSource={tableData}
            columns={columns}
            pagination={{ pageSize: "10" }}
            scroll={{ x: 1000 }}
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
