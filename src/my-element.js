import { LitElement, css, html } from 'lit'

import '@material/web/button/filled-button.js'
import '@material/web/textfield/outlined-text-field.js'
import '@material/web/button/outlined-button.js'

export class MyElement extends LitElement {
  static properties = {
    email: { type: String },
    password: { type: String },
    confirmPassword: { type: String },
    name: { type: String },
    message: { type: String },
    currentPage: { type: String },
    orders: { type: Array },
    selectedOrder: { type: Object },
  }

  constructor() {
    super()

    this.email = ''
    this.password = ''
    this.confirmPassword = ''
    this.name = ''
    this.message = ''
    this.currentPage = 'login'
    this.selectedOrder = null

this.orders = [
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
  }

  render() {
  if (this.currentPage === 'register') {
    return this._renderRegister()
  }

  if (this.currentPage === 'profile') {
    return this._renderProfile()
  }

  if (this.currentPage === 'orders') {
    return this._renderOrders()
  }

  if (this.currentPage === 'order-details') {
    return this._renderOrderDetails()
  }

  return this._renderLogin()
}

  _renderLogin() {
    return html`
      <div class="page">
        ${this._renderNavbar()}

        <main class="content">
          <div class="login-card">
            <div class="icon">🐾</div>

            <h1>Welcome Back</h1>

            <p class="subtitle">
              Sign in to manage your account and orders.
            </p>

            <form @submit=${this._handleLogin}>
              <md-outlined-text-field
                label="Email"
                type="email"
                required
                .value=${this.email}
                @input=${this._updateEmail}
              ></md-outlined-text-field>

              <md-outlined-text-field
                label="Password"
                type="password"
                required
                .value=${this.password}
                @input=${this._updatePassword}
              ></md-outlined-text-field>

              <div class="forgot">
                <a href="#">Forgot password?</a>
              </div>

              <md-filled-button type="submit">
                Sign In
              </md-filled-button>
            </form>

            ${this.message
              ? html`<p class="message">${this.message}</p>`
              : ''}

            <p class="register">
              Don't have an account?
              <a href="#" @click=${this._showRegister}>
                Create Account
              </a>
            </p>
          </div>
        </main>
      </div>
    `
  }

  _renderRegister() {
    return html`
      <div class="page">
        ${this._renderNavbar()}

        <main class="content">
          <div class="login-card">
            <div class="icon">🐾</div>

            <h1>Create Account</h1>

            <p class="subtitle">
              Create your account to manage orders and favorites.
            </p>

            <form @submit=${this._handleRegister}>
              <md-outlined-text-field
                label="Full Name"
                required
                .value=${this.name}
                @input=${this._updateName}
              ></md-outlined-text-field>

              <md-outlined-text-field
                label="Email"
                type="email"
                required
                .value=${this.email}
                @input=${this._updateEmail}
              ></md-outlined-text-field>

              <md-outlined-text-field
                label="Password"
                type="password"
                required
                .value=${this.password}
                @input=${this._updatePassword}
              ></md-outlined-text-field>

              <md-outlined-text-field
                label="Confirm Password"
                type="password"
                required
                .value=${this.confirmPassword}
                @input=${this._updateConfirmPassword}
              ></md-outlined-text-field>

              <md-filled-button type="submit">
                Create Account
              </md-filled-button>
            </form>

            ${this.message
              ? html`<p class="message">${this.message}</p>`
              : ''}

            <p class="register">
              Already have an account?
              <a href="#" @click=${this._showLogin}>
                Sign In
              </a>
            </p>
          </div>
        </main>
      </div>
    `
  }
  _renderOrders() {
  return html`
    <div class="page">
      ${this._renderNavbar()}

      <main class="orders-content">
        <div class="orders-container">

          <button
            class="back-button"
            @click=${this._backToProfile}
          >
            ← Back to Profile
          </button>

          <div class="orders-heading">
            <h1>My Orders</h1>
            <p>View your previous orders and their current status.</p>
          </div>

          <div class="orders-list">
            ${this.orders.map(
              (order) => html`
                <div class="order-card">

                  <div class="order-top">
                    <div>
                      <span class="order-label">Order</span>
                      <h2>#${order.id}</h2>
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
                      <strong>${order.date}</strong>
                    </div>

                    <div>
                      <span>Items</span>
                      <strong>${order.items.length}</strong>
                    </div>

                    <div>
                      <span>Total</span>
                      <strong>$${order.total.toFixed(2)}</strong>
                    </div>
                  </div>

                  <md-filled-button
                    @click=${() => this._showOrderDetails(order)}
                  >
                    View Details
                  </md-filled-button>

                </div>
              `
            )}
          </div>

        </div>
      </main>
    </div>
  `
}
_renderOrderDetails() {
  const order = this.selectedOrder

  if (!order) {
    return html`
      <div class="page">
        ${this._renderNavbar()}

        <main class="orders-content">
          <div class="orders-container">
            <p>No order selected.</p>

            <md-filled-button @click=${this._showOrders}>
              Back to Orders
            </md-filled-button>
          </div>
        </main>
      </div>
    `
  }

  return html`
    <div class="page">
      ${this._renderNavbar()}

      <main class="orders-content">
        <div class="orders-container">

          <button
            class="back-button"
            @click=${this._backToOrders}
          >
            ← Back to Orders
          </button>

          <div class="details-card">

            <div class="order-top">
              <div>
                <span class="order-label">Order Details</span>
                <h1>#${order.id}</h1>
                <p>${order.date}</p>
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
                      <strong>${item.name}</strong>
                      <p>Quantity: ${item.quantity}</p>
                    </div>

                    <strong>
                      $${(item.price * item.quantity).toFixed(2)}
                    </strong>
                  </div>
                `
              )}
            </div>

