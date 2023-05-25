/* eslint-disable no-unused-vars */
/* eslint-disable object-curly-newline */
/* eslint-disable max-len */
import { Button, Form, Select } from "antd"

const onFinish = async (values) => {
  console.log("Values", values)
}

function CinemaDetails() {
  return (
    <Form
      onFinish={onFinish}
      labelCol={{
        span: 4,
      }}
      wrapperCol={{
        span: 10,
      }}
      layout="horizontal"
      style={{
        maxWidth: 600,
      }}
    >
      <Form.Item label="Format" name="format">
        <Select>
          {/* value es lo que se va a guardar del select y se va a guardar en name del form item */}
          <Select.Option value="1">2D</Select.Option>
          <Select.Option value="2">3D</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item label="Languaje" name="languaje">
        <Select>
          {/* value es lo que se va a guardar del select y se va a guardar en name del form item */}
          <Select.Option value="1">Doblado</Select.Option>
          <Select.Option value="2">Subtitulado</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item label="Type" name="type">
        <Select>
          {/* value es lo que se va a guardar del select y se va a guardar en name del form item */}
          <Select.Option value="1">Estandar</Select.Option>
          <Select.Option value="2">Onyx</Select.Option>
          <Select.Option value="3">Mega Sala</Select.Option>
          <Select.Option value="4">IMAX</Select.Option>
          <Select.Option value="5">Dinamix</Select.Option>
        </Select>
      </Form.Item>

      <Form.Item label="enter submit">
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  )
}

export default CinemaDetails
