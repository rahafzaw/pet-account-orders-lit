import { html } from 'lit'

export function loginPage({
  email,
  password,
  message,
  onEmailInput,
  onPasswordInput,
  onSubmit,
  onShowRegister,
}) {
  return html`
    <div class="page">
      <app-navbar></app-navbar>

      <main class="content">
        <div class="login-card">
          <div class="icon">🐾</div>

          <h1>Welcome Back</h1>

          <p class="subtitle">
            Sign in to manage your account and orders.
          </p>

          <form @submit=${onSubmit}>
            <md-outlined-text-field
              label="Email"
              type="email"
              required
              .value=${email}
              @input=${onEmailInput}
            ></md-outlined-text-field>

            <md-outlined-text-field
              label="Password"
              type="password"
              required
              .value=${password}
              @input=${onPasswordInput}
            ></md-outlined-text-field>

            
            <md-filled-button type="submit">
              Sign In
            </md-filled-button>
          </form>

          ${message
            ? html`<p class="message">${message}</p>`
            : ''}

          <p class="register">
            Don't have an account?

            <a href="#" @click=${onShowRegister}>
              Create Account
            </a>
          </p>
        </div>
      </main>
    </div>
  `
}