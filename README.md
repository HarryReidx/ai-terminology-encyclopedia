<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/cb572b91-4de7-4885-b0f0-d95ef814ee75

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

## Docker Deploy

This project can be built into a Docker image and served directly on port `8082`
without nginx.

Build the image:

```bash
docker build \
  --build-arg GEMINI_API_KEY=your_key_here \
  -t harbor.tsingyun.net/platform/ai-terminology-encyclopedia:1.0 .
```

Run the container:

```bash
docker run -d \
  --name ai-terminology-encyclopedia \
  -p 8082:8082 \
  harbor.tsingyun.net/platform/ai-terminology-encyclopedia:1.0
```
