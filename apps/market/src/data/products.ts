export interface Product {
  id: string
  title: string
  description: string
  price: number
}

export const products: Product[] = [
  {
    id: '1',
    title: 'Увлажняющий крем',
    description: 'Нежный крем для ежедневного ухода.',
    price: 299,
  },
  {
    id: '2',
    title: 'Тоник для лица',
    description: 'Освежающий тоник для всех типов кожи.',
    price: 199,
  },
  {
    id: '3',
    title: 'Маска для волос',
    description: 'Питательная маска для восстановления волос.',
    price: 399,
  },
]
