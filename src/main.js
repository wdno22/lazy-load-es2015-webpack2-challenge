// Importing from Animations and Messaging
// import { MerryXmas } from './animations';
// import { Alert } from './messaging'

// Listener to fire up Merry Xmas
document.getElementById( 'button' ).addEventListener( 'click', e => {
  import('./animations').then(({MerryXmas}) => {
    if (!this.merryXmas) {
      this.merryXmas = new MerryXmas( 'effect' );
    }
    this.merryXmas.animate();
  })
});

// Timeout to fire up Alert
setTimeout(() => {
  import('./messaging').then(({Alert}) => {
    new Alert();
  })
}, 5000);
