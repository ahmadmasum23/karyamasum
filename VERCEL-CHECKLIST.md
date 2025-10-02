# 🚀 Vercel Deployment Checklist

## Pre-Deployment Setup

### ✅ 1. Get API Keys

#### GitHub Personal Access Token
1. Go to https://github.com/settings/tokens
2. Click "Generate new token (classic)"
3. Select scopes:
   - ✅ `read:user`
   - ✅ `public_repo`
4. Copy the token (starts with `ghp_`)

#### Monkeytype API Key
1. Go to https://monkeytype.com
2. Login and go to Settings > Developer
3. Generate API key
4. Copy the key

#### Google Gemini AI Key
1. Go to https://aistudio.google.com/app/apikey
2. Create new API key
3. Copy the key

### ✅ 2. Configure Vercel Environment Variables

1. Go to **Vercel Dashboard** → Your Project → **Settings** → **Environment Variables**

2. Add these **EXACT** variable names:

```bash
Variable Name: GITHUB_READ_USER_TOKEN_PERSONAL
Value: [your GitHub token]
Environments: ✅ Production ✅ Preview ✅ Development

Variable Name: MONKEYTYPE_API_KEY  
Value: [your Monkeytype key]
Environments: ✅ Production ✅ Preview ✅ Development

Variable Name: GEMINI_API_KEY
Value: [your Gemini key] 
Environments: ✅ Production ✅ Preview ✅ Development

Variable Name: DOMAIN
Value: https://ahmadmasum23.vercel.app
Environments: ✅ Production ✅ Preview ✅ Development
```

### ✅ 3. Redeploy

1. Go to **Deployments** tab
2. Click **...** on latest deployment
3. Click **Redeploy**
4. Wait for deployment to complete

### ✅ 4. Test Your Deployment

Visit these URLs to verify everything works:

1. **Health Check**: https://ahmadmasum23.vercel.app/api/health
2. **Dashboard**: https://ahmadmasum23.vercel.app/dashboard  
3. **Smart Talk**: https://ahmadmasum23.vercel.app/smart-talk

### ✅ 5. Troubleshooting

If you see errors:

1. **Check Vercel Function Logs**:
   - Dashboard → Functions → Click failing function
   - Look for error messages

2. **Common Issues**:
   - ❌ "Missing environment variables" → Add missing variables
   - ❌ "Invalid token" → Regenerate API keys
   - ❌ "403 Forbidden" → Check token permissions

3. **Debug Mode**: 
   - Run locally with `npm run dev`
   - Check console for detailed errors

### ✅ 6. Verification Commands

Test each API endpoint:

```bash
# Health check
curl https://ahmadmasum23.vercel.app/api/health

# GitHub API
curl https://ahmadmasum23.vercel.app/api/github

# Monkeytype API  
curl https://ahmadmasum23.vercel.app/api/monkeytype

# Gemini AI (Smart Talk)
curl -X POST https://ahmadmasum23.vercel.app/api/gemini \
  -H "Content-Type: application/json" \
  -d '{"message":"Hello"}'
```

## 🎯 Expected Results

✅ **Success**: All APIs return data  
✅ **Dashboard**: Shows GitHub contributions and Monkeytype stats  
✅ **Smart Talk**: AI responds to messages

❌ **Failure**: Check Function Logs for specific errors

---

**Need Help?** Check `/api/health` endpoint for detailed environment status!