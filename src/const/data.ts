import type { IEmployee } from "@/components/custom-component/employees-card.vue";

export const employees: IEmployee[] = [
  {
    user: {
      name: "Александр Соколов",
      email: "sokolov.welder@industry.pro"
    },
    role: "Старший Сварщик (MIG/MAG)",
    salary: 95000,
    efficiency: 92
  },
  {
    user: {
      name: "Дмитрий Волков",
      email: "d.volkov@analytica.io"
    },
    role: "Администратор базы данных",
    salary: 150000,
    efficiency: 78
  },
  {
    user: {
      name: "Елена Маркова",
      email: "markova.hr@factory.com"
    },
    role: "HR-менеджер",
    salary: 85000,
    efficiency: 100
  },
  {
    user: {
      name: "Артем Кузнецов",
      email: "kuznetsov.dev@tech.ru"
    },
    role: "Frontend разработчик",
    salary: 180000,
    efficiency: 45
  },
    {
    user: {
      name: "Артем Кузнецов",
      email: "kuznetsov.dev@tech.ru"
    },
    role: "Frontend разработчик",
    salary: 180000,
    efficiency: 45
  },  {
    user: {
      name: "Артем Кузнецов",
      email: "kuznetsov.dev@tech.ru"
    },
    role: "Frontend разработчик",
    salary: 180000,
    efficiency: 45
  }
];

export interface Product {
  id: number;
  title: string;
  price: number;
  spend_time_to_create: number;
  spend_money_to_create: number;
  amount: number;
}

export interface MiningProduct {
  id: number;
  title: string;
  price: number;
}

export const miningProducts: MiningProduct[] = [
  { id: 1, title: "Cyber Drill v1", price: 1250 },
  { id: 2, title: "Nano-Pickaxe", price: 450 },
  { id: 3, title: "Laser Excavator", price: 8900 },
  { id: 4, title: "Thermal Scanner", price: 720 },
  { id: 5, title: "Plasma Cutter", price: 2100 },
  { id: 6, title: "Sonic Breaker", price: 3400 },
  { id: 7, title: "Gravity Lift S-1", price: 5600 },
  { id: 8, title: "Oxygen Recycler", price: 890 },
  { id: 9, title: "Drone Scout", price: 1150 },
  { id: 10, title: "Quantum Ore Bag", price: 200 }
];
export const products: Product[] = [
  { id: 1, title: "Cyber Drill v1", price: 1200, spend_time_to_create: 15, spend_money_to_create: 450, amount: 10 },
  { id: 2, title: "Nano-Pickaxe", price: 350, spend_time_to_create: 4, spend_money_to_create: 120, amount: 50 },
  { id: 3, title: "Laser Excavator", price: 5000, spend_time_to_create: 40, spend_money_to_create: 2100, amount: 3 },
  { id: 4, title: "Thermal Scanner", price: 850, spend_time_to_create: 8, spend_money_to_create: 300, amount: 15 },
  { id: 5, title: "Plasma Cutter", price: 1500, spend_time_to_create: 12, spend_money_to_create: 600, amount: 8 },
  { id: 6, title: "Sonic Rock Breaker", price: 2200, spend_time_to_create: 20, spend_money_to_create: 950, amount: 5 },
  { id: 7, title: "Gravity Lift S-1", price: 4000, spend_time_to_create: 35, spend_money_to_create: 1800, amount: 2 },
  { id: 8, title: "Oxygen Recycler", price: 600, spend_time_to_create: 6, spend_money_to_create: 200, amount: 20 },
  { id: 9, title: "Drone Scout", price: 1100, spend_time_to_create: 10, spend_money_to_create: 400, amount: 12 },
  { id: 10, title: "Quantum Ore Bag", price: 150, spend_time_to_create: 2, spend_money_to_create: 45, amount: 100 }
];