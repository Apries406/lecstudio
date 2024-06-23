export function initTheme(theme) {
  const root = document.documentElement

  root.style.setProperty('--bottom-background', theme.backgroundColor)
}
