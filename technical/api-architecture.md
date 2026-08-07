# Iraq Digital Gateway (IDG) Enterprise API Architecture Specification

# 1. Executive Summary
The Iraq Digital Gateway (IDG) Enterprise API Architecture Specification defines the constitutional standards, routing patterns, security models, data contracts, and governance rules governing all Application Programming Interfaces (APIs) across the IDG enterprise ecosystem.

This specification provides the operational blueprint for internal microservices, public developer gateways, partner channels, and sovereign government integration endpoints. It establishes an OpenAPI-first, zero-trust, multi-cloud API platform designed to scale seamlessly from IDG Corporate Systems and AI Gate Iraq (Product 001) to hundreds of future products (`Product 002` through `Product 500+`).

---

# 2. API Architecture Principles
1. **Contract-First & OpenAPI Canonical Source**: Every API MUST be designed and declared as a canonical OpenAPI 3.1 specification before writing implementation code. The OpenAPI contract serves as the single source of truth for mock servers, client SDK generation, contract testing, and gateway configuration.
2. **Zero-Trust Security & Identity Verification**: Every API request—whether originating from internal microservices or external networks—MUST undergo explicit authentication, fine-grained RBAC/ABAC authorization, and input schema validation.
3. **Trilingual Dynamic Localization**: APIs MUST natively support IDG's trilingual mandate (`en-US`, `ar-IQ`, `ckb-IQ`), delivering localized responses, error descriptions, and metadata based on HTTP `Accept-Language` content negotiation.
4. **Resilience, Idempotency & Failure Isolation**: All state-modifying endpoints MUST implement idempotency keys. APIs enforce automatic circuit breaking, rate limiting, and graceful degradation to prevent cascading failures.
5. **Decoupled Architecture & Evolution**: APIs maintain strict backward compatibility using clear semantic versioning, strict deprecation windows, and decoupled deployment pipelines.

---

# 3. Enterprise API Strategy
IDG's API strategy transforms raw digital assets and AI capabilities into secure, standardized, modular services:
- **Democratized Developer Ecosystem**: Provide third-party developers with turn-key SDKs and an interactive Developer Portal (`developer.idg.global`).
- **Sovereign Government Interoperability**: Enable secure, low-latency API bridges between IDG platforms and Iraqi government systems.
- **AI-Native Capability Orchestration**: Standardize access to Gemini 1.5 Pro/Flash models, vector search, and agent execution across all product lines through a unified AI Gateway.

---

# 4. API Portfolio Architecture
The IDG API portfolio is structured across four functional tiers:
```
┌─────────────────────────────────────────────────────────────────────────┐
│ IDG ENTERPRISE API PORTFOLIO TIERING                                    │
└─────────────────────────────────────────────────────────────────────────┘
  ├── Tier 1: Public APIs        (Developer Portal, Billing, Public AI APIs)
  ├── Tier 2: Partner APIs       (Enterprise B2B Integrations, Banking)
  ├── Tier 3: Government APIs    (Sovereign Identity, Civic Data Gateways)
  └── Tier 4: Internal APIs      (Microservice Core, Event Bus, Shared Auth)
```

---

# 5. API Classification
- **Core Platform APIs**: Authentication, user profile, billing, organization management (`api.idg.global/v1/core/*`).
- **Product Domain APIs**: Product-specific business logic (e.g., AI Gate Iraq: `api.aigate.iq/v1/*`).
- **Edge & Gateway APIs**: Cloudflare Worker functions handling dynamic routing, geo-blocking, and rate limiting.
- **System Integration APIs**: Synchronous and asynchronous connectors for legacy or sovereign government datacenters.

---

# 6. API Lifecycle
Every IDG API progresses through six immutable lifecycle stages:
```
  [1. Design & Spec] ──► [2. Mock & Review] ──► [3. Build & Test]
                                                      │
                                                      ▼
  [6. Deprecated/Retired] ◄── [5. Active/Monitored] ◄── [4. Publish & Deploy]
```
1. **Design & Spec**: Authoring OpenAPI 3.1 contract in `idg-api-specs` repo.
2. **Mock & Review**: Mock server generation (`Prism`), API Governance Board approval.
3. **Build & Test**: Code generation, unit tests, contract tests (`Pact`), SAST security scans.
4. **Publish & Deploy**: Gateway registration, automated CI/CD canary deployment.
5. **Active Operations**: APM telemetry monitoring, SLA enforcement, error tracking.
6. **Deprecation & Retirement**: 180-day deprecation notice, progressive sunsetting.

