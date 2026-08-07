# Iraq Digital Gateway (IDG) Enterprise API Architecture Specification

**Document Identifier**: IDG-SPEC-API-2026-V1  
**Document Title**: Enterprise API Architecture Specification  
**Parent Corporate Entity**: Iraq Digital Gateway (IDG)  
**Primary Product Reference**: AI Gate Iraq (Product 001)  
**Status**: Production Approved  
**Classification**: Enterprise Architecture Standard  
**Review Cycle**: Annual  
**Effective Date**: 2026-08-07  

---

# 1. Executive Summary
The Iraq Digital Gateway (IDG) Enterprise API Architecture Specification establishes the constitutional standards, security protocols, routing mechanisms, data contracts, and governance frameworks for all Application Programming Interfaces (APIs) across the enterprise ecosystem. This document serves as the permanent reference for internal microservices, public developer gateways, B2B partner channels, and sovereign government interoperability networks, supporting scale from Product 001 (AI Gate Iraq) to hundreds of future products (`Product 002` through `Product 500+`).

---

# 2. Purpose
The purpose of this specification is to unify API design, deployment, security, and lifecycle management under a contract-first, zero-trust, and trilingual framework. It guarantees seamless inter-service communication, strict backward compatibility, high availability, and sovereign compliance across all IDG digital assets.

---

# 3. Scope
This specification applies to all APIs, microservices, edge functions, webhooks, SDKs, and developer portals operated by IDG, its subsidiaries, product teams, third-party partners, and government integration adapters.

---

# 4. API Architecture Principles
1. **Contract-First Development**: OpenAPI 3.1 specifications are canonical sources of truth created before implementation.
2. **Zero-Trust Security**: Every API request must be authenticated, authorized, and validated regardless of network perimeter.
3. **Trilingual Localization**: Native support for English (`en-US`), Arabic (`ar-IQ`), and Kurdish Sorani (`ckb-IQ`) across documentation and error responses.
4. **Resilience & Idempotency**: Built-in rate limiting, circuit breakers, timeouts, and idempotency keys for state-modifying operations.
5. **Independent Deployability**: Services maintain decoupled lifecycles with strict semantic versioning and zero breaking changes within major versions.

---

# 5. Enterprise API Strategy
IDG’s API strategy drives digital transformation by monetizing platform capabilities, standardizing AI gateway execution, enabling secure government data exchange, and providing turn-key SDKs for enterprise developers across the Middle East.

---

# 6. IDG API Portfolio Model
The API portfolio is structured across four operational tiers:
- **Tier 1: Public APIs**: External developer gateways, public product features, and billing APIs.
- **Tier 2: Partner APIs**: High-throughput B2B channels, banking, and enterprise integrations.
- **Tier 3: Government APIs**: Sovereign civic data exchanges, identity validation, and compliance bridges.
- **Tier 4: Internal Service APIs**: Microservice core, event queues, and internal platform management.

---

# 7. API Domain Taxonomy
The enterprise API domain taxonomy organizes all interfaces into distinct functional categories:
1. **Corporate APIs**: `api.idg.global/v1/corp/*`
2. **Product Domain APIs**: `api.aigate.iq/v1/*` (Product 001) & `api.[product].idg.global/v1/*`
3. **AI Gateway APIs**: `api.idg.global/v1/ai/*` (Gemini model orchestration, vector search, agents)
4. **Authentication & Identity APIs**: `auth.idg.global/v1/*`
5. **Platform & Shared Service APIs**: Billing, notifications, organization management
6. **Infrastructure & Observability APIs**: Telemetry, metrics, system health
7. **Data & Analytics APIs**: Reporting, data extraction, audit trail streaming
8. **Integration & Partner APIs**: Custom B2B payload converters and hooks
9. **Government APIs**: Sovereign identity, tax, and regulatory compliance
10. **Developer & Portal APIs**: Key management, usage tracking, sandbox access
11. **Internal Microservice APIs**: Service-mesh gRPC endpoints
12. **Future Product APIs**: Dynamically namespaced interfaces for Products 002-500+

