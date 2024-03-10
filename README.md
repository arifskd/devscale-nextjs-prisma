### Template Project Next.js & Prisma

Ini adalah contoh template, yang sudah di-setup:

- [daisyUI](https://daisyui.com/)
- [Prisma](https://prisma.io/)
- [AWS](https://aws.amazon.com/)

### Environment Variables

- DATABASE_URL
- AWSS3_ACCESS_KEY
- AWSS3_SECRET_KEY
- JWT_SECRET

### How to use it:

1. Clone this repo or use as template

2. Install dependencies

```bash
npm install
# or
yarn
# or
pnpm install
# or
bun install
```

3. Create .env file and add environment variables

```bash
cp .env.example .env
```

4. Do prisma migration

```bash
npm run db:migrate
# or
yarn run db:migrate
# or
pnpm run db:migrate
# or
bun run db:migrate
```

5. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

6. Open http://localhost:3000 with your browser to see the result.
