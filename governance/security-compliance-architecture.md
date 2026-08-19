# Iraq Digital Gateway (IDG) Enterprise Security & Compliance Architecture Specification

**Document Identifier**: IDG-SPEC-SECURITY-2026-V1  
**Document Title**: Enterprise Security & Compliance Architecture Specification  
**Parent Corporate Entity**: Iraq Digital Gateway (IDG)  
**Flagship Product Reference**: AI Gate Iraq (Product 001)  
**Future Product Model**: Product 002 through Product 500+  
**Status**: ACTIVE  
**Classification**: Enterprise Architecture Standard  
**Version**: 1.0  
**Effective Date**: 2026-08-19  
**Review Cycle**: Annual / Continuous Triggered  
**Owner**: Iraq Digital Gateway (IDG) Enterprise Information Security & GRC Board  

---

## 1. Document Control & Metadata
- **Document ID**: `IDG-SPEC-SECURITY-2026-V1`
- **Security Classification**: Enterprise Architecture Standard (Internal / Public Architecture Baseline)
- **Distribution**: IDG Engineering, Security, DevOps, Product, Legal, and Third-Party Auditing Partners
- **Target Systems**: IDG Corporate Gateway (`idg.global`), AI Gate Iraq (`aigate.iq`), Product 002–500+, Cloudflare Edge Mesh, GCP Cloud Run, Firebase/Firestore, Cloud SQL PostgreSQL, GitHub Actions CI/CD.

---

## 2. Executive Summary
The Iraq Digital Gateway (IDG) Enterprise Security & Compliance Architecture Specification establishes the mandatory, defense-in-depth cybersecurity, zero trust, governance, risk, and compliance framework for all digital assets across the IDG enterprise. Rather than treating security as an afterthought or an isolated audit checklist, this specification embeds security and privacy by design directly into the system lifecycle. It mandates strict identity verification, hardware-backed authentication, continuous authorization (RBAC/ABAC), cryptographic isolation of data at rest and in transit, resilient DevSecOps pipelines, comprehensive AI/LLM boundary defenses, automated SIEM telemetry, structured incident response lifecycles (SEV-1 through SEV-4), and disaster recovery guarantees (RTO < 15 min, RPO < 5 min).

---

## 3. Purpose & Scope
### 3.1 Purpose
1. Enforce zero trust architecture across every user, service, workload, API, and database interaction.
2. Protect intellectual property, national digital infrastructure, sovereign data assets, and consumer privacy against sophisticated cyber threats.
3. Establish clear, auditable compliance alignment with ISO/IEC 27001, ISO/IEC 27701, NIST CSF, NIST SP 800-207 (Zero Trust), CIS Critical Security Controls, and OWASP Top 10 / LLM Top 10.
4. Define transparent incident handling, business continuity, disaster recovery, and risk treatment workflows.

### 3.2 Scope
This standard is binding across:
- **Corporate Core**: `idg.global`, internal administration portals, and shared identity providers.
- **Product 001 (AI Gate Iraq)**: `aigate.iq`, prompt routing fabrics, inference proxies, and developer APIs.
- **Product 002 through Product 500+**: All multi-tenant SaaS, fintech, enterprise data, and government digital services.
- **Infrastructure & Supply Chain**: Cloudflare Enterprise, GCP Cloud Run containers, Firebase Auth/Firestore, Cloud SQL PostgreSQL, GitHub Enterprise CI/CD, and third-party SaaS vendors.

---

## 4. Core Security Principles
```
┌─────────────────────────────────────────────────────────────────────────────┐
│                       IDG CORE SECURITY PRINCIPLES                          │
├──────────────────────┬──────────────────────┬───────────────────────────────┤
│ Security by Design   │ Zero Trust Mesh      │ Defense in Depth              │
│ Privacy by Design    │ Least Privilege      │ Continuous Verification       │
│ Secure by Default    │ Data Minimization    │ Fail-Closed Architecture      │
│ Explicit AuthZ       │ Comprehensive Audit  │ Sovereign Resilience & RTO/RPO│
└──────────────────────┴──────────────────────┴───────────────────────────────┘
```

