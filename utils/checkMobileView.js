export default () => {
  if (process.browser) {
    return window.innerWidth < 800;
  } else false
}