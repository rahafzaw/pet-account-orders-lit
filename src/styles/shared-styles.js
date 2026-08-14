import { css } from 'lit'

export const sharedStyles = css`
    :host {
      display: block;

      --md-sys-color-primary: #174c3c;
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
      color:  #174c3c;
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
      color:  #174c3c;
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
      color:  #174c3c;

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

    background: #174c3c;
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
  border-color:  #174c3c;
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
  color:  #174c3c;

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
  .wishlist-content {
  min-height: calc(100vh - 72px);
  padding: 50px 20px;
}

.wishlist-container {
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
}

.wishlist-heading {
  margin: 25px 0 30px;
}

.wishlist-heading h1 {
  text-align: left;
  margin-bottom: 8px;
}

.wishlist-heading p {
  color: #77717d;
  margin: 0;
}

.wishlist-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.wishlist-card {
  background: white;
  border: 1px solid #e5e1e9;
  border-radius: 18px;

  padding: 25px;

  box-shadow: 0 8px 30px rgba(40, 32, 55, 0.06);
}

.product-icon {
  width: 65px;
  height: 65px;

  display: flex;
  align-items: center;
  justify-content: center;

  background: #f1ecf9;
  border-radius: 16px;

  font-size: 32px;

  margin-bottom: 18px;
}

.product-category {
  color: #817b86;
  font-size: 13px;
  margin-bottom: 7px;
}

.wishlist-card h2 {
  font-size: 18px;
  margin: 0 0 12px;
  color: #302b35;
}

.product-price {
  color:  #174c3c;
  font-size: 20px;
  font-weight: 700;

  margin-bottom: 22px;
}

.wishlist-actions {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.remove-button {
  height: 42px;

  background: white;
  border: 1px solid #d8d2dc;
  border-radius: 22px;

  color: #a32525;

  font-family: inherit;
  font-size: 14px;

  cursor: pointer;
}

.remove-button:hover {
  background: #fdeeee;
}

.empty-state {
  background: white;
  border: 1px solid #e5e1e9;
  border-radius: 18px;

  padding: 60px 20px;

  text-align: center;
}

.empty-state > div {
  font-size: 45px;
}

.empty-state h2 {
  margin: 15px 0 8px;
}

.empty-state p {
  color: #77717d;
  margin: 0;
}
  .reviews-content {
  min-height: calc(100vh - 72px);
  padding: 50px 20px;
}

.reviews-container {
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
}

.reviews-heading {
  margin: 25px 0 30px;
}

.reviews-heading h1 {
  text-align: left;
  margin-bottom: 8px;
}

.reviews-heading p {
  color: #77717d;
  margin: 0;
}

.reviews-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.review-card {
  background: white;
  border: 1px solid #e5e1e9;
  border-radius: 18px;
  padding: 28px;

  box-shadow: 0 8px 30px rgba(40, 32, 55, 0.06);
}

.review-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 20px;
}

.review-header h2 {
  margin: 0 0 7px;
  font-size: 19px;
}

.review-header span {
  color: #817b86;
  font-size: 13px;
}

.stars {
  color: #e3ac20;
  font-size: 21px;
  letter-spacing: 2px;
}

.review-comment {
  margin: 22px 0;
  color: #625d68;
  line-height: 1.6;
}

.review-actions {
  border-top: 1px solid #eeeaf1;
  padding-top: 18px;
}

.delete-review {
  background: transparent;
  border: 1px solid #d8d2dc;
  border-radius: 20px;

  padding: 9px 16px;

  color: #a32525;

  font-family: inherit;
  cursor: pointer;
}

.delete-review:hover {
  background: #fdeeee;
}

    @media (max-width: 650px) {.profile-header {
  align-items: flex-start;
}
  .wishlist-grid {
  grid-template-columns: 1fr;
}
  .order-info {
  grid-template-columns: 1fr;
}

.review-header {
  flex-direction: column;
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
  

