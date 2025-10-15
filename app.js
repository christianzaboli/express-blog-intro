// importo express dal module
const express = require("express");
// creo l'istanza di express
const app = express();
// definisco il numero della porta 
const port = 3000;

// rendo disponibile l'uso dei file nella cartella public
app.use(express.static('public'));

// imposto l'indice del server
app.get('/', (req, res) => (
    res.send('Server del mio blog')
));

// imposto la rotta della bacheca che restituisce il json
app.get('/bacheca', (req, res) => {
    const posts = [
        {
            id: 1,
            title: 'Ciambellone',
            content: 'Ricetta ciambellone classico',
            image: 'public/ciambellone.jpeg',
            tags: ['ciambella', 'ciambellone', 'dolce', 'classico', 'latte', 'ricetta']
        },
        {
            id: 2,
            title: 'Cracker barbabietola',
            content: 'Ricetta dei cracker alla barbabietola',
            image: 'public/cracker_barbabietola.jpeg',
            tags: ['cracker', 'barbabietola', 'salato', 'rosso', 'snack', 'aperitivo']
        },
        {
            id: 3,
            title: 'Pane fritto dolce',
            content: 'Ricetta del pane fritto dolce',
            image: 'public/pane_fritto_dolce.jpeg',
            tags: ['pane', 'frittura', 'dolce', 'salato', 'festa', 'zucchero', 'fritto']
        },
        {
            id: 4,
            title: 'Pasta barbabietola',
            content: 'Ricetta della pasta alla barbabietola',
            image: 'public/pasta_barbabietola.jpeg',
            tags: ['pasta', 'barbabietola', 'rosso', 'pasta rossa', 'barbabietola', 'pranzo']
        },
        {
            id: 5,
            title: 'Torta paesana',
            content: 'Ricetta della torta paesana',
            image: 'public/torta_paesana.jpeg',
            tags: ['torta', 'paesana', 'dolce', 'semplice', 'festa', 'zucchero', 'light', 'vegetariano', 'facile']
        },
    ];

    res.json(posts)
});

// metto in ascolto il server sulla porta scelta in precedenza
app.listen(port, () => {
    console.log(`listening on port ${port}`);
});