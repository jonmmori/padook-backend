# Variables
PRISMA=npx prisma

# Crear una nueva migración (ej: make migrate name=init)
migrate:
	$(PRISMA) migrate dev --name $(name)

# Aplicar migraciones 
migrate-prod:
	$(PRISMA) migrate deploy

# Revertir última migración (solo en desarrollo)
migrate-reset:
	$(PRISMA) migrate reset --force

# Ver el estado de las migraciones
migrate-status:
	$(PRISMA) migrate status
