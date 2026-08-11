import { LitElement, css, html } from 'lit'

import '@material/web/button/filled-button.js'
import '@material/web/textfield/outlined-text-field.js'

export class MyElement extends LitElement {
  static properties = {
    email: { type: String },
    password: { type: String },
    confirmPassword: { type: String },
    name: { type: String },
    message: { type: String },
    currentPage: { type: String },
  }

  constructor() {
    super()

    this.email = ''
    this.password = ''
    this.confirmPassword = ''
    this.name = ''
    this.message = ''
    this.currentPage = 'login'
  }

  render() {
    if (this.currentPage === 'register') {
      return this._renderRegister()
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

    this.message = `Welcome back, ${savedAccount.name}!`
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

    @media (max-width: 650px) {
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