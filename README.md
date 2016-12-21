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
* [*QUESTION]finish는 안써봤는데 효율적일까?

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

#2016/12/17

### nodemon

> [nodemon](https://nodemon.io/)

* 노드 서버띄울때 변동 사항이 있을 경우, 서버를 죽이지 않고 실시간으로 재실행 해주는 node 모듈
* nodemon reload, automatically.

### express logger 의 구현

> 간단한 url 접속 정보 log 구현

```javascript 
app.use( (req, res, next) => {
	console.log("Request on" + req.url);
	next();
});

```
> [morgan](https://www.npmjs.com/package/morgan)(더 많은 정보들을 기록하는 module) 설정

`app.use(morgan('combined')`



### express view engine

```javasciprt
// example : pug
app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'views')
``` 

### mongoose 사용

```javascript
const mongoose = require('mongoose');
const db = mongoose.connect('mongodb://localhost/test');
db.once('open', ()=>{
	console.log('database is connected');
});
```

#2016/12/19

### python 라이브러리 기록하기
> pip freeze > requirements.txt

### vim 창 사이즈 조정

> [창사이즈 설정하기](http://noon.tistory.com/1353)

* ctrl+w  = 창사이즈 균둥하게
* ctrl+w  <> 창 가로 조정
* * ctrl+w  +- 창 높이 조정

### manage.py shell 에서 모델 필드명 얻기

* snippet._meta.get_fields()

http://raccoonyy.github.io/django-annotate-and-aggregate-like-as-excel/


#2016/12/20

### TDD study

* python3 -m venv some_venv
* [gitignore.io](gitignore.io) ignore 파일 생성
* [*QUESTION]selenium implicity wait explicity wait 차이 자세히 공부



#2016/12/22

### docker 101

#### 도커 기본 설치 파일
> [install docker with homebrew](https://penandpants.com/2014/03/09/docker-via-homebrew/)

* brew install docker
* brew install docker-machine
* brew install caskroom/cask/brew-cask
* brew cask install virtualbox

#### 도커 설정 커맨드
> [도커 공식 문서](https://docs.docker.com)

```
docker-machine create --driver virtualbox [name]
docker-machine ip [name]
docker run -d -p 8000:80 [name2]
curl $(docker-machine ip default):8000

eval $(docker-machine env [name])
eval $(docker-machine env)
```


Create a file called `com.docker.machine.default.plist` under ~/Library/LaunchAgents with the following content:

```
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
    <dict>
        <key>EnvironmentVariables</key>
        <dict>
            <key>PATH</key>
            <string>/usr/bin:/bin:/usr/sbin:/sbin:/usr/local/bin</string>
        </dict>
        <key>Label</key>
        <string>com.docker.machine.default</string>
        <key>ProgramArguments</key>
        <array>
            <string>/usr/local/bin/docker-machine</string>
            <string>start</string>
            <string>default</string>
        </array>
        <key>RunAtLoad</key>
        <true/>
    </dict>
</plist>
```
You can change the default string above to make this LaunchAgent start any machine(s) you desire.


> [*TODO]plist 파일 만들기에 대해서 공부가 더 필요하다  


**정리하자면,**

1. os에 도커머신 설치
2. (plist 또는 eval $(docker-machine env)도커머신 기본 설정   
3. Dockerfile 로 설정한 도커 기본 빌드하기, 또는 도커클라이언트로 이미지 선택(로컬-내 저장소-퍼블릭저장소)
4. 실행
5. 내 저장소로 이미지 업로드
6. 다른 곳에 해당 이미지 배포

#### 도커/도커머신 커맨드 정리
>[learn more](https://docs.docker.com/engine/getstarted/last_page/)   

* docker-machine create --driver virtualbox [name] : 도커 머신 만들기
[*QUESTION] 도커머신도 여러개가 필요할까?(웹서버용 db용? 리눅스 버전에따라?)
* docker-machine start/stop [name] : 도커 머신 실행
* docker-machine ip : 도커머신 ip 확인
* docker-machine active :running 도커 머신 확인
* docker-machine ls : 도커 머신 리스트 확인
* eval $(docker-machine env) 도커머신 connecting with 도커
* docker run -d -p 8000:80 nginx : 도커 이미지 실행
* docker run docker-whale : 도커 이미지 실행
* docker rmi -f [tag or name] : 도커 이미지 삭제
* docker push novelview9/docker-whale : 도커허브 푸시
* docker login : 도커허브 로그인
* docker images : 도커허브 이미지 확인
* docker build -t docker-whale . : .경로의 Dockerfile 문서를 읽어 docker-whale 이미지 생성
* docker tag ab662a623b9a novelview9/docker-whale:latest : 도커 아이디 ab662a623b9a를 novelview9/docker-whale latest 로 태깅  
[*QUESTION]도커 태그나 이름이 겹치면 어떻게 되나?   

```
# Dockerfile example

FROM docker/whalesay:latest
RUN apt-get -y update && apt-get install -y fortunes
CMD /usr/games/fortune -a | cowsay
```