---

# 7. API Governance
The IDG API Governance Board enforces strict architectural reviews:
- Mandatory contract review before any code implementation.
- Automated CI/CD linting (`Spectral`) enforcing naming conventions and schema completeness.
- Zero breaking changes permitted within a major version number.

---

# 8. API Ownership Model
- **Domain Owners**: Accountable for business logic, data models, and SLA compliance.
- **Platform Engineering**: Owns API Gateway infrastructure, rate limiting policies, and service mesh.
- **SecOps**: Defines authentication standards, OAuth scopes, and vulnerability scanning rules.

---

# 9. API Naming Standards
- **URL Base Paths**: Lowercase kebab-case (e.g., `https://api.aigate.iq/v1/user-profiles`).
- **Resource Nouns**: Plural nouns representing domain resources (e.g., `/organizations`, `/subscriptions`).
- **Query Parameters**: camelCase (e.g., `?pageSize=20&sortBy=createdAt`).
- **JSON Payload Fields**: snake_case for consistency across multilanguage SDKs (e.g., `first_name`, `is_active`).

---

# 10. REST API Standards
- **Resource-Oriented**: Stateless HTTP endpoints exposing standard CRUD operations mapped to standard HTTP verbs (`GET`, `POST`, `PUT`, `PATCH`, `DELETE`).
- **Media Types**: Default content type `application/json; charset=utf-8`.
- **RTL & Trilingual Headers**: Accept `Accept-Language: ar-IQ, en-US;q=0.9, ckb-IQ;q=0.8`.

---

# 11. GraphQL Governance
- **Usage Restrictions**: Restricted to internal frontend aggregation layers (BFF - Backend For Frontend).
- **Security Constraints**: Query depth limited to maximum 5 levels; query complexity scoring enforced to block expensive nested queries.

---

# 12. Event-Driven APIs
- **Protocol**: CloudEvents v1.0 standard JSON payloads transported via Pub/Sub or Kafka message queues.
- **Schema Registry**: All event schemas published to centralized Schema Registry (`idg-event-schemas`).

---

# 13. Webhooks
- **Delivery Mechanics**: Asynchronous HTTP POST callouts with exponential backoff retries over 72 hours.
- **Security Verification**: Every webhook payload includes an `X-IDG-Signature` header computed via HMAC-SHA256 using a shared tenant secret.

---

# 14. Internal APIs
- **Network Scope**: Restricted strictly to Private VPC networks (`10.x.x.x`).
- **Protocol**: High-performance gRPC over HTTP/2 for inter-service communication, falling back to REST JSON where necessary.

---

# 15. Public APIs
- **Domain Endpoint**: `https://api.idg.global/v1/*` & `https://api.aigate.iq/v1/*`.
- **Requirements**: Strict rate limiting, API key or OAuth 2.0 Bearer token mandatory, public OpenAPI documentation published on Developer Portal.

---

# 16. Partner APIs
- **Authentication**: Mutual TLS (mTLS) + OAuth 2.0 Client Credentials flow.
- **Isolation**: Dedicated rate-limiting pools and custom SLAs defined via enterprise partner contracts.

---

# 17. Government Integration APIs
- **Sovereign Constraints**: Enforces direct IP whitelisting, HSM-backed digital signatures, and air-gapped encryption tunnels adhering to Iraqi National Cybersecurity Framework.

---

# 18. Product API Architecture
All IDG products inherit unified central authentication and core platform schemas while maintaining isolated domain microservices.

---

# 19. AI Gate Iraq API Architecture (Product 001)
- **Primary Domain**: `api.aigate.iq`.
- **Core Services**:
  - `/v1/ai/completions`: Gemini 1.5 Pro/Flash inference proxy.
  - `/v1/ai/embeddings`: Multi-modal vector generation.
  - `/v1/agents/execute`: Autonomous agent execution runner.

---

# 20. Future Product API Model (Product 002 to Product 500+)
- **Project Factory Integration**: Provisioning new products generates isolated API namespaces (`api.[product_code].idg.global`) inheriting central IAM, billing, and observability hooks automatically.

---

