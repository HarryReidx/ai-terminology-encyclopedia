FROM node:20-alpine AS builder

WORKDIR /app

COPY package.json package-lock.json* ./

# Reinstall dependencies inside Linux to avoid optional native package issues
# when the lockfile was generated on another platform.
RUN rm -f package-lock.json && npm install --include=optional

COPY . .

ARG GEMINI_API_KEY=""
ENV GEMINI_API_KEY=${GEMINI_API_KEY}

RUN npm run build


FROM node:20-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV PORT=8082

RUN npm install -g serve@14.2.4

COPY --from=builder /app/dist ./dist

EXPOSE 8082

CMD ["serve", "-s", "dist", "-l", "8082"]