---

# 8. API Classification
APIs are classified by visibility and impact:
- **Level 0 (Internal Only)**: Private VPC gRPC/REST APIs.
- **Level 1 (Platform Shared)**: Shared across internal product domains.
- **Level 2 (Partner Restricted)**: Authenticated mTLS B2B endpoints.
- **Level 3 (Public External)**: Open developer APIs with API Key / OAuth 2.0.
- **Level 4 (Sovereign Government)**: Air-gapped / HSM-secured endpoints.

---

# 9. Public API Architecture
Public APIs are exposed at `api.idg.global` and `api.aigate.iq`. They operate behind Cloudflare Enterprise WAF, enforce strict rate limits, mandate HTTPS/TLS 1.3, and require OAuth 2.0 Bearer tokens or API keys.

---

# 10. Private API Architecture
Private APIs facilitate service-to-service communication within isolated Google Cloud VPCs. They utilize gRPC over HTTP/2 with mutual TLS (mTLS) identity verification and zero external ingress route exposure.

---

# 11. Partner API Architecture
Partner APIs provide dedicated B2B integration channels featuring IP whitelisting, custom rate-limiting pools, client-credentials OAuth flows, and mTLS certificate pinning.

---

# 12. Internal Service APIs
Internal service APIs connect core backend microservices. They enforce strict payload size caps (max 10MB), low latency (<20ms p95), and automated service discovery via GCP Cloud Service Mesh.

---

# 13. Government Integration APIs
Government APIs comply with the Iraqi National Cybersecurity Framework, utilizing hardware security module (HSM) digital signatures, dedicated IP tunnels, and air-gapped sovereign Kubernetes clusters.

---

# 14. Platform APIs
Platform APIs handle multi-tenant tenant provisioning, central RBAC/ABAC role evaluation, global billing metering, and audit log ingestion across all IDG products.

---

# 15. Product API Architecture
All IDG products inherit the central API Gateway infrastructure, IAM models, and error envelopes while isolating business domain schemas inside product-specific microservices.

---

# 16. AI Gate Iraq API Architecture (Product 001)
- **Domain**: `api.aigate.iq`
- **Endpoints**:
  - `POST /v1/ai/completions`: Gemini 1.5 Pro/Flash inference proxy
  - `POST /v1/ai/embeddings`: Multi-modal vector embeddings
  - `POST /v1/agents/execute`: Autonomous agent workflow execution

---

# 17. Future Product API Inheritance Model
Future products (`Product 002` through `Product 500+`) inherit standardized API templates via Terraform project factories (`idg-infra-modules`), automatically receiving routing, authentication, rate-limiting, and observability bindings.

---

# 18. API Gateway Architecture
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

# 19. API Routing Model
Requests are routed at the edge by Cloudflare Workers based on hostnames (`api.aigate.iq` vs `api.idg.global`) and URI path prefixes (`/v1/auth`, `/v1/ai`, `/v1/corp`).

---

# 20. API Authentication Architecture
- **User/Client Access**: OAuth 2.0 Bearer JWTs (`Authorization: Bearer <jwt>`).
- **Developer Access**: Cryptographic API Keys (`X-IDG-API-Key: idg_live_sk_...`).
- **Machine Access**: OIDC service tokens issued via GCP IAM.

---

# 21. Authorization Architecture
Authorization is enforced using Fine-Grained Role-Based Access Control (RBAC) and Attribute-Based Access Control (ABAC) embedded in JWT scopes (e.g., `scope: ["ai:write", "org:admin"]`).

---

# 22. Identity Federation
IDG federates identity across Google Workspace, Keycloak OIDC, and sovereign government identity providers (e.g., Iraqi Digital ID) via SAML 2.0 and OpenID Connect.

