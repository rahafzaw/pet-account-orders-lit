import { html } from 'lit'

export function orderDetailsPage({
  order,
  onBack,
  onShowOrders,
}) {
  if (!order) {
    return html`
      <div class="page">
        <app-navbar></app-navbar>

        <main class="orders-content">
          <div class="orders-container">

            <div class="empty-state">
              <div>📦</div>

              <h2>No order selected</h2>

              <p>
                Please select an order to view its details.
              </p>

              <md-filled-button
                @click=${onShowOrders}
              >
                Back to Orders
              </md-filled-button>
            </div>

          </div>
        </main>
      </div>
    `
  }

  return html`
    <div class="page">
      <app-navbar></app-navbar>

      <main class="orders-content">
        <div class="orders-container">

          <button
            class="back-button"
            @click=${onBack}
          >
            ← Back to Orders
          </button>

          <div class="details-card">

            <div class="order-top">

              <div>
                <span class="order-label">
                  Order Details
                </span>

                <h1>
                  #${order.id}
                </h1>

                <p>
                  ${order.date}
                </p>
              </div>

              <span
                class="status ${order.status.toLowerCase()}"
              >
                ${order.status}
              </span>

            </div>

            <div class="items-section">

              <h2>Items</h2>

              ${order.items.map(
                (item) => html`
                  <div class="order-item">

                    <div>
                      <strong>
                        ${item.name}
                      </strong>

                      <p>
                        Quantity: ${item.quantity}
                      </p>
                    </div>

                    <strong>
                      $${(
                        item.price * item.quantity
                      ).toFixed(2)}
                    </strong>

                  </div>
                `
              )}

            </div>

            <div class="shipping-section">
              <h2>Shipping Address</h2>

              <p>
                ${order.address}
              </p>
            </div>

            <div class="order-total">
              <span>Total</span>

              <strong>
                $${order.total.toFixed(2)}
              </strong>
            </div>

          </div>

        </div>
      </main>
    </div>
  `
}