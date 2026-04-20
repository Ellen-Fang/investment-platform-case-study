# 部署到 GitHub Pages 指南

## 📋 前提條件

1. **GitHub 帳號** - 有一個GitHub帳號
2. **Git** - 已安裝Git
3. **Node.js** - 已安裝Node.js (v18+)

## 🚀 快速部署步驟

### 步驟 1: 上傳項目到 GitHub

1. 在 GitHub 上創建一個新的 Repository
   - 進入 https://github.com/new
   - Repository 名稱: `yong-ni-yi-qi-feng` (或任意名稱)
   - 選擇 **Public** (這樣別人才能看到)
   - 點擊 **Create repository**

2. 在本地初始化Git並推送代碼:
```bash
cd ~/Desktop/永你一起豐
git init
git add .
git commit -m "Initial commit: Clean up Figma dependencies"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/yong-ni-yi-qi-feng.git
git push -u origin main
```

### 步驟 2: 啟用 GitHub Pages

1. 進入 Repository 設置
   - 進入你的 Repository 主頁
   - 點擊 **Settings** 標籤
   - 左側菜單選擇 **Pages**

2. 配置 GitHub Pages
   - **Build and deployment** 部分
   - 選擇 **Source**: 改為 **GitHub Actions**
   - 無需其他配置，工作流會自動運行

### 步驟 3: 驗證部署

1. 等待自動部署完成
   - 進入 **Actions** 標籤
   - 找到 "Deploy to GitHub Pages" 工作流
   - 等待綠色的 ✅ 表示部署成功

2. 訪問你的網站
   - 回到 **Settings** > **Pages**
   - 在 "Your site is published at" 看到您的網站URL
   - URL 格式: `https://YOUR_USERNAME.github.io/yong-ni-yi-qi-feng/`

## 🔄 後續更新

之後每當你推送代碼到 `main` 或 `master` 分支時:

```bash
# 編輯代碼後
git add .
git commit -m "Update: 描述你的更改"
git push
```

自動部署工作流會自動運行，網站會在幾分鐘內更新。

## 📝 本地測試

在部署前，你可以在本地測試:

```bash
# 安裝依賴
npm install

# 開發模式 (實時更新)
npm run dev

# 模擬生產環境
npm run build
npm run preview  # 或使用其他方式查看dist目錄
```

## ⚙️ 進階配置

### 使用自訂域名 (可選)

如果你有自己的域名，可以在 GitHub Pages 設置中配置:

1. 進入 **Settings** > **Pages**
2. 在 **Custom domain** 輸入你的域名
3. 按照 GitHub 的說明配置 DNS

### 環境變數

如果需要使用環境變數，在 `.env` 文件中添加:

```
VITE_API_URL=https://api.example.com
```

部署時會自動使用這些變數。

## 🆘 故障排除

### 部署失敗 (紅色 ✗)

1. 進入 **Actions** 標籤
2. 點擊失敗的工作流查看詳細信息
3. 常見問題:
   - 依賴安裝失敗 → 檢查 `package.json` 語法
   - 構建失敗 → 檢查代碼是否有語法錯誤
   - 版本不兼容 → 嘗試更新 Node.js 版本

### 網站顯示空白

1. 檢查瀏覽器控制台是否有錯誤
2. 清除瀏覽器緩存
3. 確認 `vite.config.ts` 中的 `base` 配置正確

### 資源 404 錯誤

這通常是因為 `base` 路徑配置不正確。工作流已自動處理，但如果手動部署:

```bash
VITE_BASE=/repository-name/ npm run build
```

## 📚 更多資源

- [GitHub Pages 官方文檔](https://docs.github.com/en/pages)
- [Vite 部署指南](https://vitejs.dev/guide/static-deploy.html)
- [React 路由配置](https://reactrouter.com/)

---

完成部署後，你就可以分享你的網站 URL 給任何人，他們可以直接在瀏覽器中看到你的投資社交平台了！ 🎉
