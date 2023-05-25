/* eslint-disable no-unused-vars */
import { apiUrl } from "../../../../backendUrl/base-url"

export const fetchMovies = async (token) => {
  try {
    const request = await fetch(`${apiUrl}/api/movies`, {
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