1. **Zero Trust (Never Trust, Always Verify)**: No actor, device, network, or service inside or outside the network perimeter is inherently trusted.
2. **Least Privilege & Need-to-Know**: Access is strictly limited to the minimum set of permissions necessary to perform a specific business function for the shortest necessary duration.
3. **Defense in Depth**: Security controls are deployed across multiple distinct layers (Edge WAF, Network Microsegmentation, Application Gateways, IAM, Database Field Encryption).
4. **Assume Breach**: Systems are architected under the operational assumption that adversaries already possess initial foothold access.
5. **Continuous Verification & Telemetry**: Every transaction is authenticated, authorized, validated, and logged in real-time.
6. **Data Sovereignty & Privacy**: Data is classified, isolated, encrypted, and governed in strict adherence to data protection mandates.

---

## 5. Zero Trust Architecture (ZTA)

### 5.1 Architecture Topology
```
[ Untrusted Actor / Client ]
             │ (TLS 1.3 + mTLS / Device Posture Check)
             ▼
   [ Cloudflare Edge Mesh ] ──► (DDoS, WAF, Bot Mgmt, Rate Limiting)
             │ (Signed JWT / CF Access Token)
             ▼
    [ API Gateway Layer ]   ──► (Token Introspection, Schema Validation, PEP)
             │ (OIDC / OAuth 2.0 / Workload Identity)
             ▼
   [ Policy Decision Point ]──► (ABAC/RBAC Engine + Context Risk Scoring)
             │ (Permit / Deny)
             ▼
 [ Microservices (Cloud Run)]──► (mTLS Zero-Trust Internal VPC Service Mesh)
             │ (Encrypted IAM Authenticated SQL Proxy)
             ▼
[ Cloud SQL PostgreSQL / Firestore ] ──► (Field-Level Encryption + Audit Trail)
```

### 5.2 Identity Dimensions
- **Human Identity**: Enterprise staff, third-party contractors, and end-users with hardware-backed MFA (FIDO2/WebAuthn).
- **Service Identity**: Internal microservices authenticated via GCP Workload Identity and short-lived OAuth 2.0 bearer tokens.
- **Machine / Device Identity**: Managed corporate devices verified via MDM certificate posture checks.
- **Application Identity**: Public SPA clients and mobile native apps verified via PKCE OAuth 2.0 flows and signed attestation tokens.

---

## 6. Identity & Access Management (IAM)

### 6.1 Authentication Architecture
- **Single Sign-On (SSO)**: Centralized federated identity via OpenID Connect (OIDC) and SAML 2.0.
- **Multi-Factor Authentication (MFA)**: Mandatory hardware security keys (FIDO2 / YubiKey) or TOTP for all administrative access. SMS-based 2FA is prohibited for privileged accounts.
- **Password Policies**: Minimum 16 characters for administrative accounts, Argon2id / bcrypt hashing with high cost factors, breach database checking (HaveIBeenPwned API), and mandatory immediate revocation upon compromise.

### 6.2 Authorization Matrix (RBAC & ABAC)
IDG combines Role-Based Access Control (RBAC) with Attribute-Based Access Control (ABAC) to evaluate context-aware authorization:

| Role Category | Role Name | Default Scope | Contextual ABAC Attributes Evaluated |
| :--- | :--- | :--- | :--- |
| **Super Admin** | `IDG_SUPER_ADMIN` | Global Read/Write (Break-glass only) | Hardware MFA + Corporate IP + Dual Approver Required |
| **Security Engineer** | `IDG_SEC_OPS` | SIEM, Audit Logs, WAF Rules, Secrets Policy | Managed Device + VPN/ZPA + Active Shift Window |
| **Platform DevOps** | `IDG_DEVOPS_LEAD` | CI/CD, Container Deployments, Infrastructure | Workload IAM + Time-Bounded JIT Access (1hr) |
| **Product Developer** | `IDG_DEV` | Code Repositories, Staging Environments | Git Commit Signature + Branch Protection Rules |
| **API Consumer** | `IDG_API_CLIENT` | Scoped API Resources (`read:products`, `ai:infer`) | OAuth Scopes + Rate Limits + Tier Quotas |

### 6.3 Privileged Access Management (PAM) & Just-In-Time (JIT) Access
1. **Zero Standing Privileges**: Engineers possess zero standing administrative access to production databases or compute instances.
2. **Break-Glass Emergency Protocol**: Emergency access requires automated ticket generation, secondary executive approval (4-eyes principle), session recording, and automated permission revocation after 60 minutes.

---

## 7. Cryptographic Standards & Key Management

