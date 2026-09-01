import { useMemo, useState } from 'react';
import { Badge, Button, Card, Input, Modal } from '../../components/common';
import { gitBasicsData } from './gitBasicsData';
import { GitBasicsCard } from './GitBasicsCard';
import { AnalogyBox, CodeSnippetBox } from './TopicExampleCards';

const workflow = ['Issue', 'Feature branch', 'Code changes', 'Commit', 'Push', 'Pull request', 'Review', 'Approval', 'Merge', 'main'];
const pipeline = ['Developer', 'GitHub', 'CI', 'Lint', 'Test', 'Build', 'CD', 'Deploy', 'Production'];
const nav = [
  ['overview', 'Overview'],
  ['basics', 'Git Basics'],
  ['workflow', 'Branching'],
  ['pull-requests', 'Pull Requests'],
  ['history', 'Git History'],
  ['rebase', 'Rebase'],
  ['revert', 'Revert'],
  ['protection', 'Protection'],
  ['security', 'Secrets'],
  ['pipeline', 'CI/CD Preview']
];

const categoryTabs = [
  { id: 'all', label: 'All 9 Concepts' },
  { id: 'Local', label: 'Local Workflow' },
  { id: 'Remote', label: 'Remote / GitHub' },
  { id: 'Foundation', label: 'Foundation' },
  { id: 'Sync', label: 'Sync & Isolation' }
];

function Heading({ id, eyebrow, title, copy }) {
  return (
    <div id={id} className="section-heading">
      <span>{eyebrow}</span>
      <h2>{title}</h2>
      <p>{copy}</p>
    </div>
  );
}

function Flow({ items }) {
  return (
    <div className="flow">
      {items.map((item, i) => (
        <div className="flow-item" key={item}>
          <b>{i + 1}</b>
          {item}
          {i < items.length - 1 && <i>→</i>}
        </div>
      ))}
    </div>
  );
}