---

# 23. OAuth 2.0 Architecture
Enforces RFC 6749 standard grant types:
- **Authorization Code with PKCE**: Web and mobile client applications.
- **Client Credentials**: Server-to-server and B2B partner integrations.

---

# 24. OpenID Connect Architecture
OIDC layers identity claims (`sub`, `email`, `org_id`, `locale`, `roles`) onto OAuth 2.0 access tokens, enabling single sign-on (SSO) across `idg.global` and `aigate.iq`.

---

# 25. API Key Governance
API keys are cryptographically generated (64-byte entropy), prefixed by environment (`idg_live_sk_` / `idg_test_sk_`), hashed using SHA-256 before database storage, and support instant revocation and expiry limits.

---

# 26. Service-to-Service Authentication
Internal microservices authenticate via Google OIDC identity tokens signed by GCP Service Accounts and verified by upstream ingress proxies.

---

# 27. mTLS Requirements
Mutual TLS (mTLS) with TLS 1.3 is mandatory for all Tier 2 (Partner), Tier 3 (Government), and Tier 4 (Internal) service communications.

---

# 28. Rate Limiting
Enforced at Cloudflare Edge and Cloud Run Gateway:
- **Public Unauthenticated**: 60 requests / minute
- **Authenticated Developer**: 1,000 requests / minute
- **Enterprise Partner**: 10,000 requests / minute

---

# 29. Quotas
Monthly request quotas are attached to tenant subscriptions and enforced by API Gateway metering middleware. Exceeding quotas returns HTTP `429 Too Many Requests`.

---

# 30. Throttling
Token Bucket algorithm prevents burst starvation. Burst capacities allow up to 2x sustained rate limit for sub-second bursts before queueing or dropping.

---

# 31. API Security Architecture
Implements Zero-Trust architecture, enforcing strict boundary validation, request sanitization, TLS 1.3 in transit, and AES-256 encryption at rest.

---

# 32. OWASP API Security
Comprehensive mitigation for OWASP API Security Top 10:
- **API1 (BOLA)**: Mandatory tenant-level scope validation in data layer.
- **API2 (Broken Auth)**: Short-lived 15-minute JWTs with refresh token rotation.
- **API3 (BOPLA)**: Schema filter removing unauthorized object properties.
- **API4 (Unrestricted Resource Consumption)**: Strict execution rate limits and payload size caps.

---

# 33. Input Validation
All incoming HTTP request headers, query parameters, and JSON body payloads are validated against strict OpenAPI JSON Schemas prior to executing controller logic.

---

# 34. Output Validation
Response payloads are filtered against response schemas to prevent sensitive data leaks (e.g., password hashes, internal database IDs).

---

# 35. Secrets Management
Secrets (database passwords, API signing keys) are managed in GCP Secret Manager / HashiCorp Vault and injected into container runtimes as memory-only environment variables.

---

# 36. Encryption
- **Transit**: Mandatory TLS 1.3 for all external traffic; mTLS for internal microservices.
- **Rest**: AES-256 CMEK (Customer-Managed Encryption Keys) across Cloud SQL, Firestore, and GCS buckets.

---

# 37. Data Classification
- **Public**: Unrestricted API documentation and public marketing endpoints.
- **Internal**: System performance metrics and anonymized telemetry.
- **Restricted / PII**: User personal data, financial tokens, government identifiers.

---

# 38. Personal Data Protection
PII fields are encrypted at the field level, masked in logs, and governed by strict access controls adhering to international data privacy frameworks.

---

# 39. Sovereign Data Requirements
In accordance with Iraqi data sovereignty laws, citizen and government transaction records must reside exclusively in designated sovereign cloud zones (`me-central1` or on-premise government datacenters).

---

# 40. API Versioning
Major versions MUST be explicitly declared in the URI path (e.g., `/v1/`, `/v2/`). Minor and patch updates MUST maintain strict backward compatibility.

