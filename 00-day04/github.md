# github 접근을 위한 사용자인증방법
github 저장소에 접근하려면 해당 저장소를 읽고 쓸 수 있는 권한을 가진 사용자임을 확인하기 위한 사용자 인증 과정이 필요하다. 

1. 법법1 : HTTPS 프로토콜사용 id,pw로 인증   
    매번 github에서 push,pull할때마다 매번 입력해 주어야 한다.
    보안상의 이유로 2021.8.13이후부터는 id,pw로 인증하는 방식은 허용되지 않는다.

2. 방법2 : HTTPS 프로토콜사용 personal access Token으로 인증   



3. 방법3 : SSH 프로토콜사용 ssh-key인증   
    SSH는 Secure Shell의 줄임말로 원격 호스트에 접속하기 위해 사용되는 보안 프로토콜
    github계정에 ssh공개키를 등록해 두어 

    $ssh-keygen 이라는 명령어를 실행하면 아래 두개의 파일이 생성된다.   
    id_rsa(개인키파일)   
    is_rsa.pub(공개키파일)   
    내 컴퓨터에는 개인키파일이 정해진 폴더(사용자홈 디렉토리/.ssh)에 위치하고 시스템 내 개인키와 쌍을 이루는 공개키가 등록되어 있다면 이 두 파일이 일치할 경우 사용자 인증이 이루어 진다   

    추후 AWS의 인증방식도 이와 같은 원리
    >참고 : https://brunch.co.kr/@sangjinkang/52


# github 보안의 중요성
- personal acceess token(PAT)를 활용하여 인증하고 토큰마다 권한설정을 제한해두기
- two Factor Authentication(2단계인증:mobile TOTP) 적용하기   
    2FA를 사용할 경우 원격저장소 연결 프로토콜을 SSH가 아닌 https를 사용하면 pull,push가 제대로 작동되지 않는다. 
- 민감한정보(SSH private Key, DB접속정보)를 github저장소에 올리지 말기

>참고 : https://www.lesstif.com/gitbook/github-two-factor-authentication-2fa-gitlab-bitbucket-71401744.html

# gitignore 파일
git관리에서 제외시킬 파일들을 설정할 수 있다.
*js : 모든 js파일
*css : 모든 css파일
*html : 모든 html파일