# API仕様書

## 認証API

### ベースURL
```
http://localhost:8000
```

### 共通ヘッダー
```
Content-Type: application/json
```

---

## 🔐 ログイン

### エンドポイント
```
POST /auth/login
```

### リクエスト
```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

### レスポンス

#### 成功時 (200 OK)
```json
{
  "success": true,
  "message": "おかえりなさい！今日も素敵な1日にしましょう♪",
  "data": {
    "user": {
      "id": "user123",
      "email": "user@example.com",
      "name": "田中太郎",
      "dating_status": "結婚相談所利用中",
      "created_at": "2024-01-01T00:00:00Z"
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  }
}
```

#### 失敗時 (401 Unauthorized)
```json
{
  "success": false,
  "message": "メールアドレスまたはパスワードが間違っています。もう一度確認してください。",
  "error": "INVALID_CREDENTIALS"
}
```

#### バリデーションエラー (400 Bad Request)
```json
{
  "success": false,
  "message": "入力内容を確認してください。",
  "error": "VALIDATION_ERROR",
  "details": [
    {
      "field": "email",
      "message": "有効なメールアドレスを入力してください"
    },
    {
      "field": "password",
      "message": "パスワードを入力してください"
    }
  ]
}
```

---

## 👤 新規登録

### エンドポイント
```
POST /auth/register
```

### リクエスト
```json
{
  "email": "newuser@example.com",
  "password": "password123",
  "password_confirmation": "password123",
  "name": "新規ユーザー",
  "birth_date": "1990-01-01",
  "dating_status": "結婚相談所利用中",
  "occupation": "エンジニア",
  "birthplace": "東京都",
  "residence": "神奈川県",
  "hobbies": "読書、映画鑑賞",
  "weekend_activities": "カフェ巡り、散歩",
  "terms_agreed": true
}
```

### レスポンス

#### 成功時 (201 Created)
```json
{
  "success": true,
  "message": "アカウントを作成しました！素敵な出会いが待っています♪",
  "data": {
    "user": {
      "id": "user456",
      "email": "newuser@example.com",
      "name": "新規ユーザー",
      "birth_date": "1990-01-01",
      "dating_status": "結婚相談所利用中",
      "occupation": "エンジニア",
      "birthplace": "東京都",
      "residence": "神奈川県",
      "hobbies": "読書、映画鑑賞",
      "weekend_activities": "カフェ巡り、散歩",
      "created_at": "2024-01-01T00:00:00Z"
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  }
}
```

#### 失敗時 (409 Conflict)
```json
{
  "success": false,
  "message": "このメールアドレスは既に使用されています。別のメールアドレスをお試しください。",
  "error": "EMAIL_ALREADY_EXISTS"
}
```

#### バリデーションエラー (400 Bad Request)
```json
{
  "success": false,
  "message": "入力内容を確認してください。お手数をおかけしますが、修正をお願いします。",
  "error": "VALIDATION_ERROR",
  "details": [
    {
      "field": "email",
      "message": "有効なメールアドレスを入力してください"
    },
    {
      "field": "password",
      "message": "パスワードは8文字以上で入力してください"
    },
    {
      "field": "password_confirmation",
      "message": "パスワードと確認用パスワードが一致しません"
    },
    {
      "field": "name",
      "message": "お名前（ニックネーム可）を入力してください"
    },
    {
      "field": "birth_date",
      "message": "生年月日を正しい形式で入力してください（例：1990-01-01）"
    },
    {
      "field": "dating_status",
      "message": "婚活状況を選択してください"
    },
    {
      "field": "terms_agreed",
      "message": "利用規約に同意してください"
    }
  ]
}
```

---

## 🔄 トークンリフレッシュ

### エンドポイント
```
POST /auth/refresh
```

### リクエスト
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

### レスポンス

#### 成功時 (200 OK)
```json
{
  "success": true,
  "message": "トークンを更新しました",
  "data": {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  }
}
```

---

## 🚪 ログアウト

### エンドポイント
```
POST /auth/logout
```

### リクエスト ヘッダー
```
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

### レスポンス

#### 成功時 (200 OK)
```json
{
  "success": true,
  "message": "お疲れ様でした！またお会いできるのを楽しみにしています♪"
}
```

---

## 🔒 パスワードリセット

### エンドポイント
```
POST /auth/password-reset
```

### リクエスト
```json
{
  "email": "user@example.com"
}
```

### レスポンス

#### 成功時 (200 OK)
```json
{
  "success": true,
  "message": "パスワードリセット用のメールを送信しました。メールをご確認ください。"
}
```

---

## 🌐 共通エラーレスポンス

### サーバーエラー (500 Internal Server Error)
```json
{
  "success": false,
  "message": "サーバーエラーが発生しました",
  "error": "INTERNAL_SERVER_ERROR"
}
```

### サービス利用不可 (503 Service Unavailable)
```json
{
  "success": false,
  "message": "サービスが一時的に利用できません",
  "error": "SERVICE_UNAVAILABLE"
}
```

---

## 📝 バリデーションルール

### **必須項目**

#### メールアドレス
- 必須
- 有効なメールアドレス形式
- 最大254文字

#### パスワード
- 必須
- 8文字以上
- 英数字を含む
- 最大128文字

#### 名前（ニックネーム可）
- 必須
- 2文字以上
- 最大50文字
- ニックネームでも可

#### 生年月日
- 必須
- YYYY-MM-DD形式
- 18歳以上（成人年齢）

#### 婚活状況
- 必須
- 選択式：「結婚相談所利用中」「マッチングアプリ利用中」「その他」

#### 利用規約同意
- 必須
- `true`である必要がある

### **任意項目**

#### 職業
- 任意
- 最大100文字

#### 出身地
- 任意
- 最大50文字

#### 居住場所
- 任意
- 最大50文字

#### 趣味
- 任意
- 最大200文字

#### 休日の過ごし方
- 任意
- 最大200文字

---

## 🎯 フロントエンドでの実装例

### ログイン
```javascript
const login = async (email, password) => {
  try {
    const response = await api.post('/auth/login', {
      email,
      password
    });
    
    if (response.data.success) {
      // トークンを保存
      localStorage.setItem('token', response.data.data.token);
      // ユーザー情報を保存
      localStorage.setItem('user', JSON.stringify(response.data.data.user));
      // ダッシュボードにリダイレクト
      router.push('/dashboard');
    }
  } catch (error) {
    // エラーハンドリング
    console.error('ログインエラー:', error.response.data);
  }
};
```

### 新規登録
```javascript
const register = async (userData) => {
  try {
    const response = await api.post('/auth/register', userData);
    
    if (response.data.success) {
      // トークンを保存
      localStorage.setItem('token', response.data.data.token);
      // ユーザー情報を保存
      localStorage.setItem('user', JSON.stringify(response.data.data.user));
      // ダッシュボードにリダイレクト
      router.push('/dashboard');
    }
  } catch (error) {
    // エラーハンドリング
    console.error('登録エラー:', error.response.data);
  }
};
```

---

**開発の参考にしてください！**