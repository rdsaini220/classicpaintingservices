# Stage 1: Build the Next.js app
FROM node:22-slim AS builder

# Set working directory
WORKDIR /app

# Copy package.json and lock files
COPY package*.json ./
COPY tsconfig*.json ./

# Install dependencies
RUN npm install --frozen-lockfile

# Copy the rest of the project files
COPY . .

# Build Next.js app
RUN npm run build

# Stage 2: Run the production build
FROM node:22-slim AS runner

WORKDIR /app

# Set Node environment to production
ENV NODE_ENV=production

# Copy only the required files from builder stage
COPY --from=builder /app/package*.json ./
# Copy Next.js config if it exists (js, mjs, or ts)
COPY --from=builder /app/next.config.* ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules

# Expose Next.js default port
EXPOSE 3000

# Run Next.js
CMD ["npm", "start"]
