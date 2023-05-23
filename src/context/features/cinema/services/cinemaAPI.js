/* eslint-disable no-unused-vars */
import { apiUrl } from "../../../../backendUrl/base-url"

export const fetchCinemas = async (token) => {
  try {
    const request = await fetch(`${apiUrl}/api/cinema`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
    const data = await request.json()
    return new Promise((resolve, reject) => {
      resolve(data)
    })
  } catch (error) {
    return new Promise((resolve, reject) => {
      reject(error)
    })
  }
}

export const filterFromUser = async (token, id) => {
  try {
    const request = await fetch(`${apiUrl}/api/cinema/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
    const data = await request.json()
    return new Promise((resolve, reject) => {
      resolve(data)
    })
  } catch (error) {
    return new Promise((resolve, reject) => {
      reject(error)
    })
  }
}
