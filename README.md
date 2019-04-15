# mick-whats/bo#docs

Generate docs with hify


## tips

`.git`以下と`.gitignore`内の指定ファイルを**除外**してコピーする方法

```
cd path/to/bo
rsync -C --filter=":- .gitignore" --exclude=".git/" -acvz <<コピー元パス>> .
```
