/* eslint-disable object-curly-newline */

// ant design
import { Button, Popconfirm, message } from "antd"
import { DeleteOutlined, ExclamationCircleOutlined } from "@ant-design/icons"
// redux
import { useDispatch } from "react-redux"
import { getCinemasAsync } from "../../../context/features/cinema/cinemaSlice"
import { apiUrl } from "../../../backendUrl/base-url"

function DeleteCinema({ id, textName = "this cinema" }) {
  const dispatch = useDispatch()
  const handleOpen = () => {}

  // eslint-disable-next-line consistent-return
  const deleteRequest = async (idCinema, token) => {
    try {
      const request = await fetch(`${apiUrl}/api/cinema/${idCinema}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
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

  const confirm = async () => {
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
