import fetch from "node-fetch";
import express from "express";


const app = express();         
const port = 5000;               

app.get('/', (req, res) => {     
    fetch('https://api64.ipify.org?format=json').then(data=>data.json()).then(d=>res.send(`<textarea readonly style="font-size: 50px;">${d.ip}</textarea>
    <h1>• WHOLE PAGE IS A COPY BUTTON</h1>
    <h2>• ⚡Blazing fastest way to get IP address with less resources</h2>
    <title>Fetch IP</title>
    <meta name="definition" content="⚡Blazing fastest way to get IP address with less resources">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <script>
    const copyElement = document.querySelector('textarea');
    function listener(event) {
        copyElement.select();
        copyElement.setSelectionRange(0, copyElement.value.length);
        document.execCommand('copy');
    }
    document.body.addEventListener('click', listener);
</script>`))

});

app.listen(port);