            <div class="shipping-section">
              <h2>Shipping Address</h2>
              <p>${order.address}</p>
            </div>

            <div class="order-total">
              <span>Total</span>
              <strong>$${order.total.toFixed(2)}</strong>
            </div>

          </div>

        </div>
      </main>
    </div>
  `
}
   _renderProfile() {
  const account =
    JSON.parse(localStorage.getItem('petStoreAccount')) || {
      name: 'User',
      email: '',
    }

  return html`
    <div class="page">
      ${this._renderNavbar()}

      <main class="profile-content">
        <div class="profile-container">
          <div class="profile-header">
            <div class="profile-avatar">
              ${account.name.charAt(0).toUpperCase()}
            </div>

            <div>
              <h1>My Profile</h1>
              <p class="profile-subtitle">
                Manage your personal information and account.
              </p>
            </div>
          </div>

          <div class="profile-card">
            <h2>Personal Information</h2>

            <div class="info-group">
              <span class="info-label">Full Name</span>
              <span class="info-value">${account.name}</span>
            </div>

            <div class="info-group">
              <span class="info-label">Email Address</span>
              <span class="info-value">${account.email}</span>
            </div>

            <div class="profile-actions">
              <md-filled-button>
                Edit Profile
              </md-filled-button>

              <md-outlined-button @click=${this._logout}>
                Logout
              </md-outlined-button>
            </div>
          </div>

            <button
            class="account-link"
            @click=${this._showOrders}
            >
            <span>📦</span>

            <div>
              <strong>My Orders</strong>
              <p>View your order history and status</p>
            </div>
          </button>

            <button class="account-link">
              <span>❤️</span>

              <div>
                <strong>Wishlist</strong>
                <p>View your saved products</p>
              </div>
            </button>

            <button class="account-link">
              <span>⭐</span>

              <div>
                <strong>My Reviews</strong>
                <p>Manage your product reviews</p>
              </div>
            </button>
          </div>
        </div>
      </main>
    </div>
  `
}
  _renderNavbar() {
    return html`
      <header class="navbar">
        <div class="brand">
          <span class="paw">🐾</span>
          <span>Pet Supplies Store</span>
        </div>

