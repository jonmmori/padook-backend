# Variables
PRISMA=npx prisma

# Crear una nueva migración (ej: make migrate name=init)
migrate:
	docker compose exec backend $(PRISMA) migrate dev --name $(name)

# Aplicar migraciones 
migrate-prod:
	docker compose exec backend $(PRISMA) migrate deploy

# Revertir última migración (solo en desarrollo)
migrate-reset:
	docker compose exec backend $(PRISMA) migrate reset --force

# Ver el estado de las migraciones
migrate-status:
	docker compose exec backend $(PRISMA) migrate status
