import { html } from 'lit'

export function ordersPage({
  orders,
  onBack,
  onViewDetails,
}) {
  return html`
    <div class="page">
      <app-navbar></app-navbar>

      <main class="orders-content">
        <div class="orders-container">

          <button
            class="back-button"
            @click=${onBack}
          >
            ← Back to Profile
          </button>

          <div class="orders-heading">
            <h1>My Orders</h1>

            <p>
              View your previous orders and their current status.
            </p>
          </div>

          ${orders.length === 0
            ? html`
                <div class="empty-state">
                  <div>📦</div>
                  <h2>No orders yet</h2>
                  <p>Your orders will appear here.</p>
                </div>
              `
            : html`
                <div class="orders-list">

                  ${orders.map(
                    (order) => html`
                      <div class="order-card">

                        <div class="order-top">
                          <div>
                            <span class="order-label">
                              Order
                            </span>

                            <h2>
                              #${order.id}
                            </h2>
                          </div>

                          <span
                            class="status ${order.status.toLowerCase()}"
                          >
                            ${order.status}
                          </span>
                        </div>

                        <div class="order-info">

                          <div>
                            <span>Date</span>
                            <strong>
                              ${order.date}
                            </strong>
                          </div>

                          <div>
                            <span>Items</span>
                            <strong>
                              ${order.items.length}
                            </strong>
                          </div>

                          <div>
                            <span>Total</span>
                            <strong>
                              $${order.total.toFixed(2)}
                            </strong>
                          </div>

                        </div>

                        <md-filled-button
                          @click=${() => onViewDetails(order)}
                        >
                          View Details
                        </md-filled-button>

                      </div>
                    `
                  )}

                </div>
              `}

        </div>
      </main>
    </div>
  `
}