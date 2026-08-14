import { LitElement, css, html } from 'lit'

export class AppNavbar extends LitElement {
  render() {
    return html`
      <header class="navbar">
        <div class="brand">
          <div class="logo">🐾</div>
          <span>PawPantry</span>
        </div>

        <nav>
          <a href="#" @click=${this._handleHelp}>
            Help
          </a>

          <button @click=${this._handleBackToShop}>
            Back to Shop
          </button>
        </nav>
      </header>
    `
  }

  _handleHelp(event) {
    event.preventDefault()

    this.dispatchEvent(
      new CustomEvent('open-help', {
        bubbles: true,
        composed: true,
      })
    )
  }

  _handleBackToShop() {
    this.dispatchEvent(
      new CustomEvent('back-to-shop', {
        bubbles: true,
        composed: true,
      })
    )
  }

  static styles = css`
    :host {
      display: block;
      font-family: Arial, Helvetica, sans-serif;
    }

    * {
      box-sizing: border-box;
    }

    .navbar {
      min-height: 72px;
      background: #ffffff;
      border-bottom: 1px solid #e7e8e2;

      display: flex;
      align-items: center;
      justify-content: space-between;

      padding: 0 7%;
    }

    .brand {
      display: flex;
      align-items: center;
      gap: 10px;

      color: #183f34;
      font-size: 22px;
      font-weight: 700;
    }

    .logo {
      width: 38px;
      height: 38px;

      display: flex;
      align-items: center;
      justify-content: center;

      background: #eaf2ed;
      border-radius: 50%;

      font-size: 20px;
    }

    nav {
      display: flex;
      align-items: center;
      gap: 24px;
    }

    nav a {
      color: #53635d;
      text-decoration: none;
      font-size: 14px;
      font-weight: 500;
    }

    nav a:hover {
      color: #183f34;
    }

    nav button {
      background: #183f34;
      color: #ffffff;

      border: none;
      border-radius: 22px;

      padding: 10px 18px;

      font-family: inherit;
      font-size: 14px;
      font-weight: 600;

      cursor: pointer;
    }

    nav button:hover {
      background: #245849;
    }

    @media (max-width: 600px) {
      .navbar {
        padding: 14px 20px;
      }

      .brand {
        font-size: 19px;
      }

      nav a {
        display: none;
      }
    }
  `
}

if (!window.customElements.get('app-navbar')) {
  window.customElements.define('app-navbar', AppNavbar)
}