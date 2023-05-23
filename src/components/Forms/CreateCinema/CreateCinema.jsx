import { useDispatch } from "react-redux"
// eslint-disable-next-line object-curly-newline
import { Button, Form, Input, Space, message } from "antd"
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
      return !!data.name
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error)
    }
  }

  const onFinish = async (values) => {
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
      <Space>
        <Form.Item
          label="Cinema Name"
          name="name"
          rules={[{ required: true, message: "Please input cinema's name!" }]}
        >
          <Input
            placeholder="Unique cinema"
            style={{
              width: 200,
            }}
          />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Space>
    </Form>
  )
}
export default CreateCinema
