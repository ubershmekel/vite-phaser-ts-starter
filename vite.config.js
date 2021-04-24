export default {
  build: {
    // Do not inline images and assets to avoid the phaser error
    // "Local data URIs are not supported"
    assetsInlineLimit: 0
  },
}