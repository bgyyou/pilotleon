#!/usr/bin/env bash
# 本地构建 → 打包传到服务器暂存目录 → rsync 同步进 nginx 站点根目录
set -euo pipefail

HOST="${DEPLOY_HOST:-ubuntu@124.156.140.217}"
WEBROOT=/var/www/pilotleon
STAGING=/home/ubuntu/pilotleon-dist
SITE_URL=https://pilotleon.online

cd "$(dirname "$0")/.."

npm run build

[ -f dist/index.html ] || { echo "构建产物缺失：dist/index.html"; exit 1; }

echo "上传并同步到 $HOST:$WEBROOT ..."
# MSYS_NO_PATHCONV 只作用于 ssh：否则 Git Bash 会把远端命令里的 /var/... 转成 Windows 路径
tar -czf - -C dist . | MSYS_NO_PATHCONV=1 ssh "$HOST" "
  set -e
  rm -rf '$STAGING' && mkdir -p '$STAGING'
  tar -xzf - -C '$STAGING'
  rsync -a --delete '$STAGING'/ '$WEBROOT'/
"

echo "校验线上入口 ..."
curl -sS -o /dev/null -w "%{http_code}\n" "$SITE_URL"
echo "部署完成：$SITE_URL"