        <nav>
          <a href="#">Home</a>
          <a href="#">Shop</a>
          <a href="#">Cart</a>
          <a class="active" href="#">Account</a>
        </nav>
      </header>
    `
  }

  _updateName(event) {
    this.name = event.target.value
  }

  _updateEmail(event) {
    this.email = event.target.value
  }

  _updatePassword(event) {
    this.password = event.target.value
  }

  _updateConfirmPassword(event) {
    this.confirmPassword = event.target.value
  }

  _handleRegister(event) {
    event.preventDefault()

    this.message = ''

    if (
      !this.name.trim() ||
      !this.email.trim() ||
      !this.password ||
      !this.confirmPassword
    ) {
      this.message = 'Please fill in all fields.'
      return
    }

    if (!this._isValidEmail(this.email)) {
      this.message = 'Please enter a valid email address.'
      return
    }

    if (this.password.length < 6) {
      this.message = 'Password must be at least 6 characters.'
      return
    }

    if (this.password !== this.confirmPassword) {
      this.message = 'Passwords do not match.'
      return
    }

    const account = {
      name: this.name.trim(),
      email: this.email.trim().toLowerCase(),
      password: this.password,
    }

    localStorage.setItem(
      'petStoreAccount',
      JSON.stringify(account)
    )

    this.currentPage = 'login'
    this.email = account.email
    this.password = ''
    this.confirmPassword = ''
    this.message = 'Account created successfully. Please sign in.'
  }

  _handleLogin(event) {
    event.preventDefault()

    this.message = ''

    if (!this.email.trim() || !this.password) {
      this.message = 'Please enter your email and password.'
      return
    }

    if (!this._isValidEmail(this.email)) {
      this.message = 'Please enter a valid email address.'
      return
    }

    const savedAccount = JSON.parse(
      localStorage.getItem('petStoreAccount')
    )

    if (!savedAccount) {
      this.message = 'No account found. Please create an account first.'
      return
    }

    const emailMatches =
      savedAccount.email === this.email.trim().toLowerCase()

    const passwordMatches =
      savedAccount.password === this.password

    if (!emailMatches || !passwordMatches) {
      this.message = 'Incorrect email or password.'
      return
    }

    localStorage.setItem(
      'petStoreUser',
      JSON.stringify({
        name: savedAccount.name,
        email: savedAccount.email,
        loggedIn: true,
      })
    )

    this.message = ''
    this.currentPage = 'profile'
    this.password = ''
  }

  _showRegister(event) {
    event.preventDefault()

    this.currentPage = 'register'
    this.name = ''
    this.email = ''
    this.password = ''
    this.confirmPassword = ''
    this.message = ''
  }

  _showLogin(event) {
    event.preventDefault()

    this.currentPage = 'login'
    this.email = ''
    this.password = ''
    this.confirmPassword = ''
    this.message = ''
  }

  _isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }

  _showOrders() {
  this.currentPage = 'orders'
}

_showOrderDetails(order) {
  this.selectedOrder = order
  this.currentPage = 'order-details'
}

_backToProfile() {
  this.currentPage = 'profile'
}

_backToOrders() {
  this.currentPage = 'orders'
}

_logout() {
  localStorage.removeItem('petStoreUser')

  this.currentPage = 'login'
  this.email = ''
  this.password = ''
  this.message = ''
}
  static styles = css`
    :host {
      display: block;

      --md-sys-color-primary: #6750a4;
      --md-sys-color-on-primary: #ffffff;
      --md-sys-color-surface: #ffffff;

      font-family: Arial, Helvetica, sans-serif;
      color: #26232b;
    }

    * {
      box-sizing: border-box;
    }

    .page {
      min-height: 100vh;
      background: #f7f6fa;
    }

    .navbar {
      min-height: 72px;
      background: white;
      border-bottom: 1px solid #e8e5ed;

      display: flex;
      align-items: center;
      justify-content: space-between;

      padding: 0 7%;
    }

    .brand {
      display: flex;
      align-items: center;
      gap: 10px;

      font-size: 20px;
      font-weight: 700;
      color: #3d3450;
    }

    .paw {
      font-size: 27px;
    }

    nav {
      display: flex;
      gap: 30px;
    }

    nav a {
      color: #625d68;
      text-decoration: none;
      font-size: 15px;
      font-weight: 500;
    }

    nav a:hover,
    nav a.active {
      color: #6750a4;
    }

    .content {
      min-height: calc(100vh - 72px);

      display: flex;
      justify-content: center;
      align-items: center;

      padding: 40px 20px;
    }

    .login-card {
      width: 100%;
      max-width: 430px;

      background: white;
      border: 1px solid #e5e1e9;
      border-radius: 20px;

      padding: 40px;

      box-shadow: 0 10px 35px rgba(40, 32, 55, 0.08);

      text-align: center;
    }

    .icon {
      width: 65px;
      height: 65px;

      display: flex;
      align-items: center;
      justify-content: center;

      margin: 0 auto 18px;

      border-radius: 50%;
      background: #eee8f8;

      font-size: 30px;
    }

    h1 {
      margin: 0;
      color: #2e2933;
      font-size: 30px;
    }

    .subtitle {
      margin: 10px 0 28px;
      color: #77717d;
      line-height: 1.5;
      font-size: 14px;
    }

    form {
      display: flex;
      flex-direction: column;
      gap: 18px;
      text-align: left;
    }

    md-outlined-text-field {
      width: 100%;
    }

    md-filled-button {
      width: 100%;
      height: 48px;
      margin-top: 4px;
    }

    .forgot {
      text-align: right;
      margin-top: -6px;
    }

    a {
      color: #6750a4;
      text-decoration: none;
    }

    a:hover {
      text-decoration: underline;
    }

    .forgot a,
    .register {
      font-size: 14px;
    }

    .register {
      color: #77717d;
      margin-top: 25px;
    }

    .register a {
      font-weight: 600;
      margin-left: 4px;
    }

