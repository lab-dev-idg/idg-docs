# ستانداردەکانی تەلارسازی سیستەم — Enterprise Architecture Standards

## بەڵگەنامەی ناساندن — Document Identification
- **ناسێنەری بەڵگەنامە — Document Identifier**: IDG-STD-ARCH-2026-V1
- **دامەزراوەی دایک — Parent Organization**: Iraq Digital Gateway (IDG)
- **پۆلێنبەندی — Classification**: Technical Architecture Standard
- **پێگەی بەڵگەنامە — Status**: Production Approved
- **پەیوەست بە — Related Specifications**: IDG-CORP-ARCH-2026-V1, IDG-SPEC-API-2026-V1

---

# 1. مەبەست و مەودا — Purpose & Scope

This standard establishes the mandatory architectural patterns, isolation boundaries, and reliability criteria for all distributed systems, software platforms, and microservices engineered within Iraq Digital Gateway.

---

# 2. پێداویستییە تەلارسازییەکان — Core Architecture Requirements

1. **Loosely Coupled Services**: Systems communicate exclusively via formal API contracts (REST, gRPC) or asynchronous event buses; direct cross-service database access is prohibited.
2. **High Availability by Design**: All core production services must eliminate single points of failure (SPOF) and support multi-zone / multi-region failover targeting >= 99.95% uptime.
3. **Stateless Compute**: Application compute nodes (e.g. Cloud Run containers) must remain stateless, delegating persistence to distributed managed databases and caching layers.
4. **Idempotency & Fault Tolerance**: Mutating distributed operations must incorporate idempotency tokens, exponential backoff with jitter, and circuit breaker patterns.
5. **Observability Instrumentation**: Every service must emit OpenTelemetry-compliant structured logs, distributed trace headers (`traceparent`), and Prometheus-compatible metrics.

---

# 3. حوکمڕانی و لێخۆشبوون — Governance & Architecture Review

- **Review Authority**: Enterprise Architecture Council (EAC).
- **Exceptions**: Any non-conforming architectural pattern must be documented in an accepted ADR (`decisions/`) with risk analysis and an approved remediation plan.
