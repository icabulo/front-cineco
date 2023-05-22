import { useDispatch } from "react-redux"
// eslint-disable-next-line object-curly-newline
import { Button, Form, Input, message } from "antd"
import { getCinemasAsync } from "../../../context/features/cinema/cinemaSlice"
import { apiUrl } from "../../../backendUrl/base-url"
import "./create-cinema.scss"

function CreateCinema() {
  const dispatch = useDispatch()
  const [form] = Form.useForm()
  // eslint-disable-next-line consistent-return
  const newCinema = async (body, token) => {
    try {
      const request = await fetch(`${apiUrl}/api/cinema`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(body),
      })
      const data = await request.json()
      if (data.name) {
        dispatch(getCinemasAsync())
      }
      console.log("cinema created:", data)
      return !!data.name
    } catch (error) {
      console.log(error)
    }
  }

  const onFinish = async (values) => {
    console.log("Success:", values)
    const validation = await newCinema(values, "mockToken")
    if (validation) {
      message.success("Cinema Created")
    } else {
      message.error("Cannot create this cinema")
    }
    form.resetFields()
  }

  return (
    <Form
      name="Create-Cinema"
      onFinish={onFinish}
      autoComplete="on"
      form={form}
    >
      <Form.Item
        label="Cinema Name"
        name="name"
        rules={[{ required: true, message: "Please input cinema's name!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  )
}
export default CreateCinema