### 7.1 Encryption Standard Matrix
| State | Cryptographic Primitive | Minimum Key Length | Implementation Location |
| :--- | :--- | :--- | :--- |
| **Data in Transit** | TLS 1.3 (Fallback TLS 1.2 ECDHE-RSA/ECDSA) | 256-bit AES-GCM / ChaCha20-Poly1305 | Cloudflare Edge, Ingress Load Balancer, mTLS Mesh |
| **Data at Rest (Storage)** | AES-256-GCM / XTS | 256-bit | GCP Cloud Storage, Firestore, Cloud SQL Disks |
| **Field-Level Sensitive** | Envelope Encryption (AES-GCM-256) | 256-bit DEK + 256-bit KEK | Application Layer via Google Cloud KMS / Vault |
| **Password Hashing** | Argon2id | 64MB memory, 3 iterations, 4 parallelism | Authentication Service Identity Store |
| **Digital Signatures** | Ed25519 / ECDSA (P-256) | 256-bit | Git Commit Signatures, JWT Tokens, Webhooks |

### 7.2 Key Management Service (KMS) & Lifecycle
- **Key Rotation**: Master Key Encryption Keys (KEKs) automatically rotate every 90 days. Data Encryption Keys (DEKs) are generated per-record or per-session.
- **Hardware Security Modules (HSM)**: Cloud KMS HSM (FIPS 140-2 Level 3 certified) securely isolates all root cryptographic materials.
- **Separation of Duties**: Cryptographic key administrators cannot access database records, and database administrators cannot access unwrap keys.

---

## 8. Application & API Security

### 8.1 Web Application Security Standard
- **Content Security Policy (CSP)**: Strict nonces, `default-src 'self'`, `script-src 'self' 'nonce-...'`, `frame-ancestors 'none'`, `object-src 'none'`.
- **HTTP Security Headers**:
  - `Strict-Transport-Security: max-age=63072000; includeSubDomains; preload`
  - `X-Content-Type-Options: nosniff`
  - `X-Frame-Options: DENY`
  - `Referrer-Policy: strict-origin-when-cross-origin`
  - `Permissions-Policy: camera=(), microphone=(), geolocation=()`
- **Cross-Site Scripting (XSS) & Injection Defense**: Comprehensive React virtual DOM escaping, DOMPurify sanitization for markdown rendering, parameterized SQL statements via ORM/Prepared Queries.
- **Cross-Site Request Forgery (CSRF)**: SameSite=Strict cookies, anti-CSRF double submit tokens on state-changing API endpoints.

### 8.2 API Security Architecture (Extending PATCH 013)
- **Token Security**: Short-lived JWTs (15-minute expiration) with RS256/EdDSA signatures, validated against remote JWKS.
- **API Key Security**: High-entropy keys (64-byte random hex prefixed by `idg_live_` or `idg_test_`), stored exclusively as SHA-256 hashes.
- **Rate Limiting & Abuse Prevention**: Token bucket algorithms enforcing per-IP (100 req/min) and per-organization tier quotas with HTTP 429 Retry-After responses.
- **Webhook Security**: Webhook payloads signed with HMAC-SHA256 headers (`X-IDG-Signature-256`), including timestamp headers to defeat replay attacks.

---

## 9. Artificial Intelligence & LLM Security Architecture (AI Gate Iraq)

```
[ Incoming User Prompt ]
           │
           ▼
[ 1. Input Threat Filter ] ──► (Detects Jailbreaks, Prompt Injections, Unicode Obfuscation)
           │
           ▼
[ 2. PII / DLP Sanitizer ] ──► (Redacts National IDs, Credit Cards, Credentials, Secrets)
           │
           ▼
[ 3. Model Inference Fabric]──► (Isolated Tenant Context, Strict System Prompt Anchor)
           │
           ▼
[ 4. Tool Execution Broker ]──► (Least-Privilege Sandboxed Capabilities, No Arbitrary Shell)
           │
           ▼
[ 5. Output Guardrail Gate ]──► (Scans Hallucinations, Toxicity, Sensitive Data Leakage)
           │
           ▼
[ Verified Safe Response ]
```

### 9.1 Prompt Injection & Jailbreak Defenses
1. **Multi-Stage Prompt Firewalls**: Dedicated lightweight classifier models evaluate prompt intents for delimiter hijacking, character encoding bypasses, and recursive goal hijacking before invoking primary inference engines.
2. **System Prompt Isolation**: System instructions are cryptographically demarcated using immutable boundary tokens and structural system-level roles.
3. **Data Loss Prevention (DLP)**: Automated regex and NER pipelines redact PII (personally identifiable information), banking credentials, and private infrastructure keys prior to external LLM dispatch.

