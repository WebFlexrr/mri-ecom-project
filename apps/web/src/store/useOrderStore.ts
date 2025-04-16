
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

export interface OrderItem {
  productId: string;
  productName: string;
  productImage: string;
  productSlug: string;
  quantity: number;
  size: string;
  color: string;
  price: number;
}

export interface ShippingInfo {
  name: string;
  address: string;
  phone: string;
  estimatedDelivery: string;
}

export interface Order {
  orderId: string;
  orderDate: string;
  status: 'Pending' | 'Confirmed' | 'Shipped' | 'Delivered' | 'Cancelled';
  total: number;
  paymentMethod: string;
  items: OrderItem[];
  shipping: ShippingInfo;
}

export type OrderState = {
  orders: Order[];
};

export type OrderActions = {
  setOrder: (order: Order) => void;
  cancelOrder: (orderId: string) => void;
  clearOrders: () => void;
};

export type OrderStore = OrderState & OrderActions;

export const defaultInitState: OrderState = {
  orders: [],
};

export const useOrderStore = create<OrderStore>()(
  devtools((set, get) => ({
    ...defaultInitState,
    setOrder: (order) => {
      set((state) => {
        const existingOrder = state.orders.find((o) => o.orderId === order.orderId);
        if (existingOrder) {
          return {
            orders: state.orders.map((o) =>
              o.orderId === order.orderId ? order : o
            ),
          };
        }
        return {
          orders: [...state.orders, order],
        };
      });
    },
    cancelOrder: (orderId) => {
      set((state) => ({
        orders: state.orders.map((order) =>
          order.orderId === orderId
            ? { ...order, status: 'Cancelled' }
            : order
        ),
      }));
      // Optional: Add API call to persist cancellation
      // await fetch(`/api/orders/${orderId}/cancel`, { method: 'PATCH' });
    },
    clearOrders: () => set({ orders: [] }),
  }))
);
