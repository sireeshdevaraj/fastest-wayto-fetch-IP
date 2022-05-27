import fetch from "node-fetch";
import express from "express";


const app = express();         
let port=process.env.PORT || 3000;           



app.get('/', (req, res) => {     
    res.send(`<textarea readonly style="font-size: 50px;">${req.headers['x-forwarded-for']}</textarea>
    <h1>• WHOLE PAGE IS A COPY BUTTON</h1>
    <h2>• ⚡Blazing fastest way to get IPv4 address with less resources</h2>
    <h2>• Completely rendered by a simple express server with no files to serve</h2>
    <h2>• Whole thing fits in a single TCP packet (<1000 Bytes)</h2>
    <h2>• Note: There's no certain reliable way to determine the client's actual IP</h2>
    <title>Fetch IP</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <script>
    const copyElement = document.querySelector('textarea');
    function listener(event) {
        copyElement.select();
        copyElement.setSelectionRange(0, copyElement.value.length);
        document.execCommand('copy');
    }
    document.body.addEventListener('click', listener);
</script>`)});




app.listen(port);