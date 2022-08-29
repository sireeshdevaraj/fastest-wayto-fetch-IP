### ⚡Fastest way to get IPv4 address with less resources


- Completely rendered by a simple express server with no files to serve and basically no RTT
- Whole thing fits in a single TCP packet (<1000 Bytes)
- Note: In few cases there's no certain reliable way to get the actual remote address of the client.


### req.headers['x-forwarded-for'] [refer the documentation](https://www.rfc-editor.org/rfc/rfc7239#page-6) and [express docs](http://expressjs.com/en/api.html#req.ip)
- `req.headers['x-forwarded-for']` : 
- If a request is passed through more than one proxy server, then each proxy will add the IP of the preceding one to the existing X-Forwarded-For header, so the `x-forwarded-for` gives you multiple ips
- You can trim the result with `req.headers['x-forwarded-for'].split(',').shift()`
- Basically the request passed through proxy1, proxy2, proxy3. proxy3 appears as remote address of the request.we just seperate the outputs at `,` and return the first element of the array as the output ,which is what exactly the `req.ip` does in express
- you can find the `host`,`referer`  and types of `protocol` in req.headers json
- You can use the **Geolocation** API to get the Location of the address

Tasks:
+ Changing from Heroku to Netlify
