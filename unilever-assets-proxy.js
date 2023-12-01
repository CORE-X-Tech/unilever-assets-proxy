const express = require('express');
const request = require('request');
const app = express();
const PORT = 5556; // Porta em que o servidor Node.js irá rodar

app.get('*', (req, res) => {
    const bucketUrl = 'https://unlstoragecdn.azureedge.net/'+req.url+'?sv=2022-11-02&ss=bfqt&srt=sco&sp=r&se=2033-05-11T01:48:57Z&st=2023-05-10T17:48:57Z&spr=https&sig=3QvWLORE0Wnr%2FnJHpD%2BBCtwnFMbo1h3pbzVbJZiLiKs%3D';
    console.log(`Requisitando ${bucketUrl}`);
    try {
        request(bucketUrl).pipe(res);
    } catch (error) {
        console.log(error);
    }
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
