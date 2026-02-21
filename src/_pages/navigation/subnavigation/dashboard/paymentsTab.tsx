export default function PagamentosTab() {
  const pagamentos = [
    { id: "#001", cliente: "João", valor: "R$120", status: "Pago" },
    { id: "#002", cliente: "Maria", valor: "R$39", status: "Pendente" },
    { id: "#003", cliente: "Carlos", valor: "R$300", status: "Pago" },
  ]

  return (
    <div className="space-y-6 text-white">
      <div>
        <h2 className="text-3xl font-bold">Pagamentos</h2>
        <p className="text-slate-400">Histórico de transações</p>
      </div>

      <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800">
        {pagamentos.map(p => (
          <div
            key={p.id}
            className="flex justify-between items-center border-b border-slate-800 py-4"
          >
            <div>
              <p className="font-semibold">{p.id}</p>
              <p className="text-slate-400 text-sm">{p.cliente}</p>
            </div>

            <div className="text-right">
              <p className="font-bold">{p.valor}</p>
              <span className={`text-xs px-3 py-1 rounded-lg ${
                p.status === "Pago"
                  ? "bg-green-500/20 text-green-400"
                  : "bg-yellow-500/20 text-yellow-400"
              }`}>
                {p.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
