import type { Plan } from "../types/Plan"

export const plans: Plan[] = [
  {
    name: "Free",
    price: "R$0",
    desc: "Ideal para começar",
    button: "Começar grátis",
    features: [
      "Até 50 contatos",
      "1 usuário",
      "Suporte básico",
      "Relatórios simples",
    ],
  },
  {
    name: "Premium",
    price: "R$49",
    desc: "Mais usado",
    highlight: true,
    button: "Assinar Premium",
    features: [
      "Contatos ilimitados",
      "5 usuários",
      "Automações",
      "Relatórios avançados",
    ],
  },
  {
    name: "Premium+",
    price: "R$99",
    desc: "Escala total",
    button: "Assinar Premium+",
    features: [
      "Tudo do Premium",
      "Usuários ilimitados",
      "API",
      "Suporte prioritário",
    ],
  },
]