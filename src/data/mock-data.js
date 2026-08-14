export const initialOrders = [
  {
    id: '1001',
    date: 'August 8, 2026',
    status: 'Delivered',
    total: 48.99,
    address: 'Nablus, Palestine',
    items: [
      {
        name: 'Premium Dog Food',
        quantity: 2,
        price: 19.99,
      },
      {
        name: 'Dog Toy',
        quantity: 1,
        price: 9.01,
      },
    ],
  },
  {
    id: '1002',
    date: 'August 11, 2026',
    status: 'Processing',
    total: 34.5,
    address: 'Nablus, Palestine',
    items: [
      {
        name: 'Pet Shampoo',
        quantity: 1,
        price: 14.5,
      },
      {
        name: 'Cat Scratching Toy',
        quantity: 1,
        price: 20,
      },
    ],
  },
]

export const initialWishlist = [
  {
    id: 1,
    name: 'Premium Dog Food',
    category: 'Dogs',
    price: 19.99,
    emoji: '🐶',
  },
  {
    id: 2,
    name: 'Cat Scratching Toy',
    category: 'Cats',
    price: 20.0,
    emoji: '🐱',
  },
  {
    id: 3,
    name: 'Pet Shampoo',
    category: 'Accessories',
    price: 14.5,
    emoji: '🧴',
  },
]

export const initialReviews = [
  {
    id: 1,
    product: 'Premium Dog Food',
    rating: 5,
    comment: 'Great quality and my dog really liked it.',
    date: 'August 9, 2026',
  },
  {
    id: 2,
    product: 'Cat Scratching Toy',
    rating: 4,
    comment: 'Good product and very useful.',
    date: 'August 10, 2026',
  },
]