# Swagger codegen (no js) (java required)
- https://github.com/swagger-api/swagger-codegen
# Swagger generators in js (java required)
- https://github.com/swagger-api/swagger-js
# OpenApi generators:
- https://openapi-generator.tech/

## With npm
npx @openapitools/openapi-generator-cli generate -i petstore.json -g typescript-fetch -o /src/api

## With docker
docker run --rm \
-v ${PWD}:/local openapitools/openapi-generator-cli generate \
-i /local/petstore.json \
-g typescript-fetch \
-o /local/src/api

# Mock Service Worker
https://mswjs.io/

# Faker-js
https://fakerjs.dev/
