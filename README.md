#2016/12/14

###nerd-tree hidden file check
> [stackoveflow question](http://stackoverflow.com/questions/5057359/how-can-i-show-hidden-files-starting-with-period-in-nerdtree)  

* shift+i : 숨김파일 표시/취소

###module.exports , exports 차이..?

> [quora question](https://www.quora.com/What-is-difference-between-module-exports-and-export-in-node-js)  

```javascript
// 아래 두줄에서는 사용이 같으나,
module.exports.get = function () {…};
exports.get = function () {…};

// 아래는 exports의 경우엔 새로운 변수명으로 쓰인다.
var myObject = {
			...};
			
exports = myObject;

// 따라서 이경우는 이렇게 쓰는것이 바람직하다.
module.exports = myObject;

// 결론적으로는, exports 로 통일해서 편하게 쓰되 위와 같은 특별한 경우에만 피해주도록 하자.

```	

### vim 매크로 q
> [vim macros](http://vim.wikia.com/wiki/Macros)

* vim에서 매크로 기능을 통해 반복작업을 손쉽게 처리 할 수 있다.
* q + [key] 로 작업을 녹화하고, 한번더 q를 눌러 종료한다.
* @ + [key] 를 눌러 기록했던 매크로 동작을 수행한다.

### brew mysql 설치

> [install mysql](https://blog.joefallon.net/2013/10/install-mysql-on-mac-osx-using-homebrew/)

* brew install mysql
* mysql.server start 명령어로 db serveron 
* (로컬에서는 brew services를 통한 db server 관리를 일괄적으로 하는 것을 선호하기에)brew services start mysql
* mysql -u root -h localhost -p ( root user로 local에 password 로 접속, 초기 루트비밀번호는 없음)

### node와 mysql 연동과 sequelizejs(orm)의 이용
> [sequelizejs docs](http://docs.sequelizejs.com/en/v3/)  
> [NodeJS를 이용한 API 서버만들기 3](http://webframeworks.kr/tutorials/nodejs/api-server-by-nodejs-03/)  
> [github 자습](https://github.com/novelview9/study/tree/master/node_self/05_express_db_app)

* 연동을 위해서 mysql 드라이버 설치 필요
* npm install --save sequelize
* npm i mysql --save

```
mysql> CREATE DATABASE node_api_codelab;
mysql> SHOW DATABASES;
mysql> USE [DATABASE_NAME];
mysql> SHOW TABLES;
```

```javascript
// node에서 sequelize를 통한 db 연동,
var sequelize = new Sequelize('database', 'username', 'password')
```

#2016/12/15

###git-flow 사용법 다시보기

> [gitflow-cheatsheet](http://danielkummer.github.io/git-flow-cheatsheet/index.ko_KR.html)

* git flow init
* git flow feature start [name]
* git flow feature finish [name] 
* finish는 안써봤는데 효율적일까?

###vim nerd-tree 루트 변경
> [nerd-tree cheatsheet](https://www.cheatography.com/stepk/cheat-sheets/vim-nerdtree/)

* on the root and press 'shift +c'

###node & mysql 연동과 crud 구현
> [NodeJS를 이용한 API 서버만들기 5](http://webframeworks.kr/tutorials/nodejs/api-server-by-nodejs-05/)  
> [github 자습](https://github.com/novelview9/study/tree/master/node_self/05_express_db_app)


### vimium 단축키 확인
> [vimium git](https://github.com/philc/vimium/blob/9225b2a1b9baa96ca94c2fa23e4a293478223c7e/README.md)

* yy : 주소 복사
* H : 뒤로 가기
* gu : 상위 디렉터리로 이동
* J, K : 탭 전환
