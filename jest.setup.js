// Jest setup file
// Add custom matchers and global configuration here

// Mock window.matchMedia
window.matchMedia = window.matchMedia || function() {
  return {
    matches: false,
    addListener: function() {},
    removeListener: function() {},
    addEventListener: function() {},
    removeEventListener: function() {},
    dispatchEvent: function() { return false; }
  };
};

// Mock IntersectionObserver
window.IntersectionObserver = window.IntersectionObserver || function() {
  this.observe = function() { return null; };
  this.unobserve = function() { return null; };
  this.disconnect = function() { return null; };
};

// Mock ResizeObserver
window.ResizeObserver = window.ResizeObserver || function() {
  this.observe = function() { return null; };
  this.unobserve = function() { return null; };
  this.disconnect = function() { return null; };
};