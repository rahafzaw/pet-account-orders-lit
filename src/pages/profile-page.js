import { html } from 'lit'

export function profilePage({
  account,
  onEditProfile,
  onLogout,
  onShowOrders,
  onShowWishlist,
  onShowReviews,
}) {
  const firstLetter = account?.name
    ? account.name.charAt(0).toUpperCase()
    : 'U'

  return html`
    <div class="page">
      <app-navbar></app-navbar>

      <main class="profile-content">
        <div class="profile-container">

          <div class="profile-header">
            <div class="profile-avatar">
              ${firstLetter}
            </div>

            <div>
              <h1>My Account</h1>

              <p class="profile-subtitle">
                Manage your profile, orders and saved products.
              </p>
            </div>
          </div>

          <div class="profile-card">
            <h2>Personal Information</h2>

            <div class="info-group">
              <span class="info-label">
                Full Name
              </span>

              <span class="info-value">
                ${account?.name || 'User'}
              </span>
            </div>

            <div class="info-group">
              <span class="info-label">
                Email Address
              </span>

              <span class="info-value">
                ${account?.email || ''}
              </span>
            </div>

            <div class="profile-actions">
              <md-filled-button
                @click=${onEditProfile}
              >
                Edit Profile
              </md-filled-button>

              <md-outlined-button
                @click=${onLogout}
              >
                Logout
              </md-outlined-button>
            </div>
          </div>

          <div class="account-links">

            <button
              class="account-link"
              @click=${onShowOrders}
            >
              <span>📦</span>

              <div>
                <strong>My Orders</strong>
                <p>
                  View your order history and details.
                </p>
              </div>
            </button>

            <button
              class="account-link"
              @click=${onShowWishlist}
            >
              <span>♡</span>

              <div>
                <strong>Wishlist</strong>
                <p>
                  View products you saved for later.
                </p>
              </div>
            </button>

            <button
              class="account-link"
              @click=${onShowReviews}
            >
              <span>★</span>

              <div>
                <strong>My Reviews</strong>
                <p>
                  View and manage your reviews.
                </p>
              </div>
            </button>

          </div>
        </div>
      </main>
    </div>
  `
}