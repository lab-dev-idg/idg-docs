# ستانداردەکانی ئەندازیاری و کۆدنووسین — Enterprise Engineering Standards

## بەڵگەنامەی ناساندن — Document Identification
- **ناسێنەری بەڵگەنامە — Document Identifier**: IDG-STD-ENG-2026-V1
- **دامەزراوەی دایک — Parent Organization**: Iraq Digital Gateway (IDG)
- **پۆلێنبەندی — Classification**: Engineering & Quality Standard
- **پێگەی بەڵگەنامە — Status**: Production Approved
- **پەیوەست بە — Related Specifications**: IDG-SPEC-REPO-2026-V1, IDG-STD-SEC-2026-V1

---

# 1. مەبەست و مەودا — Purpose & Scope

This standard governs programming languages, code organization, testing protocols, version control workflows, and CI/CD pipelines across all IDG engineering teams.

---

# 2. پێداویستییە ئەندازیارییەکان — Core Engineering Requirements

1. **TypeScript Supremacy**: All modern web applications, APIs, and Node.js microservices must be developed in strict TypeScript (`strict: true`) with zero unhandled `any` types.
2. **GitFlow & Trunk Branching Discipline**: Code changes enter `main` exclusively via Pull Requests with mandatory peer reviews and green CI build passes.
3. **Automated Test Coverage**:
   - Unit & Integration Test Coverage: >= 80% on core business logic.
   - End-to-End (E2E) Test Coverage on critical user journeys (Auth, Billing, Inference).
4. **Deterministic Builds**: Lockfiles (`package-lock.json`, `bun.lock`) must be committed and pinned to exact dependency versions.
5. **No Secret Ingestion**: Code must never contain hardcoded tokens, passwords, or private keys; all credentials load from environment secret vaults.

---

# 3. حوکمڕانی و کوالێتی کۆد — Governance & Enforcement

- **Enforcement Mechanism**: Pre-commit hooks and automated CI linting (`tsc --noEmit`, `eslint`).
- **Code Review Mandate**: Minimum of two approvals for core platform repositories.
