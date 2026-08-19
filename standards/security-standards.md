# ستانداردەکانی ئاسایش و پاراستنی زانیاری — Enterprise Security Standards

## بەڵگەنامەی ناساندن — Document Identification
- **ناسێنەری بەڵگەنامە — Document Identifier**: IDG-STD-SEC-2026-V1
- **دامەزراوەی دایک — Parent Organization**: Iraq Digital Gateway (IDG)
- **پۆلێنبەندی — Classification**: Information Security Standard
- **پێگەی بەڵگەنامە — Status**: Production Approved
- **پەیوەست بە — Related Specifications**: IDG-SPEC-SECURITY-2026-V1, IDG-STD-DATA-2026-V1

---

# 1. مەبەست و مەودا — Purpose & Scope

This standard defines the mandatory Zero Trust security principles, cryptographic baselines, identity verification protocols, and threat defense measures across all IDG digital systems.

---

# 2. پێداویستییە سەرەکییەکانی ئاسایش — Core Security Requirements

1. **Zero Trust Architecture (ZTA)**: Never trust, always verify. Every request must be authenticated, authorized, and cryptographically verified regardless of network location.
2. **Encryption in Transit**: TLS 1.3 enforced on all external endpoints; internal service-to-service communication secured via mutual TLS (mTLS).
3. **Encryption at Rest**: All databases, file storage buckets, and backup volumes encrypted using AES-256-GCM with keys managed in Cloud HSM.
4. **Identity & Access Management (IAM)**: Principle of Least Privilege (PoLP) enforced across all service accounts and human operators; multi-factor authentication (MFA) mandatory.
5. **Vulnerability & Threat Management**: Continuous automated SAST, DAST, and software composition analysis (SCA) blocking builds with critical Common Vulnerabilities and Exposures (CVEs).

---

# 3. چوارچێوەکانی ئاماژەپێکراو — Architectural Reference Frameworks

IDG architectures align with international security best practices as engineering reference benchmarks (e.g. ISO/IEC 27001 control principles, OWASP Top 10, and Zero Trust reference architectures) to ensure world-class defensive rigor without claiming unverified third-party certifications.

---

# 4. حوکمڕانی و لێپێچینەوە — Governance & Security Oversight

- **Authority**: Security & Sovereignty Board.
- **Audit Cadence**: Continuous automated security monitoring with quarterly architectural reviews.
