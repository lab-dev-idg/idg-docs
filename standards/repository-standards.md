# ستانداردەکانی گەنجینەی کۆد و فایلەکان — Enterprise Repository Standards

## بەڵگەنامەی ناساندن — Document Identification
- **ناسێنەری بەڵگەنامە — Document Identifier**: IDG-STD-REPO-2026-V1
- **دامەزراوەی دایک — Parent Organization**: Iraq Digital Gateway (IDG)
- **پۆلێنبەندی — Classification**: Repository Architecture Standard
- **پێگەی بەڵگەنامە — Status**: Production Approved
- **پەیوەست بە — Related Specifications**: IDG-SPEC-REPO-2026-V1, IDG-STD-ENG-2026-V1

---

# 1. مەبەست و مەودا — Purpose & Scope

This standard establishes file organization, directory layout, naming rules, Git commit formatting, and hygiene protocols for the `idg-docs` repository and all IDG software codebases.

---

# 2. پێداویستییە سەرەکییەکانی گەنجینەی کۆد — Core Repository Requirements

1. **Deterministic Directory Layout**:
   - `corporate/`: Corporate governance, operating model, identity, strategy.
   - `brand/`: Visual identity, color system, typography, motion, logos.
   - `products/`: Product architecture, lifecycle, naming, Product 001 (`AI Gate Iraq`).
   - `website/`: Information architecture, navigation, content strategy.
   - `technical/`: API, data, deployment, and repository architecture specifications.
   - `seo/`: Search engine optimization blueprints.
   - `design-system/`: Design tokens and UI component specifications.
   - `governance/`: Master documentation and security governance.
   - `standards/`: Cross-cutting enterprise standards.
   - `decisions/`: Architecture Decision Records (ADRs) and decision lifecycle.
   - `roadmap/`: Strategic horizons and multi-year roadmap governance.
2. **File Naming Discipline**: All files and directories must use lower-case kebab-case (e.g. `api-architecture.md`). Spaces, uppercase characters, and special symbols are forbidden.
3. **Conventional Commits**: Commit messages must adhere to the Conventional Commits specification: `feat:`, `fix:`, `docs:`, `style:`, `refactor:`, `test:`, `chore:`.
4. **Clean Workspace Hygiene**: Never commit build artifacts (`dist/`), temporary logs, OS files (`.DS_Store`), or unencrypted environment secrets (`.env`).

---

# 3. حوکمڕانی و پاکوخاوێنی گەنجینە — Governance & Repository Integrity

- **Automated Branch Protection**: Direct pushes to `main` are disabled. All merges require PR review approvals and passing CI builds.
