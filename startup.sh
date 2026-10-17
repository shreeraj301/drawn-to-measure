#!/bin/sh
# Bring the preview server back. Idempotent: exit if the port is already healthy.
set -e
cd /workspace
if curl -sf -o /dev/null --max-time 2 http://127.0.0.1:8080/; then
  exit 0
fi
if [ ! -d node_modules/three ]; then
  npm install
fi
nohup npm run dev > /tmp/dev-server.log 2>&1 &
i=0
while [ "$i" -lt 40 ]; do
  if curl -sf -o /dev/null --max-time 1 http://127.0.0.1:8080/; then
    exit 0
  fi
  i=$((i + 1))
  sleep 0.5
done
echo "dev server did not become healthy" >&2
exit 1
