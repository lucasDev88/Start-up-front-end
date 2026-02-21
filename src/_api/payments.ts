import { api } from "../_services/api"

export async function createPayment(data: { name: string; price: number }) {
  const res = await api.post("/api/payments", data)
  return res.data
}

export async function getPayments() {
  const res = await api.get("/api/payments")
  return res.data
}

export async function deletePayment(id: string) {
  await api.delete(`/api/payments/${id}`)
}
