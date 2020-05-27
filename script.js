/** set up SDK */
let recon = new ReconClient({ token: '90a7ad58-3017-448b-b598-36c6f7defb0a' }, process);

function process() {
    /** add data (user actions) */
    recon.userAction('moritz', 'apple');
    recon.userAction('moritz', 'book');
    recon.userAction('marc', 'apple');

    /** train model in cloud */
    recon.trainModel();

    /** recommend items */
    recon.recommend('marc').then(res => console.log(res));
}