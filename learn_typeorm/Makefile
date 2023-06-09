all: up
	echo "Building learntypeorm..."

up:
	docker-compose up -d --build
	npm run dev

down:
	docker-compose down

pg_connect:
	echo "Attempting connection to postgres database"
	PGPASSWORD=sbars123 psql -h localhost -d typeorm -p 5432 -U sbars -W
