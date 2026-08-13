# ByteMarket

ByteMarket is a modern frontend storefront for computer hardware and components. It is built with Next.js App Router, React, TypeScript, Tailwind CSS, React Context, custom hooks, DTOs, mappers, domain models, and a layered architecture.

## Technologies

- Next.js App Router
- React
- TypeScript
- Tailwind CSS
- React Context
- Custom Hooks
- DTO Pattern
- Mapper Pattern
- Domain Models
- Service / Infrastructure Layer
- DummyJSON public products API

## Features

- Dynamic product catalog loaded from DummyJSON
- Product cards rendered with `products.map(...)`
- Category filters for All, Components, Peripherals, and Monitors
- Price sorting from low to high and high to low
- Global shopping cart with React Context
- Add-to-cart behavior without duplicate rows
- Quantity controls with increase and decrease actions
- Automatic item removal when quantity reaches zero
- Remove item action
- Dynamic cart badge
- Dynamic cart total calculated with `reduce()`
- Responsive layout for mobile, tablet, desktop, and large desktop
- English-only source code and technical documentation

## Architecture

The application follows this data flow:

```text
DummyJSON API
      |
Service / Infrastructure
      |
DTO
      |
Mapper
      |
Domain Model
      |
Hook
      |
React Component
      |
UI
```

Cart state follows this flow:

```text
CartContext
     |
useCart
     |
ProductCard / Header / Cart Page
```

## Folder Structure

```text
src/
├── app/
│   ├── (public)/
│   │   ├── cart/
│   │   │   └── page.tsx
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── globals.css
│   └── layout.tsx
├── modules/
│   ├── cart/
│   │   ├── components/
│   │   ├── context/
│   │   ├── hooks/
│   │   └── models/
│   └── products/
│       ├── components/
│       ├── dtos/
│       ├── hooks/
│       ├── mappers/
│       ├── models/
│       └── services/
├── shared/
│   ├── components/
│   └── utils/
└── middleware.ts
```

## Installation

```bash
npm install
```

## How to Run

```bash
npm run dev
```

Open the local URL shown by Next.js.

## Validation

```bash
npm run lint
npm run build
```

## Main Application Flow

The user opens ByteMarket, products load from DummyJSON through the service and mapper layers, the user filters by category, sorts by price, adds products to the cart, edits quantities, removes items, and sees the cart badge and total update instantly.
