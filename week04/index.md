[← BACK](./../README.md)

# 4주차

학습일자: 2021-06-16

셀프 리뷰 => 코드쓰기는 글쓰기와 같다
네이밍 => 길어지더라도 남이 정체를 파악하기 어려운 이름을 쓰지 말자

콜백 패턴 => 콜백 지옥 (요즘 잘 안씀)

프라미스 패턴 
- 연속적인 비동기 동작에 대해 callback보다 좀 더 우아하게 다룰 수 있는 방법
- resolve, reject 함수 호출로 인한 실행
- chaining이 된다

```js
import fs from 'fs/promises'

fs.readFile('./javascript-study.pdf').then(function(data) {

}).catch (function (err) {

})

```
프로미스를 모르는데 async await을 쓴다는 건 말이 안됨

await을 쓰려면 프로미스 형태의 함수여야 한다

ajax

- 서버는 항상 올바른 값만 주지는 않는다
- 서버가 항상 살아있지도 않다
- 에러 처리, 방어코드, 데이터 검사 반드시 있어야 한다
- fetch의 경우 http 에러가 발생해도 catch로 떨어지지 않으므로 response의 ok값을 반드시 검사해야 한다
