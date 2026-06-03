# docker.com



## příkazy

---

### docker

```
docker compose up fronend-dev backend-dev maven
```
```
docker build -t ghcr.io/jakubkolinger/praxe-frontend:vX.Y.Z ./src/main/frontend/
```
```
docker build -t ghcr.io/jakubkolinger/praxe-backend:vX.Y.Z ./
```
```
docker push ghcr.io/jakubkolinger/praxe-frontend:vX.Y.Z
```
```
docker push ghcr.io/jakubkolinger/praxe-backend:vX.Y.Z
```
---

### kubectl
```
kubectl apply -f ./gitops/demo/
```
```
kubectl apply -f ./gitops/frontend/frontend-deploy.yaml
```
### linuk

```
nc -zv localhst 3306
```
```
echo > /dev/tcp/localhost/3306 && echo "Port otevřen" || echo "Port zavřen"
```
```
ss -tlnp | grep 3306
```


