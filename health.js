import http from 'http'

http.get("http://localhost:4001/health", res => {
  if(res.status = 200) process.exit(0);
  else process.exit(1);
})
.on("error", e => process.exit(1));
