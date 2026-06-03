#!/bin/bash
set -e

OWNER_LOWER="$1"
GHCR_TOKEN="$2"
PACKAGE_NAME="$3"

# --- ZDE SI NASTAVUJEŠ VERZE PRO KAŽDOU APLIKACI ZVLÁŠŤ ---
if [ "$PACKAGE_NAME" = "praxe-demo12-frontend" ]; then
  MOJE_VERZE="v1.1.3"   # <--- Verze pro frontend
else
  MOJE_VERZE="v1.1.5"   # <--- Verze pro backend / hlavní app
fi
# ---------------------------------------------------------

# Pokud je verze nevyplněná, končíme a použije se jen SHA/latest
if [ -z "$MOJE_VERZE" ]; then
  echo ""
  exit 0
fi

# Kontrola přes API, zda už tento tag v GHCR u daného balíčku existuje
HTTP_STATUS=$(curl -s -o /dev/null -w "%{http_code}" \
  -H "Authorization: Bearer $GHCR_TOKEN" \
  "https://api.github.com/users/$OWNER_LOWER/packages/container/$PACKAGE_NAME/versions")

TAG_EXISTS="false"

if [ "$HTTP_STATUS" -eq 200 ]; then
  # Balíček existuje, musíme zkontrolovat jeho tagy
  EXISTING_TAGS=$(curl -s -H "Authorization: Bearer $GHCR_TOKEN" \
    "https://api.github.com/users/$OWNER_LOWER/packages/container/$PACKAGE_NAME/versions" \
    | jq -r '.[].metadata.container.tags[]' 2>/dev/null || true)

  if echo "$EXISTING_TAGS" | grep -qx "$MOJE_VERZE"; then
    TAG_EXISTS="true"
  fi
elif [ "$HTTP_STATUS" -eq 404 ]; then
  # Balíček na GitHubu ještě vůbec neexistuje -> tag je volný!
  TAG_EXISTS="false"
else
  # Jakákoliv jiná chyba (např. 401 Unauthorized / 403 Forbidden zaviněná špatným tokenem)
  # V takovém případě raději tag zakážeme, abychom neudělali chybu
  TAG_EXISTS="true"
fi

# Pokud tag neexistuje, vypiš ho. Pokud existuje, vrať prázdno.
if [ "$TAG_EXISTS" = "false" ]; then
  echo "$MOJE_VERZE"
else
  echo ""
fi