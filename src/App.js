import "./App.css";
import { Button, Container, Form, Header } from "semantic-ui-react";
import { useState } from "react";
import axios from "axios";

function App() {
  const [employee, setEmployee] = useState({
    name: "",
    address: "",
    salary: "",
    subSalary: "",
  });

  const URL =
    "https://sheet.best/api/sheets/85ef5a81-ce7f-47ed-9cf3-537dee57f039";

  const handleSubmit = (e) => {
    e.preventDefault();

    if (employee.name === "" || employee.salary === "") {
      alert("Vui lòng nhập tên và mức lương!");
    } else {
      axios.post(URL, employee).then((res) => {
        console.log(res);
      });
      alert("Đã đăng ký thành công!");

      setEmployee({ name: "", address: "", salary: "", subSalary: "" });
    }
  };

  return (
    <Container fluid className="container">
      <Header as="h2">Đăng ký nhân viên</Header>
      <Form className="form" onSubmit={handleSubmit}>
        <Form.Field>
          <label>Tên</label>
          <input
            placeholder="Nhập tên"
            type="text"
            name="name"
            value={employee.name}
            onChange={(e) => {
              setEmployee((prevState) => {
                return { ...prevState, name: e.target.value };
              });
            }}
          />
        </Form.Field>
        <Form.Field>
          <label>Địa chỉ</label>
          <input
            placeholder="Nhập địa chỉ"
            type="text"
            value={employee.address}
            onChange={(e) => {
              setEmployee((prevState) => {
                return { ...prevState, address: e.target.value };
              });
            }}
          />
        </Form.Field>
        <Form.Field>
          <label>Mức lương</label>
          <input
            placeholder="Nhập mức lương"
            type="number"
            value={employee.salary}
            onChange={(e) => {
              setEmployee((prevState) => {
                return { ...prevState, salary: e.target.value };
              });
            }}
          />
        </Form.Field>
        <Form.Field>
          <label>Lương phụ cấp</label>
          <input
            placeholder="Nhập lương phụ cấp"
            type="number"
            value={employee.subSalary}
            onChange={(e) => {
              setEmployee((prevState) => {
                return { ...prevState, subSalary: e.target.value };
              });
            }}
          />
        </Form.Field>

        <Button color="blue" type="submit">
          Đăng ký
        </Button>
      </Form>
    </Container>
  );
}

export default App;
