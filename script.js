/** set up SDK */
let recon = new ReconClient({ token: 'adf1b63a-14cc-4aeb-b4d2-5af62defb527' }, process);

function process() {
    /** add data (user actions) */
    recon.userAction('moritz', 'apple');
    recon.userAction('moritz', 'book');
    recon.userAction('marc', 'apple');

    /** add multiple actions */
    recon.userMultipleActions('marc', ['windows', 'tv']);

    /** train model in cloud */
    recon.trainModel();

    /** recommend items */
    recon.recommend('marc').then(res => console.log('basic', res));

    /** anonymous recommendation */
    /*
    recon.recommendAnonymously(['apple'], res => {
        console.log('anonymous', res);
    });
    */

    /** anonymous recommendation by storage */
    /*
    recon.addItem('apple');
    recon.addItem('windows');
    recon.recommendAnonymouslyByStorage(res => console.log('anonymous_storage', res))
    */
}