---

# 41. Backward Compatibility
Breaking changes (removing fields, renaming endpoints, altering data types) are strictly prohibited within a major version. Any breaking change mandates a new major version release (`/v2/`).

---

# 42. Deprecation Policy
Deprecated API versions emit HTTP `Deprecation` and `Sunset` headers and remain fully supported for a mandatory 180-day migration window before retirement.

---

# 43. API Lifecycle
The six lifecycle phases are: Design & Spec → Mock & Review → Build & Test → Publish & Deploy → Active Operations → Deprecated/Retired.

---

# 44. API Design Standards
APIs must be stateless, resource-oriented, predictable, and fully compliant with RFC 7231 HTTP/1.1 and RFC 7540 HTTP/2 standards.

---

# 45. REST Standards
Utilizes standard HTTP verbs: `GET` (Read), `POST` (Create), `PUT` (Replace), `PATCH` (Partial Update), `DELETE` (Remove).

---

# 46. HTTP Standards
Strict adherence to HTTP standards: Content-Type negotiation, standard status codes, CORS headers, and conditional requests (`ETag`, `If-None-Match`).

---

# 47. JSON Standards
JSON payloads must use UTF-8 encoding, lowercase `snake_case` field keys, ISO 8601 timestamps (`2026-08-07T16:00:00Z`), and explicit `null` handling.

---

# 48. Error Handling
All APIs return a standardized trilingual error payload:
```json
{
  "error": {
    "code": "RESOURCE_NOT_FOUND",
    "message": "The requested resource could not be located.",
    "localized_message": {
      "en-US": "The requested resource could not be located.",
      "ar-IQ": "لم يتم العثور على المورد المطلوب.",
      "ckb-IQ": "سەرچاوەی داواکراو نەدۆزرایەوە."
    },
    "details": [
      {
        "field": "user_id",
        "issue": "User ID 'usr_999' does not exist."
      }
    ],
    "request_id": "req-8f9a2b1c-2026-0807",
    "correlation_id": "corr-7a6b5c4d-2026-0807",
    "timestamp": "2026-08-07T16:00:00Z",
    "documentation_url": "https://docs.idg.global/errors/RESOURCE_NOT_FOUND"
  }
}
```

---

# 49. HTTP Status Code Standards
- `200 OK`: Successful GET/PUT/PATCH
- `201 Created`: Successful POST creation
- `204 No Content`: Successful DELETE
- `400 Bad Request`: Schema validation failure
- `401 Unauthorized`: Invalid/missing authentication
- `403 Forbidden`: Insufficient permissions
- `404 Not Found`: Resource does not exist
- `409 Conflict`: Duplicate entry or state conflict
- `422 Unprocessable Entity`: Business rule failure
- `429 Too Many Requests`: Rate limit exceeded
- `500 Internal Error`: Unhandled server exception

---

# 50. Pagination
Cursor-based pagination is mandatory for dynamic lists: `?starting_after=obj_123&limit=25`. Response payload includes pagination metadata (`has_more`, `next_cursor`).

---

# 51. Filtering
Filtering uses explicit key-value query parameters: `?status=active&category=ai_gateway`.

---

# 52. Sorting
Sorting uses the `sort` query parameter with field names prefixed by `-` for descending order: `?sort=-created_at,name`.

---

# 53. Search
Full-text search queries use the `q` parameter: `?q=analytics+gateway`.

---

# 54. Idempotency
All POST and PATCH state-modifying requests MUST accept an `Idempotency-Key: <UUIDv4>` header. Re-sent requests within 24 hours return identical cached responses without re-executing logic.

---

# 55. Request Correlation
Every incoming request receives or inherits an `X-Correlation-ID` header, propagated across all downstream internal RPCs and microservices for distributed debugging.

---

# 56. Distributed Tracing
Enforces W3C Trace Context standards (`traceparent`, `tracestate`), capturing trace spans across Cloudflare Workers, Cloud Run containers, and database queries.

