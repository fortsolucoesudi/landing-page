import {
  TrendingUp,
  Truck,
  Users,
  Calendar,
  DollarSign,
  BarChart3,
} from "lucide-react";

export function DashboardMockup() {
  return (
    <div className="relative animate-float">
      <div className="absolute -inset-4 rounded-3xl bg-blue-600/10 blur-2xl" />
      <div className="relative rounded-2xl border border-gray-200 bg-white shadow-2xl shadow-blue-900/10 overflow-hidden">
        {/* Browser bar */}
        <div className="flex items-center gap-2 border-b border-gray-100 bg-gray-50 px-4 py-3">
          <div className="flex gap-1.5">
            <span className="h-3 w-3 rounded-full bg-red-400" />
            <span className="h-3 w-3 rounded-full bg-yellow-400" />
            <span className="h-3 w-3 rounded-full bg-green-400" />
          </div>
          <div className="flex-1 mx-4">
            <div className="mx-auto max-w-xs rounded-md bg-white px-3 py-1 text-xs text-gray-400 text-center border border-gray-200">
              app.transfortsolucoes.com.br
            </div>
          </div>
        </div>

        <div className="flex">
          {/* Sidebar */}
          <div className="hidden sm:block w-16 lg:w-48 border-r border-gray-100 bg-blue-950 p-3 lg:p-4">
            <div className="mb-6 hidden lg:block">
              <p className="text-xs font-bold text-white leading-tight">TRANS FORT</p>
              <p className="text-[10px] text-blue-300">SOLUÇÕES</p>
            </div>
            <div className="space-y-2">
              {["Dashboard", "Frota", "Clientes", "Financeiro", "Agenda"].map(
                (item, i) => (
                  <div
                    key={item}
                    className={`rounded-lg px-2 lg:px-3 py-2 text-xs font-medium ${
                      i === 0
                        ? "bg-blue-600 text-white"
                        : "text-blue-200 hover:bg-blue-900"
                    }`}
                  >
                    <span className="hidden lg:inline">{item}</span>
                    <span className="lg:hidden text-center block">
                      {item.charAt(0)}
                    </span>
                  </div>
                )
              )}
            </div>
          </div>

          {/* Main content */}
          <div className="flex-1 p-4 lg:p-6 bg-gray-50/50">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <p className="text-xs text-gray-500">Visão geral</p>
                <p className="text-sm font-bold text-blue-950">Dashboard</p>
              </div>
              <span className="rounded-full bg-green-100 px-2.5 py-1 text-[10px] font-semibold text-green-700">
                Operação ativa
              </span>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-4">
              {[
                { label: "Faturamento", value: "R$ 48.2k", icon: DollarSign, color: "text-blue-600 bg-blue-50" },
                { label: "Lucro", value: "R$ 12.8k", icon: TrendingUp, color: "text-green-600 bg-green-50" },
                { label: "Veículos", value: "12", icon: Truck, color: "text-indigo-600 bg-indigo-50" },
                { label: "Clientes", value: "86", icon: Users, color: "text-purple-600 bg-purple-50" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl border border-gray-100 bg-white p-3 shadow-sm"
                >
                  <div className={`inline-flex rounded-lg p-1.5 ${stat.color}`}>
                    <stat.icon className="h-3.5 w-3.5" />
                  </div>
                  <p className="mt-2 text-[10px] text-gray-500">{stat.label}</p>
                  <p className="text-sm font-bold text-blue-950">{stat.value}</p>
                </div>
              ))}
            </div>

            {/* Chart + schedule */}
            <div className="grid lg:grid-cols-3 gap-3">
              <div className="lg:col-span-2 rounded-xl border border-gray-100 bg-white p-4 shadow-sm">
                <div className="flex items-center justify-between mb-3">
                  <p className="text-xs font-semibold text-blue-950">Serviços</p>
                  <BarChart3 className="h-4 w-4 text-blue-600" />
                </div>
                <div className="flex items-end gap-1.5 h-20">
                  {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88].map(
                    (h, i) => (
                      <div
                        key={i}
                        className="flex-1 rounded-t bg-blue-600/80 hover:bg-blue-600 transition-colors"
                        style={{ height: `${h}%` }}
                      />
                    )
                  )}
                </div>
              </div>
              <div className="rounded-xl border border-gray-100 bg-white p-4 shadow-sm">
                <div className="flex items-center gap-2 mb-3">
                  <Calendar className="h-4 w-4 text-blue-600" />
                  <p className="text-xs font-semibold text-blue-950">Agendamentos</p>
                </div>
                <div className="space-y-2">
                  {[
                    { time: "08:00", task: "Mudança residencial" },
                    { time: "10:30", task: "Frete compartilhado" },
                    { time: "14:00", task: "Transporte corporativo" },
                  ].map((item) => (
                    <div
                      key={item.time}
                      className="flex items-center gap-2 rounded-lg bg-blue-50 px-2 py-1.5"
                    >
                      <span className="text-[10px] font-bold text-blue-700">
                        {item.time}
                      </span>
                      <span className="text-[10px] text-gray-600 truncate">
                        {item.task}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
