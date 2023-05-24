/* eslint-disable max-len */
import { PlusOutlined } from "@ant-design/icons"
import {
  Button,
  Cascader,
  Checkbox,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Radio,
  Select,
  Switch,
  TreeSelect,
  Upload,
} from "antd"
import { useState } from "react"

const { RangePicker } = DatePicker
const { TextArea } = Input
const normFile = (e) => {
  if (Array.isArray(e)) {
    return e
  }
  return e?.fileList
}
const onFinish = async (values) => {
  console.log("Values", values)
}

function CinemaDetails() {
  const [componentDisabled, setComponentDisabled] = useState(true)
  return (
    <>
      <Checkbox
        checked={componentDisabled}
        onChange={(e) => setComponentDisabled(e.target.checked)}
      >
        Form disabled
      </Checkbox>
      <Form
        onFinish={onFinish}
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 10,
        }}
        layout="horizontal"
        disabled={componentDisabled}
        style={{
          maxWidth: 600,
        }}
      >
        <Form.Item label="Checkbox" name="disabled" valuePropName="checked">
          <Checkbox>Checkbox</Checkbox>
        </Form.Item>
        <Form.Item label="Radio" name="ratio">
          <Radio.Group>
            <Radio value="apple"> Apple </Radio>
            <Radio value="pear"> Pear </Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="Input" name="input">
          <Input />
        </Form.Item>
        <Form.Item label="Select" name="select">
          <Select>
            {/* value es lo que se va a guardar del select y se va a guardar en name del form item */}
            <Select.Option value="demo">Demo</Select.Option>
            <Select.Option value="second">second</Select.Option>
            <Select.Option value="third">third</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="TreeSelect" name="treeselect">
          {/* tree select guarda un solo valor en name es decir el padre o el hijo seleccionado */}
          <TreeSelect
            treeData={[
              {
                title: "Light",
                value: "light",
                children: [
                  {
                    title: "Bamboo",
                    value: "bamboo",
                  },
                ],
              },
            ]}
          />
        </Form.Item>
        <Form.Item label="Cascader" name="cascader">
          {/* cascader guarda un arreglo con el valor del padre y los hijos seleccionados */}
          <Cascader
            options={[
              {
                value: "zhejiang",
                label: "Zhejiang",
                children: [
                  {
                    value: "hangzhou",
                    label: "Hangzhou",
                  },
                ],
              },
            ]}
          />
        </Form.Item>
        <Form.Item label="DatePicker" name="datePicker">
          {/* guara un objeto fecha */}
          <DatePicker />
        </Form.Item>
        <Form.Item label="RangePicker" name="rangePicker">
          {/* guara un arreglo de objetos fecha */}
          <RangePicker />
        </Form.Item>
        <Form.Item label="InputNumber" name="inputNumber">
          <InputNumber />
        </Form.Item>
        <Form.Item label="TextArea" name="textArea">
          <TextArea rows={4} />
        </Form.Item>
        <Form.Item label="Switch" valuePropName="checked" name="switch">
          <Switch />
        </Form.Item>
        <Form.Item
          label="Upload"
          valuePropName="fileList"
          getValueFromEvent={normFile}
        >
          <Upload action="/upload.do" listType="picture-card">
            <div>
              <PlusOutlined />
              <div
                style={{
                  marginTop: 8,
                }}
              >
                Upload
              </div>
            </div>
          </Upload>
        </Form.Item>
        <Form.Item label="Button">
          <Button>Button</Button>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  )
}
// export default function () {
//   return <CinemaDetails />
// }
export default CinemaDetails