---

# 57. Observability
Observability incorporates structured logs, real-time metrics, distributed traces, and automated synthetic canary probes.

---

# 58. Logging
Application logs emit structured JSON to `stdout`, ingested by GCP Cloud Logging with trace context fields (`logging.googleapis.com/trace`).

---

# 59. Metrics
Services expose `/metrics` in Prometheus format, tracking the Four Golden Signals: Latency, Traffic, Errors, and Saturation.

---

# 60. Alerting
P1/P2 alerts trigger automated PagerDuty incidents and open Slack war rooms when error rates exceed 0.05% or p95 latency exceeds 250ms.

---

# 61. API Performance Standards
- **Read Latency (p95)**: < 100ms
- **Write Latency (p95)**: < 250ms
- **AI Gateway Proxy Overhead**: < 20ms

---

# 62. Availability Standards
Public APIs maintain a guaranteed SLA of 99.95% uptime (maximum 21.9 minutes of unplanned downtime per month).

---

# 63. Reliability Standards
Services implement automated health checks, graceful shutdown handling (`SIGTERM`), and auto-healing container instances.

---

# 64. Disaster Recovery
- **RPO (Recovery Point Objective)**: < 5 minutes
- **RTO (Recovery Time Objective)**: < 15 minutes

---

# 65. Failover Architecture
Cloudflare Health Probes automatically shift DNS traffic to secondary standby cloud zones (`me-central1`) if primary ingress fails health probes for >30 seconds.

---

# 66. Multi-Region API Architecture
Active-passive setup across primary region (`europe-west2`) and secondary region (`me-central1`) with cross-region database replication.

---

# 67. Cloudflare Integration
Cloudflare Enterprise provides Anycast DNS, Edge Workers, WAF rule execution, rate limiting, and SSL/TLS termination.

---

# 68. Google Cloud Integration
GCP acts as the primary compute and data host, utilizing Cloud Run, Serverless NEGs, VPC Service Controls, and Cloud SQL.

---

# 69. Firebase Integration
Firebase Auth handles end-user token issuance; Firestore provides real-time state sync for collaborative features.

---

# 70. Cloud SQL Integration
PostgreSQL 16 managed database accessed via Cloud SQL Auth Proxy with connection pooling (`pgbouncer`).

---

# 71. Cloud Run Integration
Microservice containers run on Cloud Run, scaling automatically from 2 minimum instances up to 1,000 maximum instances per region.

---

# 72. GitHub Actions Integration
GitHub Actions workflows run linting, schema validation, contract tests, security scans, and automated deployments on every commit.

---

# 73. DevSecOps API Pipeline
```
PR Created ──► [Spectral Lint] ──► [Typecheck] ──► [Pact Contract Test]
                                                      │
                                                      ▼
  [Canary Deploy] ◄── [Container Security] ◄── [CodeQL / Gitleaks]
```

---

# 74. API Testing Strategy
Testing encompasses unit tests (>85% coverage), contract tests, integration tests, security SAST/DAST scans, and load tests.

---

# 75. Contract Testing
Consumer-driven contract testing using Pact (`pact-js`). Pull requests fail automatically if a producer API breaks a consumer contract.

---

# 76. Integration Testing
Automated integration tests run against ephemeral container environments spawned during CI/CD execution.

---

# 77. Load Testing
k6 load scripts execute in staging environments, verifying system behavior under 2x expected peak traffic before major releases.

---

# 78. Security Testing
Static application security testing (CodeQL), container scanning (Trivy), dependency auditing (Snyk), and automated secret scanning (Gitleaks).

---

# 79. API Documentation Standards
All public and internal APIs must maintain interactive, OpenAPI-generated documentation rendering cleanly in both LTR and RTL layouts.

---