export function LearningDashboard() {
  const [active, setActive] = useState('overview');
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [modal, setModal] = useState(false);

  const filteredBasics = useMemo(() => {
    return gitBasicsData.filter(item => {
      const matchesSearch =
        search === '' ||
        item.title.toLowerCase().includes(search.toLowerCase()) ||
        item.subtitle.toLowerCase().includes(search.toLowerCase()) ||
        item.summary.toLowerCase().includes(search.toLowerCase()) ||
        item.dailyLife.title.toLowerCase().includes(search.toLowerCase()) ||
        item.dailyLife.analogy.toLowerCase().includes(search.toLowerCase()) ||
        item.codeExample.command.toLowerCase().includes(search.toLowerCase()) ||
        item.tags.some(t => t.toLowerCase().includes(search.toLowerCase()));

      const matchesCategory =
        selectedCategory === 'all' ||
        (selectedCategory === 'Local' && item.scope.toLowerCase().includes('local')) ||
        (selectedCategory === 'Remote' && item.scope.toLowerCase().includes('remote')) ||
        (selectedCategory === 'Foundation' && (item.category === 'Foundation' || item.category === 'Setup' || item.category === 'Workspace')) ||
        (selectedCategory === 'Sync' && (item.category === 'Sync' || item.category === 'Isolation' || item.category === 'Inspection'));

      return matchesSearch && matchesCategory;
    });
  }, [search, selectedCategory]);

  const go = id => {
    setActive(id);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="portal">
      <aside className="sidebar">
        <div className="brand">
          <b>⌘</b>
          <div>
            <strong>DevFlow</strong>
            <small>LEARNING PORTAL</small>
          </div>
        </div>
        <div className="workspace">
          ◈{' '}
          <span>
            <b>GitHub Practice</b>
            <small>Built by Obaid Saleem</small>
          </span>
          ⌄
        </div>
        <nav>
          {nav.map(([id, label]) => (
            <button
              onClick={() => go(id)}
              className={active === id ? 'active' : ''}
              key={id}
            >
              <i>◦</i>
              {label}
            </button>
          ))}
        </nav>
        <div className="progress">
          Learning path <b>8 / 8</b>
          <span />
        </div>
      </aside>

      <main>
        <header>
          <div className="header-breadcrumbs">
            <span>Workspaces / GitHub Practice</span>
            <span className="header-author-tag">
              <span className="author-sparkle">✦</span> Author: <strong>Obaid Saleem</strong>
            </span>
          </div>
          <div className="header-status-area">
            <em>● All systems operational</em>
            <div className="author-avatar-chip" title="Project Author: Obaid Saleem">
              <b className="avatar">OS</b>
              <span className="avatar-name">Obaid Saleem</span>
            </div>
          </div>
        </header>

        <div className="content">
          {/* Overview Hero */}
          <section id="overview" className="hero">
            <div>
              <div className="hero-tags-row">
                <Badge variant="success">● Learning environment ready</Badge>
                <span className="hero-creator-badge">
                  <span className="sparkle-icon">⚡</span> Built by <b>Obaid Saleem</b>
                </span>
              </div>
              <h1>
                GitHub &amp; CI/CD
                <br />
                <mark>Learning Dashboard</mark>
              </h1>
              <p>Your practical map for shipping code confidently—from your first change to production.</p>
              <Button onClick={() => go('workflow')}>Explore workflow →</Button>{' '}
              <Button variant="outline" onClick={() => setModal(true)}>
                Open command guide
              </Button>
            </div>
            <div className="orb">
              ⌘<small>main</small>
              <i>✓</i>
              <i>#</i>
              <i>↗</i>
            </div>
          </section>


          {/* Quick Stats */}
          <div className="stats">
            <Card hoverable>
              <b>⌘</b>
              <div>
                <small>Core concepts</small>
                <strong>9</strong>
                <p>Git essentials with real examples</p>
              </div>
            </Card>
            <Card hoverable>
              <b>⇄</b>
              <div>
                <small>Delivery process</small>
                <strong>10</strong>
                <p>Workflow stages</p>
              </div>
            </Card>
            <Card hoverable>
              <b>✓</b>
              <div>
                <small>Safe releases</small>
                <strong>100%</strong>
                <p>PR-first approach</p>
              </div>
            </Card>
          </div>

          {/* Section 01: Git Basics (9 Enhanced Cards) */}
          <section>
            <Heading
              id="basics"
              eyebrow="01 / FOUNDATION"
              title="Git basics & Core Concepts"
              copy="The 9 fundamental building blocks of Git. Every topic includes a memorable daily life analogy plus a practical command and workflow example."
            />

            {/* Filter and Category Controls */}
            <div className="basics-filter-bar">
              <div className="category-pills">
                {categoryTabs.map(tab => (
                  <button
                    key={tab.id}
                    type="button"
                    className={`category-pill ${selectedCategory === tab.id ? 'active' : ''}`}
                    onClick={() => setSelectedCategory(tab.id)}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
              <div className="filter">
                <Input
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                  placeholder="Filter by concept, analogy, or command..."
                />
                <small className="filter-count">
                  {filteredBasics.length} of {gitBasicsData.length} concepts
                </small>
              </div>
            </div>

            {/* 9 Enhanced Concepts Cards Grid */}
            <div className="concepts-grid">
              {filteredBasics.length > 0 ? (
                filteredBasics.map(concept => (
                  <GitBasicsCard key={concept.id} concept={concept} />
                ))
              ) : (
                <div className="no-results-box">
                  <span className="no-results-icon">🔍</span>
                  <h4>No concepts match "{search}"</h4>
                  <p>Try searching for a different keyword or reset the filter.</p>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => {
                      setSearch('');
                      setSelectedCategory('all');
                    }}
                  >
                    Reset filters
                  </Button>
                </div>
              )}
            </div>
          </section>

          {/* Section 02: Branching workflow */}
          <section>
            <Heading
              id="workflow"
              eyebrow="02 / COLLABORATION"
              title="Branching workflow"
              copy="A healthy path from an idea to main—built for collaboration, automated verification, and peer review."
            />
            <Card className="wide">
              <div className="topic-card-header">
                <Badge variant="default">Recommended path</Badge>
                <h3>From issue to a safe merge</h3>
              </div>
              <Flow items={workflow} />
              
              <div className="topic-examples-grid">
                <AnalogyBox
                  icon="🚧"
                  title="Parallel Highway Detour Lane"
                  text="Imagine repairing a busy multi-lane highway. Rather than closing the main road and causing traffic jams, construction crews build a temporary side lane (branch). Once the new bridge is inspected and paved smoothly, traffic is safely guided back onto the main highway."
                />
                <CodeSnippetBox
                  title="Feature Branch Lifecycle Commands"
                  command="git checkout -b feature/user-profile && git push -u origin feature/user-profile"
                  description="Create an isolated feature branch, make commits, and publish to GitHub."
                  snippet={`$ git checkout -b feature/user-profile\n# Switched to a new branch 'feature/user-profile'\n$ git add src/Profile.jsx\n$ git commit -m "feat: add user avatar upload"\n$ git push -u origin feature/user-profile`}
                />
              </div>

              <p className="note">
                ✦ <b>Why branch?</b> Feature branches isolate work so <code>main</code> stays stable, reviewable, and deployable at all times.
              </p>
            </Card>
          </section>

          {/* Section 03: Pull requests */}
          <section>
            <Heading
              id="pull-requests"
              eyebrow="03 / QUALITY GATE"
              title="Pull requests"
              copy="The shared space where proposed changes undergo code review, CI verification, and team discussion before becoming production-ready."
            />
            
            <Card className="wide pr-main-card">
              <div className="branches">
                <span>
                  BASE <b>● main</b>
                </span>{' '}
                ← compare branch changes →{' '}
                <span>
                  COMPARE <b>● feature/profile</b>
                </span>
              </div>
              <h3>
                ⇄ Add profile preferences <Badge variant="success">Open</Badge>
              </h3>
              <p>#24 opened by you · 3 commits · all automated CI checks passing</p>
              <div className="review">
                JR <span>Review changes, discuss architectural decisions, then approve and merge.</span>
                <Badge variant="success">✓ Approved</Badge>
              </div>
            </Card>

            <div className="pr-glossary-card">
              <div className="glossary-header">
                <b>PR Essential Glossary</b>
                <small>4 key concepts to know</small>
              </div>
              <div className="glossary-grid">
                {[
                  ['Base branch', 'The target branch where changes will be integrated (e.g. main).'],
                  ['Compare branch', 'The topic branch containing your proposed commits (e.g. feature/profile).'],
                  ['Code review', 'Peer feedback, suggestions, and QA verification before merging code.'],
                  ['Merge conflicts', 'Overlapping edits on identical lines that must be reconciled before merge.']
                ].map(x => (
                  <div className="glossary-item" key={x[0]}>
                    <strong>{x[0]}</strong>
                    <p>{x[1]}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="topic-examples-grid" style={{ marginTop: '20px' }}>
              <AnalogyBox
                icon="📑"
                title="Editorial Peer Review & Proofreading"
                text="Like submitting an article draft to your magazine chief editor. The editor reviews wording, marks sticky note feedback, requests minor revisions, and only hits the 'Publish Print' button when quality standards are 100% met."
              />
              <CodeSnippetBox
                title="Open & Review PR via GitHub CLI"
                command="gh pr create --base main --head feature/profile --title 'feat: user preferences'"
                description="Creates an official Pull Request directly from terminal and requests code reviews."
                snippet={`$ gh pr create --base main --title "feat: add profile preferences" --body "Resolves #24"\n# https://github.com/my-org/project/pull/24\n$ gh pr review 24 --approve --body "Looks great! Ready to merge."`}
              />
            </div>
          </section>

          {/* Section 04: Git history */}
          <section>
            <Heading
              id="history"
              eyebrow="04 / TRACEABILITY"
              title="Git history"
              copy="Every commit tells the story of how the codebase arrived here, enabling audits, bisects, and full traceability."
            />
            <Card className="wide history">
              <div>
                <Badge>git log</Badge>
                <b>origin/main ↗</b>
              </div>
              {[
                ['a1c34bf', 'Merge pull request #24 from feature/profile', 'HEAD → main'],
                ['8d7e92a', 'feat: add profile preference form', ''],
                ['c4428f1', 'chore: configure lint rules', '']
              ].map(x => (
                <p key={x[0]}>
                  <i>●</i>
                  <code>{x[0]}</code>
                  <strong>{x[1]}</strong>
                  {x[2] && <Badge variant="success">{x[2]}</Badge>}
                </p>
              ))}
            </Card>

            <div className="topic-examples-grid" style={{ marginTop: '20px' }}>
              <AnalogyBox
                icon="📜"
                title="Bank Passbook & Aviation Black Box"
                text="Like an immutable bank account passbook or airplane black box recorder. Every debit, credit, timestamp, and signature is permanently documented. You cannot alter past records without leaving a clear trace."
              />
              <CodeSnippetBox
                title="Explore Commit History Graph"
                command="git log --oneline --graph --decorate --all -n 5"
                description="Displays a visual graph of branches, merges, tags, and commits in terminal."
                snippet={`$ git log --oneline --graph --decorate -n 3\n# * a1c34bf (HEAD -> main, origin/main) Merge pull request #24\n# |\\ \n# | * 8d7e92a feat: add profile preference form\n# |/  \n# * c4428f1 chore: configure lint rules`}
              />
            </div>
          </section>

          {/* Section 05: Rebase (Separate Full Row) */}
          <section>
            <Heading
              id="rebase"
              eyebrow="05 / CLEAN HISTORY"
              title="Rebase"
              copy="Replay feature work on top of the latest main branch before opening a PR for a clean, linear history."
            />
            <Card className="wide diagram">
              <div className="topic-card-header">
                <Badge variant="default">Linear History</Badge>
                <h3>Before vs After Rebase</h3>
              </div>
              <div className="rebase-diagram-box">
                <div className="rebase-step">
                  <span className="step-label">Before rebase (diverged branches):</span>
                  <code>main:    A ──→ B ──→ C</code>
                  <code>feature: A ──→ B ──→ D ──→ E</code>
                </div>
                <div className="rebase-arrow">
                  <b>git rebase main ↓</b>
                </div>
                <div className="rebase-step">
                  <span className="step-label">After rebase (linear history):</span>
                  <code>main:    A ──→ B ──→ C</code>
                  <code>feature: A ──→ B ──→ C ──→ D′ ──→ E′</code>
                </div>
              </div>
            </Card>

            <div className="topic-examples-grid" style={{ marginTop: '20px' }}>
              <AnalogyBox
                icon="📚"
                title="Loose-Leaf Binder Page Renumbering"
                text="Imagine your colleague added pages 1, 2, and 3 to a shared binder while you drafted page 4. Rebasing is like taking your page 4, moving it to sit directly after page 3, and renumbering it cleanly as page 4 instead of creating a messy fold."
              />
              <CodeSnippetBox
                title="Rebase Branch on Latest Main"
                command="git fetch origin && git rebase origin/main"
                description="Replays your feature commits on top of the freshest remote main branch."
                snippet={`$ git checkout feature/profile\n$ git fetch origin\n$ git rebase origin/main\n# Successfully rebased and updated refs/heads/feature/profile.`}
              />
            </div>
          </section>

          {/* Section 06: Revert Safely (Separate Full Row) */}
          <section>
            <Heading
              id="revert"
              eyebrow="06 / RECOVERY"
              title="Revert safely"
              copy="Undo a bad change without rewriting shared history by creating an inverse commit."
            />
            <Card className="wide revert">
              <div className="topic-card-header">
                <Badge variant="warning">Safe Rollback</Badge>
                <h3>Revert Workflow</h3>
              </div>
              <Flow items={['Bad commit', 'git revert', 'Revert commit', 'PR', 'Review', 'Merge', 'main fixed']} />
              <p>
                Revert adds a new commit that reverses the earlier one—ideal for changes already shared with your team because history is never rewritten.
              </p>
            </Card>

            <div className="topic-examples-grid" style={{ marginTop: '20px' }}>
              <AnalogyBox
                icon="🧾"
                title="Accounting Counter-Entry / Refund Receipt"
                text="If a cashier accidentally overcharges your credit card $50, they don't erase the transaction from the register database. Instead, they issue a new '+$50 Refund' receipt that cancels out the error while preserving complete ledger transparency."
              />
              <CodeSnippetBox
                title="Undo Bad Commit via Inverse Patch"
                command='git revert 8d7e92a -m "Revert faulty billing calculations"'
                description="Generates a brand new commit that safely inverts all changes introduced in commit 8d7e92a."
                snippet={`$ git revert 8d7e92a\n# [main e5f6a7b] Revert "feat: add profile preference form"\n#  1 file changed, 10 deletions(-)\n$ git push origin main`}
              />
            </div>
          </section>

          {/* Section 07: Branch protection */}
          <section>
            <Heading
              id="protection"
              eyebrow="07 / GUARDRAILS"
              title="Branch protection"
              copy="Rules make the safe path the easy path for everyone by enforcing required reviews and passing checks."
            />
            <div className="protect-grid">
              <Card>
                <Badge variant="danger">Not allowed</Badge>
                <h3>Developer → main ❌</h3>
                <p>Direct pushes bypass review and automated checks, risking production outages.</p>
              </Card>
              <Card>
                <Badge variant="success">Protected workflow</Badge>
                <h3>Feature branch → PR → Review → CI → main ✅</h3>
                <p>Required peer reviews and passing CI checks safeguard your shared production branch.</p>
              </Card>
            </div>

            <div className="topic-examples-grid" style={{ marginTop: '20px' }}>
              <AnalogyBox
                icon="🛂"
                title="Dual-Key Bank Vault & Airport Gate"
                text="Like a high-security bank vault where unlocking requires two bank managers to turn their keys simultaneously. No single developer can force unverified code directly into production without peer approval."
              />
              <CodeSnippetBox
                title="Branch Protection Ruleset in Action"
                command="git push origin main # Blocked by Ruleset"
                description="GitHub rejects direct pushes to main; requires an approved pull request with passing CI status checks."
                snippet={`$ git push origin main\n# Remote rejected! ERROR: GH006: Protected branch update failed for refs/heads/main.\n# Remote: At least 1 approving review is required.\n# Remote: All CI checks (lint, test, build) must pass before merging.`}
              />
            </div>
          </section>

          {/* Section 08: Security & Secrets */}
          <section>
            <Heading
              id="security"
              eyebrow="08 / SECURITY"
              title=".gitignore & secrets"
              copy="A repository can be public. Your credentials never should be."
            />
            <div className="security-grid">
              <Card className="security">
                <div className="topic-card-header">
                  <Badge variant="warning">Repository Hygiene</Badge>
                  <h3>.gitignore Exclusion</h3>
                </div>
                <code>node_modules/</code>
                <code>.env</code>
                <code>.env.local</code>
                <p>Use <code>.gitignore</code> to keep local dependencies, build folders, and environment files out of commits.</p>
                <aside>
                  ⚠ <b>Never expose private keys in React or Vite frontend code.</b> Client bundles are visible to anyone who loads your app.
                </aside>
              </Card>

              <Card className="secrets">
                <div className="topic-card-header">
                  <Badge variant="success">GitHub Actions Secrets</Badge>
                  <h3>Keep production values server-side</h3>
                </div>
                <p>Store deployment credentials and database URLs as encrypted GitHub Secrets, then inject them securely during CI/CD.</p>
                <code>SECRET_KEY ••••••••</code>
              </Card>
            </div>

            <div className="topic-examples-grid" style={{ marginTop: '20px' }}>
              <AnalogyBox
                icon="🕶️"
                title="Opaque Envelope & Hotel Safe Deposit Box"
                text=".gitignore is like not putting private bank statements on the public office corkboard. Secrets is like locking your credit card PIN inside a hotel safe deposit box that only the authorized manager (CI/CD runner) can access during checkout."
              />
              <CodeSnippetBox
                title=".gitignore Rules & GitHub Actions Secrets"
                command="echo '.env' >> .gitignore"
                description="Prevent accidental credential leaks in repo and safely inject tokens into CI/CD workflows."
                snippet={`# .gitignore\nnode_modules/\n.env\n.env.local\ndist/\n*.pem\n\n# .github/workflows/deploy.yml (GitHub Actions)\nenv:\n  PROD_API_KEY: \${{ secrets.PROD_API_KEY }}\n  DATABASE_URL: \${{ secrets.PROD_DB_URL }}`}
              />
            </div>
          </section>

          {/* Section 09: CI/CD preview */}
          <section>
            <Heading
              id="pipeline"
              eyebrow="09 / DELIVERY"
              title="CI/CD preview"
              copy="Automated checks turn each reviewed pull request into a reliable release without manual intervention."
            />
            <Card className="wide pipeline">
              <div className="topic-card-header">
                <Badge variant="success">Pipeline healthy</Badge>
                <small>Last run · 2m 18s</small>
              </div>
              <Flow items={pipeline} />
              <p>
                ● All required checks passed{' '}
                <Button size="sm" variant="ghost" onClick={() => setModal(true)}>
                  View commands →
                </Button>
              </p>
            </Card>

            <div className="topic-examples-grid" style={{ marginTop: '20px' }}>
              <AnalogyBox
                icon="🏭"
                title="Automated Car Assembly Line & Crash Tests"
                text="Like a modern automotive factory where every assembled car automatically passes through laser alignment, engine dyno tests, emissions sensors, and brake checks. If any sensor trips a red warning, the assembly belt halts instantly before the car leaves the factory."
              />
              <CodeSnippetBox
                title="GitHub Actions CI Workflow (.github/workflows/ci.yml)"
                command="name: Test & Build Pipeline"
                description="Automated testing and continuous delivery pipeline executed on every pull request."
                snippet={`# .github/workflows/ci.yml\nname: Test & Build\non: [push, pull_request]\njobs:\n  build-and-test:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v4\n      - uses: actions/setup-node@v4\n        with: { node-version: 20 }\n      - run: npm ci\n      - run: npm run lint\n      - run: npm test\n      - run: npm run build`}
              />
            </div>
          </section>

        </div>
      </main>

      <Modal
        isOpen={modal}
        onClose={() => setModal(false)}
        title="Essential Git commands"
        footer={<Button onClick={() => setModal(false)}>Got it</Button>}
      >
        <div className="commands">
          {[
            ['git status', 'See changed, staged, and untracked files.'],
            ['git add .', 'Stage intended changes.'],
            ['git commit -m "message"', 'Create a local snapshot.'],
            ['git push origin feature/name', 'Publish your branch to GitHub.'],
            ['git fetch origin', 'Check remote changes safely.'],
            ['git pull origin main', 'Download and integrate remote updates.'],
            ['git switch -c feature/name', 'Create and jump into a new feature branch.']
          ].map(x => (
            <p key={x[0]}>
              <code>{x[0]}</code>
              {x[1]}
            </p>
          ))}
        </div>
      </Modal>
    </div>
  );
}


