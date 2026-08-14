const ACCOUNT_KEY = 'petStoreAccount'
const USER_KEY = 'petStoreUser'
const WISHLIST_KEY = 'petStoreWishlist'
const REVIEWS_KEY = 'petStoreReviews'

function read(key, fallback = null) {
  try {
    const value = localStorage.getItem(key)

    if (!value) {
      return fallback
    }

    return JSON.parse(value)
  } catch {
    return fallback
  }
}

function write(key, value) {
  localStorage.setItem(key, JSON.stringify(value))
}

// Account
export function getAccount() {
  return read(ACCOUNT_KEY)
}

export function saveAccount(account) {
  write(ACCOUNT_KEY, account)
}

// Logged-in user
export function getLoggedInUser() {
  return read(USER_KEY)
}

export function saveLoggedInUser(user) {
  write(USER_KEY, user)
}

export function removeLoggedInUser() {
  localStorage.removeItem(USER_KEY)
}

// Wishlist
export function getWishlist(defaultWishlist = []) {
  return read(WISHLIST_KEY, structuredClone(defaultWishlist))
}

export function saveWishlist(wishlist) {
  write(WISHLIST_KEY, wishlist)
}

// Reviews
export function getReviews(defaultReviews = []) {
  return read(REVIEWS_KEY, structuredClone(defaultReviews))
}

export function saveReviews(reviews) {
  write(REVIEWS_KEY, reviews)
}