# 80. OpenAPI Specification
Canonical contracts stored in `.openapi/openapi.yaml` adhering strictly to OpenAPI 3.1.0 specifications.

---

# 81. Developer Portal
Hosted at `https://developer.idg.global`, providing an interactive API playground, documentation in English/Arabic/Kurdish, API key management, and status dashboards.

---

# 82. SDK Architecture
SDKs are automatically generated from OpenAPI specs using OpenAPI Generator, wrapped with IDG custom authorization and retry logic.

---

# 83. Client Libraries
Official client libraries provided for TypeScript/Node.js, Python, Go, and Flutter/Dart.

---

# 84. Webhooks
Webhooks dispatch asynchronous HTTP POST events for system changes (e.g., payment completed, AI workflow finished). Payloads include an `X-IDG-Signature` HMAC-SHA256 header.

---

# 85. Event-Driven Integration
Asynchronous event streaming uses CloudEvents 1.0 JSON payloads published to GCP Pub/Sub or Apache Kafka.

---

# 86. Message Architecture
Messages follow standard schemas published in the central Event Schema Registry (`idg-event-schemas`).

---

# 87. External Partner Integration
Dedicated partner integration adapters map custom partner data structures to standardized IDG domain payloads.

---

# 88. Government Interoperability
Supports XML/JSON data transforms, National ID validation adapters, and secure government protocol bridges.

---

# 89. API Data Exchange
Data exchanges enforce strict field-level encryption, access logging, and checksum verification.

---

# 90. API Governance
The IDG API Governance Board oversees API strategy, approves breaking changes, and enforces enterprise standards.

---

# 91. API Ownership
Every API endpoint has a designated engineering team owner specified in repository `CODEOWNERS` files.

---

# 92. API Stewardship
API Stewards ensure compliance with OpenAPI design guidelines, trilingual requirements, and security policies.

---

# 93. API Approval Process
New APIs and major version increments require formal review and digital sign-off from the API Governance Board prior to production deployment.

---

# 94. API Change Management
Changes follow standard GitFlow workflows: feature branches → PR review → automated quality gates → staging canary → production deployment.

---

# 95. API Repository Standards
Standardized repository naming convention:
- `idg-api-[domain]` (API Specifications & Gateways)
- `idg-sdk-[language]` (Client Software Development Kits)
- `idg-service-[name]` (Microservice Backend Source Code)
- `agi-[module]` (AI Gate Iraq Product Code)

Mandatory repository structure:
```
repository-root/
├── .github/ workflows/
├── .openapi/ openapi.yaml
├── docs/ DEPLOYMENT.md
├── src/
├── tests/
├── README.md
├── CHANGELOG.md
├── LICENSE
├── SECURITY.md
├── CONTRIBUTING.md
└── CODE_OF_CONDUCT.md
```

---

# 96. API Naming Standards
All URI paths, resource identifiers, query parameters, and JSON keys follow standardized casing conventions.

---

# 97. Endpoint Naming Standards
Endpoints use plural kebab-case nouns: `/v1/user-profiles`, `/v1/ai-agents`.

---

# 98. Resource Naming Standards
Sub-resources express hierarchical relationships: `/v1/organizations/{org_id}/members`.

---

# 99. Domain Naming Standards
Domain hostnames follow clear patterns:
- Corporate: `idg.global` / `api.idg.global`
- Product 001: `aigate.iq` / `api.aigate.iq`
- Future Products: `[product].idg.global` / `api.[product].idg.global`

---

# 100. API URI Standards
URI format: `https://[api_domain]/[version]/[resource-path]?[query_params]`

---

# 101. API Header Standards
Standardized HTTP headers:
- `Authorization`: Bearer `<jwt>`
- `X-IDG-API-Key`: `<api_key>`
- `Accept-Language`: `ar-IQ, en-US;q=0.9, ckb-IQ;q=0.8`
- `X-Correlation-ID`: `<uuidv4>`
- `Idempotency-Key`: `<uuidv4>`

