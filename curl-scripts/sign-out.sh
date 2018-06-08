# ID=2 sh curl-scripts/sign-out.sh

curl "https://aqueous-atoll-85096.herokuapp.com/change-password" \
  --include \
  --request DELETE \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}"

echo