    .message {
      background: #eee8f8;
      color: #4d3d71;

      padding: 11px 12px;
      border-radius: 8px;

      margin: 18px 0 0;

      font-size: 14px;
      line-height: 1.4;
    }
   .profile-content {
  min-height: calc(100vh - 72px);
  padding: 50px 20px;
}

.profile-container {
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
}

.profile-header {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 30px;
}

.profile-avatar {
  width: 80px;
  height: 80px;
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  background: #6750a4;
  color: white;

  font-size: 32px;
  font-weight: 700;
}

.profile-header h1 {
  text-align: left;
}

.profile-subtitle {
  margin: 6px 0 0;
  color: #77717d;
}

.profile-card {
  background: white;
  border: 1px solid #e5e1e9;
  border-radius: 18px;
  padding: 30px;
  box-shadow: 0 8px 30px rgba(40, 32, 55, 0.06);
}

.profile-card h2 {
  margin: 0 0 25px;
  font-size: 21px;
}

.info-group {
  padding: 18px 0;
  border-bottom: 1px solid #eeeaf1;

  display: flex;
  flex-direction: column;
  gap: 5px;
}

.info-label {
  font-size: 13px;
  color: #817b86;
}

.info-value {
  font-size: 16px;
  font-weight: 600;
  color: #332f37;
}

.profile-actions {
  display: flex;
  gap: 12px;
  margin-top: 25px;
}

.account-links {
  margin-top: 25px;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
}

.account-link {
  background: white;
  border: 1px solid #e5e1e9;
  border-radius: 16px;

  padding: 22px;

  display: flex;
  align-items: flex-start;
  gap: 14px;

  text-align: left;
  cursor: pointer;

  font-family: inherit;
}

.account-link:hover {
  border-color: #6750a4;
  box-shadow: 0 5px 20px rgba(40, 32, 55, 0.07);
}

.account-link > span {
  font-size: 27px;
}

.account-link strong {
  color: #302b35;
  font-size: 16px;
}

.account-link p {
  margin: 6px 0 0;
  color: #817b86;
  font-size: 13px;
  line-height: 1.4;
}
  .orders-content {
  min-height: calc(100vh - 72px);
  padding: 50px 20px;
}

.orders-container {
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
}

.orders-heading {
  margin: 25px 0 30px;
}

.orders-heading h1 {
  text-align: left;
  margin-bottom: 8px;
}

.orders-heading p {
  color: #77717d;
  margin: 0;
}

.back-button {
  background: transparent;
  border: none;
  color: #6750a4;

  padding: 0;

  font-family: inherit;
  font-size: 15px;
  font-weight: 600;

  cursor: pointer;
}

.orders-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.order-card,
.details-card {
  background: white;
  border: 1px solid #e5e1e9;
  border-radius: 18px;

  padding: 28px;

  box-shadow: 0 8px 30px rgba(40, 32, 55, 0.06);
}

.order-top {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 20px;
}

.order-top h1,
.order-top h2 {
  margin: 4px 0;
  text-align: left;
}

.order-top p {
  margin: 5px 0;
  color: #77717d;
}

.order-label {
  color: #817b86;
  font-size: 13px;
}

.status {
  padding: 7px 13px;
  border-radius: 20px;

  font-size: 13px;
  font-weight: 700;
}

.status.delivered {
  color: #176b3a;
  background: #e6f5eb;
}

.status.processing {
  color: #865b00;
  background: #fff3d6;
}

.status.cancelled {
  color: #a32525;
  background: #fde7e7;
}

.order-info {
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  gap: 20px;

  margin: 25px 0;
  padding: 20px 0;

  border-top: 1px solid #eeeaf1;
  border-bottom: 1px solid #eeeaf1;
}

.order-info div {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.order-info span {
  color: #817b86;
  font-size: 13px;
}

.order-info strong {
  color: #302b35;
}

.items-section {
  margin-top: 30px;
}

.items-section h2,
.shipping-section h2 {
  font-size: 19px;
}

.order-item {
  display: flex;
  justify-content: space-between;

  gap: 20px;

  padding: 18px 0;
  border-bottom: 1px solid #eeeaf1;
}

.order-item p {
  color: #77717d;
  margin: 6px 0 0;
}

.shipping-section {
  margin-top: 30px;
}

.shipping-section p {
  color: #625d68;
}

.order-total {
  margin-top: 30px;

  display: flex;
  justify-content: space-between;

  padding-top: 20px;
  border-top: 2px solid #eeeaf1;

  font-size: 20px;
}

    @media (max-width: 650px) {.profile-header {
  align-items: flex-start;
}
  .order-info {
  grid-template-columns: 1fr;
}

.order-top {
  flex-direction: column;
}

.order-card,
.details-card {
  padding: 22px;
}

.profile-avatar {
  width: 60px;
  height: 60px;
  font-size: 25px;
}

.account-links {
  grid-template-columns: 1fr;
}

.profile-actions {
  flex-direction: column;
}
      .navbar {
        padding: 14px 20px;
      }

      nav {
        display: none;
      }

      .login-card {
        padding: 30px 22px;
      }

      h1 {
        font-size: 26px;
      }
    }
  `
}

if (!window.customElements.get('my-element')) {
  window.customElements.define('my-element', MyElement)
}