## Jan 23
Problem:
- The site at `guardiandefi.xyz` only show a blank page
- Console: Loading failed for the <script> with source “https://guardiandefi.xyz/frontend-react/static/js/main.e65a889a.js”.

Clues:
- extract of `yarn deploy`'s stdout:
    The project was built assuming it is hosted at /frontend-react/.
    You can control this with the homepage field in your package.json.
- Added file `CNAME` with contents `guardiandefi.xyz` at public, so
  it isn't override each time is deployed at `gh-pages`
  branch
- package.json: `"homepage": "https://guardian-protocol.github.io/frontend-react"`
- GoDaddy DNS config for `guardiandefi.xyz`:
    CNAME - www - guardian-protocol.github.io
- Github repo: `frontend-react`
- Default Github Pages domain: `https://guardian-protocol.github.io/frontend-react/`
- Custom domain: `guardiandefi.xyz`
- The site renders with the default domain, but fails when added the custom domain