### 9.2 Tool Execution Sandboxing & Excessive Agency Prevention
- **Human-in-the-Loop (HITL)**: High-impact actions (financial transactions, data deletions, configuration updates) require explicit cryptographic human user confirmation.
- **Sandboxed Execution**: Agent code execution operates inside short-lived, gVisor-isolated containers with zero access to private VPC networks.

---

## 10. DevSecOps & Supply Chain Security

### 10.1 CI/CD Security Pipeline
```
[ Developer Commit ] ──► (Signed with GPG / SSH Key)
           │
           ▼
[ GitHub Actions PR Gate ]
   ├── Secret Scanning (TruffleHog / Gitleaks) ──► Fails on exposed tokens
   ├── Static Analysis (SAST - Semgrep / SonarQube)
   ├── Dependency Analysis (SCA - Snyk / Dependabot / npm audit)
   ├── Container Vulnerability Scan (Trivy)
   └── Automated Typecheck & Linter (0 warnings tolerated)
           │
           ▼
[ Signed Container Build ] ──► (Cosign / Sigstore Attestation & SBOM generation)
           │
           ▼
[ Deployment Gate ] ──► (Approved by CODEOWNERS + JIT DevOps Lead)
```

### 10.2 Secrets Management Policy
- **Zero Secrets in Git**: Enforced via pre-commit hooks and server-side push protection.
- **Dynamic Secret Injection**: Production workloads consume runtime secrets exclusively via Google Cloud Secret Manager injected as memory-backed environment variables or ephemeral files.
- **Compromise Procedure**: Immediate automatic key revocation, incident ticket generation (SEV-2), and automated log audit for token exploitation windows.

---

## 11. Security Telemetry, SIEM & Incident Response

### 11.1 Standardized Security Log Envelope
All system components emit JSON structured security events containing the mandatory canonical schema:
```json
{
  "timestamp": "2026-08-19T08:39:56.000Z",
  "request_id": "req_01J5K98X7YZA12345678",
  "correlation_id": "corr_9876543210ABCDEF",
  "actor": {
    "id": "usr_991823",
    "type": "human",
    "role": "IDG_DEV",
    "mfa_verified": true
  },
  "source": {
    "ip": "198.51.100.42",
    "geo_country": "IQ",
    "user_agent": "Mozilla/5.0 ...",
    "device_trust_level": "managed"
  },
  "action": "api.products.create",
  "resource": "res_prod_001",
  "result": "ALLOW",
  "severity": "INFO",
  "risk_score": 0.12
}
```

### 11.2 Incident Response Classification & SLA Matrix
| Severity Level | Definition | Response SLA | Mitigation SLA | Executive Notification |
| :--- | :--- | :--- | :--- | :--- |
| **SEV-1 (Critical)** | Active data breach, full service outage, zero-day exploitation of production infrastructure | < 15 minutes | < 2 hours | Immediate (CEO, Board, CISO) |
| **SEV-2 (High)** | Compromised privileged credential, critical vulnerability without known exploit, partial outage | < 30 minutes | < 6 hours | Within 2 hours |
| **SEV-3 (Medium)** | Non-critical component vulnerability, suspicious anomalous authentication spikes | < 2 hours | < 24 hours | Daily Briefing |
| **SEV-4 (Low)** | Minor security defect, informational scanning anomaly, policy clarification | < 8 hours | < 7 days | Weekly GRC Report |

---

## 12. Business Continuity, Disaster Recovery & RTO/RPO
- **Recovery Time Objective (RTO)**: Maximum allowable downtime is **< 15 minutes** for Tier-1 services (API Gateway, Core AI inference proxy).
- **Recovery Point Objective (RPO)**: Maximum allowable data loss is **< 5 minutes** supported by real-time WAL replication in Cloud SQL and point-in-time recovery (PITR).
- **Backup Immutability**: Daily database snapshots are replicated across multi-region encrypted cloud buckets with 30-day WORM (Write Once, Read Many) retention locks.
- **Failover Drills**: Automated disaster recovery simulations are executed quarterly to validate cross-region warm standby switchovers.

---

## 13. Enterprise Risk Register & Treatment Framework
Every enterprise vulnerability and architectural risk is cataloged in the IDG Risk Register:
```
Risk Assessment: Risk Score = Likelihood (1-5) x Impact (1-5)
Treatments: AVOID | MITIGATE | TRANSFER | ACCEPT
```

