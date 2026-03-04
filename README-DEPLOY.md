# 8bridge site (Railway)

## Local dev
```bash
cd 8bridge/site
npm i
npm run dev
```

## Production build
```bash
npm run build
npm start
```

## Railway
- Create a new Railway project
- Connect repo (or use Railway CLI)
- Set build command: `npm run build`
- Set start command: `npm start`
- No env vars required for the marketing site

If you want a custom domain, add it in Railway → Settings → Domains.