---

# 102. API Schema Standards
Schemas defined using JSON Schema Draft 2020-12 embedded inside OpenAPI 3.1 contracts.

---

# 103. API Contract Standards
Contracts must be complete, specifying all possible HTTP status codes (2xx, 4xx, 5xx) and error payload models.

---

# 104. API Security Review
Automated SAST/DAST security reviews run on every build; mandatory annual penetration testing for public APIs.

---

# 105. API Architecture Review
Quarterly architecture reviews evaluate API performance, scalability, cost efficiency, and technical debt.

---

# 106. API Compliance
Strict adherence to ISO/IEC 27001:2022, SOC 2 Type II, and Iraqi National Cybersecurity Mandates.

---

# 107. API Auditability
Every API call emitting or modifying data logs an immutable audit event retaining client IP, user ID, timestamp, and action detail for 7 years.

---

# 108. API SLA Standards
- Service Level Agreement (SLA): 99.95% availability for production endpoints.

---

# 109. API SLO Standards
- Service Level Objective (SLO): 99.9% of requests processed with <100ms response time.

---

# 110. API Incident Management
P1 incidents require immediate response (<15 min), automated war room setup, and published post-mortems within 72 hours.

---

# 111. API Monitoring
Real-time monitoring via GCP Cloud Monitoring and Datadog APM tracking request volume, error percentage, and latency distribution.

---

# 112. API Cost Governance
API resource usage and egress bandwidth monitored per product tenant to optimize cloud infrastructure expenditure.

---

# 113. API Capacity Planning
Quarterly capacity evaluations ensure compute, database connection pools, and edge network limits scale ahead of traffic growth.

---

# 114. API Scalability
Horizontal scaling handled automatically by Cloud Run instance auto-scaling (scaling dynamically from 2 to 1,000 instances).

---

# 115. API Resilience
Resilience built through stateless architecture, retry mechanisms with exponential backoff, and graceful fallback defaults.

---

# 116. API Failure Handling
Uncaught exceptions trigger sanitized HTTP 500 responses without exposing internal stack traces or database error messages.

---

# 117. Retry Policies
Clients and internal callers execute retries only on idempotent operations (GET, PUT, DELETE) using exponential backoff with jitter.

---

# 118. Circuit Breakers
Circuit breakers open after 5 consecutive downstream failures, shedding load and returning HTTP 503 Service Unavailable instantly.

---

# 119. Timeout Standards
- Internal RPC Timeout: 2.0 seconds
- Public API Request Timeout: 15.0 seconds
- AI Gateway Long-Polling / Streaming Timeout: 120.0 seconds

---

# 120. Bulkhead Isolation
Microservices execute in isolated container resource pools, ensuring failure in one domain does not impact unrelated services.

---

# 121. API Caching
Edge and origin caching powered by Cloudflare CDN and Redis:
- Public static endpoints: `Cache-Control: public, max-age=300`
- Authenticated endpoints: `Cache-Control: no-store, private`

---

# 122. CDN Strategy
Cloudflare Enterprise CDN caches static API payloads, terminates SSL at the edge, and optimizes routing over Iraqi ISP networks.

---

# 123. Edge API Architecture
Cloudflare Workers execute lightweight edge logic (geo-routing, auth token verification, dynamic localization) before origin proxying.

---

# 124. Localization Architecture
APIs accept `Accept-Language` headers and emit localized error messages and metadata for `en-US`, `ar-IQ`, and `ckb-IQ`.

---

# 125. RTL API Documentation
Developer portal UI supports dynamic Right-to-Left (RTL) layout switching when viewing Arabic or Kurdish Sorani documentation.

---

# 126. API Documentation Language Policy
- Technical Canonical Language: English (`en-US`)
- User-Facing Documentation & Error Messages: Fully translated into Arabic (`ar-IQ`) and Kurdish Sorani (`ckb-IQ`).
- Technical Identifiers (URIs, JSON Keys, Headers, Status Codes): Strictly untranslated.

