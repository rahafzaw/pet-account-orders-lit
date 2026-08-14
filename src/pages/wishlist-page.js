import { html } from 'lit'

export function wishlistPage({
  wishlist,
  onBack,
  onRemove,
  onViewProduct,
}) {
  return html`
    <div class="page">
      <app-navbar></app-navbar>

      <main class="wishlist-content">
        <div class="wishlist-container">

          <button
            class="back-button"
            @click=${onBack}
          >
            ← Back to Profile
          </button>

          <div class="wishlist-heading">
            <h1>My Wishlist</h1>

            <p>
              Products you saved for later.
            </p>
          </div>

          ${wishlist.length === 0
            ? html`
                <div class="empty-state">
                  <div>♡</div>

                  <h2>Your wishlist is empty</h2>

                  <p>
                    Products you save will appear here.
                  </p>
                </div>
              `
            : html`
                <div class="wishlist-grid">
                  ${wishlist.map(
                    (product) => html`
                      <div class="wishlist-card">

                        <div class="product-icon">
                          ${product.emoji}
                        </div>

                        <div class="product-category">
                          ${product.category}
                        </div>

                        <h2>
                          ${product.name}
                        </h2>

                        <div class="product-price">
                          $${product.price.toFixed(2)}
                        </div>

                        <div class="wishlist-actions">

                          <md-filled-button
                            @click=${() => onViewProduct(product)}
                          >
                            View Product
                          </md-filled-button>

                          <button
                            class="remove-button"
                            @click=${() =>
                              onRemove(product.id)}
                          >
                            Remove
                          </button>

                        </div>

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