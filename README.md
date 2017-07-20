Tweeter demo
===

create an express app in webstorm and `npm install twitter --save`

sample usage see index.js for details

related blog: https://github.com/uniquejava/blog/issues/112
## Twitter
### 注册
使用邮箱注册, 需要手机接收验证码


### API调用次数限制
GET application/rate_limit_status
可以返回当前所有End Point可以调用的次数.

比如GET search/tweets 每15分钟可以调用180次.

### 搜索API search/tweets 

搜索条件:
result_type 指定按关注度或时间进行排序
geocode 指定地理位置
count 指定返回结果数
lang 指定语言
until, since_id, max_id 指定分页参数

可用的操作符:
from:kobe 发自某个人
to: somebody 回复给某个人
@someboy 提到某人
puppy -filter:retweets	包含某段文字(过滤掉转发的)
movie -scary :)	包含movie不包含scary, 带正面情绪
flight :( 包含flight并且带负面情绪
superhero since:2015-12-21	某个日期之后
puppy until:2015-12-21	某个日期之前
watching now 即包含watching又包含now
“happy hour” 精确匹配
love OR hate 包含love或hate

## Facebook
https://developers.facebook.com/docs/graph-api/reference/
### 注册
使用邮箱/手机注册, 需要手机接收验证码, 需要验证头像.


## API调用次数限制
https://developers.facebook.com/docs/graph-api/advanced/rate-limiting

## 搜索API 
https://developers.facebook.com/docs/public_feed/
只对部分公共媒体开放.

## 功能列表
https://graph.facebook.com/me?fields=id,name,picture
/me
/me/photos



GET graph.facebook.com
  /{photo-id}?
    fields=comments.order(reverse_chronological)
    
    
GET graph.facebook.com
  /search?
    q=coffee&
    type=place&
    center=37.76,-122.427&
    distance=1000
        
两个人是否为好友
/{user-a-id}/friends/{user-b-id} 

创建新的status



/messages 列出对话中的所有信息
/comments 列出所有的comments

{
   "fieldname": {field-value},
   ....
}


https://dev.twitter.com/rest/public/search