---

# 127. Developer Experience
Focus on zero friction: interactive sandbox, automated code generators, instant API key generation, and clear error guides.

---

# 128. Developer Onboarding
Step-by-step onboarding guide on `developer.idg.global` enabling developers to execute their first authenticated API request in under 5 minutes.

---

# 129. API Examples
OpenAPI contracts include complete request and response examples for all supported languages and status codes.

---

# 130. API Changelog
Automated `CHANGELOG.md` updates generated from Conventional Commits for every release.

---

# 131. API Deprecation Notices
Published on Developer Portal, sent via email to registered API key owners, and emitted in HTTP response headers.

---

# 132. API Security Incident Response
Dedicated SecOps protocol for revoking compromised keys, blocking malicious IP ranges, and deploying hotfix patches.

---

# 133. API Disaster Recovery Testing
Bi-annual active failover drills testing DNS switchover from primary region to disaster recovery zone (`me-central1`).

---

# 134. API Governance Metrics
Tracked metrics: OpenAPI contract compliance rate, test coverage percentage, average latency, and deprecation adoption timeline.

---

# 135. API Architecture Decision Records (ADRs)
Architectural decisions documented in `docs/adr/` (e.g., `ADR-0015-openapi-3.1-standardization.md`).

---

# 136. API Compliance Checklist
Pre-release automated check verifying:
- [x] OpenAPI 3.1 specification valid
- [x] Trilingual error model supported
- [x] OWASP security rules satisfied
- [x] Rate limits and OAuth scopes configured
- [x] Contract tests passing in CI/CD

---

# 137. API Readiness Checklist
Production readiness check verifying:
- [x] Health check endpoints `/api/health` returning 200 OK
- [x] APM metrics and log aggregation active
- [x] Secret Manager bindings confirmed
- [x] Multi-AZ container deployment active

---

# 138. Enterprise API Reference Architecture
Integrated architecture connecting Cloudflare Edge, GCP Cloud Run, Firebase Auth, Cloud SQL PostgreSQL, and Vertex AI.

---

# 139. Current Architecture
- **Infrastructure**: Single primary cloud region (`europe-west2`), GCP Cloud Run microservices, Cloudflare Enterprise CDN, Firebase Authentication, Cloud SQL PostgreSQL, GitHub Actions CI/CD.

---

# 140. Standard Architecture
- **Infrastructure**: Enterprise API Gateway, OpenAPI 3.1 contract enforcement, OAuth 2.0 / OIDC identity federation, automated Pact contract testing, Spectral linting, and centralized observability.

---

# 141. Future Architecture
- **Infrastructure**: Multi-region active-active cloud mesh across Middle East hubs, sovereign air-gapped Iraqi government integration bridges, automated edge AI proxying, and event-driven microservice mesh.

---

# 142. Enterprise API Roadmap
- **2026 Q3**: Complete OpenAPI 3.1 standardization and Developer Portal launch.
- **2027 Q1**: Multi-region active-active deployment across Middle East cloud zones.
- **2027 Q4**: Sovereign air-gapped government API integration network launch.

---

# 143. Document Control
- **Document Identifier**: IDG-SPEC-API-2026-V1
- **Document Title**: Enterprise API Architecture Specification
- **Owner**: Iraq Digital Gateway (IDG) Enterprise Architecture Board
- **Classification**: Enterprise Architecture Standard
- **Status**: Production Approved
- **Review Cycle**: Annual
- **Location**: `/technical/api-architecture.md`

| Version | Date | Author / Title | Description of Changes | Status |
| :--- | :--- | :--- | :--- | :--- |
| **v1.0.0** | 2026-08-07 | IDG Enterprise Architecture Board | Initial publication of 143-section Enterprise API Architecture Specification | Approved |

---
# End of Document
