

## Mongo

```
mongo
use my-blog
db.articles.insert([{...}])
```

find all elements in collection articles
```
db.articles.find({})
```
the same, but in more readable view
```
db.articles.find({}).pretty()
db.articles.find({name:'lorem-ipsum'}).pretty()
db.articles.findOne({name:'lorem-ipsum'})
```