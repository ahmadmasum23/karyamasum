# Deployment Guide

## Required Environment Variables for Vercel

To deploy this project successfully on Vercel, you need to set the following environment variables in your Vercel dashboard:

### 1. GitHub Integration
```
GITHUB_READ_USER_TOKEN_PERSONAL=your_github_personal_access_token
```
- Go to GitHub Settings > Developer settings > Personal access tokens
- Generate a new token with `read:user` and `repo` permissions
- Add this token to Vercel environment variables

### 2. Monkeytype Integration
```
MONKEYTYPE_API_KEY=your_monkeytype_api_key
```
- Get your API key from Monkeytype settings
- Add this key to Vercel environment variables

### 3. Gemini AI Integration
```
GEMINI_API_KEY=your_gemini_api_key
```
- Get your API key from Google AI Studio
- Add this key to Vercel environment variables

### 4. Domain Configuration
```
DOMAIN=https://yourdomain.com
```
- Set this to your actual domain (e.g., https://ahmadmasum23.vercel.app)

## Setting Environment Variables in Vercel

1. Go to your Vercel dashboard
2. Select your project
3. Go to Settings > Environment Variables
4. Add each variable with their respective values
5. Make sure to set them for all environments (Production, Preview, Development)

## Troubleshooting

If you're getting "An error occurred on the server" messages:

1. Check Vercel Function Logs for specific error messages
2. Verify all environment variables are set correctly
3. Ensure API keys are valid and have proper permissions
4. Check if external APIs (GitHub, Monkeytype, Gemini) are accessible

## Common Issues

- **GitHub API**: Make sure your personal access token has the correct permissions
- **Monkeytype API**: Verify your username and API key are correct
- **Gemini AI**: Ensure your API key is valid and has quota available