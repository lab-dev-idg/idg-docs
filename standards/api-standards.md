# ستانداردەکانی ڕووکاری پرۆگرامسازی — Enterprise API Standards

## بەڵگەنامەی ناساندن — Document Identification
- **ناسێنەری بەڵگەنامە — Document Identifier**: IDG-STD-API-2026-V1
- **دامەزراوەی دایک — Parent Organization**: Iraq Digital Gateway (IDG)
- **پۆلێنبەندی — Classification**: Technical Integration Standard
- **پێگەی بەڵگەنامە — Status**: Production Approved
- **پەیوەست بە — Related Specifications**: IDG-SPEC-API-2026-V1, IDG-STD-ARCH-2026-V1

---

# 1. مەبەست و مەودا — Purpose & Scope

This standard establishes the design rules, protocol choices, versioning policies, security baselines, and documentation requirements for all public and internal APIs across IDG.

---

# 2. پێداویستییە سەرەکییەکانی API — Core API Requirements

1. **Protocol Standards**:
   - Synchronous Public & Web APIs: RESTful HTTP/2 or HTTP/3 with JSON payloads conforming to OpenAPI 3.1.
   - High-Throughput Inter-Service: gRPC / Protocol Buffers.
   - Real-time Streaming: Server-Sent Events (SSE) for LLM completions; WebSockets for bi-directional live audio/chat.
2. **Deterministic Versioning**: Major versions embedded in URI path (e.g. `/v1/`, `/v2/`). Minor/patch improvements must remain strictly non-breaking.
3. **Authentication & Authorization**: Bearer tokens via OAuth 2.0 / OIDC (JWT format) signed with asymmetric keys (RS256/ES256).
4. **Rate Limiting & Quotas**: All public and product APIs must enforce tiered token-bucket rate limiting returning standard headers (`RateLimit-Limit`, `RateLimit-Remaining`, `RateLimit-Reset`).
5. **Standardized Error Envelope**:
   ```json
   {
     "error": {
       "code": "INVALID_ARGUMENT",
       "message": "Human-readable description",
       "details": [],
       "trace_id": "req-12345-abcde",
       "timestamp": "2026-08-19T13:00:00Z"
     }
   }
   ```

---

# 3. حوکمڕانی و خولی ژیان — Governance & Deprecation Policy

- **Contract Review**: Every public API specification must receive approval from the Architecture Review Board prior to implementation.
- **Deprecation Grace Period**: A minimum 12-month deprecation period with sunset headers is required prior to decommissioning any major API version.
