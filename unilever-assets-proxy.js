const express = require('express');
const axios = require('axios');
const app = express();
const PORT = 5556;

app.get('*', async (req, res) => {
    const bucketUrl = 'https://unlstoragecdn.azureedge.net/'+req.url+'?sv=2022-11-02&ss=bfqt&srt=sco&sp=r&se=2033-05-11T01:48:57Z&st=2023-05-10T17:48:57Z&spr=https&sig=3QvWLORE0Wnr%2FnJHpD%2BBCtwnFMbo1h3pbzVbJZiLiKs%3D';
    console.log(`Requisitando ${bucketUrl}`);
    try {
        const response = await axios.get(bucketUrl, { responseType: 'stream' });
        response.data.pipe(res);
    } catch (error) {
        console.error(error);
        res.status(500).send('Erro interno do servidor');
    }
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
