# デザインガイドライン

## 🎨 **デザインコンセプト**

### **基本方針**
婚活に対する不安や緊張を和らげ、ユーザーが安心して利用できる**フレンドリーで温かみのある**デザインを目指します。

## 🌈 **カラーパレット**

**※既存miraim/frontendの配色に完全準拠**

### **メインカラー（オレンジ系）**
- **プライマリーオレンジ**: `#FF8551` - メインブランドカラー（既存ログイン画面使用）
- **プライマリーライト**: `#FFA46D` - ライトバージョン（グラデーション・ホバー用）
- **背景グレー**: `#F5F5F5` - 背景色（既存画面使用）

### **テキストカラー**
- **見出し**: `#FF8551` - メインの見出し・タイトル
- **ボディテキスト**: `text-gray-600` - 本文テキスト
- **ラベル**: `text-gray-700` - フォームラベル

### **サポートカラー**
- **エラーレッド**: `red-500` / `#EF4444` - エラーメッセージ
- **成功グリーン**: `green-500` / `#10B981` - 成功メッセージ
- **警告イエロー**: `yellow-500` / `#EAB308` - 警告メッセージ

### **ニュートラルカラー**
- **ホワイト**: `white` / `#FFFFFF` - カード背景
- **ライトグレー**: `gray-100` / `#F3F4F6` - ボーダー
- **ミディアムグレー**: `gray-300` / `#D1D5DB` - 非アクティブ要素
- **ダークグレー**: `gray-600` / `#4B5563` - セカンダリテキスト

## 🔤 **タイポグラフィ**

### **フォントファミリー**
```css
font-family: 'Noto Sans JP', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
```

### **フォントサイズ**
- **見出し1**: `2rem` (32px) - ページタイトル
- **見出し2**: `1.5rem` (24px) - セクションタイトル
- **見出し3**: `1.25rem` (20px) - サブタイトル
- **本文**: `1rem` (16px) - 通常のテキスト
- **キャプション**: `0.875rem` (14px) - 補助テキスト
- **小文字**: `0.75rem` (12px) - 注釈

### **フォントウェイト**
- **Bold**: `700` - 見出しや重要な要素
- **SemiBold**: `600` - ボタンやラベル
- **Medium**: `500` - サブタイトル
- **Regular**: `400` - 通常のテキスト

## 📱 **レスポンシブデザイン**

### **ブレークポイント**
```css
/* モバイル */
@media (min-width: 375px) { ... }

/* タブレット */
@media (min-width: 768px) { ... }

/* デスクトップ */
@media (min-width: 1024px) { ... }

/* 大画面 */
@media (min-width: 1280px) { ... }
```

### **コンテナ幅**
- **モバイル**: `100%` (padding: 16px)
- **タブレット**: `max-width: 768px`
- **デスクトップ**: `max-width: 1024px`

## 🎯 **UIコンポーネント**

### **ボタンデザイン**

#### **プライマリーボタン（既存スタイル準拠）**
```css
/* 既存Button.jsと同じスタイル */
.btn-primary {
  @apply inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-full text-white bg-gradient-to-r from-[#FF8551] to-[#FFA46D] hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FF8551] transition-all;
}

/* または直接CSS */
background: linear-gradient(to right, #FF8551, #FFA46D);
color: white;
padding: 12px 24px;
border-radius: 9999px; /* rounded-full */
font-weight: 500;
transition: opacity 0.2s;
```

#### **セカンダリーボタン**
```css
/* オレンジ系アウトラインボタン */
.btn-secondary {
  @apply border-2 border-[#FF8551] text-[#FF8551] hover:bg-[#FF8551] hover:text-white font-medium py-2 px-4 rounded-full transition-all duration-200;
}

/* または直接CSS */
background: white;
color: #FF8551;
border: 2px solid #FF8551;
padding: 12px 24px;
border-radius: 9999px;
font-weight: 500;
```

### **入力フィールド**
```css
/* 既存スタイルに合わせたフォーカス色 */
.input-field {
  @apply border border-gray-300 rounded-md px-3 py-2 text-base transition-colors duration-200 bg-white;
  @apply focus:border-[#FF8551] focus:ring-2 focus:ring-[#FF8551] focus:ring-opacity-20 focus:outline-none;
}

/* または直接CSS */
border: 1px solid #D1D5DB;
border-radius: 6px;
padding: 8px 12px;
font-size: 16px;
transition: border-color 0.2s;
background: white;

/* フォーカス時（オレンジ系） */
border-color: #FF8551;
box-shadow: 0 0 0 3px rgba(255, 133, 81, 0.2);
```

### **カードデザイン**
```css
/* Tailwindクラス使用 */
.card {
  @apply bg-white rounded-xl p-6 shadow-sm border border-gray-100;
}

/* または直接CSS */
background: white;
border-radius: 12px;
padding: 24px;
box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
border: 1px solid #F3F4F6;
```

## 😊 **フレンドリー要素**

### **アイコン使用**
- **温かみのあるアイコン**: 丸みを帯びたデザイン
- **手描き風要素**: 親しみやすさを演出
- **ハートやスマイル**: 適度に使用してポジティブな印象

### **メッセージトーン**
- **励ましの言葉**: 「頑張って！」「あと少しです！」
- **優しい敬語**: 丁寧だが堅すぎない表現
- **共感的な表現**: ユーザーの気持ちに寄り添う

### **マイクロインタラクション**
- **ホバーエフェクト**: 軽やかな変化
- **ローディングアニメーション**: 楽しげな動き
- **成功アニメーション**: 喜びを表現する演出

## 📸 **参考デザイン**

### **RFPimageフォルダ参照**
- `IMG_0485.PNG` - 会話画面の親しみやすいUI
- `IMG_0486.PNG` - カラーパレットとトーン
- `IMG_0487.PNG` - ボタンとフォームデザイン
- `IMG_0488.PNG` - レイアウトとスペーシング
- `IMG_0489.PNG` - アイコンと装飾要素

これらの画像を参考に、同様の温かみと親しみやすさを表現してください。

## ✅ **チェックポイント**

### **デザイン完成時の確認項目**
- [ ] 温かみのある色合いを使用している
- [ ] フォントサイズが読みやすい
- [ ] ボタンが押しやすいサイズになっている
- [ ] エラーメッセージが優しい表現になっている
- [ ] 全体的に親しみやすい印象を与えている
- [ ] モバイルでも使いやすいデザインになっている
- [ ] ローディング状態やホバーエフェクトが実装されている

---

**このガイドラインに沿って、ユーザーが安心して利用できる温かみのあるUIを作成してください！**