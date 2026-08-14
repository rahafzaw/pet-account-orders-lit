import { html } from 'lit'

export function editProfilePage({
  name,
  email,
  message,
  onNameInput,
  onEmailInput,
  onSubmit,
  onCancel,
}) {
  return html`
    <div class="page">
      <app-navbar></app-navbar>

      <main class="content">
        <div class="login-card">

          <div class="icon">
            👤
          </div>

          <h1>Edit Profile</h1>

          <p class="subtitle">
            Update your personal information.
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

            <md-filled-button type="submit">
              Save Changes
            </md-filled-button>

            <md-outlined-button
              type="button"
              @click=${onCancel}
            >
              Cancel
            </md-outlined-button>

          </form>

          ${message
            ? html`
                <p class="message">
                  ${message}
                </p>
              `
            : ''}
        </div>
      </main>
    </div>
  `
}