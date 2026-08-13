# ByteMarket Architecture

ByteMarket is organized as a layered frontend application using Next.js App Router, React, TypeScript, Tailwind CSS, Context, hooks, DTOs, mappers, domain models, and service modules.

## Data Flow

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

DummyJSON is used as the public products API. The UI never reads the raw API response directly. Product components receive clean domain models only.

## Layers

`dtos` define the raw DummyJSON data format. `ProductDTO` uses API property names such as `id`, `title`, `description`, `price`, `category`, `thumbnail`, and `stock`.

`mappers` transform DTOs into domain models. `ProductMapper` trims strings, validates prices and stock, normalizes categories into the ByteMarket catalog taxonomy, and provides fallbacks for missing values.

`models` define clean application entities. Product UI components consume the `Product` domain model, not the DTO.

`services` act as the infrastructure layer. `product.service.ts` fetches data from `https://dummyjson.com/products`, validates the response shape, filters technology-related products, and maps raw data before returning it.

`hooks` isolate React state and loading behavior. `useProducts` owns product loading, loading state, and error state.

`components` render the interface. Product components handle cards, grids, filters, and the home catalog without accessing raw data.

## Cart Flow

```text
CartContext
     |
useCart
     |
ProductCard / Header / Cart Page
```

`CartContext` stores global cart state and exposes actions to add products, increase quantity, decrease quantity, remove items, and clear the cart. The cart uses the `CartItem` model, which combines a `Product` with a quantity.

Totals are calculated with `reduce()` and update immediately when quantities change.

## App Router Organization

The application uses the Next.js App Router under `src/app`.

`src/app/layout.tsx` defines the root layout and wraps the application in `CartProvider`.

`src/app/(public)/layout.tsx` renders the public header.

`src/app/(public)/page.tsx` renders the product catalog.

`src/app/(public)/cart/page.tsx` renders the cart page.

Client components are used only where interaction is required, such as filters, product cards, cart controls, and context.
