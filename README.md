# 対義語変換API 

## ドメイン
http://antonym.herokuapp.com

## API
- post /api/antonyms/?phrase=""

## レスポンスフォーマット
```
  {
    phrases: [
      { phrase: '死にたい', antonym: '生きろ', score: 0 }
    ]
  }
```
