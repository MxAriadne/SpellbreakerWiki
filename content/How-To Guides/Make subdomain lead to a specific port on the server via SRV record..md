For some reason if you look up how to do this you will find endless posts telling you it's completely impossible and will never work. I literally have no idea why people say this since it just is not true. I used to do this for a wiki service that was hard coded to only respond on port 5000 and it worked fine, I also use this to this day for Minecraft servers.

Here is how I do this in Cloudflare:
1. Create a new A record, enter whatever subdomain name you'd like. 
2. Create a new SRV record:
	1. Name: \_sip.\_tcp.subdomainname
	2. Priority: 0
	3. Weight: 0
	4. TTL: Auto
	5. Port: <port you're using>
	6. Target: subdomain.domain.com
3. You're done!

Here's an example Minecraft one:

![[Pasted image 20251017181000.png]]