import { LitElement, html } from 'lit'

import '@material/web/button/filled-button.js'
import '@material/web/textfield/outlined-text-field.js'
import '@material/web/button/outlined-button.js'
import {
  initialOrders,
  initialWishlist,
  initialReviews,
} from './data/mock-data.js'
import {
  getAccount,
  saveAccount,
  getLoggedInUser,
  saveLoggedInUser,
  removeLoggedInUser,
  getWishlist,
  saveWishlist,
  getReviews,
  saveReviews,
} from './services/storage-service.js'
import './components/app-navbar.js'
import { loginPage } from './pages/login-page.js'
import { registerPage } from './pages/register-page.js'
import { profilePage } from './pages/profile-page.js'
import { editProfilePage } from './pages/edit-profile-page.js'
import { ordersPage } from './pages/orders-page.js'
import { orderDetailsPage } from './pages/order-details-page.js'
import { wishlistPage } from './pages/wishlist-page.js'
import { reviewsPage } from './pages/reviews-page.js'
import { sharedStyles } from './styles/shared-styles.js'

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
    wishlist: { type: Array },
    reviews: { type: Array },
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

  this.orders = structuredClone(initialOrders)

  this.wishlist = getWishlist(initialWishlist)
  this.reviews = getReviews(initialReviews)
}

  render() {
  if (this.currentPage === 'register') {
    return this._renderRegister()
  }

  if (this.currentPage === 'profile') {
    return this._renderProfile()
  }
  if (this.currentPage === 'edit-profile') {
  return this._renderEditProfile()
}

  if (this.currentPage === 'orders') {
    return this._renderOrders()
  }

  if (this.currentPage === 'order-details') {
    return this._renderOrderDetails()
  }
if (this.currentPage === 'wishlist') {
  return this._renderWishlist()
}
if (this.currentPage === 'reviews') {
  return this._renderReviews()
}
  return this._renderLogin()
}
 
_renderLogin() {
  return loginPage({
    email: this.email,
    password: this.password,
    message: this.message,

    onEmailInput: this._updateEmail,
    onPasswordInput: this._updatePassword,
    onSubmit: this._handleLogin,
    onShowRegister: this._showRegister,
  })
}

 _renderRegister() {
  return registerPage({
    name: this.name,
    email: this.email,
    password: this.password,
    confirmPassword: this.confirmPassword,
    message: this.message,

    onNameInput: this._updateName,
    onEmailInput: this._updateEmail,
    onPasswordInput: this._updatePassword,
    onConfirmPasswordInput: this._updateConfirmPassword,
    onSubmit: this._handleRegister,
    onShowLogin: this._showLogin,
  })
}
  _renderOrders() {
  return ordersPage({
    orders: this.orders,

    onBack: () => this._backToProfile(),

    onViewDetails: (order) =>
      this._showOrderDetails(order),
  })
}
_renderOrderDetails() {
  return orderDetailsPage({
    order: this.selectedOrder,

    onBack: () => this._backToOrders(),

    onShowOrders: () => this._showOrders(),
  })
}
_renderWishlist() {
  return wishlistPage({
    wishlist: this.wishlist,

    onBack: () => this._backToProfile(),

    onRemove: (productId) =>
      this._removeFromWishlist(productId),
  })
}
_renderEditProfile() {
  return editProfilePage({
    name: this.name,
    email: this.email,
    message: this.message,

    onNameInput: (event) => this._updateName(event),
    onEmailInput: (event) => this._updateEmail(event),

    onSubmit: (event) => this._saveProfile(event),

    onCancel: () => this._backToProfile(),
  })
}
_renderProfile() {
 const account = getAccount() || {
  name: 'User',
  email: '',
}

  return profilePage({
    account,

    onEditProfile: () => this._showEditProfile(),
    onLogout: () => this._logout(),
    onShowOrders: () => this._showOrders(),
    onShowWishlist: () => this._showWishlist(),
    onShowReviews: () => this._showReviews(),
  })
}
_renderReviews() {
  return reviewsPage({
    reviews: this.reviews,

    onBack: () => this._backToProfile(),

    onDelete: (reviewId) =>
      this._deleteReview(reviewId),
  })
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

saveAccount(account)

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

   const savedAccount = getAccount()

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

   saveLoggedInUser({
  name: savedAccount.name,
  email: savedAccount.email,
  loggedIn: true,
})

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

_showWishlist() {
  this.currentPage = 'wishlist'
}

_removeFromWishlist(productId) {
  this.wishlist = this.wishlist.filter(
    (product) => product.id !== productId
  )

  saveWishlist(this.wishlist)
}
_showReviews() {
  this.currentPage = 'reviews'
}

_deleteReview(reviewId) {
  this.reviews = this.reviews.filter(
    (review) => review.id !== reviewId
  )

  saveReviews(this.reviews)
}
_showEditProfile() {
  const account = getAccount()

  if (!account) {
    return
  }

  this.name = account.name
  this.email = account.email
  this.message = ''
  this.currentPage = 'edit-profile'
}
_saveProfile(event) {
  event.preventDefault()

  if (!this.name.trim() || !this.email.trim()) {
    this.message = 'Please fill in all fields.'
    return
  }

  if (!this._isValidEmail(this.email)) {
    this.message = 'Please enter a valid email address.'
    return
  }

 const oldAccount = getAccount()

  if (!oldAccount) {
    this.message = 'Account not found.'
    return
  }

  const updatedAccount = {
    ...oldAccount,
    name: this.name.trim(),
    email: this.email.trim().toLowerCase(),
  }

  saveAccount(updatedAccount)

  const loggedInUser = JSON.parse(
    localStorage.getItem('petStoreUser')
  )

  if (loggedInUser) {
    saveLoggedInUser({
  ...loggedInUser,
  name: updatedAccount.name,
  email: updatedAccount.email,
})
  }

  this.message = ''
  this.currentPage = 'profile'
}
 
_logout() {
  removeLoggedInUser()

  this.currentPage = 'login'
  this.email = ''
  this.password = ''
  this.message = ''
}
  static styles = sharedStyles
  
}

if (!window.customElements.get('my-element')) {
  window.customElements.define('my-element', MyElement)
}