# 21. API Gateway Architecture
```
                         [ CLIENT REQUEST ]
                                 │
                                 ▼
                     ┌───────────────────────┐
                     │ Cloudflare Edge WAF   │
                     │ (DDoS, Rate Limiting) │
                     └───────────┬───────────┘
                                 │
                                 ▼
                     ┌───────────────────────┐
                     │ GCP Cloud Run Gateway │
                     │ (Auth, Route, Tracing)│
                     └───────────┬───────────┘
                                 │
            ┌────────────────────┼────────────────────┐
            ▼                    ▼                    ▼
     [ Core Services ]   [ Product 001 API ]   [ Future APIs ]
```

---

# 22. API Routing
- **Cloudflare Edge Routing**: Routes requests based on host headers (`api.aigate.iq` → AI Gate Cloud Run service cluster).
- **Path-Based Dispatching**: Ingress proxies map `/v1/auth/*` to Auth Service and `/v1/ai/*` to AI Gateway Service.

---

# 23. API Versioning
- **URL Path Versioning**: Major versions MUST be declared explicitly in the URI path (e.g., `/v1/`, `/v2/`).
- **Non-Breaking Changes**: Field additions, optional query parameters, and new endpoints MUST occur within the current major version without path changes.

---

# 24. Backward Compatibility
- **Rules**: Removing fields, renaming endpoints, or changing data types is classified as a Breaking Change and strictly forbidden within a major version.
- **Migration Window**: Deprecated major versions MUST remain supported for a minimum of 180 days following a new major release.

---

# 25. Authentication
- **External Requests**: Standard HTTP Authorization header using OAuth 2.0 Bearer JWTs (`Authorization: Bearer <jwt_token>`).
- **API Keys**: Secondary header `X-IDG-API-Key` for machine-to-machine developer integrations.

---

# 26. Authorization
- **Fine-Grained RBAC & ABAC**: Scope-based access checks validated against JWT claims (`scopes: ["ai:read", "ai:write"]`).

---

# 27. OAuth 2.0 / OIDC
- **Provider**: Firebase Auth & OIDC Keycloak Provider.
- **Flows**: Authorization Code Flow with PKCE for web/mobile apps; Client Credentials Flow for server-to-server integrations.

---

# 28. API Keys
- **Entropy & Format**: Cryptographically secure 64-character tokens prefixed with environment flags (e.g., `idg_live_sk_...`, `idg_test_sk_...`).

---

# 29. Service-to-Service Authentication
- **Internal Security**: Service accounts issue short-lived Google OIDC identity tokens passed in service calls, validated via mTLS.

---

# 30. Rate Limiting
| Client Tier | Rate Limit (Requests/Min) | Burst Capacity |
| :--- | :--- | :--- |
| **Anonymous / Public** | 60 req/min | 10 req/sec |
| **Developer Standard** | 1,000 req/min | 50 req/sec |
| **Enterprise Partner** | 10,000 req/min | 200 req/sec |
| **Sovereign Government** | Custom SLA | Uncapped Burst |

---

# 31. Throttling
- **Algorithm**: Leaky Bucket / Token Bucket implemented at Cloudflare Edge and Redis cache layer. Excess requests return HTTP `429 Too Many Requests`.

---

# 32. Request Validation
- **JSON Schema Validation**: Every incoming payload is validated against its OpenAPI schema before reaching business logic controllers. Invalid payloads return HTTP `400 Bad Request`.

---

# 33. Response Standards
- **Standard Envelope**:
```json
{
  "success": true,
  "data": {},
  "meta": {
    "page": 1,
    "page_size": 20,
    "total_records": 100
  },
  "request_id": "req-9f8a3b2c-2026-0807",
  "timestamp": "2026-08-07T16:00:00Z"
}
```

---

# 34. Error Handling
- **Trilingual Canonical Error Model**:
```json
{
  "error": {
    "code": "RESOURCE_NOT_FOUND",
    "message": "The requested API resource could not be found.",
    "localized_message": {
      "en-US": "The requested API resource could not be found.",
      "ar-IQ": "لم يتم العثور على المورد المطلوب في الواجهة البرمجية.",
      "ckb-IQ": "سەرچاوەی داواکراو لە ڕووکاری بەرنامەسازی نەدۆزرایەوە."
    },
    "request_id": "req-9f8a3b2c-2026-0807",
    "timestamp": "2026-08-07T16:00:00Z",
    "documentation_url": "https://docs.idg.global/errors/RESOURCE_NOT_FOUND"
  }
}
```

---

