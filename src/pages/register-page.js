import { html } from 'lit'

export function registerPage({
  name,
  email,
  password,
  confirmPassword,
  message,
  onNameInput,
  onEmailInput,
  onPasswordInput,
  onConfirmPasswordInput,
  onSubmit,
  onShowLogin,
}) {
  return html`
    <div class="page">
      <app-navbar></app-navbar>

      <main class="content">
        <div class="login-card">
          <div class="icon">🐾</div>

          <h1>Create Account</h1>

          <p class="subtitle">
            Create your account to manage orders and favorites.
          </p>

          <form @submit=${onSubmit}>
            <md-outlined-text-field
              label="Full Name"
              required
              .value=${name}
              @input=${onNameInput}
            ></md-outlined-text-field>

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

            <md-outlined-text-field
              label="Confirm Password"
              type="password"
              required
              .value=${confirmPassword}
              @input=${onConfirmPasswordInput}
            ></md-outlined-text-field>

            <md-filled-button type="submit">
              Create Account
            </md-filled-button>
          </form>

          ${message
            ? html`<p class="message">${message}</p>`
            : ''}

          <p class="register">
            Already have an account?

            <a href="#" @click=${onShowLogin}>
              Sign In
            </a>
          </p>
        </div>
      </main>
    </div>
  `
}