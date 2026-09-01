export const gitBasicsData = [
  {
    id: 'repository',
    number: '01',
    title: 'Repository',
    subtitle: 'Project Home & History',
    scope: 'Local & Remote',
    category: 'Foundation',
    badgeVariant: 'default',
    icon: '📦',
    accentColor: '#818cf8',
    summary: 'The central folder tracked by Git containing all project files, full revision history, commits, and branch pointers.',
    dailyLife: {
      title: 'Digital Project Safe & Ledger',
      icon: '🗄️',
      analogy: 'Like a secure project filing cabinet with an automated ledger that logs every single document added, edited, or removed with timestamps and author signatures.'
    },
    codeExample: {
      label: 'Initialize New Repository',
      command: 'git init my-awesome-app',
      description: 'Creates a new .git metadata directory to start tracking your codebase.',
      snippet: `$ mkdir my-awesome-app\n$ cd my-awesome-app\n$ git init\n# Initialized empty Git repository in /my-awesome-app/.git/`
    },
    tags: ['repo', 'init', 'initialize', 'project', 'storage', 'history', 'folder', 'git init', 'local', 'remote']
  },
  {
    id: 'clone',
    number: '02',
    title: 'Clone',
    subtitle: 'Download Remote Repo',
    scope: 'Remote → Local',
    category: 'Setup',
    badgeVariant: 'success',
    icon: '📥',
    accentColor: '#34d399',
    summary: 'Downloads an exact, complete copy of an existing remote GitHub repository to your local computer, including all branches and history.',
    dailyLife: {
      title: 'Library Reference Photocopy',
      icon: '📖',
      analogy: 'Like making an identical photocopy of a master reference manual from the central library so you can read, highlight, and practice on your own desk at home.'
    },
    codeExample: {
      label: 'Clone from GitHub',
      command: 'git clone https://github.com/user/repo.git',
      description: 'Fetches all commits, files, and branches from GitHub down to your workspace.',
      snippet: `$ git clone https://github.com/facebook/react.git\n$ cd react\n# Cloning into 'react'...\n# Receiving objects: 100% (24580/24580), done.`
    },
    tags: ['clone', 'download', 'remote', 'github', 'copy', 'git clone', 'setup']
  },
  {
    id: 'working-directory',
    number: '03',
    title: 'Working Directory',
    subtitle: 'Active Workspace Files',
    scope: 'Local Files',
    category: 'Workspace',
    badgeVariant: 'default',
    icon: '💻',
    accentColor: '#60a5fa',
    summary: 'The active directory on your filesystem where you create, modify, test, and delete project code before staging.',
    dailyLife: {
      title: 'Kitchen Chopping Board',
      icon: '🧑‍🍳',
      analogy: 'Like your kitchen cutting board where ingredients are currently being sliced, seasoned, and tasted before being arranged into dishes or sealed in meal containers.'
    },
    codeExample: {
      label: 'Check Active File Status',
      command: 'git status',
      description: 'Inspects which files in your workspace have been modified, created, or deleted.',
      snippet: `$ echo "const APP_VERSION = '2.0.0';" >> config.js\n$ git status\n# Changes not staged for commit:\n#   modified: config.js`
    },
    tags: ['working directory', 'workspace', 'files', 'status', 'untracked', 'modified', 'git status', 'local']
  },
  {
    id: 'staging-area',
    number: '04',
    title: 'Staging Area',
    subtitle: 'Commit Preparation Index',
    scope: 'Pre-Commit',
    category: 'Preparation',
    badgeVariant: 'warning',
    icon: '📋',
    accentColor: '#fbbf24',
    summary: 'The intermediate staging buffer where you selectively pick, organize, and inspect exact changes before sealing them into a commit.',
    dailyLife: {
      title: 'Shopping Cart Before Checkout',
      icon: '🛒',
      analogy: 'Like placing selected groceries into your shopping cart to double-check quantities and prices before paying at the cash register.'
    },
    codeExample: {
      label: 'Stage Files for Next Commit',
      command: 'git add src/App.jsx',
      description: 'Stages specific modified files or everything in the current directory (.) for the next snapshot.',
      snippet: `$ git add src/App.jsx\n$ git add .\n$ git status\n# Changes to be committed:\n#   modified: src/App.jsx`
    },
    tags: ['staging', 'stage', 'index', 'git add', 'prepare', 'add', 'local']
  },
  {
    id: 'commit',
    number: '05',
    title: 'Commit',
    subtitle: 'Permanent Saved Snapshot',
    scope: 'Local History',
    category: 'Snapshot',
    badgeVariant: 'default',
    icon: '📸',
    accentColor: '#a78bfa',
    summary: 'A permanent, SHA-1 hashed snapshot saving all staged changes into your local Git history with an informative description.',
    dailyLife: {
      title: 'Video Game Checkpoint Save',
      icon: '🎮',
      analogy: 'Like saving your video game at a checkpoint before a major boss battle; if your experiment fails, you can reload this exact point at any time.'
    },
    codeExample: {
      label: 'Record Snapshot With Message',
      command: 'git commit -m "feat: add user authentication"',
      description: 'Records a permanent snapshot of staged files with a clear summary of changes.',
      snippet: `$ git commit -m "feat(auth): add OAuth2 Google login button"\n# [main 7a2b9c1] feat(auth): add OAuth2 Google login button\n# 2 files changed, 54 insertions(+)`
    },
    tags: ['commit', 'snapshot', 'save', 'history', 'message', 'git commit', 'checkpoint', 'local']
  },
  {
    id: 'push',
    number: '06',
    title: 'Push',
    subtitle: 'Upload Commits to GitHub',
    scope: 'Local → Remote',
    category: 'Publish',
    badgeVariant: 'success',
    icon: '🚀',
    accentColor: '#38bdf8',
    summary: 'Uploads your saved local branch commits up to the remote repository on GitHub to backup your work and share it with collaborators.',
    dailyLife: {
      title: 'Cloud Photo Backup & Sync',
      icon: '☁️',
      analogy: 'Like taking photos locally on your phone and syncing them to Google Photos or iCloud so family and team members can view and download them.'
    },
    codeExample: {
      label: 'Publish Branch to GitHub',
      command: 'git push -u origin feature/login-page',
      description: 'Transfers committed history from your local branch to the remote repository on GitHub.',
      snippet: `$ git push -u origin feature/login-page\n# Enumerating objects: 7, done.\n# To https://github.com/my-org/project.git\n# * [new branch] feature/login-page -> feature/login-page`
    },
    tags: ['push', 'upload', 'remote', 'github', 'publish', 'git push', 'sync']
  },
  {
    id: 'pull',
    number: '07',
    title: 'Pull',
    subtitle: 'Fetch & Merge Remote Changes',
    scope: 'Remote → Local',
    category: 'Sync',
    badgeVariant: 'success',
    icon: '🔄',
    accentColor: '#4ade80',
    summary: 'Downloads the latest commits from the remote GitHub repository and instantly integrates/merges them into your active local branch.',
    dailyLife: {
      title: 'Daily Morning Newspaper Delivery',
      icon: '📰',
      analogy: 'Like receiving the morning newspaper delivered to your doorstep and immediately reading it to integrate all breaking news into your day.'
    },
    codeExample: {
      label: 'Fetch & Merge Remote Branch',
      command: 'git pull origin main',
      description: 'Combines git fetch (downloading) and git merge (integrating) into one single command.',
      snippet: `$ git pull origin main\n# Updating 7a2b9c1..4e8f1a2\n# Fast-forward\n# src/api/auth.js | 18 +++++++++++++-----\n# 1 file changed, 13 insertions(+), 5 deletions(-)`
    },
    tags: ['pull', 'fetch', 'merge', 'download', 'update', 'git pull', 'sync', 'remote']
  },
  {
    id: 'fetch',
    number: '08',
    title: 'Fetch',
    subtitle: 'Safe Remote Inspection',
    scope: 'Remote Metadata',
    category: 'Inspection',
    badgeVariant: 'default',
    icon: '🔍',
    accentColor: '#2dd4bf',
    summary: 'Safely downloads the latest commits, branches, and tags from GitHub without modifying or overwriting your current working files.',
    dailyLife: {
      title: 'Lockscreen Notification Preview',
      icon: '📲',
      analogy: 'Like glancing at notification banners on your phone lockscreen to see who sent you messages without opening the apps or answering them yet.'
    },
    codeExample: {
      label: 'Inspect Remote Updates Safely',
      command: 'git fetch origin',
      description: 'Retrieves all new remote branches and commits so you can inspect diffs before deciding to merge.',
      snippet: `$ git fetch origin\n$ git log HEAD..origin/main --oneline\n# 4e8f1a2 fix: resolve race condition in token refresh\n# (Local working files remain untouched)`
    },
    tags: ['fetch', 'inspect', 'safe', 'remote', 'git fetch', 'compare', 'diff']
  },
  {
    id: 'branch',
    number: '09',
    title: 'Branch',
    subtitle: 'Parallel Isolated Development',
    scope: 'Parallel Flow',
    category: 'Isolation',
    badgeVariant: 'warning',
    icon: '🌿',
    accentColor: '#f472b6',
    summary: 'An independent, isolated line of development allowing you to build new features or experiment without breaking or disturbing the stable main code.',
    dailyLife: {
      title: 'Draft Document Duplicate',
      icon: '🧪',
      analogy: 'Like making a separate photocopy of a finalized legal contract to brainstorm bold revisions and sketches on without ever altering the master signed original.'
    },
    codeExample: {
      label: 'Create & Switch to Feature Branch',
      command: 'git switch -c feature/payment-v2',
      description: 'Creates a new branch pointer and immediately switches your working directory to it.',
      snippet: `$ git switch -c feature/payment-v2\n# Switched to a new branch 'feature/payment-v2'\n$ git branch\n# * feature/payment-v2\n#   main`
    },
    tags: ['branch', 'checkout', 'switch', 'isolation', 'feature', 'git branch', 'git switch', 'collaboration']
  }
];
