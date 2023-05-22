/* eslint-disable object-curly-newline */
// redux
import { useDispatch } from "react-redux"

import { Button, Modal, Tooltip, Form, Input, Space } from "antd"
import { FormOutlined } from "@ant-design/icons"
import { useState } from "react"
import { getCinemasAsync } from "../../../context/features/cinema/cinemaSlice"
import { apiUrl } from "../../../backendUrl/base-url"

function EditButton({ id, textName }) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const dispatch = useDispatch()

  const showModal = () => {
    setIsModalOpen(true)
  }
  const handleOk = () => {
    setIsModalOpen(false)
  }
  const handleCancel = () => {
    setIsModalOpen(false)
  }

  const updateCinema = async (body, idCinema, token) => {
    try {
      const request = await fetch(`${apiUrl}/api/cinema/${idCinema}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(body),
      })
      const data = await request.json()
      console.log("UPDATE cinema", data)
      if (data.name) {
        dispatch(getCinemasAsync())
      }
    } catch (error) {
      console.log(error)
    }
  }

  const [form] = Form.useForm()

  const onFinish = async (values) => {
    console.log("New name", values, id)
    await updateCinema(values, id, "mockToken")
    // setIsModalOpen(false)

    form.resetFields()
  }

  return (
    <>
      <Tooltip title="Edit name">
        <Button
          type="primary"
          onClick={showModal}
          icon={<FormOutlined style={{ fontSize: "0.7rem" }} />}
          size="small"
          shape="round"
        />
      </Tooltip>

      <Modal
        title="Edit this item"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        okButtonProps={{
          disabled: true,
        }}
        footer={null}
      >
        <Form
          name="Update Name"
          onFinish={onFinish}
          autoComplete="on"
          form={form}
        >
          <Space>
            <Form.Item
              label="Update Name"
              name="name"
              rules={[
                { required: true, message: "Please input cinema's name!" },
              ]}
            >
              <Input placeholder={textName} />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Space>
        </Form>
      </Modal>
    </>
  )
}
export default EditButton