# 35. HTTP Status Code Standards
- `200 OK`: Successful GET, PUT, or PATCH request.
- `201 Created`: Successful POST request resulting in resource creation.
- `204 No Content`: Successful DELETE request.
- `400 Bad Request`: Schema validation failure or malformed JSON.
- `401 Unauthorized`: Missing or expired authentication token.
- `403 Forbidden`: Insufficient OAuth scope or RBAC permissions.
- `404 Not Found`: Resource does not exist.
- `429 Too Many Requests`: Rate limit exceeded.
- `500 Internal Server Error`: Unhandled server exception.

---

# 36. Pagination
- **Cursor-Based Pagination**: Recommended for high-velocity datasets (`?starting_after=obj_123&limit=25`).
- **Offset-Based Pagination**: Permitted for static queries (`?page=2&page_size=20`).

---

# 37. Filtering
- **Query Parameter Syntax**: Expressed via field key-value pairs (e.g., `?status=active&category=ai_gateway`).

---

# 38. Sorting
- **Query Parameter Syntax**: Comma-separated field names with minus sign for descending order (e.g., `?sort=-created_at,name`).

---

# 39. Idempotency
- **Header Enforcement**: All `POST` and `PATCH` payment or resource-creation endpoints MUST accept an `Idempotency-Key: <UUIDv4>` header. Duplicate requests within 24 hours return cached responses.

---

# 40. Caching
- **Cache Controls**: Public endpoints emit `Cache-Control: public, max-age=300, s-maxage=3600, stale-while-revalidate=60`.
- **Private Data**: Authenticated user endpoints MUST set `Cache-Control: no-store, private`.

---

# 41. Observability
- **Three Pillars**: Unified Metrics, Structured Logs, and Distributed Tracing across all API nodes.

---

# 42. Logging
- **Structured JSON**: Logs emit structured fields (`timestamp`, `trace_id`, `span_id`, `http_status`, `client_ip`, `latency_ms`).

---

# 43. Metrics
- **Prometheus Metrics**: Exposes `/metrics` measuring Request Duration (p50/p95/p99), Request Volume (RPS), and Error Rate.

---

# 44. Distributed Tracing
- **Context Propagation**: Enforces W3C Trace Context headers (`traceparent`, `tracestate`) across all downstream microservice calls.

---

# 45. API Security
- **Defense in Depth**: Combination of Cloudflare WAF, TLS 1.3 encryption, mTLS internal routing, and OAuth 2.0 validation.

---

# 46. OWASP API Security
- Protection against OWASP Top 10 API Security Risks:
  - *API1: Broken Object Level Authorization (BOLA)*: Strict tenant and owner ID checks in database queries.
  - *API2: Broken Authentication*: Short-lived JWT access tokens (15-min lifespan).
  - *API3: Broken Object Property Level Authorization*: Schema filtering blocking unauthorized parameter injection.

---

# 47. Secrets Management
- **Zero Secrets in Code**: Secrets retrieved dynamically at runtime from GCP Secret Manager via environment variable bindings.

---

# 48. Encryption
- **Data in Transit**: Mandatory TLS 1.3 for all external endpoints; mTLS for internal microservices.
- **Data at Rest**: AES-256 encryption across all databases, storage buckets, and caches using GCP KMS.

---

# 49. Data Classification
- **Public**: Developer documentation, public product catalogs.
- **Internal**: Anonymized system metrics, microservice health logs.
- **Restricted / PII**: User identities, payment tokens, government records (strictly encrypted).

---

# 50. PII Protection
- **Data Masking**: Automatic masking of PII (National ID, Email, Phone Numbers) in application logs and trace spans.

---

# 51. Audit Logging
- **Tamper-Evident Storage**: Security-sensitive API calls (IAM modifications, financial transfers) write to append-only Cloud Audit Log buckets with 7-year retention.

---

# 52. API Testing
- **Test Categories**: Unit tests, integration tests, contract tests, and end-to-end synthetic API monitors.

---

# 53. Contract Testing
- **Tooling**: Consumer-driven contract testing via Pact (`pact-js`). Pipeline fails if producer API violates consumer contract.

---

# 54. CI/CD API Quality Gates
- Every pull request MUST pass:
  1. `spectral lint openapi.yaml` (Zero errors permitted).
  2. `pact verification` (Contract compliance).
  3. `gitleaks` & `CodeQL` security scans.

---

# 55. API Documentation Standards
- Interactive documentation hosted on Developer Portal using Redoc / Stoplight elements. Must render in LTR and RTL layouts cleanly.

---

# 56. OpenAPI Standards
- **Specification Version**: OpenAPI 3.1.0 mandatory. Must include complete request/response examples for all 3 supported languages (`en-US`, `ar-IQ`, `ckb-IQ`).