| Risk ID | Threat Scenario | Likelihood | Impact | Score | Treatment & Compensating Controls | Owner |
| :--- | :--- | :---: | :---: | :---: | :--- | :--- |
| **RSK-001** | Distributed Denial of Service (DDoS) targeting AI Gate | 4 | 4 | 16 | MITIGATE: Cloudflare Magic Transit, Layer 7 WAF rate-limiting, edge caching | Network Sec Lead |
| **RSK-002** | Supply chain vulnerability in npm dependencies | 4 | 4 | 16 | MITIGATE: Automated SCA lockfile audits, Dependabot, container hash pinning | AppSec Lead |
| **RSK-003** | Adversarial prompt injection exposing private system context | 3 | 4 | 12 | MITIGATE: Multi-tier prompt sanitization, isolated execution, PII redactor | AI Sec Lead |
| **RSK-004** | Unauthorized exfiltration of Cloud SQL database records | 2 | 5 | 10 | MITIGATE: Private VPC Service Controls, IAM DB Auth, Field-Level Encryption | Data Sec Lead |

---

## 14. Compliance Alignment & Governance RACI

### 14.1 Framework Mapping Overview
- **ISO/IEC 27001:2022**: Information Security Management System (ISMS) policies, Annex A controls 5.1 through 8.34.
- **NIST SP 800-207**: Zero Trust Architecture deployment across enterprise data pipelines.
- **OWASP ASVS v4.0**: Application Security Verification Standard Level 2 compliance for all production web APIs.
- **CIS Critical Security Controls v8**: Baseline technical hardening across operating systems, containers, and network perimeters.

### 14.2 Enterprise RACI Governance Matrix
| Activity / Security Domain | Board / Exec | CISO / Sec Lead | Engineering | DevOps | Product | Legal / GRC |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: |
| **Enterprise Security Strategy** | A | R | C | C | C | C |
| **Architecture Threat Modeling** | I | A | R | R | C | I |
| **CI/CD Security Gate Enforcement** | I | A | C | R | I | I |
| **Incident Response (SEV-1/2)** | I | A | R | R | C | C |
| **Penetration Testing & Remediation**| I | A | R | R | I | C |
| **Compliance Audits & Evidence** | I | A | C | C | I | R |

*R = Responsible, A = Accountable, C = Consulted, I = Informed*

---

## 15. Security Maturity Model (Levels 0–5)
1. **Level 0 (Initial)**: Ad-hoc, unstructured security practices with manual intervention.
2. **Level 1 (Basic)**: Standard perimeter firewalls, password policies, and reactive vulnerability patching.
3. **Level 2 (Managed)**: Structured RBAC, automated CI/CD secret scanning, centralized logging, and basic MFA.
4. **Level 3 (Defined - Current Baseline)**: Zero standing privileges, comprehensive ZTA, automated SAST/SCA gates, ISO 27001/NIST alignment, trilingual security models.
5. **Level 4 (Measured - Target 2026)**: Continuous automated red-teaming, real-time threat intelligence feeds, automated SIEM playbooks, sub-second anomaly mitigation.
6. **Level 5 (Optimized)**: Autonomous self-healing infrastructure, verifiable confidential computing hardware enclaves, AI-driven real-time threat neutralization.

---

## 16. Security Key Performance Indicators (KPIs & KRIs)
- **Mean Time to Detect (MTTD)**: < 5 minutes for SEV-1/2 security anomalies.
- **Mean Time to Respond (MTTR)**: < 15 minutes from alert generation to automated or manual containment.
- **Critical Vulnerability Remediation Window**: 100% of Critical CVEs resolved within 48 hours.
- **MFA Adoption Coverage**: 100% of internal staff and privileged service accounts.
- **Secret Zero Leakage Rate**: 0 production secrets committed to source repositories.
- **Backup Verification Success Rate**: 100% daily automated test restoration success.

---

## 17. Document Control & Revision History

| Version | Date | Author / Title | Description of Changes | Status |
| :--- | :--- | :--- | :--- | :--- |
| **v1.0** | 2026-08-19 | IDG Enterprise Information Security & GRC Board | Initial publication of Enterprise Security & Compliance Architecture Specification (PATCH 016) | Approved |

- **Document Identifier**: IDG-SPEC-SECURITY-2026-V1
- **Document Title**: Enterprise Security & Compliance Architecture Specification
- **Owner**: Iraq Digital Gateway (IDG) Enterprise Information Security & GRC Board
- **Classification**: Enterprise Architecture Standard
- **Status**: ACTIVE
- **Location**: `/governance/security-compliance-architecture.md`

---
# End of Document
