import { html } from 'lit'

export function reviewsPage({
  reviews,
  onBack,
  onDelete,
}) {
  return html`
    <div class="page">
      <app-navbar></app-navbar>

      <main class="reviews-content">
        <div class="reviews-container">

          <button
            class="back-button"
            @click=${onBack}
          >
            ← Back to Profile
          </button>

          <div class="reviews-heading">
            <h1>My Reviews</h1>

            <p>
              View and manage your product reviews.
            </p>
          </div>

          ${reviews.length === 0
            ? html`
                <div class="empty-state">
                  <div>★</div>

                  <h2>No reviews yet</h2>

                  <p>
                    Your product reviews will appear here.
                  </p>
                </div>
              `
            : html`
                <div class="reviews-list">

                  ${reviews.map(
                    (review) => html`
                      <div class="review-card">

                        <div class="review-header">

                          <div>
                            <h2>
                              ${review.product}
                            </h2>

                            <span>
                              ${review.date}
                            </span>
                          </div>

                          <div class="stars">
                            ${'★'.repeat(review.rating)}
                            ${'☆'.repeat(5 - review.rating)}
                          </div>

                        </div>

                        <p class="review-comment">
                          ${review.comment}
                        </p>

                        <div class="review-actions">
                          <button
                            class="delete-review"
                            @click=${() =>
                              onDelete(review.id)}
                          >
                            Delete Review
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