---

# 57. Developer Portal Architecture
- **Public URL**: `https://developer.idg.global`.
- **Features**: Trilingual documentation viewer, interactive API sandbox, API key management console, system status indicators.

---

# 58. SDK Strategy
- **Auto-Generation**: Official client SDKs (TypeScript, Python, Go, Flutter) automatically generated from canonical OpenAPI specs via OpenAPI Generator.

---

# 59. API Deprecation
- **Deprecation Header**: Emits HTTP response headers:
  `Deprecation: @1780000000`
  `Sunset: Sun, 07 Feb 2027 00:00:00 GMT`
  `Link: <https://docs.idg.global/migration/v2>; rel="successor-version"`

---

# 60. API Retirement
- After the 180-day deprecation window, retired API endpoints return HTTP `410 Gone` with a link to migration documentation.

---

# 61. SLA / SLO Standards
- **Availability Target**: 99.95% endpoint availability.
- **Latency SLO**: p95 latency < 100ms for read endpoints; < 250ms for write endpoints.

---

# 62. Reliability and Availability
- Multi-AZ Cloud Run execution with automatic scale-to-zero and burst capacity up to 1,000 instances.

---

# 63. Disaster Recovery
- RPO < 5 minutes, RTO < 15 minutes with automated DNS failover to secondary cloud region (`me-central1`).

---

# 64. Multi-Region API Architecture
- **Current**: Single primary region (`europe-west2`) with active secondary read-replica (`me-central1`).
- **Future**: Active-active multi-region mesh across Middle East cloud zones.

---

# 65. Cloudflare / Edge Integration
- Edge Workers perform authentication verification, rate-limiting, and trilingual header processing before hitting origin servers.

---

# 66. Firebase Integration
- Native integration with Firebase Auth for client identity verification and Firestore for real-time state synchronization.

---

# 67. Cloud Run Integration
- Containerized microservices executing Express / Node.js API servers listening on port 3000 behind GCP Serverless Network Endpoint Groups (NEGs).

---

# 68. Cloud SQL Integration
- High-availability PostgreSQL database connected via Cloud SQL Auth Proxy with connection pooling (`pgbouncer`).

---

# 69. GitHub Actions Integration
- Automated CI/CD workflows validating OpenAPI schemas, executing contract tests, building container images, and deploying gateway configurations.

---

# 70. Enterprise API Repository Structure
```
idg-api-specs/
├── openapi/
│   ├── core/
│   │   └── v1/openapi.yaml
│   ├── aigate/
│   │   └── v1/openapi.yaml
│   └── p002/
│       └── v1/openapi.yaml
├── spectral.yaml
└── README.md
```

---

# 71. API Governance at Scale
- Standardized Terraform project factories automatically generate API Gateway routes, rate limits, and IAM bindings for all new products.

---

# 72. API Architecture Decision Records (ADRs)
- Architecture changes MUST be documented via ADRs in `docs/adr/` (e.g., `ADR-0012-openapi-3.1-standardization.md`).

---

# 73. Compliance and Audit
- ISO 27001 & SOC 2 Type II compliance verified through automated continuous evidence collection and immutable audit logs.

---

# 74. Enterprise API KPIs
1. **API Latency (p95)**: Target < 100ms.
2. **Uptime SLA**: Target 99.95%.
3. **Contract Test Pass Rate**: Target 100%.
4. **Developer Onboarding Time**: Target < 5 minutes to first successful API call.

---

# 75. Future API Architecture
- **Short-Term (2026)**: Full OpenAPI 3.1 contract enforcement and Developer Portal launch.
- **Medium-Term (2027)**: Active-Active multi-region API Gateway mesh across Middle East cloud hubs.
- **Long-Term (2028+)**: Sovereign air-gapped government API bridges and gRPC enterprise service mesh.

---

# Document Control & Revision History

| Version | Date | Author / Title | Description of Changes | Status |
| :--- | :--- | :--- | :--- | :--- |
| **v1.0.0** | 2026-08-07 | IDG Enterprise Architecture Board | Initial publication of Enterprise API Architecture Specification | Approved |

- **Document Identifier**: IDG-SPEC-API-2026-V1
- **Owner**: Iraq Digital Gateway (IDG) Enterprise Architecture Board
- **Classification**: Internal Corporate Standard
- **Review Cycle**: Annual mandatory audit
- **Location**: `/technical/api-architecture.md`

---
# End of Document
