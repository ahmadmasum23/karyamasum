# 🚀 Complete Vercel Deployment Setup Guide

## 📋 Required Environment Variables

Copy and paste these exact variable names into your Vercel dashboard:

### 1. GitHub API Configuration
```bash
GITHUB_READ_USER_TOKEN_PERSONAL=ghp_your_token_here
```

**How to get this:**
1. Go to [GitHub Personal Access Tokens](https://github.com/settings/tokens)
2. Click "Generate new token (classic)"
3. Select these scopes:
   - ✅ `read:user`
   - ✅ `public_repo` (or `repo` for private repos)
4. Copy the generated token

### 2. Monkeytype API Configuration
```bash
MONKEYTYPE_API_KEY=your_monkeytype_api_key
```

**How to get this:**
1. Go to [Monkeytype](https://monkeytype.com)
2. Login to your account
3. Go to Settings > Developer
4. Generate an API key
5. Copy the key

### 3. Google Gemini AI Configuration
```bash
GEMINI_API_KEY=your_gemini_api_key
```

**How to get this:**
1. Go to [Google AI Studio](https://aistudio.google.com/app/apikey)
2. Create a new API key
3. Copy the key

### 4. Domain Configuration
```bash
DOMAIN=https://ahmadmasum23.vercel.app
```
*Replace with your actual Vercel domain*

## 🔧 Setting Up in Vercel Dashboard

### Step 1: Access Environment Variables
1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Select your project: **ahmadmasum**
3. Click **Settings** tab
4. Click **Environment Variables** in the sidebar

### Step 2: Add Each Variable
For each variable above:

1. **Key**: Enter the exact variable name (e.g., `GITHUB_READ_USER_TOKEN_PERSONAL`)
2. **Value**: Enter your actual token/key
3. **Environments**: Select ALL environments:
   - ✅ Production
   - ✅ Preview  
   - ✅ Development
4. Click **Save**

### Step 3: Redeploy
After adding all variables:
1. Go to **Deployments** tab
2. Click the **...** menu on the latest deployment
3. Click **Redeploy**
4. Wait for deployment to complete

## 🧪 Testing Your Setup

### Test API Endpoints
Visit these URLs to test (replace with your domain):

1. **GitHub API**: `https://ahmadmasum23.vercel.app/api/github`
2. **Monkeytype API**: `https://ahmadmasum23.vercel.app/api/monkeytype`  
3. **Dashboard**: `https://ahmadmasum23.vercel.app/dashboard`
4. **Smart Talk**: `https://ahmadmasum23.vercel.app/smart-talk`

### Expected Results
- ✅ **Success**: Data loads properly
- ❌ **Error**: Check Vercel Function Logs

## 🔍 Troubleshooting

### If you see "An error occurred on the server":

1. **Check Vercel Function Logs**:
   - Go to Vercel Dashboard > Functions tab
   - Click on the failing function
   - Check the logs for error details

2. **Common Issues**:
   - **Missing Environment Variable**: Add the missing variable
   - **Invalid Token**: Regenerate the token/key
   - **Wrong Permissions**: Ensure tokens have correct scopes
   - **Quota Exceeded**: Check API limits

3. **Verify Environment Variables**:
   - All 4 variables are set
   - No extra spaces in values
   - Applied to all environments

## 📞 Need Help?
If you're still having issues, check the Vercel Function Logs and look for specific error messages. The improved error handling will show you exactly what's wrong.