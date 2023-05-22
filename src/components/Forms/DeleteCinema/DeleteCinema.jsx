/* eslint-disable object-curly-newline */
// redux
import { useDispatch } from "react-redux"

import { Button, Popconfirm, message } from "antd"
import { DeleteOutlined, ExclamationCircleOutlined } from "@ant-design/icons"
import { getCinemasAsync } from "../../../context/features/cinema/cinemaSlice"
import { apiUrl } from "../../../backendUrl/base-url"

function DeleteCinema({ id, textName = "this cinema" }) {
  const dispatch = useDispatch()
  const handleOpen = () => {
    console.log("delete open", id, textName)
  }

  // eslint-disable-next-line consistent-return
  const deleteRequest = async (idCinema, token) => {
    console.log("Inside the delete request")
    try {
      const request = await fetch(`${apiUrl}/api/cinema/${idCinema}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      const data = await request.json()
      console.log("DELETE cinema", data)
      if (data.name) {
        dispatch(getCinemasAsync())
      }
      return !!data.name
    } catch (error) {
      console.log(error)
    }
  }

  const confirm = async (e) => {
    console.log(e)

    const validation = await deleteRequest(id, "mockToken")
    if (validation) {
      message.success("Cinema removed")
    }
  }

  return (
    <Popconfirm
      title="Delete Cinema"
      description={`Are you sure to delete ${textName}`}
      onConfirm={confirm}
      okText="Confirm"
      okType="danger"
      cancelText="Cancel"
      placement="bottom"
      icon={<ExclamationCircleOutlined style={{ color: "red" }} />}
    >
      <Button
        danger
        size="small"
        shape="round"
        icon={<DeleteOutlined style={{ fontSize: "0.8rem", color: "red" }} />}
        onClick={handleOpen}
      />
    </Popconfirm>
  )
}
export default DeleteCinema
